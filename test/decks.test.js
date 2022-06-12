let deck = [];

thanos = require('../src/decks/thanos.js');
deck['thanos'] = thanos.deck;
test("loads Thanos' villain cards", () => {
	expect(deck.thanos.length).toBe(30);
});
deck['fate'] = thanos.fate;
test("loads Thanos' fate cards", () => {
	expect(deck.fate.length).toBe(10);
});
deck['event'] = thanos.event;
test("loads Thanos' event cards", () => {
	expect(deck.event.length).toBe(1);
});

ultron = require('../src/decks/ultron.js');
deck['ultron'] = ultron.deck;
test("loads Ultron's villain cards", () => {
	expect(deck.ultron.length).toBe(30);
});
deck['fate'] = ultron.fate;
test("loads Ultron's fate cards", () => {
	expect(deck.fate.length).toBe(10);
});
deck['event'] = ultron.event;
test("loads Ultron's event cards", () => {
	expect(deck.event.length).toBe(1);
});

hela = require('../src/decks/hela.js');
deck['hela'] = hela.deck;
test("loads Hela's villain cards", () => {
	expect(deck.hela.length).toBe(30);
});
deck['fate'] = hela.fate;
test("loads Hela's fate cards", () => {
	expect(deck.fate.length).toBe(10);
});
deck['event'] = hela.event;
test("loads Hela's event cards", () => {
	expect(deck.event.length).toBe(1);
});

taskmaster = require('../src/decks/taskmaster.js');
deck['taskmaster'] = taskmaster.deck;
test("loads Taskmaster's villain cards", () => {
	expect(deck.taskmaster.length).toBe(30);
});
deck['fate'] = taskmaster.fate;
test("loads Taskmaster's fate cards", () => {
	expect(deck.fate.length).toBe(10);
});
deck['event'] = taskmaster.event;
test("loads Taskmaster's event cards", () => {
	expect(deck.event.length).toBe(1);
});

killmonger = require('../src/decks/killmonger.js');
deck['killmonger'] = killmonger.deck;
test("loads Killmonger's villain cards", () => {
	expect(deck.killmonger.length).toBe(30);
});
deck['fate'] = killmonger.fate;
test("loads Killmonger's fate cards", () => {
	expect(deck.fate.length).toBe(10);
});
deck['event'] = killmonger.event;
test("loads Killmonger's event cards", () => {
	expect(deck.event.length).toBe(1);
});
