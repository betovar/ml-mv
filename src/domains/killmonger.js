const location = require('../location.js')

let domain = [
	new location("Warrior Falls",
	["Relocate", "Fate"],
	["Play", "Vanquish"]),
	new location("Institute of Technology",
	["Play", "Discard"],
	["Play", "3 Power"]),
	new location("The Great Mound",
	["1 Power", "Play"],
	["Activate", "Discard"]),
	new location("The Golden City",
	["Activate", "Play"],
	["2 Power", "Fate"]),
	[] //speciaty
]

module.exports = {
	"domain": domain
}