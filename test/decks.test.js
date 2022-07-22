thanos = require('../src/decks/thanos.js');
test("Thanos' villain cards", () => {
	expect(thanos.deck.length).toBe(30);
});
test("Thanos' fate cards", () => {
	expect(thanos.fate.length).toBe(10);
});
test("Thanos' event cards", () => {
	expect(thanos.event.length).toBe(1);
});

ultron = require('../src/decks/ultron.js');
test("Ultron's villain cards", () => {
	expect(ultron.deck.length).toBe(30);
});
test("Ultron's fate cards", () => {
	expect(ultron.fate.length).toBe(10);
});
test("Ultron's event cards", () => {
	expect(ultron.event.length).toBe(1);
});

hela = require('../src/decks/hela.js');
test("Hela's villain cards", () => {
	expect(hela.deck.length).toBe(30);
});
test("Hela's fate cards", () => {
	expect(hela.fate.length).toBe(10);
});
test("Hela's event cards", () => {
	expect(hela.event.length).toBe(1);
});

taskmaster = require('../src/decks/taskmaster.js');
test("Taskmaster's villain cards", () => {
	expect(taskmaster.deck.length).toBe(30);
});
test("Taskmaster's fate cards", () => {
	expect(taskmaster.fate.length).toBe(10);
});
test("Taskmaster's event cards", () => {
	expect(taskmaster.event.length).toBe(1);
});

killmonger = require('../src/decks/killmonger.js');
test("Killmonger's villain cards", () => {
	expect(killmonger.deck.length).toBe(30);
});
test("Killmonger's fate cards", () => {
	expect(killmonger.fate.length).toBe(10);
});
test("Killmonger's event cards", () => {
	expect(killmonger.event.length).toBe(1);
});
