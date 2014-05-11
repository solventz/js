define(['chai',
        'mocha',
        'probability-and-computing/chapter1/1.1.js'],
       function(chai,
                unusedMocha,
                exercise) {
  'use strict';
  var expect = chai.expect;
  describe('exercise', function() {
    describe('sampleSpace', function() {
      it('has the expected size', function() {
        expect(exercise.sampleSpace.length).to.equal(1024);
      });
    });
  });
});
