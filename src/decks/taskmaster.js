let fate = [
	{
		"name": "Butterball",
		"text": "",
		"type": "Hero",
		"strength": 0
	},
	{
		"name": "Scott Lang",
		"text": "",
		"type": "Hero",
		"strength": 2
	},
	{
		"name": "Solo",
		"text": "",
		"type": "Hero",
		"strength": 3
	}
];

for (let i=0; i<=4; i++) {
	if ( i<4 ) { // 4 copies
		fate.push({
			"name": "Found by the Avengers",
			"text": "",
			"type": "Effect"
		});
	}
	if ( i<3 ) { // 3 copies
		fate.push({
			"name": "Scarlet Spider Clone",
			"text": "",
			"type": "Hero",
			"strength": 1
		});
	}
}

let event = [
	{
		"name": "Government Work",
		"text": "",
		"type": "Event",
		"strength": 0
	}
];


let deck = [
	{
		"name": "Anaconda",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 3
	},
	{
		"name": "Black Ant",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 2
	},
	{
		"name": "Blood Spider",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 3
	},
	{
		"name": "Crossbones",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 3
	},
	{
		"name": "Death Shield",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 3
	},
	{
		"name": "Diamondback",
		"text": "",
		"type": "Ally",
		"cost": 1,
		"strength": 2
	},
	{
		"name": "Jagged Bow",
		"text": "",
		"type": "Ally",
		"cost": 2,
		"strength": 3
	},
	{
		"name": "Lesson Plan",
		"text": "",
		"type": "Specialty",
		"cost": 1
	},
	{
		"name": "Photographic Reflexes",
		"text": "",
		"type": "Specialty",
		"cost": 2
	},
	{
		"name": "Taskmaster's Bow",
		"text": "",
		"type": "Item",
		"cost": 2
	},
	{
		"name": "Taskmaster's Shield",
		"text": "",
		"type": "Item",
		"cost": 0
	},
	{
		"name": "Taskmaster's Sword",
		"text": "",
		"type": "Item",
		"cost": 2
	}
];


for (let i=0; i<=4; i++) {
	if ( i<4 ) { // 4 copies
		deck.push({
			"name": "Conduct Exercise",
			"text": "",
			"type": "Effect",
			"cost": 0
		});
	}
	if ( i<3 ) { // 3 copies
		deck.push({
			"name": "Trainees",
			"text": "",
			"type": "Ally",
			"cost": 1,
			"strength": 1
		});
		deck.push({
			"name": "Training Academy",
			"text": "",
			"type": "Item",
			"cost": 1
		});
	}
	if ( i<2 ) { // 2 copies
		deck.push({
			"name": "Redeploy",
			"text": "",
			"type": "Effect",
			"cost": 2
		});
		deck.push({
			"name": "Shadow Initiative",
			"text": "",
			"type": "Effect",
			"cost": 1
		});
		deck.push({
			"name": "Trainer for Hire",
			"text": "",
			"type": "Effect",
			"cost": 0
		});
		deck.push({
			"name": "Training Dummy",
			"text": "",
			"type": "Item",
			"cost": 1
		});
	}
}


module.exports = {
	"deck": deck,
	"fate": fate,
	"event": event
};