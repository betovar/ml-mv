
	// 	"Molecular Rearranger": {
	// 		"text": "When Molecular Rearranger is played, choose an Item or Ally card in the targeted player's Domain. That player must remove all copies of that card from their Domain.",
	// 		"type": "Effect",
	// 		"copies": 3
	// 	},
	// 	"Deactivation Switch": {
	// 		"text": "Attach Deactivation Switch to a Specialty. The Specialty may no longer be used until the targeted player pays 2 Power on their turn to remove Deactivation Switch.",
	// 		"type": "Item",
	// 		"copies": 2
	// 	},
	// 	"Mockingbird": {
	// 		"text": "When Mockingbird is played, the targeted player loses 2 Power.",
	// 		"type": "hero",
	// 		"strength": 2
	// 	},
	// 	"Wasp": {
	// 		"text": "When Wasp is played, you may relocate any Hero from the targeted player's Domain to a new location in any player's Domain.",
	// 		"type": "hero",
	// 		"strength": 3
	// 	},
	// 	"Scarlet Witch": {
	// 		"text": "When Scarlet Witch is played, choose a card type. The targeted player must reveal their hand and discard all cards of that chosen type.",
	// 		"type": "hero",
	// 		"strength": 4
	// 	},
	// 	"Hank Pym": {
	// 		"text": "While Hank Pym is in your Domain, you may not play or find cards from your discard pile.",
	// 		"type": "hero",
	// 		"strength": 2
	// 	},
	// 	"Wonder Man": {
	// 		"text": "When Wonder Man is defeated, find Vision, then play or relocate him to Wonder Man's previous location.",
	// 		"type": "hero",
	// 		"strength": 4
	// 	}
	// },
	// "event": {
	// 	"Invasion of Stark Enterprises": {
	// 		"text": "When gaining Power, Ultron gains 1 fewer Power.",
	// 		"reward": "Ultron Gains 6 Power.",
	// 		"type": "event",
	// 		"strength": 8
	// 	}
	// },
let deck = [
	{
		"name": "Impervious Alloy",
		"text": "When played, attach Impervious Alloy to an Ally you control. Impervious Alloy can only be removed if the attached Ally is defeated or removed.",
		"type": "Item",
		"cost": 2,
		"copies": 4
	},
	{
		"name": "Encephalo-Ray",
		"text": "Place a -1 Strength token on each Hero in your Domain.",
		"type": "Effect",
		"cost": 2,
		"copies": 2
	},
	{
		"name": "Technoforming",
		"text": "Place a +1 Strength token on an Ally you control. You may relocate that Ally to an Event.",
		"type": "Effect",
		"cost": 1,
		"copies": 2
	},
	{
		"name": "Flying Sentry",
		"text": "Place a +1 Strength token on an Ally you control. You may relocate that Ally to an Event.",
		"type": "Ally",
		"cost": 2,
		"copies": 3
	},
	{
		"name": "Alkhema",
		"text": "When Alkhema is played, defeat a character at her location.",
		"type": "Ally",
		"cost": 3,
		"strength": 3
	},
	{
		"name": "Assembly Line",
		"text": "ACTIVATE: Reveal cards from your deck until you reveal an Ally. Add that card to your hand. Gain 1 Power.",
		"type": "Item",
		"cost": 1,
		"copies": 2
	},
	{
		"name": "Heavy Attack Sentry",
		"text": "This location gains VANQUISH.",
		"type": "Ally",
		"cost": 2,
		"copies": 3
	},
	{
		"name": "Every Contingency Covered",
		"text": "Choose either Item or Effect. Reveal cards from your deck until you reveal a card of that type. Add that card to your hand.",
		"type": "Effect",
		"cost": 2,
		"copies": 2
	},
	{
		"name": "Duplicate Sentry",
		"text": "No additional ability.",
		"type": "Ally",
		"cost": 1,
		"strength": 2,
		"copies": 4
	},
	{
		"name": "Reconfigure",
		"text": "Gain 1 Power for each location in your Domain with at least one Sentry.",
		"type": "Effect",
		"cost": 0,
		"copies": 3
	},
	{
		"name": "Assimilate Knowledge",
		"text": "Look at the top six cards of the Fate deck, then put them back face down in any order you wish.",
		"type": "Effect",
		"cost": 1,
		"copies": 2
	},
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
	}
]

module.exports = { "deck": deck };