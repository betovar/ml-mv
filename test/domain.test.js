let domain = [];
domain['thanos'] = require('../src/thanos/domain.js').domain;

test("loads names and abilities to Thanos' domain", () => {
	expect(domain.thanos.length).toBe(4);
});