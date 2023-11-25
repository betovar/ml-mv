let fate = [
	{
		"name": "Everett K. Ross",
		"text": "When Everett K. Ross is played, you may remove an Item from the targeted player's Domain.",
		"type": "Hero",
		"strength": 2,
	},
	{
		"name": "Okoye",
		"text": "When Okoye is played, find Dora Milaje, then play that card to the same location as Okoye.",
		"type": "Hero",
		"strength": 3,
	},
	{
		"name": "Black Panther",
		"text": "Black Panther gains 2 Strength while in Killmonger's Domain.",
		"type": "Hero",
		"strength": 4,
	},
	{
		"name": "Shuri",
		"text": "When Shuri is played, remove an Item from the targeted player's Domain. Place +1 Strength tokens equal to the cost of that Item on Shuri.",
		"type": "Hero",
		"strength": 3,
	}
];

for (let i=0; i<=2; i++) {
	if ( i<2 ) { // 2 copies
		fate.push({
			"name": "Wakanda Forever",
			"text": "Find Black Panther and either play or relocate him to Killmonger's Domain. If Black Panther is already in play, place a +1 Strength token to him.",
			"type": "Effect"
		});
		fate.push({
			"name": "Hatut Zeraze",
			"text": "When Hatut Zeraze is played, choose an Ally with a Strength of 2 or less or an Item in the targeted players Domain, then return it to their hand.",
			"type": "Hero",
			"strength": 2
		});
		fate.push({
			"name": "Dora Milaje",
			"text": "PROTECTOR",
			"type": "Hero"
		});
	}
}
		
let event = [
	{
		"name": "Stolen Antiquities",
		"type": "Event",
		"strength": "5",
		"text": "Killmonger cannot play Items.",
		"reward": "Killmonger may find any Item in his deck or discard pile, then play it immediately for free to his Domain.",
	}
];
	
let deck = [
	{
		"name": "W'Kabi",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 3
	},
	{
		"name": "Knight",
		"text": "",
		"type": "Ally",
		"cost": 3,
		"strength": 5
	},
	{
		"name": "King",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 4
	},
	{
		"name": "Rook",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 2
	},
	{
		"name": "Rage of K'liluna",
		"text": "",
		"type": "Specialty",
		"cost": 1
	},
	{
		"name": "Stolen Wisdom",
		"text": "",
		"type": "Specialty",
		"cost": 3
	},
	{
		"name": "Heart-Shaped Herb",
		"text": "",
		"type": "Specialty",
		"cost": 3
	},
	{
		"name": "Armored Rhino",
		"text": "",
		"type": "Specialty",
		"cost": 0
	},
	{
		"name": "Overpower",
		"text": "",
		"type": "Effect",
		"cost": 2
	},
	{
		"name": "Hacking Rig",
		"text": "",
		"type": "Item",
		"cost": 2
	}
];

for (let i=0; i<=4; i++) {
	if ( i<4 ) { // 4 copies
		deck.push({
			"name": "Killmonger's Fury",
			"text": "",
			"type": "Effect",
			"cost": 2
		});
		deck.push({
			"name": "Weapons Cache",
			"text": "",
			"type": "Item",
			"cost": 1
		});
	}
	if ( i<3 ) { // 3 copies
		deck.push({
			"name": "Dog of War",
			"text": "",
			"type": "Ally",
			"cost": 1,
			"strength": 2
		});
		deck.push({
			"name": "Explosives",
			"text": "",
			"type": "Item",
			"cost": 2
		});
	}
	if ( i<2 ) { // 2 copies
		deck.push({
			"name": "Execute Plan",
			"text": "",
			"type": "Effect",
			"cost": 1
		});
		deck.push({
			"name": "Taunt",
			"text": "",
			"type": "Effect",
			"cost": 0
		});
		deck.push({
			"name": "Wound",
			"text": "",
			"type": "Item",
			"cost": 1
		});
	}
}

let objectives = [];

module.exports = {
	"deck": deck,
	"fate": fate,
	"event": event,
	"objectives": objectives
};