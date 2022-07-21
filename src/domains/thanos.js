const location = require('../location.js')

let domain = [
	new location("Sanctuary II", ["2 Power", "Activate"], ["Play", "Discard"]),
	new location("Titan", ["Play", "Fate"], ["1 Power", "Relocate"]),
	new location("The Infinity Well", ["Play", "Discard"], ["Play", "3 Power"]),
	new location("Knowhere", ["Relocate"], ["Fate", "Play", "Vanquish"]),
	[] //specialty
]

module.exports = {
	"domain": domain
}