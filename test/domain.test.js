let domain = []
domain['thanos'] = require('../src/domains/thanos.js').domain
test("loads Thanos' domain", () => {
	expect(domain.thanos.length).toBe(5)
	expect(domain.thanos[0].name).toBe('Sanctuary II')
	expect(domain.thanos[1].name).toBe('Titan')
	expect(domain.thanos[2].name).toBe('The Infinity Well')
	expect(domain.thanos[3].name).toBe('Knowhere')
})
domain['ultron'] = require('../src/domains/ultron.js').domain
test("loads Ultron's domain", () => {
	expect(domain.ultron.length).toBe(5)
	expect(domain.ultron[0].name).toBe('Research Lab')
	expect(domain.ultron[1].name).toBe('Manufacturing Array')
	expect(domain.ultron[2].name).toBe('Reconfiguration Base')
	expect(domain.ultron[3].name).toBe('Stark Industries Industrial Complex')
})
domain['hela'] = require('../src/domains/hela.js').domain
test("loads Hela's domain", () => {
	expect(domain.hela.length).toBe(5)
	expect(domain.hela[0].name).toBe('Niflheim')
	expect(domain.hela[1].name).toBe('Hel')
	expect(domain.hela[2].name).toBe('Gjoll')
	expect(domain.hela[3].name).toBe("Odin's Vault")
})
domain['killmonger'] = require('../src/domains/killmonger.js').domain
test("loads Killmonger's domain", () => {
	expect(domain.killmonger.length).toBe(5)
	expect(domain.killmonger[0].name).toBe('Warrior Falls')
	expect(domain.killmonger[1].name).toBe('Institute of Technology')
	expect(domain.killmonger[2].name).toBe('The Great Mound')
	expect(domain.killmonger[3].name).toBe('The Golden City')
})
domain['taskmaster'] = require('../src/domains/taskmaster.js').domain
test("loads Taskmaster's domain", () => {
	expect(domain.taskmaster.length).toBe(5)
	expect(domain.taskmaster[0].name).toBe('Solomon Institute')
	expect(domain.taskmaster[1].name).toBe('Training Room')
	expect(domain.taskmaster[2].name).toBe('Armory')
	expect(domain.taskmaster[3].name).toBe('Camp Hammond')
})
