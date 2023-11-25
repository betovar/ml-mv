// DATABASE CLASS

const { Game_Factory } = require("./game.js");

let _singleton = null;

class Database {
    constructor() {
        if (!_singleton) {
            this.state = {};
			_singleton = this;
		}
		return _singleton;
    }
    create(lobby) {
        if (this.state.gameid === undefined) {
            this.state = Game_Factory(lobby);
            return { "acknowledged": true, "gameid": this.state.gameid };
        } else {
            return { "acknowledged": false };
        }
    }
    read(gameid) {
        if (this.state.gameid == gameid) {
            return this.state;
        } else {
            return {};
        }
    }
    update(data) {
        let ack = false;
        if (this.state.gameid == data.gameid) {
            this.state = data;
            return { "acknowledged": true, "gameid": this.state.gameid };
        } else {
            return { "acknowledged": false };
        }
    }
    delete(gameid) {
        if (this.state.gameid == gameid) {
            _singleton = null;
            this.state = {};
            return { "acknowledged": true, "gameid": gameid };
        } else {
            return { "acknowledged": false, "gameid": this.state.gameid };
        }
    }
}

module.exports = { Database };