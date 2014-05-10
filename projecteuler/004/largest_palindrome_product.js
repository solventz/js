define([], function() {
  'use strict';
  var reverseDigits = function(n) {
    var reversed = 0;
    while (n > 0) {
      reversed *= 10;
      reversed += n % 10;
      n = Math.floor(n / 10);
    }
    return reversed;
  };
  var bruteForce = function(numDigits) {
    var largest = Math.pow(10, numDigits) - 1;
    var smallest = Math.pow(10, numDigits - 1);
    var largestPalindrome = smallest + 1;
    for (var i = largest; i >= smallest; i--) {
      for (var j = largest; j >= i; j--) {
        var p = i * j;
        if (p > largestPalindrome && p == reverseDigits(p)) {
          largestPalindrome = p; 
        }
      }
    }
    return largestPalindrome;
  };
  return {
    bruteForce: bruteForce,
    reverseDigits: reverseDigits
  };
});
