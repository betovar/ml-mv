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
      const result = db.create(TEST_LOBBY);
      expect(result.acknowledged).toBeTruthy();
      expect(result.gameid).toEqual(TEST_LOBBY.gameid);
   });
   test("read a game", () => {
      TEST_GAME = db.read(TEST_LOBBY.gameid);
      expect(TEST_GAME.gameid).toEqual(TEST_LOBBY.gameid);
   });
   test("update a game", () => {
      TEST_GAME.gameid = "aabbcc";
      const result = db.update(TEST_GAME);
      expect(result.acknowledged).toBeTruthy();
      expect(result.gameid).not.toEqual(TEST_LOBBY.gameid);
   });
   test("delete a game", () => {
      const result = db.delete(TEST_GAME.gameid);
      expect(result.acknowledged).toBeTruthy();
      expect(result.gameid).toEqual(TEST_GAME.gameid);
   });
});