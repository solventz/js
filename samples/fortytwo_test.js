define(['node_modules/chai/chai', 'samples/fortytwo'], function(chai, fortytwo) {
  'use strict';
  var expect = chai.expect;
  describe('fortytwo', function() {
    it('should return fortytwo', function() {
      expect(fortytwo.fortytwo()).to.equal(42);
    });
  });
});
