
let gamestate = {} //single global gamestate container

class Model {
	constructor(gameid) {
        this.read(gameid)
        return this
    }
    async create(settings={}) {
        this.game = settings
        if (this.game._id === undefined) {
            this.game['_id'] = Math.random().toString(36).substr(2,6)
        }
        gamestate = this.game //write to db
        return this.game._id
    }
    async read(gameid) {
        if (gameid == gamestate._id) {
            this.game = gamestate //read from db
        }
    }
    async update() {
        if (this.game._id == gamestate._id) {
            gamestate = this.game //write to db
        }
    }
    async delete(gameid) {
        if (gameid == gamestate._id) {
            gamestate = {} //clear db
        }
    }
}

module.exports = {
    'game': Model
}