define(['bignumber'], function(BigNumber) {
  'use strict';
  BigNumber.config({
    DECIMAL_PLACES: 0,
    ROUNDING_MODE: BigNumber.ROUND_FLOOR
  });
  var bruteForce = function(n) {
    while (n.modulo(2).equals(0)) {
      n = n.dividedBy(2);
    }
    var largestPrimeFactor = 2;
    var sqrtn = n.squareRoot();
    for (var i = 3; sqrtn.greaterThanOrEqualTo(i); i += 2) {
      if (n.modulo(i).equals(0)) {
        do {
          n = n.dividedBy(i);
        } while (n.modulo(i).equals(0));
        largestPrimeFactor = i;
        sqrtn = n.squareRoot();
      }
    }
    if (n.equals(1)) {
      return largestPrimeFactor;
    }
    return n.toNumber();
  };
  return {
    bruteForce: bruteForce,
  };
});
