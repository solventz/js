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
  var sampler = (function() {
    var cards = new Array(52);
    for (var i = 0; i < cards.length; i++) {
      cards[i] = i;
    }
    return function() {
      return shuffle(cards);
    };
  })();
  var rank = function(card) {
    return card % 13;
  };
  var predicateA = function(cards) {
    return rank(cards[0]) == 12 || rank(cards[1]) == 12;
  };
  var predicateB = function(cards) {
    for (var i = 0; i < 5; i++) {
      if (rank(cards[i]) == 12) {
        return true;
      }
    }
    return false;
  };
  var predicateC = function(cards) {
    return rank(cards[0]) == rank(cards[1]);
  };
  var predicateD = function(cards) {
    var rankCounts = {};
    for (var i = 0; i < 5; i++) {
      var cardRank = rank(cards[i]);
      rankCounts[cardRank] = rankCounts[cardRank] + 1 || 1;
      if (Object.keys(rankCounts).length > 2) {
        return false;
      }
      if (rankCounts[cardRank] == 4) {
        return false;
      }
    }
    return true;
  };
  return {
    sampler: sampler,
    predicateA: predicateA,
    predicateB: predicateB,
    predicateC: predicateC,
    predicateD: predicateD
  };
});
