// GAME UNIT TESTS

const { Game_Factory } = require("../src/game.js");

const TEST_LOBBY = {
    "gameid": "abcxyz",
    "settings": {
        "events": "easy",
        "duplicates": "allow",
        "seats": "random",
        "power": "auto",
        "enforcement": "none",
        "timer": "5",
        "units": "minutes",
        "visibility": "public",
    },
    "players": [
        {"villain": "thanos", "userid": "testuser1", "seat": 0},
        {"villain": "ultron", "userid": "testuser2", "seat": 1},
    ],
};

let game = Game_Factory(TEST_LOBBY);
const P1 = game.players[0].villain;
const P2 = game.players[1].villain;

describe("fate deck", () => {
	test("load common fate cards", () => {
		expect(game.decks.fate).toEqual(
			expect.arrayContaining([
                expect.objectContaining({"name": "Iron Man"})
		]));
    });
	test("load common event cards", () => {
		expect(game.decks.fate).toHaveLength(11+11+11);
	});
// 	test("is shuffled", () => {
// 		const temp0 = deck.fate[0];
// 		const temp3 = deck.fate[3];
// 		const temp9 = deck.fate[9];
// 		deck.shuffle(deck.fate);
// 		expect(deck.fate[0]).not.toBe(temp0);
// 		expect(deck.fate[3]).not.toBe(temp3);
// 		expect(deck.fate[9]).not.toBe(temp9);
// 	});
});
describe("villain decks", () => {
	test("load thanos fate cards", () => {
		expect(game.decks.fate).toEqual(
			expect.arrayContaining([
				expect.objectContaining({"name": "A Stone is Found"})
		]));
	});
    test("load ultron fate cards", () => {
		expect(game.decks.fate).toEqual(
			expect.arrayContaining([
				expect.objectContaining({"name": "Molecular Rearranger"})
		]));
	});
	test("load thanos event cards", () => {
		expect(game.decks.fate).toEqual(
			expect.arrayContaining([
				expect.objectContaining({"name": "Sacrifices Must Be Made"})
			])
		);
	});
    test("load ultron event cards", () => {
		expect(game.decks.fate).toEqual(
			expect.arrayContaining([
				expect.objectContaining({"name": "Invasion of Stark Enterprises"})
			])
		);
	});
	test("load thanos villain deck", () => {
		expect(game.decks[P1]).toEqual(
			expect.arrayContaining([
				expect.objectContaining({"name": "Ebony Maw"})
			])
		);
	});
    test("load ultron villain deck", () => {
		expect(game.decks[P2]).toEqual(
			expect.arrayContaining([
				expect.objectContaining({"name": "Alkhema"})
			])
		);
	});
});
describe("misc player data", () => {
    test("load power", () => {
        expect(game.power[P1]).toBe(0);
        expect(game.power[P2]).toBe(1);
    });
    test("discard decks", () => {
        expect(game.discards[P1].length).toBe(0);
        expect(game.discards[P2].length).toBe(0);
    });
});