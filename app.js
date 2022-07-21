const express = require('express')
const app = express()
const port = 3000
const pug = require('pug')
let game = require('./src/game.js').Game

app.set('view engine', 'pug')
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('index', {title:'Hey',message:'Hello world!'})
})
app.get('/domain', (req, res) => {
  let g = new game(['thanos', 'ultron', 'hela', 'killmonger'])
  res.render('domain', {"domain":g.domain})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})