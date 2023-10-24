// lobby.js
let db  = require('./localdb.js')

class Lobby {
	constructor() {
		this.db = new db.init()
	}
}

module.exports = {

}