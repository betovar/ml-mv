let turn   = 0; 	// turn tracker
let player = {}; 	// player list
let deck   = {}; 	// fate and villain decks
let domain = {};	// villain domains
let event  = {};	// global and targeted events
let track  = [];	// available actions

function new_game(villains=[], mode='omniponent') {
	if (villains.length == 0) { return; }
	// load tokens
	let p = [0,1,2,2];
	for (v of villains) {
		player[v] = {"dom": v, "loc": '', "power": p[villains.indexOf(v)]};
	}

	// load domains
	for (v of villains) {
		domain[v] = require('./src/domains/'+v+'.js').domain;
	}

	// load decks
	deck['fate'] = require('./src/decks/fate.js').fate;
	for (v of villains) {
		deck[v] = require('./src/decks/'+v+'.js').deck;
		for ( x of require('./src/decks/'+v+'.js').fate) {
			deck['fate'].push(x);
		}
		if (mode == 'inevitable' || mode == 'undying') {
			//add event cards
		}
	}
}

module.exports = { 
	"new_game": new_game,
	"player": player,
	"deck": deck,
	"domain": domain,
	"event": event
};

// init(['thanos', 'ultron']);
// draw('thanos', 'thanos', 4);
// move('thanos', 'Sanctuary II');
// collect('thanos', 2);
// let test = player['thanos']['hand'][0];
// play('thanos', test, 'Titan');
// track.push('Relocate');
// relocate('thanos', 'Titan', test, 'Sanctuary II');
// discard('thanos', player['thanos']['hand'][0]);
// end_turn('thanos');
//
// function init(villains, e=0) {
// 	// add error check of input
// 	player['order'] = villains; // load player turn order
// 	const f = require('./art/fate-infinite/cards.json');
// 	deck.fate = Object.keys(f['fate']); // load fate cards
// 	if (e) {
// 		for (var g of Object.keys(f['event'])) {
// 			deck['fate'].push(g);
// 		};
// 		event['global'] = {};
// 	}
// 	for (var v of villains) {
// 		let m = 0;
// 		const r = require('./art/'+v+'/cards.json');
// 		deck[v] = [];
// 		player[v] = {"dom": v, "loc": '', "power": 0};
// 		for (var j in r['villain']) {
// 			deck[v].push(j); // load villain cards
// 			deck[v][deck[v].length].hash = m++; 
// 			let i = r.villain[j].copies;
// 			while (--i) {
// 				deck[v].push(j);
// 				deck[v][deck[v].length].hash = m++;
// 			}
// 		}
// 		for (var k in r['fate']) {
// 			deck['fate'].push(k);
// 			let i = r.fate[k].copies;
// 			while (--i) {
// 				deck['fate'].push(k);
// 			}
// 		}
// 		if (e) {
// 			for (var l in r['event']) {
// 				deck['fate'].push(l);
// 			}
// 			event[v] = {};
// 		}
// 		shuffle(deck[v]); // shuffle villan deck
// 		domain[v] = r['domain']; // load domains
// 		console.log(v, "domain loaded");
// 		player[v].hand = []; // initialize player hands
// 	};
// 	shuffle(deck['fate']); // shuffle fate deck
// 	console.log("all decks shuffled");
// };