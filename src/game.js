// GAME FACTORY

const common = require("./villians/fate-common.js");
const thanos = require("./villians/thanos.js");
const ultron = require("./villians/ultron.js");
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
	let villain_data;
	for (const p of gs.players) {
		switch (p.villain) {
			case "thanos":
				villain_data = thanos;
				break;
			case "ultron":
				villain_data = ultron;
				break;
			case "hela":
			case "killmonger":
			case "taskmaster":
			case "loki":
			case "modok":
			case "madam-masque":
			case "doc-oct":
			case "titania":
			case "kang":
			case "venom":
			default:
				break;
		}
		for (const card of villain_data.fate) {
			gs.decks.fate.push(card);
		}
		gs.decks.fate.push(villain_data.events[0]);
		gs.decks[p.villain] = [];
		for (const card of villain_data.deck) {
			gs.decks[p.villain].push(card);
		}
		gs.domains[p.villain] = villain_data.domain;
		gs.discards[p.villain] = [];
		gs.hands[p.villain] = [];
		gs.events[p.villain] = [];
		gs.power[p.villain] = power.pop();
	};
	return gs;
}

module.exports = { Game_Factory };