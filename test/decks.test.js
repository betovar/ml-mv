let thanos = require('../src/decks/thanos.js')
test("Thanos' villain cards", () => {
	expect(thanos.deck.length).toBe(30)
	expect(thanos.fate.length).toBe(10)
	expect(thanos.event.length).toBe(1)
})

let ultron = require('../src/decks/ultron.js')
test("Ultron's villain cards", () => {
	expect(ultron.deck.length).toBe(30)
	expect(ultron.fate.length).toBe(10)
	expect(ultron.event.length).toBe(1)
})

let hela = require('../src/decks/hela.js')
test("Hela's villain cards", () => {
	expect(hela.deck.length).toBe(30)
	expect(hela.fate.length).toBe(10)
	expect(hela.event.length).toBe(1)
})

let taskmaster = require('../src/decks/taskmaster.js')
test("Taskmaster's villain cards", () => {
	expect(taskmaster.deck.length).toBe(30)
	expect(taskmaster.fate.length).toBe(10)
	expect(taskmaster.event.length).toBe(1)
})

let killmonger = require('../src/decks/killmonger.js')
test("Killmonger's villain cards", () => {
	expect(killmonger.deck.length).toBe(30)
	expect(killmonger.fate.length).toBe(10)
	expect(killmonger.event.length).toBe(1)
})

let fate = require('../src/decks/fate.js')
test("Fate deck", () => {
	expect(fate.fate.length).toBe(11)
	expect(fate.event.length).toBe(4)
})