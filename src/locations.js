class Location {
	constructor(name) {
		this.name = name;
		this.hero = []; // card stack for heroes
		this.ally = []; // card stack for allies
		this.abil = []; // always available abilities
		this.bloc = []; // potentially blocked abilities
		return this;
	}
	isBlocked() {
		if (this.hero.length != 0) { return true; }
		else { return false; }
	}
	addAbility(what, which='abil') {
		if (which == 'bloc') { this.bloc.push(what); }
		if (which == 'abil') { this.abil.push(what); }
		return this;
	}
	delAbility(what, which='abil') {
		if (which == 'bloc') { this.bloc.splice(this.bloc.indexOf(what),1); }
		if (which == 'abil') { this.abil.splice(this.abil.indexOf(what),1); }
		return this;
	}
	abilities() {
		if (this.hero.length != 0) { return this.abil; }
		else { return concat(this.abil, this.bloc); }
	}
}

module.exports = Location;