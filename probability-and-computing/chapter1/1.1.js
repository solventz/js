/*
 * We flip a fair coin ten times. Find the probability of the following events.
 * (a) The number of heads and the number of tails are equal.
 * (b) There are more heads than tails.
 * (c) The ith flip and the (11 - i)th flip are the same for i = 1, ..., 5
 * (d) We flip at least four consecutive heads.
 */
define([], function() {
  'use strict';
  var coinTossesOfLength = function(n) {
    if (n === 1) {
      return ['H', 'T'];
    }
    var coinTosses = [];
    var shorterRuns = coinTossesOfLength(n - 1);
    for (var i = 0; i < shorterRuns.length; i++) {
      var run = shorterRuns[i];
      coinTosses.push('H' + run);
      coinTosses.push('T' + run);
    }
    return coinTosses;
  };
  var sampleSpace = coinTossesOfLength(10);
  return {
    sampleSpace: sampleSpace
  };
});
