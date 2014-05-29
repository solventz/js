define(['chai',
        'mocha',
        'probability-and-computing/chapter1/1.3'],
       function(chai,
                unusedMocha,
                exercise) {
  'use strict';
  var expect = chai.expect;
  describe('probability-and-computing/chapter1/1.3', function() {
    var expectProbabilityConvergesTo = function(sampler, filter, p) {
      var positiveSamples = 0;
      var numCloseConsecutiveSamples = 0;
      var allowedError = 0.01;
      var maxSamples = 10000000;
      for (var numSamples = 1; numSamples <= maxSamples; numSamples++) {
        var sample = sampler();
        if (filter(sample)) {
          positiveSamples += 1; 
        }
        var observedProbability = positiveSamples / numSamples;
        var difference = Math.abs(observedProbability - p);
        if (difference < allowedError * p) {
          numCloseConsecutiveSamples += 1; 
        }
        if (numCloseConsecutiveSamples >= numSamples / 2) {
          expect(observedProbability).to.be.within(p - allowedError * p, p + allowedError * p);
          return;
        }
      }
      expect(positiveSamples / maxSamples).to.be.within(p - allowedError * p, p + allowedError * p);
    };
    describe('sampler', function() {
      it('generates a permutation of 0..51', function() {
        var cards = exercise.sampler(); 
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
        expect(exercise.predicateD([0, 13, 26, 1, 14])).to.equal(true);
        expect(exercise.predicateD([0, 13, 39, 1, 14])).to.equal(true);
        expect(exercise.predicateD([2, 13, 39, 1, 14])).to.equal(false);
      });
    });
    describe('expectProbabilityConvergesTo', function() {
      it('should converge to 1 / 2', function() {
        var firstCardIsEven = function(cards) {
          return cards[0] % 2 === 0;
        };
        expectProbabilityConvergesTo(exercise.sampler, firstCardIsEven, 1 / 2);
      });
    });
    it('answers a', function() {
      // (a) The first two cards include at least one ace.
      // It's easier to look at the compliment, that there are no
      // aces in the first two cards.
      // The number of ways 2 cards can be permuted from 48,
      // then vary the rest.
      // 1 - (((48 permute 2) * 50!) / 52!)
      // 1 - 48!50! / 46!52!
      // 1 - (48 * 47) / (52 * 51)
      expectProbabilityConvergesTo(exercise.sampler, exercise.predicateA, 1 - (48 * 47) / (52 * 51));
    });
    it('answers b', function() {
      // (b) The first five cards include at least one ace.
      // This is similar to (a) but with five cards instead of two.
      // 1 - (((48 permute 5) * 47!) / 52!)
      // 1 - 48!47! / 43!52!
      // 1 - (47 * 46 * 45 * 44) / (52 * 51 * 50 * 49)
      expectProbabilityConvergesTo(exercise.sampler, exercise.predicateB, 1 - (47 * 46 * 45 * 44) / (52 * 51 * 50 * 49));
    });
    it('answers c', function() {
      // (c) The first two cards are a pair of the same rank.
      // Choose a rank, permute two of that rank, vary the rest.
      // ((13 choose 1) * (4 permute 2) * 50! / 52!)
      // (13 * 4!/2! * 50!) / 52!
      // (13 * 12) / (52 * 51)
      expectProbabilityConvergesTo(exercise.sampler, exercise.predicateC, (13 * 12) / (52 * 51));
    });
    it('answers d', function() {
      // (d) The first five cards form a full house.
      // Choose two ranks. Choose three of one, two of the other.
      // Permute the 5 cards. Then permute the rest.
      // ((13 choose 2) * (4 choose 3) * (4 choose 2) * 5! * 47!) / 52!
      // 13*12/2 * 4 * 12 * 120 / 52*51*50*49*48
      expectProbabilityConvergesTo(exercise.sampler, exercise.predicateD, (13 * 6 * 4 * 12 * 120) / (52 * 51 * 50 * 49 * 48));
    });
  });
});
