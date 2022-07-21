function Game(villains=[], mode='omniponent') {
	this.turn   = 0		// turn tracker
	this.domain = {}	// villain domains
	this.event 	= {}	// global and targeted events
	this.deck   = {} 	// fate and villain decks
	this.player = {}	// player list and wallets
	this.track  = []	// available actions

	if (villains.length < 2 || villains.length > 5) { return }
	this.player['order'] = villains
	this.player['count'] = villains.length
	let f = require('./decks/fate.js')
	this.deck['fate'] = f.fate
	if (mode == 'inevitable' || mode == 'undying') {
		for (let e of f.event) {
			this.deck['fate'].push(e)
		}
		this.event['global'] = {}
	}
	let p = [0,1,2,2]
	for (let v of villains) {
		this.player[v] = {
			"dom": v, "loc": '', "hand": [], 
			"power": p[villains.indexOf(v)]}
		this.domain[v] = require('./domains/'+v+'.js').domain
		let k = require('./decks/'+v+'.js')
		this.deck[v] = k.deck
		shuffle(this.deck[v])
		for (let x of k.fate) {
			this.deck['fate'].push(x)
		}
		if (mode == 'inevitable' || mode == 'undying') {
			this.event[v] = {}
			for (let y of d.event) {
				this.deck['fate'].push(y)
			}
		}
	}
	//shuffle(this.deck['fate'])
 	return this
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