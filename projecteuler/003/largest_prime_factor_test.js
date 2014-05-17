define(['bignumber',
        'chai',
        'mocha',
        'projecteuler/003/largest_prime_factor'],
       function(BigNumber,
                chai,
                unusedMocha,
                largestPrimeFactor) {
  'use strict';
  var expect = chai.expect;
  describe('projecteuler/003/largest_prime_factor', function() {
    var solutions = {
      bruteForce: largestPrimeFactor.bruteForce,
    };
    var describeSolution = function(name, solution) {
      describe(name, function() {
        it('should solve small input', function() {
          expect(solution(new BigNumber(13195))).to.equal(29); 
        });
        it('should solve large input', function() {
          expect(solution(new BigNumber('600851475143'))).to.equal(6857); 
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
