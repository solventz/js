define(['chai',
        'mocha',
        'projecteuler/002/even_fibonacci_numbers'],
       function(chai,
                unusedMocha,
                evenFibonacciNumbers) {
  'use strict';
  var expect = chai.expect;
  describe('evenFibonacciNumbers', function() {
    var solutions = {
      bruteForce: evenFibonacciNumbers.bruteForce,
      everyThird: evenFibonacciNumbers.everyThird
    };
    var describeSolution = function(name, solution) {
      describe(name, function() {
        it('should solve small input', function() {
          expect(solution(89)).to.equal(44); 
        });
        it('should solve large input', function() {
          expect(solution(4000000)).to.equal(4613732); 
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
