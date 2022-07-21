// Rules

isTurn(who) {
	return this.turn % this.player['order'].length != this.player['order'].indexOf(who);
}
end_turn(who, drawup='auto') {
	if (isTurn(who)) { return; }
	this.turn += 1;
	this.track = ["Move Token"];
	if (drawup == 'nodraw') { return; }
	let n = 4-this.player[who].hand.length;
	if (n) { draw(who, who, n); }
	console.log(who, "ended their turn");
}
move(who, dest) {
	if (isTurn(who)) { return; }
	// FIXME player must stay in their domain
	if (this.player[who].loc == dest) { return; }
	this.player[who].loc = dest;
	this.track.splice(this.track.indexOf("Move Token"),1);
	for (var a in this.domain[who][dest].action) {
		if (this.domain[who][dest][a].isBlocked()) {
			this.track.push(a);
		}
	}
	console.log(who, "moved to", player[who].loc);
}