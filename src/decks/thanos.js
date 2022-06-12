let fate = [
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

for (let i=0; i<=3; i++) {
	if ( i<3 ) { // 3 copies
		fate.push({
			"name": "A Stone is Found",
			"desc": "Choose a Villain other than Thanos. That Villain receives an unclaimed Infinity Stone. Once played, they may immediately activate it for free.",
			"type": "Effect"
		});
		fate.push({
			"name": "What Did It Cost?",
			"desc": "The targeted Villain must discard one card from their hand for each Infinity Stone they control up to the total number of cards in their hand.",
			"type": "Effect"
		});
	}
}

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
	if ( i<5 ) { // 5 copies
		deck.push({
			"name": "The Legions of Thanos",
			"text": "No additional ability.",
			"type": "Ally",
			"strength": 2,
			"cost": 1
			});
	}
	if ( i<4 ) { // 4 copies
		deck.push({
			"name": "Consult the Well",
			"text": "",
			"type": "Effect",
			"cost": 2
		});
	}
	if ( i<3 ) { // 3 copies
		deck.push({
			"name": "A Small Price to Pay",
			"text": "",
			"type": "Effect",
			"cost": 0
		});
		deck.push({
			"name": "Death's Favor",
			"text": "",
			"type": "Item",
			"cost": 2
		});
		deck.push({
			"name": "Taste of Cosmic Power",
			"text": "",
			"type": "Effect",
			"cost": 2
		});
	}
	if ( i<2 ) { // 2 copies
		deck.push({
			"name": "Deliver Judgment",
			"text": "",
			"type": "Effect",
			"cost": 3
		});
		deck.push({
			"name": "The Mad Titan",
			"text": "Choose a character you do not control in the same location as one of your Allies. Defeat that character. The cost to play The Mad titan is equal to the Strength of the defeated character.",
			"type": "Effect",
			"cost": 0
		});
		deck.push({
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
];

let event = [
	{
		"name": "Sacrifices Must Be Made",
		"type": "Event",
		"strength": 7
	}
];

module.exports = {
	"deck": deck,
	"fate": fate,
	"event": event,
	"stones": stones
};