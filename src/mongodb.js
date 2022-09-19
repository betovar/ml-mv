let _singleton = null
const uri = 'mongodb://127.0.0.1:27017'
//'mongodb://localhost:27017'
const DB_NAME = process.env.DB_NAME || "villainous"
const CL_GAME = process.env.CL_GAME || "games_v1"
const CL_LOBBY = process.env.CL_LOBBY || "lobby_v1"
const CL_USER = process.env.CL_USER || "users_v1"
const { MongoClient } = require('mongodb')

class MongoDB {
	constructor() {
		if (!_singleton) {
			this.client = new MongoClient(uri)
			_singleton = this
		}	
		return _singleton
	}
	async connect() {
		try {
			await this.client.connect()
		} catch (e) {
			console.log(e)
		}
	}
	async disconnect() {
		try {
			await this.client.close()
		} catch (e) {
			console.log(e)
		} finally {
			_singleton = null
		}
	}
	async ping() {
		let result = await this.client.db(DB_NAME).command({ ping: 1 })
		return result
	}
	async test_ready() {
		await this.client.db(DB_NAME).collection(CL_LOBBY).deleteMany({})
		await this.client.db(DB_NAME).collection(CL_GAME).deleteMany({})
		await this.client.db(DB_NAME).collection(CL_USER).deleteMany({})
	}
	async create_lobby(options={}) {
		let result = await this.client.db(DB_NAME).collection(CL_LOBBY).insertOne(options)
    	return result
	}
	async get_lobby(query={}) {
		query['privacy'] = "Public"
		let options = {'projection': {'_id':1, 'privacy':0, 'password':0, 'submit':0}}
		const cursor = await this.client.db(DB_NAME).collection(CL_LOBBY).find(query, options)
    	return cursor.toArray()
	}
	async del_lobby(gameid=0) {
		let result = await this.client.db(DB_NAME).collection(CL_LOBBY).deleteOne({'_id': gameid})
		return result
	}
	async join_lobby(gameid=0, userid=0) {
		// check if user exists
		if (userid == 0) { return 0 }
		let useres = await this.client.db(DB_NAME).collection(CL_USER).findOne({'_id': userid})
		// check lobby data
		if (gameid == 0) { return 0 }
		let lobres = await this.client.db(DB_NAME).collection(CL_LOBBY).findOne({'_id': gameid})
		if (lobres.users[0] == userid) { return 0 }
		if (lobres.users.length == lobres.seats) { return 0 }
		// add user to lobby
		let result = await this.client.db(DB_NAME).collection(CL_LOBBY).updateOne({'_id': gameid}, {$push: {'users': userid}})
		return result
	}
	async create_game(game={}) {
		let result = await this.client.db(DB_NAME).collection(CL_GAME).insertOne(game)
    	return result
	}
	async get_game(gameid=0) {
		let result = await this.client.db(DB_NAME).collection(CL_GAME).findOne({'_id': gameid})
		return result
	}
	async list_games(query={}) {
		const cursor = await this.client.db(DB_NAME).collection(CL_GAME).find(query, {'_id':1})
    	return cursor.toArray()
	}
	async del_game(gameid=0) {
		let result = await this.client.db(DB_NAME).collection(CL_GAME).deleteOne({'_id': gameid})
		return result
	}
	async up(gameid=0, update={}) {
		if (update === {}) { return 0 }
		let result = await this.client.db(DB_NAME).collection(CL_GAME).updateOne({'_id': gameid}, update)
		return result
	}
	async create_user(user={}) {
		let result = await this.client.db(DB_NAME).collection(CL_USER).insertOne(user)
		return result
	}
	async get_user(userid=0) {
		let result = await this.client.db(DB_NAME).collection(CL_USER).findOne({'_id':userid})
		return result
	}
	async del_user(userid=0) {
		let result = await this.client.db(DB_NAME).collection(CL_USER).deleteOne({'_id': userid})
		return result
	}
}

module.exports = {
	'init': MongoDB
}