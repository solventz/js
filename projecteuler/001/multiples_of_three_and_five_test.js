define(['chai',
        'mocha',
        'projecteuler/001/multiples_of_three_and_five'],
       function(chai,
                unusedMocha,
                multiplesOfThreeAndFive) {
  'use strict';
  var expect = chai.expect;
  describe('multiplesOfThreeAndFive', function() {
    describe('bruteforce', function() {
      it('should solve small input', function() {
        expect(multiplesOfThreeAndFive.bruteforce(10)).to.equal(23); 
      });
    });
  });
});
