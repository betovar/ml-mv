// RULES

const { remove } = require('lodash');
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
    /**
     * @function draw the first n cards into your hand
     * @param {string} gameid - The unique game id
     * @param {string} from - The deck to be searched from
     * @param {string} to - The hand to be added to
     * @param {number} n - number of cards to look
     * @returns {number} count - number of cards drawn
     */
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
    let i,card;
    for (i=0; i<data.n; i++) {
        card = state.decks[from[1]].shift();
        state.hands[to[1]].push(card);
    }
    db.update(state);
    return { "acknowledged": true, "count": i };
}
function discard(data) {
    /**
     * @function discard a card from hand by index
     * @param {string} gameid - The unique game ID
     * @param {string} which - The hand to discard from
     * @param {string} cards - array of cards by name to discard
     * @returns acknowledged - true/false
     */
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
    let card = remove(state.hands[which[1]], function(c) {
        return c.name == data.cards[0];
    });
    state.discards[which[1]].push(card);
    db.update(state);
    return { "acknowledged": true };
}
function reshuffle(data) {
    /**
    * @function reshuffle a card from hand by index
    * @param {string} gameid - The unique game ID
    * @param {string} which - The deck that must be reshuffled
    * @returns acknowledged - true/false
    * @returns gameid - The unique game ID
    */
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
    return { "acknowledged": true, "gameid": state.gameid };
}
function find(data) {
    /**
     * @function find the first card of a name or type in a deck
     * @param {string} gameid - The unique game id
     * @param {string} which - The deck to be searched
     * @param {string} type - The card type to match
     * @param {string} name - The card name to match (optional for unique cards)
     */
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
function look(data) {
    /**
     * @function look privately view the first n cards
     * @param {string} gameid - The unique game id
     * @param {string} which - The deck to be searched
     * @param {string} n - number of cards to look
     */
    let state = db.read(data.gameid);
    if (state.gameid != data.gameid) { // check the game id
        return { "acknowledged": false };
    }
    const which = data.which.split('.');
    if (which[0] != "decks") {  // only look at cards in fate/villain decks
        return { "acknowledged": false };
    }
    const cards = state.decks[which[1]].slice(0,data.n);
    return { "acknowledged": true, "card": cards };
}
function reveal(data) {
    /**
     * @function reveal public show the first n cards
     * @param {string} gameid - The unique game id
     * @param {string} which - The deck to be searched
     * @param {string} n - number of cards to look
     */
    if (data.n === undefined) {
        data.n
    }
    let state = db.read(data.gameid);
    if (state.gameid != data.gameid) { // check the game id
        return { "acknowledged": false };
    }
    const which = data.which.split('.');
    if (which[0] != "decks") {  // only look at cards in fate/villain decks
        return { "acknowledged": false };
    }
    const cards = state.decks[which[1]].slice(0,data.n);
    return { "acknowledged": true, "card": cards };
}
function shuffle_in_place(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
module.exports = { draw, discard, find, reshuffle, shuffle, look, reveal }