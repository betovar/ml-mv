let fate = [
		{
			"name": "Mockingbird",
			"text": "When Mockingbird is played, the targeted player loses 2 Power.",
			"type": "Hero",
			"strength": 2
		},
		{
			"name": "Wasp",
			"text": "When Wasp is played, you may relocate any Hero from the targeted player's Domain to a new location in any player's Domain.",
			"type": "Hero",
			"strength": 3
		},
		{
			"name": "Scarlet Witch",
			"text": "When Scarlet Witch is played, choose a card type. The targeted player must reveal their hand and discard all cards of that chosen type.",
			"type": "Hero",
			"strength": 4
		},
		{
			"name": "Hank Pym",
			"text": "While Hank Pym is in your Domain, you may not play or find cards from your discard pile.",
			"type": "Hero",
			"strength": 2
		},
		{
			"name": "Wonder Man",
			"text": "When Wonder Man is defeated, find Vision, then play or relocate him to Wonder Man's previous location.",
			"type": "Hero",
			"strength": 4
		}
];

for (let i=0; i<=3; i++) {
	if ( i<3 ) { // 3 copies
		fate.push({
			"name": "Molecular Rearranger",
			"text": "When Molecular Rearranger is played, choose an Item or Ally card in the targeted player's Domain. That player must remove all copies of that card from their Domain.",
			"type": "Effect"
		});
	}
	if ( i<2 ) { // 2 copies
		fate.push({
			"name": "Deactivation Switch",
			"text": "Attach Deactivation Switch to a Specialty. The Specialty may no longer be used until the targeted player pays 2 Power on their turn to remove Deactivation Switch.",
			"type": "Item",
			"copies": 2
		});
	}
}

let event = [
	{
		"name": "Invasion of Stark Enterprises",
		"text": "When gaining Power, Ultron gains 1 fewer Power.",
		"reward": "Ultron Gains 6 Power.",
		"type": "Event",
		"strength": 8
	}
];

let deck = [
	{
		"name": "Giant Sentry",
		"text": "Look at the top six cards of the Fate deck, then put them back face down in any order you wish.",
		"type": "Ally",
		"cost": 6,
		"strength": 6
	},
	{
		"name": "Jocasta",
		"text": "When Jocasta is played, you may relocate any Hero to any location in any Domain.",
		"type": "Ally",
		"cost": 2,
		"strength": 3
	},
	{
		"name": "Alkhema",
		"text": "When Alkhema is played, defeat a character at her location.",
		"type": "Ally",
		"cost": 3
	}
];

for (let i=0; i<=4; i++) {
	if ( i<4 ) { // 4 copies
		deck.push({
			"name": "Impervious Alloy",
			"text": "When played, attach Impervious Alloy to an Ally you control. Impervious Alloy can only be removed if the attached Ally is defeated or removed.",
			"type": "Item",
			"cost": 2
		});
		deck.push({
			"name": "Duplicate Sentry",
			"text": "No additional ability.",
			"type": "Ally",
			"cost": 1,
			"strength": 2
		});
	}
	if ( i<3 ) { // 3 copies
		deck.push({
			"name": "Reconfigure",
			"text": "Gain 1 Power for each location in your Domain with at least one Sentry.",
			"type": "Effect",
			"cost": 0
		});
		deck.push({
			"name": "Flying Sentry",
			"text": "Place a +1 Strength token on an Ally you control. You may relocate that Ally to an Event.",
			"type": "Ally",
			"cost": 2
		});
		deck.push({
			"name": "Heavy Attack Sentry",
			"text": "This location gains VANQUISH.",
			"type": "Ally",
			"cost": 2
		});
	}
	if ( i<2 ) { // 2 copies
		deck.push({
			"name": "Encephalo-Ray",
			"text": "Place a -1 Strength token on each Hero in your Domain.",
			"type": "Effect",
			"cost": 2
		});
		deck.push({
			"name": "Technoforming",
			"text": "Place a +1 Strength token on an Ally you control. You may relocate that Ally to an Event.",
			"type": "Effect",
			"cost": 1
		});
		
		deck.push({
			"name": "Assembly Line",
			"text": "ACTIVATE: Reveal cards from your deck until you reveal an Ally. Add that card to your hand. Gain 1 Power.",
			"type": "Item",
			"cost": 1
		});
		
		deck.push({
			"name": "Every Contingency Covered",
			"text": "Choose either Item or Effect. Reveal cards from your deck until you reveal a card of that type. Add that card to your hand.",
			"type": "Effect",
			"cost": 2
		});
		deck.push({
			"name": "Assimilate Knowledge",
			"text": "Look at the top six cards of the Fate deck, then put them back face down in any order you wish.",
			"type": "Effect",
			"cost": 1
		});
	}
}

module.exports = {
	"deck": deck,
	"fate": fate,
	"event": event
 };