// RULES

const { Database } = require("./localdb.js");
let db = new Database;

function shuffle(data) {
    let state = db.read(data.gameid);
    if (state.gameid != data.gameid) {
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
    shuffle_in_place(state[which[0]][which[1]]);
    db.update(state);
    return { "acknowledged": true, "gameid": state.gameid };
}
function draw(data) {
    let state = db.read(data.gameid);
    if (state.gameid != data.gameid) {
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
    const card = state[from[0]][from[1]].shift();
    state[to[0]][to[1]].unshift(card);
    db.update(state);
    return { "acknowledged": true, "card": card };
}
/**
 * @function discard a card from hand by index
 * @param {string} gameid - The unique game ID
 * @param {string} which - The deck that must be searched
 * @param {string} index - The card index to discard
 * @returns acknowledged - true/false
 * @returns card - a card object
 */
function discard(data) {
    let state = db.read(data.gameid);
    if (state.gameid != data.gameid) { // check game id
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
    const card = state.hands[which[1]].splice(data.index,1)[0];
    state.discards[which[1]].push(card);
    db.update(state);
    return { "acknowledged": true, "card": card };
}
function reshuffle(data) {
    let state = db.read(data.gameid);
    if (state.gameid != data.gameid) { // check the game id
        return { "acknowledged": false };
    }
    const which = data.which.split('.');
    if (which[0] != "discards") { // can only reshuffle the discard pile
        return { "acknowledged": false };
    }
    if (state.discards[which[1]].length == 0) { // discard pile can't be empty
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
    state.decks[which[1]]=state.decks[which[1]].concat(state.discards[which[1]]);
    state.discards[which[1]] = [];
    shuffle_in_place(state.decks[which[1]]);
    db.update(state);
    return { "acknowledged": true, "gameid": data.gameid };
}
/**
 * @function find the first card of a name or type in a deck
 * @param {string} gameid - The unique game id
 * @param {string} which - The deck to be searched
 * @param {string} type - The card type to match
 * @param {string} name - The card name to match (optional for unique cards)
 */
function find(data) {
    // consider lodash for searching
    let state = db.read(data.gameid);
    if (state.gameid != data.gameid) { // check the game id
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
    for (i=0; i < state[which[0]][which[1]].length; i++) {
        if (state[which[0]][which[1]][i].name == data.name) {
            break;
        }
        if (state[which[0]][which[1]][i].type == data.type) {
            break;
        }
    }
    const card = state[which[0]][which[1]].splice(i,1)[0]; // remove card from deck
    db.update(state);
    return { "acknowledged": true, "card": card }; // return card
}

function shuffle_in_place(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
module.exports = { draw, discard, find, reshuffle, shuffle }