define([], function() {
  'use strict';
  var bruteForce = function(n) {
    var largestPrimeFactor = 2;
    for (var i = 2; i < n; i++) {
      if (n.modulo(i).equals(0)) {
        largestPrimeFactor = i;
        n = n.dividedBy(i);
      }
    }
    return i;
  };
  return {
    bruteForce: bruteForce,
  };
});
