const location = require('../locations.js');

let domain = [
new location("Research Lab")
	.addAbility("Relocate", 'bloc')
	.addAbility("1 Power", 'bloc')
	.addAbility("Fate")
	.addAbility("Play"),
new location("Manufacturing Array")
	.addAbility("Play", 'bloc')
	.addAbility("Fate", 'bloc')
	.addAbility("3 Power")
	.addAbility("Activate"),
new location("Reconfiguration Base")
	.addAbility("Play", 'bloc')
	.addAbility("2 Power", 'bloc')
	.addAbility("Discard")
	.addAbility("Vanquish"),
new location("Stark Industries Industrial Complex")
	.addAbility("Discard", 'bloc')
	.addAbility("Play", 'bloc')
	.addAbility("Play")
	.addAbility("1 Power"),
	[] //specialty
]

module.exports = {domain};