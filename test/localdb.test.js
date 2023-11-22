// LOCAL DATABASE UNIT TESTS

const { Database } = require("../src/localdb.js");
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
let TEST_GAME;
let db = new Database();

describe("database", () => {
   test("create a game", () => {
      const result = db.create_game(TEST_LOBBY);
      expect(result.gameid).toBe(TEST_LOBBY.gameid);
      expect(result.acknowledged).toBeTruthy();
   });
   test("shuffle deck", () => {
      const result = db.shuffle_deck(TEST_LOBBY.gameid, "thanos");
      expect(result.acknowledged).toBeTruthy();
   });
   test("read a game", () => {
      TEST_GAME = db.read_game(TEST_LOBBY.gameid);
      expect(TEST_GAME.gameid).toBe(TEST_LOBBY.gameid);
   });
   test("update a game", () => {
      TEST_GAME.gameid = "aabbcc";
      const result = db.update_game(TEST_GAME);
      expect(result.gameid).not.toBe(TEST_LOBBY.gameid);
      expect(result.acknowledged).toBeTruthy();
   });
   test("delete a game", () => {
      const result = db.delete_game(TEST_GAME.gameid);
      expect(result.gameid).toBe(TEST_GAME.gameid);
      expect(result.acknowledged).toBeTruthy();
   });

});