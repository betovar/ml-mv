let fate = [	
	{
		"name": "Angela",
		"text": "Soul Marks may not be attached to Angela. When played, remove a Soul Mark from Odin's Vault.",
		"type": "Hero",
		"strength": 6
	},
	{
		"name": "Balder",
		"text": "Soul Marks may not be attached to Balder. When played, remove a Soul Mark from any one Hero.",
		"type": "Hero",
		"strength": 3
	},
	{
		"name": "Odin-Force",
		"text": "When Odin-Force is played, attach it to a Hero. If this Hero has an attached Soul Mark, remove it. This Hero cannot have a Soul Mark attached and gains PROTECTOR.",
		"type": "Item",
		"special": "protector"
	}
];

for (let i=0; i<=3; i++) {
	if ( i<3 ) { // 3 copies
		fate.push({
			"name": "Valkyrior",
			"text": "Soul Marks may not be attached to Valkyrior.",
			"type": "Hero",
			"strength": 3
		});
	}
	if ( i<2 ) { // 2 copies
		fate.push({
			"name": "Revive Souls",
			"text": "Choose a Hero in the Fate discard pile. Play that Hero to the targeted player's Domain.",
			"type": "Effect"
		});
		fate.push({
			"name": "Fate Intervenes",
			"text": "Shuffle the targeted player's discard pile into their Villain deck.",
			"type": "Effect"
		});
	}
}

let deck = [
	{
		"name": "Midgard Serpent",
		"text": "",
		"type": "Ally",
		"cost": 3,
		"strength": 5

	},
	{
		"name": "Leah",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 2
		
	},
	{
		"name": "Fenris Wolf",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 3
		
	},
	{
		"name": "Hand of Glory",
		"text": "",
		"type": "Specialty",
		"cost": 2,
		"activate": {}
		
	},
	{
		"name": "Raise the Dead",
		"text": "",
		"type": "Specialty",
		"cost": 2,
		
	},
	{
		"name": "Hela's Bidding",
		"text": "",
		"type": "Specialty",
		"cost": 3
		
	}
];

for (let i=0; i<=5; i++) {
	if ( i<5 ) { // 5 copies
		deck.push({
			"name": "Marked by Death",
			"text": "",
			"type": "Effect",
			"cost": 1
		});
	}
	if ( i<4 ) { // 4 copies
		deck.push({
			"name": "Draugr Swordsman",
			"text": "",
			"type": "Ally",
			"cost": 1,
			"strength": 2
		});
		deck.push({
			"name": "Disir",
			"text": "",
			"type": "Ally",
			"cost": 2,
			"strength": 3
		});
	}
	if ( i<3 ) { // 3 copies
		deck.push({
			"name": "Death's Embrace",
			"text": "",
			"type": "Effect",
			"cost": 0
		});
	}
	if ( i<2 ) { // 2 copies
		deck.push({
			"name": "Soul for a Soul",
			"text": "",
			"type": "Effect",
			"cost": 1
		});
		deck.push({
			"name": "Nightsword",
			"text": "",
			"type": "Item",
			"cost": 2
		});
		deck.push({
			"name": "Price of Life",
			"text": "",
			"type": "Effect",
			"cost": 0
		});
		deck.push({
			"name": "Hel to Pay",
			"text": "",
			"type": "Effect",
			"cost": 2
		});
	}
}

let event = [
	{
		"name": "Conquer Vahalla",
		"text": "",
		"type": "Event",
		"strength": 0
	}
];

module.exports = {
	"deck": deck,
	"fate": fate,
	"event": event
};