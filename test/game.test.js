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
let game;

beforeAll(() => {
game = Game_Factory(TEST_LOBBY);
});

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
		expect(game.decks["thanos"]).toEqual(
			expect.arrayContaining([
				expect.objectContaining({"name": "Ebony Maw"})
			])
		);
	});
    test("load ultron villain deck", () => {
		expect(game.decks["ultron"]).toEqual(
			expect.arrayContaining([
				expect.objectContaining({"name": "Alkhema"})
			])
		);
	});
});
describe("misc player data", () => {
    test("load power", () => {
        expect(game.power["thanos"]).toBe(0);
        expect(game.power["ultron"]).toBe(1);
    });
    test("discard decks", () => {
        expect(game.discards["thanos"].length).toBe(0);
        expect(game.discards["ultron"].length).toBe(0);
    });
});
describe("domains", () => {
	test.todo("load Thanos domain");
   test("load thanos domain", () => {
		expect(game.domains["thanos"]).toEqual(
			expect.arrayContaining([
				expect.objectContaining({"name": "Knowhere"})
		]));
	});
   test("load ultron domain", () => {
		expect(game.domains["ultron"]).toEqual(
			expect.arrayContaining([
				expect.objectContaining({"name": "Stark Industries"})
		]));
	});
});