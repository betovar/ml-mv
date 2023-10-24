const express = require('express')
const { createServer } = require("http")
const app = express()
const httpServer = createServer(app)
const io = require('socket.io')(httpServer)
const rules = require('./src/rules.js')(io)
let db = require('./src/mongodb.js').init()
//let data = require('./src/mongodb.js')
//let db = new data.init()
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const sessionMiddleware = session({ secret: "changeit", resave: false, saveUninitialized: false });

// ------ PASSPORT ------
app.use(sessionMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    })
  })
);
passport.serializeUser((user, cb) => {
  console.log(`serializeUser ${user.id}`);
  cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
  console.log(`deserializeUser ${id}`);
  cb(null, DUMMY_USER);
});

// ------ SOCKETS ------
// convert a connect middleware to a Socket.IO middleware
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

io.use(wrap(sessionMiddleware));
io.use(wrap(passport.initialize()));
io.use(wrap(passport.session()));

io.use((socket, next) => {
  if (socket.request.user) {
    next();
  } else {
    next(new Error('unauthorized'))
  }
});

io.on('connect', (socket) => {
  console.log(`new connection ${socket.id}`);
  socket.on('whoami', (cb) => {
    cb(socket.request.user ? socket.request.user.username : '');
  });

  const session = socket.request.session;
  console.log(`saving sid ${socket.id} in session ${session.id}`);
  session.socketId = socket.id;
  session.save();
});

// ------ VIEW ENGINE ------
const pug = require('pug')
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(express.json()) // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true }))
const port = process.env.EXPRESS_PORT || 3000

// ------ ROUTER ------
app.get('/u/:userid', async (req, res) => {
  res.render('user', {'title': "User Profile"})
})
app.get('/g/:gameid', async (req, res) => {
  res.render('game', {})
})
app.get('/lobby', async (req, res) => {
  res.render('lobby', {'title': "Lobby"})
})
app.post('/lobby', async (req, res) => {
  delete req.body.submit
  req.body.users = []
  let result = await db.create_lobby(req.body)
  res.redirect('/g/'+result.insertedId)
})
app.get('/new', (req, res) => {
  res.render('new', {'title': "New Game"})
})
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    }
);
app.get('/login', (req, res) => {
  res.render('login', {'title': "Login"})
})
app.post("/logout", (req, res) => {
  console.log(`logout ${req.session.id}`);
  const socketId = req.session.socketId;
  if (socketId && io.of("/").sockets.get(socketId)) {
    console.log(`forcefully closing socket ${socketId}`);
    io.of("/").sockets.get(socketId).disconnect(true);
  }
  req.logout();
  res.cookie("connect.sid", "", { expires: new Date() });
  res.redirect("/");
});
app.get('/', (req, res) => {
  res.render('index', {'title': "Home"})
})
app.listen(port, () => {
  console.log(`game running on port ${port}`)
})
io.listen(port);