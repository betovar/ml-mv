// rules.js
let data  = require('./localdb.js')

function r_fate(input) {
	// draw a fate card
	let game = new data(input.gameid)
	game.what['public'] = game.what.decks.fate.shift()
	game.update()
}
function r_play(input) {
	// play card
	if (input.card === undefined) { return }
	if (input.location === undefined ) { return }
	let game = new data(input.gameid)
	
	game.update()
}
function r_draw(input) {
	// draw card(s) from deck
	if (input.count === undefined) { input['count'] = 1 }
	let game = new data(input.gameid)
	if (input.who != game.who.active) { return }
	if (game.what.decks[input.what].length == 0 ) {
		game.what.decks[input.what] = game.what.discards[input.what]
		game.what.discards[input.what] = 0
		shuffle(game.what.decks[input.what])
	}
	game.who.hands[input.who].push(game.what.decks[input.what].pop())
	game.update()
}
function r_token(input) {
	// move token and load actions
	let game = new data(input.gameid)
	if (input.who != game.who.active) { return }
	let x = game.when.queue.indexOf('token')
	if (x == -1) { return }
	game.who.token[input.who] = input.location
	game.when.queue.splice(x, 1)
	game.when.queue = game.where[input.who]
	game.update()
}
function r_power(input) {
	// gain power
	let game = new data(input.gameid)
	if (input.who != game.who.active) { return }
	let x = game.when.queue.indexOf('power')
	if (x == -1) { return }
	let t = game.who.token[input.who]
	let p = game.where.domains[input.who][t.location].power
	game.who.power[input.who] += p
	game.when.queue.splice(x, 1)
	game.update()
}
function r_discard(input) {
	let game = new data(input.gameid)
	let x = game.when.queue.indexOf('discard')
	if (x == -1) { return }
	for (let c in input.cards) {
		let i = game.who.hands[input.who].indexOf(c)
		if (i != -1) {
			let j = game.who.hand[input.who].splice(i,1)
			game.what.discards[input.who].push(j)
		} 
	}
	game.when.queue.splice(x, 1)
}
function r_activate(input) {
	let game = new data(input.gameid)
	let x = game.when.queue.indexOf('activate')
	if (x == -1) { return }
	game.when.queue.splice(x, 1)
	game.update()
}
function r_vanquish(input) {
	let game = new data(input.gameid)
	let x = game.when.queue.indexOf('vanquish')
	if (x == -1) { return }
}
function r_relocate(input) {
	let game = new data(input.gameid)
	let x = game.when.queue.indexOf('relocate')
	if (x == -1) { return }
	game.when.queue.splice(x, 1)
	game.update()
}
function r_end(input) {
	// end current player's turn
	let game = new data(input.gameid)
	let n = game.who.list.length
	let i = game.who.list.indexOf(game.when.active)
	game.when.active = game.who.list[++i % n]
	// load the next player's actions
	game.when.queue = ["token"]
	game.update()
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

module.exports = {
	"fate": r_fate,
	"play": r_play,
	"draw": r_draw,
	"token": r_token,
	"power": r_power,
	"discard": r_discard,
	"activate": r_activate,
	"vanquish": r_vanquish,
	"relocate": r_relocate,
	"end": r_end
}