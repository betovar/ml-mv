// let player = {}; 	// player list
// let domain = {};
// let deck = {};

let game = require('../game.js');

game.new_game(['thanos', 'ultron'])

test("loads Thanos' player token", () => {
	expect(game.player.thanos.power).toBe(0);
});

test("loads Ultron' player token", () => {
	expect(game.player.ultron.power).toBe(1);
});
