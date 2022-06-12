// let Card = require('../cards.js').Card;

let event = [
	{
		"name": "Sacrifices Must Be Made",
		"type": "Event",
		"strength": 7
	}
]

let fate = [
	{
		"name": "A Stone is Found",
		"desc": "Choose a Villain other than Thanos. That Villain receives an unclaimed Infinity Stone. Once played, they may immediately activate it for free.",
		"type": "Effect"
		
	},
	{
		"name": "What Did It Cost?",
		"desc": "The targeted Villain must discard one card from their hand for each Infinity Stone they control up to the total number of cards in their hand.",
		"type": "Effect",
		"onplay": () => {console.log("playing")}
	},
	{
		"name": "Adam Warlock",
		"desc": "Thanos cannot win the game if Adam Warlock is in Thanos' Domain.",
		"type": "Hero",
		"strength": 6
	},
	{
		"name": "Drax the Destroyer",
		"text": "At least two Allies must be used to defeat Drax the Destroyer with a vanquish action.",
		"type": "Hero",
		"strength": 5
	},
	{
		"name": "Gamora",
		"text": "When Gamora is played, defeat a character at her location. If that character is an Ally of Thanos, place 2 +1 strength tokens on Gamora.",
		"type": "Hero",
			"strength": 3
	},
	{
		"name": "Nebula",
		"text": "When Nebula is played, the stargeted player loses Power equal to the number of Infinity Stones they control. Place a number of +1 Strength tokens on Nebula equal to that Power.",
		"type": "Hero",
			"strength": 3
	}
];

let deck = [
	{
		"name": "Black Dwarf",
		"text": "",
		"type": "Ally",
		"cost": 3,
		"strength": 6
	},
	{
		"name": "Black Swan",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 1
	},
	{
		"name": "Corvus Glaive",
		"text": "",
		"type": "Ally",
		"cost": 3,
		"strength": 4
	},
	{
		"name": "Ebony Maw",
		"text": "",
		"type": "Ally",
		"cost": 3,
		"strength": 4
	},
	{
		"name": "Proxima Midnight",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 3
	},
	{
		"name": "Space Throne",
		"text": "This location gains RELOCATE.",
		"type": "Item",
		"cost": 2
	}
];

for (let i=0; i<=5; i++) {
	if ( i<5 ) {
		deck.push({ // 5 copies
			"name": "The Legions of Thanos",
			"text": "No additional ability.",
			"type": "Ally",
			"strength": 2,
			"cost": 1
			});
	}
	if ( i<4 ) {
		deck.push({ // 4 copies
			"name": "Consult the Well",
			"text": "",
			"type": "Effect",
			"cost": 2
		});
	}
	if ( i<3 ) {
		deck.push({ // 3 copies
			"name": "A Small Price to Pay",
			"text": "",
			"type": "Effect",
			"cost": 0
		});
		deck.push({ // 3 copies
			"name": "Death's Favor",
			"text": "",
			"type": "Item",
			"cost": 2
		});
		deck.push({ // 3 copies
			"name": "Taste of Cosmic Power",
			"text": "",
			"type": "Effect",
			"cost": 2
		});
	}
	if ( i<2 ) {
		deck.push({ // 2 copies
			"name": "Deliver Judgment",
			"text": "",
			"type": "Effect",
			"cost": 3
		});
		deck.push({ // 2 copies
			"name": "The Mad Titan",
			"text": "Choose a character you do not control in the same location as one of your Allies. Defeat that character. The cost to play The Mad titan is equal to the Strength of the defeated character.",
			"type": "Effect",
			"cost": 0
		});
		deck.push({ // 2 copies
			"name": "Warp Reality",
			"text": "",
			"type": "Effect",
			"cost": 1
		});
	}
}

let stones = [
	{
		"name": "Mind Stone",
		"text": "ACTIVATE: Find any card in your deck, then add it to your hand.",
		"type": "Item",
		"back": "Specialty",
		"activate": () => {}
	},
	{
		"name": "Power Stone",
		"text": "ACTIVATE: Place two +1 Strength Tokens on an Ally you control.",
		"type": "Item",
		"back": "Specialty",
		"activate": () => {}
	},
	{
		"name": "Reality Stone",
		"text": "ACTIVATE: Perform a vanquish action. Your Allies are not discarded as a result of the vanquish action.",
		"type": "Item",
		"back": "Specialty",
		"activate": () => {}
	},
	{
		"name": "Soul Stone",
		"text": "ACTIVATE: Play an Ally for free from your discard pile.",
		"type": "Item",
		"back": "Specialty",
		"activate": () => {}
	},
	{
		"name": "Space Stone",
		"text": "ACTIVATE: You may relocate any number of your Allies.",
		"type": "Item",
		"back": "Specialty",
		"activate": () => {}
	},
	{
		"name": "Time Stone",
		"text": "ACTIVATE: Gain 1 Power and draw one Villain card.",
		"type": "Item",
		"back": "Specialty",
		"activate": () => {}
	}
]
module.exports = {
	"deck": deck,
	"fate": fate,
	"event": event,
	"stones": stones
};