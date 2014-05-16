// We roll two standard six-sided dice. Find the probability of the following
// events, assuming that the outcomes of the rolls are independent:
// (a) The two dice show the same number.
// (b) The number that appears on the first die is larger than the number on the
//     second.
// (c) The sum of the dice is even.
// (d) The product of the dice is a perfect square.
define([], function() {
  'use strict';
  var dieRollsOfLength = function(n) {
    if (n === 0) {
      return [[]];
    }
    var dieRolls = [];
    var shorterRolls = dieRollsOfLength(n - 1);
    for (var i = 0; i < shorterRolls.length; i++) {
      for (var j = 1; j <= 6; j++) {
        var rolls = shorterRolls[i].slice(0);
        rolls.push(j);
        dieRolls.push(rolls);
      }
    }
    return dieRolls;
  };
  var sampleSpace = dieRollsOfLength(2);
  var predicateA = function(run) {
    return run[0] === run[1];
  };
  var predicateB = function(run) {
    return run[0] > run[1];
  };
  var predicateC = function(run) {
    return (run[0] + run[1]) % 2 === 0;
  };
  var isPerfectSquare = function(n) {
    var sqrtFloor = Math.floor(Math.sqrt(n));
    return sqrtFloor * sqrtFloor == n;
  };
  var predicateD = function(run) {
    return isPerfectSquare(run[0] * run[1]);
  };
  var probabilityFunction = function(events) {
    return events.length / sampleSpace.length;
  };
  return {
    sampleSpace: sampleSpace,
    a: probabilityFunction(sampleSpace.filter(predicateA)),
    b: probabilityFunction(sampleSpace.filter(predicateB)),
    c: probabilityFunction(sampleSpace.filter(predicateC)),
    d: probabilityFunction(sampleSpace.filter(predicateD))
  };
});
