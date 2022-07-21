function Game(villains=[], mode='omniponent') {
	let s = {}
	s['turn']   = 0		// turn tracker
	s['domain'] = {}	// villain domains
	s['event'] 	= {}	// global and targeted events
	s['deck']   = {} 	// fate and villain decks
	s['player'] = {}	// player list and wallets
	s['track']  = []	// available actions

	if (villains.length < 2 || villains.length > 4) { return }
	s.player['order'] = villains
	s.player['count'] = villains.length
	let f = require('./decks/fate.js')
	s.deck['fate'] = f.fate
	if (mode == 'inevitable' || mode == 'undying') {
		for (let e of f.event) {
			s.deck['fate'].push(e)
		}
		s.event['global'] = {}
	}
	let p = [0,1,2,2]
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
			for (let y of d.event) {
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