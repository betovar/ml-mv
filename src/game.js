// data schema
let baseline = {
    "who": {
        "list":  {},
        "hands": {},
        "power": {},
        "token": {},
    },
    "what": {
        "public": {},
        "deck": {},
        "discard": {},
    },
    "when": {
        "round": {},
        "turn": {},
        "phase": {},
        "queue": {},
        "active": {},
    },
    "where": {
        "domains": {},
        "events": {},
    },
    "how": {
        "players": "2",
        "events": "Omnipotent (Easy)",
        "villain": "Allow Duplicates",
        "seats": "Random",
        "power": "Automatic",
        "enforcement": "None",
        "timer": "5",
        "units": "minutes",
        "title": "Marvel Villainous",
        "privacy": "Public",
        "users'": [],
    }
}

class Game{
    constructor() {
    }
}

module.exports = {
    'game': Game
}