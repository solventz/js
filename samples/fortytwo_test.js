define(['chai', 'mocha', 'samples/fortytwo'], function(chai, mocha, fortytwo) {
  'use strict';
  var expect = chai.expect;
  describe('fortytwo', function() {
    it('should return fortytwo', function() {
      expect(fortytwo.fortytwo()).to.equal(42);
    });
  });
});
