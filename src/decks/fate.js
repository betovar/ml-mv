let fate = [
	{
		"name": "Iron Man",
		"text": "If Iron Man is in your Domain, whenever you perform an activate action, you must pay 1 Power in addition to the Activated Ability's cost.",
		"clarify": "If an Activated Ability has no Cost associated with it, then Iron Man will cause that Activated Ability to require 1 Power to use.",
		"onactivate": {"cost": 1},
		"strength": 3,
		"type": "Hero"
	},
	{
		"name": "Black Widow",
		"text": "When Black Widow is played, you may defeat an Ally at her location.",
		"clarify": "Black Widow can be used to defeat an Ally at her location that is at the top of the board, such as a Dog of War.",
		"strength": 2,
		"type": "Hero"
	},
	{
		"name": "Nick Fury",
		"strength": 2,
		"text": "When Nick Fury is played, the targeted player loses half of their Power rounded up.",
		"type": "Hero"
	},
	{
		"name": "Hulk",
		"strength": 5,
		"text": "When Hulk is defeated, instead of discarding him, place a +1 Strength token on him and relocate him to another player's Domain. Nothing can be attached to the Hulk.",
		"type": "Hero"
	},
	{
		"name": "Falcon",
		"strength": 2,
		"text": "When Falcon is played, you may relocate a Hero with a Strength of 3 or less from any Domain to his location.",
		"type": "Hero"
	},
	{
		"name": "Hawkeye",
		"strength": 2,
		"text": "When Hawkeye is played, you may defeat one of the targeted player's Allies at an Event.",
		"type": "Hero"
	},
	{
		"name": "She-Hulk",
		"strength": 4,
		"text": "If She-Hulk is in your Domain, you cannot relocate or play to Events.",
		"type": "Hero"
	},
	{
		"name": "Vision",
		"strength": 4,
		"text": "If Vision is in your Domain, whenever you gain Power, you gain 1 less Power.",
		"onpower": {"power": -1},
		"type": "Hero"
	},
	{
		"name": "Thor",
		"strength": 5,
		"text": "PROTECTOR",
		"type": "Hero"
	},
	{
		"name": "Captain Marvel",
		"strength": 6,
		"text": "When Captain Marvel is played, relocate all Allies in the targeted player's Domain to her location.",
		"clarify": "When played, Captain Marvel will also relocate any Allies in the targeted player's Domain to her location that are on the top of the board, such as Dog of War. Captain Marvel's ability is not optional.",
		"type": "Hero"
	},
	{
		"name": "Captain America",
		"strength": 3,
		"text": "When Captain America is played, place a +1 Strength token on Captain America and each other Hero in the targeted player's Domain.",
		"onplay": {},
		"type": "Hero"
	}
];

let event = [
	{
		"name": "Protected Vibranium",
		"text": "",
		"strength": 8,
		"type": "Event"
	},
	{
		"name": "Lockdown at the Raft",
		"text": "",
		"strength": 8,
		"type": "Event"
	},
	{
		"name": "Helicarrier Alert",
		"text": "",
		"strength": 6,
		"type": "Event"
	},
	{
		"name": "Avengers Assemble",
		"text": "",
		"strength": 10,
		"type": "Event"
	}
];

module.exports = {
	"fate": fate,
	"event": event
};