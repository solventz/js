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
  var everyThird = function(n) {
    var a = 1;
    var b = 2;
    var sum = 0;
    do {
      // Every third fibonacci number is even starting with 2
      // f_{n+1} = f_n + f_{n-1}
      // f_{n+2} = f_{n+1} + f_n
      //         = (f_n + f_{n-1}) + f_n
      //         = 2f_n + f_{n-1}
      // f_{n+3} = f_{n+2} + f_{n+1}
      //         = (2f_n + f_{n-1}) + (f_n + f_{n-1})
      //         = 3f_n + 2f_{n-1}
      sum += b;
      var tmp = b;
      b = 3 * b + 2 * a;
      a = 2 * tmp + a;
    } while (b < n);
    return sum;
  };
  return {
    bruteForce: bruteForce,
    everyThird: everyThird
  };
});
