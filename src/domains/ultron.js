const location = require('../location.js')

let domain = [
new location("Research Lab", ["Relocate", "1 Power"], ["Fate", "Play"]),
new location("Manufacturing Array", ["Play", "Fate"], ["3 Power", "Activate"]),
new location("Reconfiguration Base", ["Play", "2 Power"], ["Discard", "Vanquish"]),
new location("Stark Industries Industrial Complex", ["Discard", "Play"], ["Play", "1 Power"]),
	[] //specialty
]

module.exports = {
	"domain": domain
}