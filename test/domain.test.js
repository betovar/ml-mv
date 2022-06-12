let domain = [];
domain['thanos'] = require('../src/domains/thanos.js').domain;
domain['ultron'] = require('../src/domains/ultron.js').domain;
//domain['hela'] = require('../src/domains/hela.js').domain;
//domain['killmonger'] = require('../src/domains/killmonger.js').domain;
//domain['taskmaster'] = require('../src/domains/taskmaster.js').domain;


test("loads Thanos' domain", () => {
	expect(domain.thanos.length).toBe(5);
});
test("loads Ultron's domain", () => {
	expect(domain.ultron.length).toBe(5);
});