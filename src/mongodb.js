let _single = null
const uri = 'mongodb://localhost:27017'
const DB_NAME = process.env.DB_NAME || "villainous"
const CL_GAME = process.env.CL_GAME || "games_v1"
const CL_USER = process.env.CL_USER || "users_v1"
const { MongoClient } = require('mongodb')

class MongoDB {
	constructor() {
		if (!_single) {
			//this.x = 1000
			this.client = new MongoClient(uri)
			_single = this
		}	
		return _single
	}
	async connect() {
	    await this.client.connect()
	}
	async disconnect() {
		try {
			await this.client.close()
		} finally {
			_single = null
		}
	}
	async ping() {
		let result = await this.client.db(DB_NAME).command({ ping: 1 })
		return result
	}
	async new_game(gameid=0,players=[]) {
		let d = g
		if (gameid == 0) {
			d.setup.url = Math.random().toString(36).substr(2,6)
		} else {
			d.setup.url = gameid
		}
		let result = await this.client.db(DB_NAME).collection(CL_GAME).insertOne(d)
    	return result
	}
	async get_game(gameid=0) {
		let result = await this.client.db(DB_NAME).collection(CL_GAME).findOne({'setup.url':gameid})
		return result
	}
	async del_game(gameid=0) {
		let result = await this.client.db(DB_NAME).collection(CL_GAME).findOneAndDelete({'setup.url':gameid})
		return result
	}
	async up(gameid=0, set={}) {
		if (set === {}) {
			return 0
		} else {
			let result = await this.client.db(DB_NAME).collection(CL_GAME).updateOne({'setup.url': gameid},set)
			return result
		}
	}
	async new_user(userid=0) {
		//let result = await this.client.db(DB_NAME).collection(CL_GAME).findOne({'_id':userid})
	}
	async get_user(userid=0) {
		let result = await this.client.db(DB_NAME).collection(CL_USER).findOne()
	}
	async list_games(match={}) {
		let result = await this.client.db(DB_NAME).collection(CL_GAME).find(match, {'setup.url': 1})
		return result
	}
}

const g = {
	'setup': {
		'title': "Marvel Villainous",
		'users': [],
		'url': "",
		'seats': 2
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
	},
	'turns': {
		'order': [],
		'index': 0,
		'count': 0
	}
}

module.exports = {
	'init': MongoDB
}