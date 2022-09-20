let mongo = require('../src/mongodb.js')
let db = new mongo.init()
let TEST_GAMEID = Math.random().toString(36).substr(2,6)
let TEST_USERID = Math.floor(Math.random() * 1000)

beforeAll( async () => {
    await db.connect()
    await db.test_ready()
})

test('ping database', async () => {
    let result = await db.ping()
    expect(result.ok).toBe(1)
})

test('create user', async () => {
    let result = await db.create_user(TEST_USER)
    expect(result.acknowledged).toBeTruthy()
    TEST_USERID = result.insertedId
})

test('create game', async () => {
    let result = await db.create_game(TEST_GAME)
    expect(result.acknowledged).toBeTruthy()
    TEST_GAMEID = result.insertedId
})

test('get game', async () => {
    let result = await db.get_game(TEST_GAMEID)
    expect(result._id).toEqual(TEST_GAMEID)
})

test('update game', async () => {
    let result = await db.up(TEST_GAMEID, {$set: {'decks.fate':[0,1,2,3,4,5,6,7,8,9]}})
    expect(result.acknowledged).toBeTruthy()
    expect(result.modifiedCount).toBe(1)
})

test('delete user', async () => {
    let result = await db.del_user(TEST_USERID)
    expect(result.acknowledged).toBeTruthy()
    expect(result.deletedCount).toBe(1)
})

test('delete game', async () => {
    let result = await db.del_game(TEST_GAMEID)
    expect(result.acknowledged).toBeTruthy()
    expect(result.deletedCount).toBe(1)
})

afterAll( async () => {
    await db.disconnect()
})

const TEST_USER = {
    'username': "guest",
    'name': {
        'first': "Alice",
        'last': "Wright"
    },
    'stats': {
        'wins': 0,
        'total': 0
    },
    'birthday': "1970-01-01T00:00:00+00:00",
    'gender': "F",
    'location': {
        'city': "New York",
        'country': "NY"
    }
}

const TEST_GAME = {
    'turn': {
        'order': [],
        'index': 0,
        'count': 0
    },
    'decks': {
        'fate': [],
        'thanos': [],
        'ultron': []
    },
    'hands': {
        'queue': [],
        'thanos': [],
        'ultron': []
    },
    'domains': {
        'thanos': [],
        'ultron': []
    },
    'events': {
        'global': [],
        'thanos': [],
        'ultron': []
    }
}