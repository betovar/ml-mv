let deck = [];
thanos = require('../src/decks/thanos.js');
ultron = require('../src/decks/ultron.js');

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

deck['ultron'] = ultron.deck;
test("loads Ultron' villain cards", () => {
	expect(deck.ultron.length).toBe(30);
});

deck['fate'] = ultron.fate;
test("loads Ultron' fate cards", () => {
	expect(deck.fate.length).toBe(10);
});

deck['event'] = ultron.event;
test("loads Ultron' event cards", () => {
	expect(deck.event.length).toBe(1);
});