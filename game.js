let turn   = 0; 	// turn tracker
let player = {}; 	// player list
let deck   = {}; 	// fate and villain decks
let domain = {};	// villain domains
let event  = {};	// global and targeted events
let track  = [];	// available actions

//domain['thanos'] = require('./src/thanos/domain.js').domain;


// init(['thanos', 'ultron']);
// draw('thanos', 'thanos', 4);
// move('thanos', 'Sanctuary II');
// collect('thanos', 2);
// let test = player['thanos']['hand'][0];
// play('thanos', test, 'Titan');
// track.push('Relocate');
// relocate('thanos', 'Titan', test, 'Sanctuary II');
// discard('thanos', player['thanos']['hand'][0]);
// end_turn('thanos');

// ----------------------------------------