define(['chai',
        'mocha',
        'probability-and-computing/chapter1/1.3'],
       function(chai,
                unusedMocha,
                exercise) {
  'use strict';
  var expect = chai.expect;
  describe('probability-and-computing/chapter1/1.3', function() {
    describe('sampleSpaceSampler', function() {
      it('generates a permutation of 0..51', function() {
        var cards = exercise.sampleSpaceSampler(); 
        expect(cards.length).to.equal(52);
        var seenCards = {};
        for (var i = 0; i < cards.length; i++) {
          seenCards[i] = true;
        }
        expect(Object.keys(seenCards).length).to.equal(52);
      });
    });
    describe('predicateD', function() {
      it('should return true for full houses', function() {
        expect(exercise.predicateD([0, 0, 0, 1, 1])).to.equal(true);
        expect(exercise.predicateD([0, 0, 0, 0, 1])).to.equal(false);
        expect(exercise.predicateD([0, 1, 0, 0, 1])).to.equal(true);
      });
    });
    describe('predicateConvergenceVerifier', function() {
      var expectProbabilityConvergesTo = function(verifier, p) {
        expect(verifier(p)).to.be.within(p - 0.01 * p, p + 0.01 * p);
      };
      it('should converge to 0.5', function() {
        var firstCardIsEven = function(cards) {
          return cards[0] % 2 === 0;
        };
        var firstCardIsEvenVerifier = exercise.predicateConvergenceVerifier(firstCardIsEven);
        expectProbabilityConvergesTo(firstCardIsEvenVerifier, 1 / 2);
      });
      it('should converge to 1 / 52', function() {
        var firstCardIsAce = function(cards) {
          return cards[0] == 51;
        };
        var firstCardIsAceVerifier = exercise.predicateConvergenceVerifier(firstCardIsAce);
        expectProbabilityConvergesTo(firstCardIsAceVerifier, 1 / 52);
      });
    });
    it('answers a', function() {
      // (a) The first two cards include at least one ace.
 //     var answer = 0.42;
//      expect(execrise.a(answer)).to.equal(answer);
    });
  });
});
