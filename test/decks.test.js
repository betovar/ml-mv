const fate_deck = require("../src/decks");

describe("fate deck", () => {
	test.todo("is shuffled");
	test.todo("add villian fates to deck");
	test.todo("add events to deck");
	test("loaded all cards", () => {
		expect(fate_deck).toHaveLength(11);
	});
	test("has iron man", () => {
		expect(fate_deck).toEqual(
			expect.arrayContaining([
				expect.objectContaining({"name": "Iron Man"})
			])
		);
	});
	test("has at least one hero", () => {
		expect(fate_deck).toEqual(
			expect.arrayContaining([
				expect.objectContaining({"type": "hero"})
			])
		);
	});
	test("no cards have a strength of zero", () => {
		expect(fate_deck).not.toEqual(
			expect.arrayContaining([
				expect.objectContaining({"strength": 0})
			])
		);
	});
});
describe("deck functions", () => {
	test.todo("draw a card");
	test.todo("discard pile");
	test.todo("find a card");
	test.todo("reveal a card");
	test.todo("look for a card");
});