function play() {
	// play a card from a player's hand to a location
}
function discard(card, who) {
	// discard a card from a player's hand to the appropriate discard pile
	// player turn must be active
	this.isTurn(who);
	// player must have the card in their hand
	if (!player[who].hand.includes(card)) { return; }
	// check that action has not been used
	let a = "Discard";
	if (!track.includes(a)) { return; }
	else { track.splice(track.indexOf(a),1); }
	// execute action
	player[who].hand.splice(player[who].hand.indexOf(card), 1);
	console.log (who, "discarded", card);
}

function gain() {
	// player gains power
}
function attach() {
	// attach an item or property to a card
}
function relocate() {
	// move a card from one location to another
}
function activate() {
	// trigger a not standard ability
}
function fate() {
	// draw and play a fate card to an opponent's location
}
function vanquish() {
	// defeat an opponent's card
}
function remove() {
	// remove a card from play regardless of any triggers or effects
}
function find() {
	// search through a deck for the first instance of a card matching a property
}
function draw(who, src, n=1) {
	// draw a number of cards from a deck
	this.player.// player turn must be active
	while (n--) { // while there are cards
		var card = deck[src].pop(); // pop card from source deck
		player[who].hand.push(card); // add card to player hand
		console.log(who,"drew", card); // write to feed
	}
};

// function fate(who, n=1) {
// 	// player turn must be active
// 	if (turn % player['order'].length != player['order'].indexOf(who)) { return; }
// 	// check that action has not been used
// 	let a = "Fate";
// 	if (!track.includes(a)) { return; }
// 	else { track.splice(track.indexOf(a),1); }
// 	// draw a card
// 	let card = 
// 	while (n--) {
// 		card.push(deck['fate'].pop());
// 	}
// 	console.log(who,"drew", n, "fate card(s)");

// 	// choose villain and location
// 	// play card to location
// 	// execute effect

// 	console.log(who,"played a fate card",card, "to", dest);
// 	console.log(who,"played a fate card",card, "to no effect");
// }

// function relocate(who, src, card, dest, tb='btm') {
// 	// player turn must be active
// 	if (turn % player['order'].length != player['order'].indexOf(who)) { return; }
// 	// validate the source
// 	for (x in domain[who]) {
// 		if (domain[who][x]['card'][tb] == card) {}
// 		else { }
// 	}
// 	// validate the destination

// 	// check that action has not been used
// 	let a = "Relocate";
// 	if (!track.includes(a)) { return; }
// 	else { track.splice(track.indexOf(a),1); }
// 	// execute action
// 	domain[who][src]['card'][tb].splice()
// 	domain[who][dest]['card'][tb].push(card);
// 	console.log(who, "relocated", card, "to", dest);
// }

// function play(who, card, dest, tb='btm') {
// 	// player turn must be active
// 	if (turn % player['order'].length != player['order'].indexOf(who)) { return; }
// 	// player must have the card in their hand
// 	if (!player[who].hand.includes(card)) { return; }
// 	// cards must play to own domain
// 	if (!Object.keys(domain[who]).includes(dest)) { return; }
// 	// FIXME what about events?
// 	// check the cost can be paid
// 	let cardcost = ref[card].cost;
// 	if (isNaN(cardcost)) { return; } 
// 	// FIXME calc the cost for the mad titan
// 	else { if (cardcost > player[who].power) { return; } }
// 	// check that action has not been used
// 	let a = "Play a Card";
// 	if (!track.includes(a)) { return; }
// 	else { track.splice(track.indexOf(a),1); }
// 	// execute action
// 	player[who].power -= cardcost;
// 	domain[who][dest]['card'][tb].push(card);
// 	player[who].hand.splice(player[who].hand.indexOf(card), 1);
// 	console.log (who, "played", card, "to", dest, "for",cardcost, "power");
// }

// function collect(who, n) {
// 	// player turn must be active
// 	if (turn % player['order'].length != 0) { return; }
// 	// check that action has not been used
// 	let a = 'Gain '+n+' Power';
// 	if (!track.includes(a)) { return; }
// 	else { track.splice(track.indexOf(a),1); }
// 	// execute action
// 	player[who].power += n;
// 	console.log(who, "gained", n, "power for a total of", player[who].power);
// }



