let mongo = require('../src/mongodb.js')
let db = new mongo.init()
//jest.setTimeout(10000)
const TEST_GAME = 'abcdef'

beforeAll( async () => {
    await db.connect()
});

test('ping database', async () => { 
    let result = await db.ping()
    expect(result.ok).toBe(1)
});

test('add test game', async () => { 
    let result = await db.new_game(TEST_GAME)
    expect(result.acknowledged).toBeTruthy()
});

test('get test game', async () => { 
    let result = await db.get_game(TEST_GAME)
    expect(result.setup.url).toEqual(TEST_GAME)
});

test('update test game data', async () => { 
    let result = await db.up(TEST_GAME, {$set: {'decks.fate':[0,1,2,3,4,5,6,7,8,9]}})
    expect(result.acknowledged).toBeTruthy()
    expect(result.modifiedCount).toBe(1)
});

// test('list all games', async () => { 
//     let result = await db.list_games()
//     expect(result).toContain(TEST_GAME)
// });

test('remove test game', async () => { 
    let result = await db.del_game(TEST_GAME)
    expect(result.ok).toBe(1)
});

afterAll( async () => {
    await db.disconnect()
});