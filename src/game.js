function Game(villains=[], mode='omniponent') {
	let s = {}
	s['turn']   = {}	// turn tracker, order, count
	s['domain'] = {}	// villain domains
	s['event'] 	= {}	// global and targeted events
	s['deck']   = {} 	// fate and villain decks
	s['player'] = {}	// player list and wallets

	if (villains.length < 2 || villains.length > 4) { return }
	s.turn['track']  = 0 // tracks which player's turn it is
	s.turn['count']  = 0 // counts the total turns
	s.turn['order']  = villains
	s.turn['action'] = [] // available actions

	let f = require('./decks/fate.js')
	s.deck['fate'] = f.fate
	s.event['mode'] = mode
	if (mode == 'inevitable' || mode == 'undying') {
		for (let e of f.event) {
			s.deck['fate'].push(e)
		}
		s.event['global'] = {}
	}
	let p = [0,1,2,2] // initial power values
	for (let v of villains) {
		s.player[v] = {
			"dom": v,
			"loc": '',
			"hand": [],
			"power": p[villains.indexOf(v)]}
		s.domain[v] = require('./domains/'+v+'.js').domain
		let k = require('./decks/'+v+'.js')
		s.deck[v] = k.deck
		shuffle(s.deck[v])
		for (let x of k.fate) {
			s.deck['fate'].push(x)
		}
		if (mode == 'inevitable' || mode == 'undying') {
			s.event[v] = {}
			for (let y of k.event) {
				s.deck['fate'].push(y)
			}
		}
	}
	shuffle(s.deck['fate'])
 	return s
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
	"Game": Game
}