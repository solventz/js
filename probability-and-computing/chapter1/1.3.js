// We shuffle a standard desk of cards, obtaining a permutation that is
// uniform over all 52! possible permutations. Find the probability of
// the following events.
// (a) The first two cards include at least one ace.
// (b) The first five cards include at least one ace.
// (c) The first two cards are a pair of the same rank.
// (d) The first five cards form a full house.
define([], function() {
  'use strict';
  var shuffle = function(a) {
    for (var i = 0; i < a.length - 1; i++) {
      var tmp = a[i];
      var k = Math.floor(Math.random() * (a.length - i)) + i;
      a[i] = a[k];
      a[k] = tmp;
    }
    return a;
  };
  var sampleSpaceSampler = function() {
    var cards = new Array(52);
    for (var i = 0; i < cards.length; i++) {
      cards[i] = i;
    }
    return shuffle(cards);
  };
  var predicateConvergenceVerifier = function(predicate) {
    return function(expectedProbability) {
      var positiveSamples = 0;
      var numCloseConsecutiveSamples = 0;
      var maxSamples = 1000000;
      for (var samples = 1; samples <= maxSamples; samples++) {
        var cards = sampleSpaceSampler();
        if (predicate(cards)) {
          positiveSamples += 1;
        }
        var observedProbability = positiveSamples / samples;
        var difference = Math.abs(observedProbability - expectedProbability);
        if (difference < 0.001 * expectedProbability) {
          numCloseConsecutiveSamples++;
        }
        if (numCloseConsecutiveSamples > 100) {
          return observedProbability;
        }
      }
      return positiveSamples / maxSamples;
    };
  };
  /*var predicateA = function(run) {
    return run[0] == 51 || run[1] == 51;
  };
  var predicateB = function(run) {
    for (var i = 0; i < 5; i++) {
      if (run[i] == 51) {
        return true;
      }
    }
    return false;
  };
  var predicateC = function(run) {
    return run[0] == run[1];
  };*/
  var predicateD = function(cards) {
    var firstCards = {};
    for (var i = 0; i < 5; i++) {
      firstCards[cards[i]] = firstCards[cards[i]] + 1 || 1;
      if (Object.keys(firstCards).length > 2) {
        return false;
      }
      if (firstCards[cards[i]] == 4) {
        return false;
      }
    }
    return true;
  };
  return {
    sampleSpaceSampler: sampleSpaceSampler,
    predicateConvergenceVerifier: predicateConvergenceVerifier,
    predicateD: predicateD
  };
});
