const location = require('../locations.js');

let domain = [
new location("Sanctuary II")
	.addAbility("2 Power",'bloc')
	.addAbility("Activate",'bloc')
	.addAbility("Play")
	.addAbility("Discard"),
new location("Titan")
	.addAbility("Play",'bloc')
	.addAbility("Fate",'bloc')
	.addAbility("1 Power")
	.addAbility("Relocate"),
new location("The Infinity Well")
	.addAbility("Play",'bloc')
	.addAbility("Discard",'bloc')
	.addAbility("Play")
	.addAbility("3 Power"),
new location("Knowhere")
	.addAbility("Relocate",'bloc')
	.addAbility("Fate")
	.addAbility("Play")
	.addAbility("Vanquish"),
	[] //specialty
]

module.exports = {domain};