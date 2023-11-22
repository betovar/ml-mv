// GAME FACTORY

const common = require("./decks/fate-common.js");
const thanos = require("./decks/thanos.js");
const ultron = require("./decks/ultron.js");
const Game_Factory = function(lobby) {
	let gs = {
		"gameid": lobby.gameid,
		"settings": lobby.settings,
		"players": lobby.players,
		"decks": {"fate":[]},
		"discards": {"fate":[]},
		"events": {"global":[]},
		"hands": {},
		"domains": {},
		"power": {},
		"turn": {
			"round": 0,
			"phase": 0,
			"dealer": 0,
			"actions": [],
		},
	};
	for (const card of common.fate) {
		gs.decks.fate.push(card);
	}
	// for (const card of common.events) {
	// 	gs.decks.fate.push(card);
	// }
	const power = [2,2,1,0];
	let villain_deck;
	for (const p of gs.players) {
		switch (p.villain) {
			case "thanos":
				villain_deck = thanos;
				break;
			case "ultron":
				villain_deck = ultron;
				break;
		}
		for (const card of villain_deck.fate) {
			gs.decks.fate.push(card);
		}
		gs.decks.fate.push(villain_deck.events[0]);
		gs.decks[p.villain] = [];
		for (const card of villain_deck.deck) {
			gs.decks[p.villain].push(card);
		}
		gs.discards[p.villain] = [];
		gs.hands[p.villain] = [];
		gs.domains[p.villain] = {};
		gs.events[p.villain] = [];
		gs.power[p.villain] = power.pop();
	};
	return gs;
}

module.exports = { Game_Factory };