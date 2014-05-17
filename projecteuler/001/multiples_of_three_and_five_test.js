define(['chai',
        'mocha',
        'projecteuler/001/multiples_of_three_and_five'],
       function(chai,
                unusedMocha,
                multiplesOfThreeAndFive) {
  'use strict';
  var expect = chai.expect;
  describe('projectruler/001/multiples_of_three_and_five', function() {
    var solutions = {
      bruteForce: multiplesOfThreeAndFive.bruteForce,
      linearSum: multiplesOfThreeAndFive.linearSum
    };
    var describeSolution = function(name, solution) {
      describe(name, function() {
        it('should solve small input', function() {
          expect(solution(10)).to.equal(23); 
        });
        it('should solve large input', function() {
          expect(solution(1000)).to.equal(233168); 
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
