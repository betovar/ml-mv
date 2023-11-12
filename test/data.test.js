// let { url6, mongo } = require("../src/mongodb.js");

let TEST_GAMEID
let TEST_USERID
let TEST_GAME
let TEST_USER = {
    "username": "guest",
    "realname": {
        "first": "Alice",
        "last": "Wright"
    },
    "stats": {
        "wins": 0,
        "plays": 0
    },
    "location": {
        "city": "New York",
        "country": "NY"
    },
    "cakeday": "2022-11-11T00:00:00+00:00",
}

// let db = new mongo.init();
// beforeAll( async () => {
//     await db.connect();
//     await db.clear_db();
// });
// afterAll( async () => {
//     await db.disconnect();
// });

describe("database", () => {
     test.todo("ping database");
     //, async () => {
//         let result = await db.ping();
//         expect(result.ok).toBe(1);
//     });
//     test("create user", async () => {
//         let result = await db.create_user(TEST_USER);
//         expect(result.acknowledged).toBeTruthy();
//         TEST_USERID = result.insertedId
//     });
//     test("create game", async () => {
//         let result = await db.create_game(TEST_GAME);
//         expect(result.acknowledged).toBeTruthy();
//         TEST_GAMEID = result.insertedId
//     })
//     test("get game", async () => {
//         let result = await db.get_game(TEST_GAMEID);
//         expect(result._id).toEqual(TEST_GAMEID);
//     });
//     test("update game", async () => {
//         let result = await db.up(TEST_GAMEID, 
//             {$set: {"decks.fate":[0,1,2,3,4,5,6,7,8,9]}}
//         );
//         expect(result.acknowledged).toBeTruthy();
//         expect(result.modifiedCount).toBe(1);
//     });
});

describe("user", () => {
    test.todo("create user");
//     test("delete user", async () => {
//         let result = await db.del_user(TEST_USERID);
//         expect(result.acknowledged).toBeTruthy();
//         expect(result.deletedCount).toBe(1);
//     });
//     test("delete game", async () => {
//         let result = await db.del_game(TEST_GAMEID);
//         expect(result.acknowledged).toBeTruthy();
//         expect(result.deletedCount).toBe(1);
//     });
});