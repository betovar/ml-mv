const location = require('../locations.js');

let domain = [
	new location("Niflheim")
	.addAbility("Play",'bloc')
	.addAbility("Vanquish")
	.addAbility("Relocate")
	.addAbility("Fate"),
	new location("Hel")
	.addAbility("2 Power",'bloc')
	.addAbility("Vanquish",'bloc')
	.addAbility("Play")
	.addAbility("Discard"),
	new location("Gjoll")
	.addAbility("Fate",'bloc')
	.addAbility("1 Power",'bloc')
	.addAbility("Activate")
	.addAbility("Play"),
	new location("Odin's Vault")
	.addAbility("Discard",'bloc')
	.addAbility("Play",'bloc')
	.addAbility("Play")
	.addAbility("3 Power"),
	[] // specialty	
];

module.exports = {
	"domain": domain
};