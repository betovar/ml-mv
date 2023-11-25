// LOCAL DATABASE UNIT TESTS

const { Database } = require("../src/localdb.js");
let db;
let TEST_GAME;
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
});

afterAll(() => {
});

describe("database basics", () => {
   test("create a game", () => {
      const result = db.create_game(TEST_LOBBY);
      expect(result.acknowledged).toBeTruthy();
      expect(result.gameid).toEqual(TEST_LOBBY.gameid);
   });
   test("read a game", () => {
      TEST_GAME = db.read_game(TEST_LOBBY.gameid);
      expect(TEST_GAME.gameid).toEqual(TEST_LOBBY.gameid);
   });
   test("update a game", () => {
      TEST_GAME.gameid = "aabbcc";
      const result = db.update_game(TEST_GAME);
      expect(result.acknowledged).toBeTruthy();
      expect(result.gameid).not.toEqual(TEST_LOBBY.gameid);
   });
   test("delete a game", () => {
      const result = db.delete_game(TEST_GAME.gameid);
      expect(result.acknowledged).toBeTruthy();
      expect(result.gameid).toEqual(TEST_GAME.gameid);
   });
});

describe("database common operations", () => {
   test("shuffle deck", () => {
      let result = db.create_game(TEST_LOBBY);
      let x = "";
      for (let i in [0,1,2,3]) {
         x = x.concat(TEST_GAME.decks.thanos[i].name);
      }
      result = db.shuffle({"gameid": TEST_LOBBY.gameid, "which": "decks.thanos"});
      expect(result.acknowledged).toBeTruthy();
      TEST_GAME = db.read_game(TEST_LOBBY.gameid);
      let y = "";
      for (let i in [0,1,2,3]) {
         y = y.concat(TEST_GAME.decks.thanos[i].name);
      }
      expect(x).not.toEqual(y);
   });
   test("draw a card", () => {
      const result = db.draw({"gameid": TEST_GAME.gameid, "from": "decks.thanos", "to": "hands.thanos"});
      expect(result.acknowledged).toBeTruthy();
      expect(result.card).toMatchObject({"back": "thanos"});
      TEST_GAME = db.read_game(TEST_GAME.gameid);
      expect(TEST_GAME.decks.thanos.length).toEqual(29);
      expect(TEST_GAME.hands.thanos.length).toEqual(1);
   });
   test("discard a card", () => {
      const result = db.discard({"gameid": TEST_GAME.gameid, "which": "hands.thanos", "index": 0});
      expect(result.acknowledged).toBeTruthy();
      expect(result.card).toMatchObject({"back": "thanos"});
      TEST_GAME = db.read_game(TEST_GAME.gameid);
      expect(TEST_GAME.hands.thanos.length).toEqual(0);
      expect(TEST_GAME.discards.thanos.length).toEqual(1);
   });
   test("reshuffle deck", () => {
      expect(TEST_GAME.decks.thanos.length).toEqual(29);
      const result = db.reshuffle({"gameid": TEST_GAME.gameid, "which": "discards.thanos"});
      expect(result.acknowledged).toBeTruthy();
      TEST_GAME = db.read_game(TEST_GAME.gameid);
      expect(TEST_GAME.discards.thanos.length).toEqual(0);
      expect(TEST_GAME.decks.thanos.length).toEqual(30);
   });
	test("find a card by type", () => {
      const result = db.find({"gameid": TEST_GAME.gameid, "which": "decks.thanos", "type": "Ally"});
      expect(result.acknowledged).toBeTruthy();
      expect(result.card.type).toBe("Ally");
      TEST_GAME = db.read_game(TEST_GAME.gameid);
      expect(TEST_GAME.hands.thanos.length).toEqual(0);
      expect(TEST_GAME.decks.thanos.length).toEqual(29);
   });
   test("find a card by name", () => {
      const result = db.find({"gameid": TEST_GAME.gameid, "which": "decks.thanos", "name": "Black Dwarf"});
      expect(result.acknowledged).toBeTruthy();
      expect(result.card.name).toBe("Black Dwarf");
      TEST_GAME = db.read_game(TEST_GAME.gameid);
      expect(TEST_GAME.hands.thanos.length).toEqual(0);
      expect(TEST_GAME.decks.thanos.length).toEqual(28);
   });
	test.todo("look for a card");
	test.todo("reveal a card");
});