const location = require('../locations.js');

let domain = [
	new location("Solomon Institute")
	.addAbility("Play a Card")
	.addAbility("Gain 2 Power")
	.addAbility("Activate")
	.addAbility("Relocate"),
	new location("Training Room")
	.addAbility("Discard Cards")
	.addAbility("Play a Card")
	.addAbility("Play a Card")
	.addAbility("Gain 3 Power"),
	new location("Armory")
	.addAbility("Gain 1 Power")
	.addAbility("Fate")
	.addAbility("Play a Card")
	.addAbility("Vanquish"),
	new location("Camp Hammond")
	.addAbility("Play a Card")
	.addAbility("Activate")
	.addAbility("Discard Cards")
	.addAbility("Fate"),
	[] //speciaty
];

module.exports = {
	"domain": domain
};