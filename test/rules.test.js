// RULES UNIT TESTS

const { Database } = require("../src/localdb.js");
const rules = require("../src/rules.js");
let TEST_GAME;
let db;
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

beforeAll(() => {
    db = new Database();
	const result = db.create(TEST_LOBBY);
	TEST_GAME = db.read(result.gameid);
 });
 
 afterAll(() => {
 });

describe("rules functions", () => {
	test("shuffle deck", () => {
	   let x = "";
	   for (let i in [0,1,2,3]) {
		  x = x.concat(TEST_GAME.decks.thanos[i].name);
	   }
	   const result = rules.shuffle({"gameid": TEST_LOBBY.gameid, "which": "decks.thanos"});
	   expect(result.acknowledged).toBeTruthy();
	   TEST_GAME = db.read(TEST_LOBBY.gameid);
	   let y = "";
	   for (let i in [0,1,2,3]) {
		  y = y.concat(TEST_GAME.decks.thanos[i].name);
	   }
	   expect(x).not.toEqual(y);
	});
	test("draw a card", () => {
	   const result = rules.draw({"gameid": TEST_GAME.gameid, "from": "decks.thanos", "to": "hands.thanos"});
	   expect(result.acknowledged).toBeTruthy();
	   expect(result.card).toMatchObject({"back": "thanos"});
	   TEST_GAME = db.read(TEST_GAME.gameid);
	   expect(TEST_GAME.decks.thanos.length).toEqual(29);
	   expect(TEST_GAME.hands.thanos.length).toEqual(1);
	});
	test("discard a card", () => {
	   const result = rules.discard({"gameid": TEST_GAME.gameid, "which": "hands.thanos", "index": 0});
	   expect(result.acknowledged).toBeTruthy();
	   expect(result.card).toMatchObject({"back": "thanos"});
	   TEST_GAME = db.read(TEST_GAME.gameid);
	   expect(TEST_GAME.hands.thanos.length).toEqual(0);
	   expect(TEST_GAME.discards.thanos.length).toEqual(1);
	});
	test("reshuffle deck", () => {
	   expect(TEST_GAME.decks.thanos.length).toEqual(29);
	   const result = rules.reshuffle({"gameid": TEST_GAME.gameid, "which": "discards.thanos"});
	   expect(result.acknowledged).toBeTruthy();
	   TEST_GAME = db.read(TEST_GAME.gameid);
	   expect(TEST_GAME.discards.thanos.length).toEqual(0);
	   expect(TEST_GAME.decks.thanos.length).toEqual(30);
	});
	 test("find a card by type", () => {
	   const result = rules.find({"gameid": TEST_GAME.gameid, "which": "decks.thanos", "type": "Ally"});
	   expect(result.acknowledged).toBeTruthy();
	   expect(result.card.type).toBe("Ally");
	   TEST_GAME = db.read(TEST_GAME.gameid);
	   expect(TEST_GAME.hands.thanos.length).toEqual(0);
	   expect(TEST_GAME.decks.thanos.length).toEqual(29);
	});
	test("find a card by name", () => {
	   const result = rules.find({"gameid": TEST_GAME.gameid, "which": "decks.thanos", "name": "Black Dwarf"});
	   expect(result.acknowledged).toBeTruthy();
	   expect(result.card.name).toBe("Black Dwarf");
	   TEST_GAME = db.read(TEST_GAME.gameid);
	   expect(TEST_GAME.hands.thanos.length).toEqual(0);
	   expect(TEST_GAME.decks.thanos.length).toEqual(28);
	});
	 test.todo("look for a card");
	 test.todo("reveal a card");
 });

describe("game operations", () => {
	test.todo("move a villian");
	test.todo("gain power");
	test.todo("draw a villian card");
    test.todo("play an item card");
    test.todo("play an ally card");
    test.todo("play an effect card");
    test.todo("play a specialty card");
    test.todo("play a multiverse card");
    test.todo("play a variant card");
    test.todo("draw a fate card");
    test.todo("play a fate card");
	test.todo("discard cards");
	test.todo("perform a vanquish action");
	test.todo("relocate a card");
	test.todo("defeat a card");
	test.todo("remove a card");
	test.todo("activate an ability");
	test.todo("end a player's turn");
});