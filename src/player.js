let character = ['thanos', 'ultron', 'hela', 'killmonger', 'taskmaster'];

class Player {
	constructor(name) {
		if (!character.includes(name)) { return; }
		this.name = name;
		this.power = 0;
		if (this.name == 'loki') { this.mischief = 0; }
		this.domain 	= [];
		this.deck   	= [];
		this.event 		= [];
		this.specialty	= [];
		this.queue  	= [];
	}
}

module.exports = Player;