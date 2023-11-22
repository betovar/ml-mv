// DATABASE CLASS

const { Game_Factory } = require("./game.js");

let _singleton = null;

class Database {
    constructor() {
        if (!_singleton) {
            this.gs = {};
			_singleton = this;
		}
		return _singleton;
    }
    create_game(lobby) {
        if (this.gs.gameid === undefined) {
            this.gs = Game_Factory(lobby);
            return { "acknowledged": true, "gameid": this.gs.gameid };
        } else {
            return { "acknowledged": false };
        }
    }
    read_game(gameid) {
        if (this.gs.gameid == gameid) {
            return this.gs;
        } else {
            return {};
        }
    }
    update_game(data) {
        let ack = false;
        if (this.gs.gameid == data.gameid) {
            this.gs = data;
            return { "acknowledged": true, "gameid": this.gs.gameid };
        } else {
            return { "acknowledged": false };
        }
    }
    delete_game(gameid) {
        if (this.gs.gameid == gameid) {
            _singleton = null;
            this.gs = {};
            return { "acknowledged": true, "gameid": gameid };
        } else {
            return { "acknowledged": false, "gameid": this.gs.gameid };
        }
    }
    shuffle_deck(gameid, which) {
        if (this.gs.gameid == gameid) {
            shuffle(this.gs.decks[which]);
            return { "acknowledged": true, "gameid": gameid };
        } else {
            return { "acknowledged": false };
        }
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

module.exports = { Database };