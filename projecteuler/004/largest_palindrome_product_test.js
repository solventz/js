define(['bignumber',
        'chai',
        'mocha',
        'projecteuler/004/largest_palindrome_product'],
       function(BigNumber,
                chai,
                unusedMocha,
                largestPalindromeProduct) {
  'use strict';
  var expect = chai.expect;
  describe('projecteuler/004/largest_palindrome_product', function() {
    describe('reverseDigits', function() {
      it('should reverse digits', function() {
        expect(largestPalindromeProduct.reverseDigits(42)).to.equal(24);
        expect(largestPalindromeProduct.reverseDigits(123)).to.equal(321);
        expect(largestPalindromeProduct.reverseDigits(7)).to.equal(7);
      });
    });
    var solutions = {
      bruteForce: largestPalindromeProduct.bruteForce
    };
    var describeSolution = function(name, solution) {
      describe(name, function() {
        it('should solve small input', function() {
          expect(solution(2)).to.equal(9009); 
        });
        it('should solve large input', function() {
          expect(solution(3)).to.equal(906609); 
        });
      });
    };
    for (var name in solutions) {
      if (solutions.hasOwnProperty(name)) {
        var solution = solutions[name];
        describeSolution(name, solution);
      }
    }
  });
});
