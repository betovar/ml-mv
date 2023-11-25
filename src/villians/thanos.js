// THANOS VILLIAN DECK

//consider an interface?= from typescript
let fate = [
	{
		"name": "Adam Warlock",
		"text": "Thanos cannot win the game if Adam Warlock is in Thanos' Domain.",
		"type": "Hero",
		"strength": 6,
		"back": "fate",
	},
	{
		"name": "Drax the Destroyer",
		"text": "At least two Allies must be used to defeat Drax the Destroyer with a vanquish action.",
		"type": "Hero",
		"strength": 5,
		"back": "fate",
	},
	{
		"name": "Gamora",
		"text": "When Gamora is played, defeat a character at her location. If that character is an Ally of Thanos, place 2 +1 strength tokens on Gamora.",
		"type": "Hero",
		"strength": 3,
		"back": "fate",
	},
	{
		"name": "Nebula",
		"text": "When Nebula is played, the targeted player loses Power equal to the number of Infinity Stones they control. Place a number of +1 Strength tokens on Nebula equal to that Power.",
		"type": "Hero",
		"strength": 3,
		"back": "fate",
	}
];
for (let i=0; i<3; i++) {
	if (i<3) { // 3 copies
		fate.push({
			"name": "A Stone is Found",
			"text": "Choose a Villain other than Thanos. That Villain receives an unclaimed Infinity Stone. Once played, they may immediately activate it for free.",
			"type": "Effect",
			"back": "fate",
		});
		fate.push({
			"name": "What Did It Cost?",
			"text": "The targeted Villain must discard one card from their hand for each Infinity Stone they control up to the total number of cards in their hand.",
			"type": "Effect",
			"back": "fate",
		});
	}
};

let events = [
	{
		"name": "Sacrifices Must Be Made",
		"type": "Event",
		"strength": 7,
		"back": "thanos"
	}
];

let deck = [
	{
		"name": "Black Dwarf",
		"text": "Black Dwarf cannot be played or relocated to Events.",
		"type": "Ally",
		"cost": 3,
		"strength": 6,
		"back": "thanos",
	},
	{
		"name": "Black Swan",
		"text": "If Black Swan is at the same location as an Infinity Stone, she gains Strength equal to the strongest Ally not under your control at her location.",
		"type": "Ally",
		"cost": 2,
		"strength": 1,
		"back": "thanos",
	},
	{
		"name": "Corvus Glaive",
		"text": "When Corvis Glaive is relocated to another player's Domain, you may also relocate one The Legions of Thanos Ally to his location.",
		"type": "Ally",
		"cost": 3,
		"strength": 4,
		"back": "thanos",
	},
	{
		"name": "Ebony Maw",
		"text": "If Ebony Maw is part of a vanquish action by Thanos to defeat an opponent's Ally with an attached Infinity Stone, he is not discarded.",
		"type": "Ally",
		"cost": 3,
		"strength": 4,
		"back": "thanos",
	},
	{
		"name": "Proxima Midnight",
		"text": "When played, defeat a character with Strength 3 or less at Proxima Midnight's location.",
		"type": "Ally",
		"cost": 2,
		"strength": 3,
		"back": "thanos",
	},
	{
		"name": "Space Throne",
		"text": "This location gains RELOCATE.",
		"type": "Item",
		"cost": 2,
		"back": "thanos",
	}
];
for (let i=0; i<5; i++) {
	if ( i<5 ) { // 5 copies
		deck.push({
			"name": "The Legions of Thanos",
			"text": "No additional ability.",
			"type": "Ally",
			"strength": 2,
			"cost": 1,
			"back": "thanos",
			});
	}
	if ( i<4 ) { // 4 copies
		deck.push({
			"name": "Consult the Well",
			"text": "Choose another player. That player receives a random unclaimed Infinity Stone. Once played, you may relocate an Ally to that location.",
			"type": "Effect",
			"cost": 2,
			"back": "thanos",
		});
	}
	if ( i<3 ) { // 3 copies
		deck.push({
			"name": "A Small Price to Pay",
			"text": "Gain 1 Power plus 1 additional Power for each other Villain who controls an Infinity Stone.",
			"type": "Effect",
			"cost": 0,
			"back": "thanos",
		});
		deck.push({
			"name": "Death's Favor",
			"text": "You may choose to perform an activate or vanquish action when you move to this location. A location may not hold more than on ecopy of Death's Favor.",
			"type": "Item",
			"cost": 2,
			"back": "thanos",
		});
		deck.push({
			"name": "Taste of Cosmic Power",
			"text": "Place a +1 Strength token on an Ally you control. That Ally may immediately vanquish a character at this location with equal of lesser Strength, and is not discarded after this vanquish action.",
			"type": "Effect",
			"cost": 2,
			"back": "thanos",
		});
	}
	if ( i<2 ) { // 2 copies
		deck.push({
			"name": "Deliver Judgment",
			"text": "Choose a location with an Infinity Stone. Relocate up to two Allies you control to that location. Place a +1 Strength token on each of your Allies at that location.",
			"type": "Effect",
			"cost": 3,
			"back": "thanos",
		});
		deck.push({
			"name": "The Mad Titan",
			"text": "Choose a character you do not control in the same location as one of your Allies. Defeat that character. The cost to play The Mad titan is equal to the Strength of the defeated character.",
			"type": "Effect",
			"cost": "*",
			"back": "thanos",
		});
		deck.push({
			"name": "Warp Reality",
			"text": "Search your discard pile for an Effect card. Put it in your hand.",
			"type": "Effect",
			"cost": 1,
			"back": "thanos",
		});
	}
};

let domain = [
	{
		"name": "Sanctuary II", 
		"top": ["2 Power", "Activate"],
		"bottom": ["Play", "Discard"],
		"good": [],
		"bad": [],
	}, {
		"name": "Titan",
		"top": ["Play", "Fate"],
		"bottom": ["1 Power", "Relocate"],
		"good": [],
		"bad": [],
	}, {
		"name": "The Infinity Well",
		"top": ["Play", "Discard"],
		"bottom": ["Play", "3 Power"],
		"good": [],
		"bad": [],
	}, {
		"name": "Knowhere",
		"top": ["Relocate"],
		"bottom": ["Fate", "Play", "Vanquish"],
		"good": [],
		"bad": [],
	}, {
		"name": "Specialty",
		"stack": [],
}];

let stones = [
	{
		"name": "Mind Stone",
		"text": "ACTIVATE: Find any card in your deck, then add it to your hand.",
		"type": "Item",
		"back": "Specialty",
	},
	{
		"name": "Power Stone",
		"text": "ACTIVATE: Place two +1 Strength Tokens on an Ally you control.",
		"type": "Item",
		"back": "Specialty",
	},
	{
		"name": "Reality Stone",
		"text": "ACTIVATE: Perform a vanquish action. Your Allies are not discarded as a result of the vanquish action.",
		"type": "Item",
		"back": "Specialty",
	},
	{
		"name": "Soul Stone",
		"text": "ACTIVATE: Play an Ally for free from your discard pile.",
		"type": "Item",
		"back": "Specialty",
	},
	{
		"name": "Space Stone",
		"text": "ACTIVATE: You may relocate any number of your Allies.",
		"type": "Item",
		"back": "Specialty",
	},
	{
		"name": "Time Stone",
		"text": "ACTIVATE: Gain 1 Power and draw one Villain card.",
		"type": "Item",
		"back": "Specialty",
	}
];

module.exports = { fate, events, deck, domain, stones };