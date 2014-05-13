// We flip a fair coin ten times. Find the probability of the following events.
// (a) The number of heads and the number of tails are equal.
// (b) There are more heads than tails.
// (c) The ith flip and the (11 - i)th flip are the same for i = 1, ..., 5
// (d) We flip at least four consecutive heads.
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
  var predicateA = function(run) {
    var numHeads = 0;
    var numTails = 0;
    for (var i = 0; i < run.length; i++) {
      if (run[i] == 'H') {
        numHeads += 1;
      } else if (run[i] == 'T') {
        numTails += 1;
      }
    }
    return numHeads == numTails;
  };
  var predicateB = function(run) {
    var numHeads = 0;
    var numTails = 0;
    for (var i = 0; i < run.length; i++) {
      if (run[i] == 'H') {
        numHeads += 1;
      } else if (run[i] == 'T') {
        numTails += 1;
      }
    }
    return numHeads > numTails;
  };
  var predicateC = function(run) {
    for (var i = 0; i < run.length; i++) {
      if (run[i] != run[run.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  var predicateD = function(run) {
    var consecutiveHeads = 0;
    for (var i = 0; i < run.length; i++) {
      if (run[i] == 'H') {
        consecutiveHeads += 1;
        if (consecutiveHeads == 4) {
          return true;
        }
      } else {
        consecutiveHeads = 0;
      }
    }
    return false;
  };
  var probabilityFunction = function(events) {
    return events.length / Math.pow(2, 10);
  };
  return {
    sampleSpace: sampleSpace,
     a: probabilityFunction(sampleSpace.filter(predicateA)),
     b: probabilityFunction(sampleSpace.filter(predicateB)),
     c: probabilityFunction(sampleSpace.filter(predicateC)),
     d: probabilityFunction(sampleSpace.filter(predicateD))
  };
});
