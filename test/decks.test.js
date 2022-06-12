let deck = [];
thanos = require('../src/decks/thanos.js');

deck['thanos'] = thanos.deck;
test("loads Thanos' villain cards", () => {
	expect(deck.thanos.length).toBe(30);
});

deck['fate'] = thanos.fate;
test("loads Thanos' fate cards", () => {
	expect(deck.fate.length).toBe(6);
});

deck['event'] = thanos.event;
test("loads Thanos' event cards", () => {
	expect(deck.event.length).toBe(1);
});