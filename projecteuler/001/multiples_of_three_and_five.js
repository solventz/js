define([], function() {
  'use strict';
  var bruteForce = function(n) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  };
  var linearSum = function(n) {
    n = n - 1;
    var sumFromOneToK = function(k) {
      return k * (k + 1) / 2;
    };
    return 3 * sumFromOneToK(Math.floor(n / 3) +
        5 * sumFromOneToK(Math.floor(n / 5)) -
        15 * sumFromOneToK(Math.floor(n / 15));
  };
  return {
    bruteForce: bruteForce,
    linearSum: linearSum
  };
});
