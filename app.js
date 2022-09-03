const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000
const pug = require('pug')
let game = require('./src/game.js').Game

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(
  session({
    secret: 'SomeSuperLongHardToGuessSecretString',
    resave: true,
    saveUninitialized: false,
  })
)

app.get('/', (req, res) => {
  res.render('index', {'title':"Marvel Villainous"})
})
app.get('/new', (req, res) => {
//  let g = new game(['thanos', 'ultron', 'hela', 'killmonger'])
  res.render('new', {'title':"New Game"})
})
app.get('/game', (req, res) => {
  let g = new game(['thanos', 'ultron', 'hela', 'killmonger'])
  res.render('game', {'domain':g.domain})
})
app.get('/account', (req, res) => {
  res.render('login', {'title':"Account"})
})
app.listen(port, () => {
  console.log(`game running on port ${port}`)
})

