define([], function() {
  'use strict';
  var bruteForce = function(n) {
    var a = 1;
    var b = 2;
    var sum = 0;
    do {
      if (b % 2 === 0) {
        sum += b;
      }
      var tmp = b;
      b = a + b;
      a = tmp;
    } while (b < n);
    return sum;
  };
  return {
    bruteForce: bruteForce,
  };
});
