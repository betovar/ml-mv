//let Card = require('../cards.js');

const onplay = (state) => ({
	onplay() {
		console.log("playing", state.name);
	}
})

function AStoneIsFound() {
	const card = {
		name: "A Stone is Found",
		desc: "Choose a Villain other than Thanos. That Villain receives an unclaimed Infinity Stone. Once played, they may immediately activate it for free.",
		type: "Effect"
	}
	return Object.assign(
		card,
		onplay(card)
	)
}

function WhatDidItCost = () => {
	const card = {
		name: "What Did It Cost?",
		desc: "The targeted Villain must discard one card from their hand for each Infinity Stone they control up to the total number of cards in their hand.",
		type: "Effect"
	}
	return Object.assign(
		card,
		onplay(card)
	)
}

// const createAdamWarlock = () => {
// 	return {
// 		name: "Adam Warlock",
// 		desc: "Thanos cannot win the game if Adam Warlock is in Thanos' Domain.",
// 		type: "Hero",
// 		strength: 6,
// 		onplay: () => console.log("playing")
// 	}
// }

// const create = () => {
// 	return {
// 		name: "",
// 		desc: "",
// 		type: "",
// 		...play()
// 	}
// }

let fate = [
	createAStoneIsFound()
];

fate[0].onplay();
//console.log(fate);
//module.exports = fate;


// 		"Drax the Destroyer": {
// 			"text": "At least two Allies must be used to defeat Drax the Destroyer with a vanquish action.",
// 			"type": "hero",
// 			"strength": 5
// 		},
// 		"Gamora": {
// 			"text": "When Gamora is played, defeat a character at her location. If that character is an Ally of Thanos, place 2 +1 strength tokens on Gamora.",
// 			"type": "hero",
// 			"strength": 3
// 		},
// 		"Nebula": {
// 			"text": "When Nebula is played, the targeted player loses Power equal to the number of Infinity Stones they control. Place a number of +1 Strength tokens on Nebula equal to that Power.",
// 			"type": "hero",
// 			"strength": 3
// 		}
// 	},
// 	"event": {
// 		"Sacrifices Must Be Made": {
// 			"type": "event",
// 			"strength": 7
// 		}
// 	},
// 	"villain": {
// 		"The Legions of Thanos": {
// 			"text": "No additional ability.",
// 			"type": "ally",
// 			"strength": 2,
// 			"cost": 1,
// 			"copies": 5
// 		},
// 		"Consult the Well": {
// 			"text": "",
// 			"type": "effect",
// 			"cost": 2,
// 			"copies": 4
// 		},
// 		"A Small Price to Pay": {
// 			"text": "",
// 			"type": "effect",
// 			"cost": 0,
// 			"copies": 3
// 		},
// 		"Death's Favor": {
// 			"text": "",
// 			"type": "item",
// 			"cost": 2,
// 			"copies": 3
// 		},
// 		"Taste of Cosmic Power": {
// 			"text": "",
// 			"type": "effect",
// 			"cost": 2,
// 			"copies": 3
// 		},
// 		"Deliver Judgment": {
// 			"text": "",
// 			"type": "effect",
// 			"cost": 3,
// 			"copies": 2
// 		},
// 		"The Mad Titan": {
// 			"text": "Choose a character you do not control in the same location as one of your Allies. Defeat that character. The cost to play The Mad titan is equal to the Strength of the defeated character.",
// 			"type": "effect",
// 			"cost": "calc",
// 			"copies": 2
// 		},
// 		"Warp Reality": {
// 			"text": "",
// 			"type": "effect",
// 			"cost": 1,
// 			"copies": 2
// 		},
// 		"Black Dwarf": {
// 			"text": "",
// 			"type": "ally",
// 			"cost": 3,
// 			"strength": 6
// 		},
// 		"Black Swan": {
// 			"text": "",
// 			"type": "ally",
// 			"cost": 2,
// 			"strength": 1
// 		},
// 		"Corvus Glaive": {
// 			"text": "",
// 			"type": "ally",
// 			"cost": 3,
// 			"strength": 4
// 		},
// 		"Ebony Maw": {
// 			"text": "",
// 			"type": "ally",
// 			"cost": 3,
// 			"strength": 4
// 		},
// 		"Proxima Midnight": {
// 			"text": "",
// 			"type": "ally",
// 			"cost": 2,
// 			"strength": 3
// 		},
// 		"Space Throne": {
// 			"text": "This location gains RELOCATE.",
// 			"type": "item",
// 			"cost": 2
// 		}
// 	},
// 	"domain": {
// 		"Sanctuary II":{
// 			"card": {
// 				"top": [],
// 				"btm": []
// 			}, 
// 			"action": {
// 				"Gain 2 Power": "top",
// 				"Activate": "top",
// 				"Play a Card": "btm",
// 				"Discard Cards": "btm"
// 			}
// 		}, 
// 		"Titan": {
// 			"card": {
// 				"top": [],
// 				"btm": []
// 			}, 
// 			"action": {
// 				"Play a Card": "top",
// 				"Fate": "top",
// 				"Gain 1 Power": "btm",
// 				"Relocate": "btm"
// 			}
// 		},
// 		"The Infinity Well": {
// 			"card": {
// 				"top": [],
// 				"btm": []
// 			}, 
// 			"action": {
// 				"Play a Card": "top",
// 				"Discard Cards": "top",
// 				"Play a Card":"btm",
// 				"Gain 3 Power": "btm"
// 			}
// 		},
// 		"Knowhere": {
// 			"card": {
// 				"top": [],
// 				"btm": []
// 			}, 
// 			"action": {
// 				"Relocate": "top",
// 				"Fate": "btm",
// 				"Play a Card": "btm",
// 				"Vanquish": "btm"
// 			}
// 		}
// 	}
// }