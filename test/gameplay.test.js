// Integration Tests

let g = require('../game.js');

let game = new g.game(['thanos', 'ultron', 'hela']);

test("Thanos' player token", () => {
	expect(game.player.thanos.power).toBe(0);
});
test("Ultron's player token", () => {
	expect(game.player.ultron.power).toBe(1);
});
test("Hela's player token", () => {
	expect(game.player.hela.power).toBe(2);
});
test("Fate deck is loaded but no events", () => {
	expect(game.deck['fate'].length).toBe(11+30);
});

// init(['thanos', 'ultron']);
// draw('thanos', 'thanos', 4);
// move('thanos', 'Sanctuary II');
// collect('thanos', 2);
// let test = player['thanos']['hand'][0];
// play('thanos', test, 'Titan');
// track.push('Relocate');
// relocate('thanos', 'Titan', test, 'Sanctuary II');
// discard('thanos', player['thanos']['hand'][0]);
// end_turn('thanos');