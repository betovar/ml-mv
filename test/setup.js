let game = require('../src/game.js')
let g = new game.Game(['thanos', 'ultron', 'hela', 'killmonger'],'inevitable')

test("Player power", () => {
	expect(g.player.thanos.power).toBe(0)
	expect(g.player.ultron.power).toBe(1)
	expect(g.player.hela.power).toBe(2)
	expect(g.player.killmonger.power).toBe(2)
})
test("Turn order", () => {
	expect(g.turn.order.length).toBe(4)
	expect(g.turn.order[0]).toBe('thanos')
	expect(g.turn.order[1]).toBe('ultron')
	expect(g.turn.order[2]).toBe('hela')
	expect(g.turn.order[3]).toBe('killmonger')
	expect(g.turn.count).toBe(0)
	expect(g.turn.action.length).toBe(0)
})
test("Player data", () => {
	expect(g.player.thanos.dom).toBe('thanos')
	expect(g.player.ultron.dom).toBe('ultron')
	expect(g.player.hela.dom).toBe('hela')
	expect(g.player.killmonger.dom).toBe('killmonger')
	expect(g.player.thanos.loc).toBe('')
	expect(g.player.ultron.loc).toBe('')
	expect(g.player.hela.loc).toBe('')
	expect(g.player.killmonger.loc).toBe('')
})
test("Player hands", () => {
	expect(g.player.thanos.hand.length).toBe(0)
	expect(g.player.ultron.hand.length).toBe(0)
	expect(g.player.hela.hand.length).toBe(0)
	expect(g.player.killmonger.hand.length).toBe(0)
})
test("Events", () => {
	if (g.event.mode == 'omnipotent') {
		expect(g.event.global.length).toBeUndefined()
	}
	if (g.event.mode == 'inevitable') {
		expect(g.event.global).toEqual({})
		expect(g.event.thanos).toEqual({})
		expect(g.event.ultron).toEqual({})
		expect(g.event.hela).toEqual({})
		expect(g.event.killmonger).toEqual({})
	}
	if (g.event.mode == 'undying') {
		expect(g.event.global).toEqual({})

	}
})
