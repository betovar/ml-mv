// COMMON FATE DECK

const fate = [
	{
		"name": "Iron Man",
		"type": "hero",
		"text": "If Iron Man is in your Domain, whenever you perform an activate action, you must pay 1 Power in addition to the Activated Ability's cost.",
		"strength": 3,
		"img": "fate/fate-infinite/FATE_Iron_Man.webp",
		"back": "fate",
	}, {
		"name": "Black Widow",
		"type": "hero",
		"text": "When Black Widow is played, you may defeat an Ally at her location.",
		"strength": 2,
		"img": "fate/fate-infinite/FATE_Black_Window.webp",
		"back": "fate",
	}, {
		"name": "Nick Fury",
		"type": "hero",
		"strength": 2,
		"text": "When Nick Fury is played, the targeted player loses half of their Power rounded up.",
		"img": "fate/fate-infinite/FATE_Nick_Fury.webp",
		"back": "fate",
	}, {
		"name": "Hulk",
		"type": "hero",
		"strength": 5,
		"text": "When Hulk is defeated, instead of discarding him, place a +1 Strength token on him and relocate him to another player's Domain. Nothing can be attached to the Hulk.",
		"img": "fate/fate-infinite/FATE_Hulk.webp",
		"back": "fate",
	}, {
		"name": "Falcon",
		"type": "hero",
		"strength": 2,
		"text": "When Falcon is played, you may relocate a Hero with a Strength of 3 or less from any Domain to his location.",
		"img": "fate/fate-infinite/FATE_Falcon.webp",
		"back": "fate",
	}, {
		"name": "Hawkeye",
		"type": "hero",
		"strength": 2,
		"text": "When Hawkeye is played, you may defeat one of the targeted player's Allies at an Event.",
		"img": "fate/fate-infinite/FATE_Hawkeye.webp",
		"back": "fate",
	}, {
		"name": "She-Hulk",
		"type": "hero",
		"strength": 4,
		"text": "If She-Hulk is in your Domain, you cannot relocate or play to Events.",
		"img": "fate/fate-infinite/FATE_She_Hulk.webp",
		"back": "fate",
	}, {
		"name": "Vision",
		"type": "hero",
		"strength": 4,
		"text": "If Vision is in your Domain, whenever you gain Power, you gain 1 less Power.",
		"img": "fate/fate-infinite/FATE_Vision.webp",
		"back": "fate",
	}, {
		"name": "Thor",
		"type": "hero",
		"strength": 5,
		"text": "PROTECTOR",
		"img": "fate/fate-infinite/FATE_Thor.webp",
		"back": "fate",
	}, {
		"name": "Captain Marvel",
		"type": "hero",
		"strength": 6,
		"text": "When Captain Marvel is played, relocate all Allies in the targeted player's Domain to her location.",
		"img": "fate/fate-infinite/FATE_Catain_Marvel.webp",
		"back": "fate",
	}, {
		"name": "Captain America",
		"type": "hero",
		"strength": 3,
		"text": "When Captain America is played, place a +1 Strength token on Captain America and each other Hero in the targeted player's Domain.",
		"img": "fate/fate-infinite/FATE_Captain_America.webp",
		"back": "fate",
	}
];

const events = [
	{
		"name": "Protected Vibranium",
		"type": "event",
		"text": "",
		"strength": 8,
		"img": "",
		"back": "fate",
	}, {
		"name": "Lockdown at the Raft",
		"type": "event",
		"text": "",
		"strength": 8,
		"img": "",
		"back": "fate",
	}, {
		"name": "Helicarrier Alert",
		"type": "event",
		"text": "",
		"strength": 6,
		"img": "",
		"back": "fate",
	}, {
		"name": "Avengers Assemble",
		"type": "event",
		"text": "",
		"strength": 10,
		"img": "",
		"back": "fate",
	}
];

module.exports = { fate, events };