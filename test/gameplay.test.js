// Integration Tests

let game = require('../src/game.js').Game
let g = new game(['thanos', 'ultron', 'hela', 'killmonger'])

test("Player power at setup", () => {
	expect(g.player.thanos.power).toBe(0)
	expect(g.player.ultron.power).toBe(1)
	expect(g.player.hela.power).toBe(2)
	expect(g.player.killmonger.power).toBe(2)
})
test("Fate deck setup", () => {
	expect(g.player.count).toBe(4)
	expect(g.deck['fate'].length).toBe(51)
})
test("Villain decks setup", () => {
	expect(g.deck.thanos.length).toBe(30)
	expect(g.deck.ultron.length).toBe(30)
	expect(g.deck.hela.length).toBe(30)
	expect(g.deck.killmonger.length).toBe(30)
})
//test("Turn order", () => {})
//test("Events", () => {})
//test("Player hand", () => {})
//test("Player location", () => {})