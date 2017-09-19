const assert = require('assert');
const Cohort = require('./cohort');

describe('hasPathSum', function() {
  describe('base cases', function() {
    it('should return true for an existing value', function() {
			const c = new Cohort(new Set([1]));
      assert.equal(c.has(1), true);
    });
  });
});
