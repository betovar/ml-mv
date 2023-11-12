let fate = [
	{
		"name": "Iron Man",
		"type": "hero",
		"text": "If Iron Man is in your Domain, whenever you perform an activate action, you must pay 1 Power in addition to the Activated Ability's cost.",
		"notes": "If an Activated Ability has no Cost associated with it, then Iron Man will cause that Activated Ability to require 1 Power to use.",
		"onactivate": {"cost": 1},
		"strength": 3,
		"img": "fate/fate-infinite/FATE_Iron_Man.webp",
		"back": "fate/BACK_Fate.webp"
	},
	{
		"name": "Black Widow",
		"type": "hero",
		"text": "When Black Widow is played, you may defeat an Ally at her location.",
		"notes": "Black Widow can be used to defeat an Ally at her location that is at the top of the board, such as a Dog of War.",
		"strength": 2,
		"img": "fate/fate-infinite/FATE_Black_Window.webp",
		"back": "fate/BACK_Fate.webp"
	},
	{
		"name": "Nick Fury",
		"type": "hero",
		"strength": 2,
		"text": "When Nick Fury is played, the targeted player loses half of their Power rounded up.",
		"img": "fate/fate-infinite/FATE_Nick_Fury.webp",
		"back": "fate/BACK_Fate.webp"
	},
	{
		"name": "Hulk",
		"type": "hero",
		"strength": 5,
		"text": "When Hulk is defeated, instead of discarding him, place a +1 Strength token on him and relocate him to another player's Domain. Nothing can be attached to the Hulk.",
		"img": "fate/fate-infinite/FATE_Hulk.webp",
		"back": "fate/BACK_Fate.webp"
	},
	{
		"name": "Falcon",
		"type": "hero",
		"strength": 2,
		"text": "When Falcon is played, you may relocate a Hero with a Strength of 3 or less from any Domain to his location.",
		"img": "fate/fate-infinite/FATE_Falcon.webp",
		"back": "fate/BACK_Fate.webp"
	},
	{
		"name": "Hawkeye",
		"type": "hero",
		"strength": 2,
		"text": "When Hawkeye is played, you may defeat one of the targeted player's Allies at an Event.",
		"img": "fate/fate-infinite/FATE_Hawkeye.webp",
		"back": "fate/BACK_Fate.webp"
	},
	{
		"name": "She-Hulk",
		"type": "hero",
		"strength": 4,
		"text": "If She-Hulk is in your Domain, you cannot relocate or play to Events.",
		"img": "fate/fate-infinite/FATE_She_Hulk.webp",
		"back": "fate/BACK_Fate.webp"
	},
	{
		"name": "Vision",
		"type": "hero",
		"strength": 4,
		"text": "If Vision is in your Domain, whenever you gain Power, you gain 1 less Power.",
		"onpower": {"power": -1},
		"img": "fate/fate-infinite/FATE_Vision.webp",
		"back": "fate/BACK_Fate.webp"
	},
	{
		"name": "Thor",
		"type": "hero",
		"strength": 5,
		"text": "PROTECTOR",
		"img": "fate/fate-infinite/FATE_Thor.webp",
		"back": "fate/BACK_Fate.webp"
	},
	{
		"name": "Captain Marvel",
		"type": "hero",
		"strength": 6,
		"text": "When Captain Marvel is played, relocate all Allies in the targeted player's Domain to her location.",
		"notes": "When played, Captain Marvel will also relocate any Allies in the targeted player's Domain to her location that are on the top of the board, such as Dog of War. Captain Marvel's ability is not optional.",
		"img": "fate/fate-infinite/FATE_Catain_Marvel.webp",
		"back": "fate/BACK_Fate.webp"
	},
	{
		"name": "Captain America",
		"type": "hero",
		"strength": 3,
		"text": "When Captain America is played, place a +1 Strength token on Captain America and each other Hero in the targeted player's Domain.",
		"img": "fate/fate-infinite/FATE_Captain_America.webp",
		"back": "fate/BACK_Fate.webp"
	}
];

module.exports = fate;