const location = require('../locations.js');

let domain = [
	new location("Warrior Falls")
	.addAbility("Relocate")
	.addAbility("Fate")
	.addAbility("Play")
	.addAbility("Vanquish"),
	new location("Institute of Technology")
	.addAbility("Play")
	.addAbility("Discard")
	.addAbility("Play")
	.addAbility("3 Power"),
	new location("The Great Mound")
	.addAbility("1 Power")
	.addAbility("Play")
	.addAbility("Activate")
	.addAbility("Discard"),
	new location("The Golden City")
	.addAbility("Activate")
	.addAbility("Play")
	.addAbility("2 Power")
	.addAbility("Fate"),
	[] //speciaty
];

module.exports = {
	"domain": domain
};