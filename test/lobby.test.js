// let mongo = require('../src/mongodb.js')
//let db = new mongo.init()

let TEST_LOBBYID
let TEST_USERID
let TEST_LOBBY = {
    "players": "2",
    "events": "Omnipotent (Easy)",
    "villain": "Allow Duplicates",
    "seats": "Random",
    "power": "Automatic",
    "enforcement": "None",
    "timer": "5",
    "units": "minutes",
    'title': "Marvel Villainous",
    "privacy": "Public",
    'users': []
}

// beforeAll( async () => {
//     await db.connect();
//     await db.clear_db();
// });
// afterAll( async () => {
//     await db.disconnect();
// });

describe("lobby backend", () => {
    test.todo("create lobby");
//async () => {
//         let result = await db.create_lobby(TEST_LOBBY);
//         expect(result.acknowledged).toBeTruthy();
//         TEST_LOBBYID = result.insertedId;
// });
//     test('get lobby', async () => {
//         let result = await db.get_lobby({});
//         expect(result).toEqual(expect.arrayContaining([
//             expect.objectContaining({'_id': TEST_LOBBYID})
//         ]));
//     });
//     test('join lobby', async () => {
//         TEST_USERID = 1001;
//         let result = await db.join_lobby(TEST_LOBBYID, TEST_USERID);
//         expect(result).not.toBe(0);
//         expect(result.acknowledged).toBeTruthy();
//         expect(result.modifiedCount).toBe(1);
//     });
//     test('leave lobby', async () => {
//         let result = await db.leave_lobby(TEST_LOBBYID, TEST_USERID);
//         expect(result).not.toBe(0);
//         expect(result.acknowledged).toBeTruthy();
//         expect(result.modifiedCount).toBe(1);
//     });
//     test('delete lobby', async () => {
//         let result = await db.del_lobby(TEST_LOBBYID);
//         expect(result.acknowledged).toBeTruthy();
//         expect(result.deletedCount).toBe(1);
//     });
});