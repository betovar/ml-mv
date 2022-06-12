class Game {
	constructor(villains=[], mode='omniponent') {
		this.turn   = 0;	// turn tracker
		this.domain = {};	// villain domains
		this.events = {};	// global and targeted events
		this.deck   = {}; 	// fate and villain decks
		this.player = {};	// player list and wallets
		this.track  = [];	// available actions

		if (villains.length < 2) { return; }
		this.player['order'] = villains;
		let p = [0,1,2,2];
		let f = require('./src/decks/fate.js');
		this.deck['fate'] = f.fate;
		if (mode == 'inevitable' || mode == 'undying') {
			for (e of f.event) {
				this.deck['fate'].push(e);
			}
		}
		this.events['global'] = {};
		for (var v of villains) {
			this.events[v] = {};
			this.player[v] = {
				"dom": v, "loc": '', "hand": [], 
				"power": p[villains.indexOf(v)]};
			let d = require('./src/domains/'+v+'.js');
			this.domain[v] = d.domain;
			let k = require('./src/decks/'+v+'.js');
			this.deck[v] = k.deck;
			//shuffle(this.deck[v]);
			for (var x of k.fate) {
				this.deck['fate'].push(x);
			}
			if (mode == 'inevitable' || mode == 'undying') {
				for (var y of d.event) {
					this.deck['fate'].push(y);
				}
			}
		}
		//shuffle(this.deck['fate']);
	 	console.log("all decks shuffled");
	}
	isTurn(who) {
		return this.turn % this.player['order'].length != this.player['order'].indexOf(who);
	}
	end_turn(who, drawup='auto') {
		if (isTurn(who)) { return; }
		this.turn += 1;
		this.track = ["Move Token"];
		if (drawup == 'nodraw') { return; }
		let n = 4-this.player[who].hand.length;
		if (n) { draw(who, who, n); }
		console.log(who, "ended their turn");
	}
	move(who, dest) {
		if (isTurn(who)) { return; }
		// FIXME player must stay in their domain
		if (this.player[who].loc == dest) { return; }
		this.player[who].loc = dest;
		this.track.splice(this.track.indexOf("Move Token"),1);
		for (var a in this.domain[who][dest].action) {
			if (this.domain[who][dest][a].isBlocked()) {
				this.track.push(a);
			}
		}
		console.log(who, "moved to", player[who].loc);
	}
}

module.exports = { 
	"game": Game
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};