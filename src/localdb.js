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
    create_game(lobby) {
        if (this.state.gameid === undefined) {
            this.state = Game_Factory(lobby);
            return { "acknowledged": true, "gameid": this.state.gameid };
        } else {
            return { "acknowledged": false };
        }
    }
    read_game(gameid) {
        if (this.state.gameid == gameid) {
            return this.state;
        } else {
            return {};
        }
    }
    update_game(data) {
        let ack = false;
        if (this.state.gameid == data.gameid) {
            this.state = data;
            return { "acknowledged": true, "gameid": this.state.gameid };
        } else {
            return { "acknowledged": false };
        }
    }
    delete_game(gameid) {
        if (this.state.gameid == gameid) {
            _singleton = null;
            this.state = {};
            return { "acknowledged": true, "gameid": gameid };
        } else {
            return { "acknowledged": false, "gameid": this.state.gameid };
        }
    }
    shuffle(data) {
        if (this.state.gameid != data.gameid) {
            return { "acknowledged": false };
        }
        const which = data.which.split('.');
        switch (which[1]) {
            case "thanos":
            case "ultron":
            case "fate":
                break;
            default:
                return { "acknowledged": false };
        }
        shuffle_in_place(this.state[which[0]][which[1]]);
        return { "acknowledged": true, "gameid": this.state.gameid };
    }
    draw(data) {
        if (this.state.gameid != data.gameid) {
            return { "acknowledged": false };
        }
        const from = data.from.split('.');
        const to = data.to.split('.');
        switch (from[1]) {
            case "thanos":
            case "ultron":
            case "fate":
                break;
            default:
                return { "acknowledged": false };
        }
        const card = this.state[from[0]][from[1]].shift();
        this.state[to[0]][to[1]].unshift(card);
        return { "acknowledged": true, "card": card };
    }
    discard(data) {
    /**
     * @function discard a card from hand by index
     * @param {string} gameid - The unique game ID
     * @param {string} which - The deck that must be searched
     * @param {string} index - The card index to discard
     * @returns acknowledged - true/false
     * @returns card - a card object
     */
        if (this.state.gameid != data.gameid) { // check game id
            return { "acknowledged": false };
        }
        const which = data.which.split('.');
        if (which[0] != "hands") { // only discard from hands
            return { "acknowledged": false };
        }
        switch (which[1]) {
            case "thanos":
            case "ultron":
            case "fate":
                break;
            default:
                return { "acknowledged": false };
        }
        const card = this.state.hands[which[1]].splice(data.index,1)[0];
        this.state.discards[which[1]].push(card);
        return { "acknowledged": true, "card": card };
    }
    reshuffle(data) {
        if (this.state.gameid != data.gameid) { // check the game id
            return { "acknowledged": false };
        }
        const which = data.which.split('.');
        if (which[0] != "discards") { // can only reshuffle the discard pile
            return { "acknowledged": false };
        }
        if (this.state.discards[which[1]].length == 0) { // discard pile can't be empty
            return { "acknowledged": false };
        }
        switch (which[1]) { // protection for existing decks
            case "thanos":
            case "ultron":
            case "fate":
                break;
            default:
                return { "acknowledged": false };
        }
        this.state.decks[which[1]]=this.state.decks[which[1]].concat(this.state.discards[which[1]]);
        this.state.discards[which[1]] = [];
        shuffle_in_place(this.state.decks[which[1]]);
        return { "acknowledged": true, "gameid": data.gameid };
    }
    /**
     * @function find the first card of a name or type in a deck
     * @param {string} gameid - The unique game id
     * @param {string} which - The deck to be searched
     * @param {string} type - The card type to match
     * @param {string} name - The card name to match (optional for unique cards)
     */
    find(data) {
        if (this.state.gameid != data.gameid) { // check the game id
            return { "acknowledged": false };
        }
        const which = data.which.split('.');
        if (which[0] != "decks") {  // only find cards in fate/villain decks for now
            return { "acknowledged": false };
        } 
        switch (which[1]) { // protection for existing decks
            case "thanos":
            case "ultron":
            case "fate":
                break;
            default:
                return { "acknowledged": false };
        }
        let i; // search for card index
        for (i=0; i < this.state[which[0]][which[1]].length; i++) {
            if (this.state[which[0]][which[1]][i].name == data.name) {
                break;
            }
            if (this.state[which[0]][which[1]][i].type == data.type) {
                break;
            }
        }
        const card = this.state[which[0]][which[1]].splice(i,1)[0]; // remove card from deck
        return { "acknowledged": true, "card": card }; // return card
    }
}

function shuffle_in_place(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

module.exports = { Database };