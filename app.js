const express = require('express')
const app = express()
const port = 3000
const pug = require('pug')
let mongo = require('./src/mongodb.js')
let db = new mongo.init()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(express.json()) // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', {'title': "Home"})
})
app.get('/new', (req, res) => {
  res.render('new', {'title': "New Game"})
})
// app.get('/u/:userid', async (req, res) => {
//   //let result = await db.get_user(req.params.userid)
//   res.render('user', {'title': "User Profile"})
// })
app.get('/lobby', async (req, res) => {
  let result = await db.get_lobby()
  res.send(result)
  //res.render('lobby', result)
})
app.post('/lobby', async (req, res) => {
  let result = await db.create_lobby(req.body)
  //res.send(result)
  res.redirect('/lobby')
})
// app.get('/login', (req, res) => {
//   res.render('login', {'title': "Login"})
// })
// app.get('/g/:gameid', (req, res) => {
//   let g = db.get_game(req.gameid)
//   res.render('game', {'title': "Marvel Villainous"})
// })
// app.get('/game', (req, res) => {
//   let result = db.list_games({'userid': req.userid})
//   res.send(result)
//   //res.render('game', {'title': "Marvel Villainous"})
// })
// app.post('/game', (req, res) => {
//   let gameid = res.body.gameid
//   let r = db.create_game(gameid)
//   res.redirect('/g/'+gameid)
// })
app.listen(port, () => {
  console.log(`game running on port ${port}`)
})

