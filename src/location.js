function location(name, a=[], b=[]) {
	this.name 	= name	// location display name
	this.top 	= [] 	// card stack for heroes
	this.bottom = []	// card stack for allies
	this.always = a		// always available abilities
	this.block 	= b		// potentially blocked abilities
	return this
}

// function addAbility(what, which='abil') {
// 	if (which == 'block') { this.block.push(what) }
// 	if (which == 'abil') { this.abil.push(what) }
// 	return this
// }
// function delAbility(what, which='abil') {
// 	if (which == 'block') { this.block.splice(this.block.indexOf(what),1) }
// 	if (which == 'abil') { this.abil.splice(this.abil.indexOf(what),1) }
// 	return this
// }
// function abilities() {
// 	if (this.hero.length != 0) { return this.abil }
// 	else { return concat(this.abil, this.block) }
// }

module.exports = location