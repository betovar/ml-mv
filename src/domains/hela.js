const location = require('../location.js')

let domain = [
	new location("Niflheim", ["Play"], ["Vanquish", "Relocate", "Fate"]),
	new location("Hel", ["2 Power", "Vanquish"], ["Play", "Discard"]),
	new location("Gjoll", ["Fate", "1 Power"], ["Activate", "Play"]),
	new location("Odin's Vault", ["Discard", "Play"], ["Play", "3 Power"]),
	[] // specialty	
]

module.exports = {
	"domain": domain
}