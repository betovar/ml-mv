const location = require('../location.js')

let domain = [
	new location("Solomon Institute",
	["Play a Card", "Gain 2 Power"],
	["Activate", "Relocate"]),
	new location("Training Room",
	["Discard Cards", "Play a Card"],
	["Play a Card", "Gain 3 Power"]),
	new location("Armory",
	["Gain 1 Power", "Fate"],
	["Play a Card", "Vanquish"]),
	new location("Camp Hammond",
	["Play a Card", "Activate"],
	["Discard Cards", "Fate"]),
	[] //speciaty
]

module.exports = {
	"domain": domain
}