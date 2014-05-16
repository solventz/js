define(['chai',
        'mocha',
        'probability-and-computing/chapter1/1.2'],
       function(chai,
                unusedMocha,
                exercise) {
  'use strict';
  var expect = chai.expect;
  describe('probability-and-computing-exercise-1.2', function() {
    describe('sampleSpace', function() {
      it('has the expected size', function() {
        expect(exercise.sampleSpace.length).to.equal(36);
      });
    });
    it('answers a', function() {
      // (a) The two dice show the same number.
      // So it's the diagonal of the 6x6 matrix, so 6/36
      // 10! / (5!5!) = 252
      expect(exercise.a).to.equal(6 / 36);
    });
    it('answers b', function() {
      // (b) The number that appears on the first die is larger than the number
      // on the second.
      // Similar to 1.1b, subtract the diagonal and divide by 2, so (36 - 6) / 2
      expect(exercise.b).to.equal(15 / 36);
    });
    it('answers c', function() {
      // (c) The sum of the dice is even.
      // An even plus an even is an even, and an odd plus and odd is an even.
      // So |{2, 4, 6}|^2 + |{1, 3, 5}|^2 = 18
      expect(exercise.c).to.equal(18 / 36);
    });
    it('answers d', function() {
      // (d) The product of the dice is a perfect square.
      // The perfect squares less than or equal to 36 are
      // 1, 4, 9, 16, 25, and 36.
      // The diagonal gives us 6 matching samples.
      // And 16 = 2 * 8, so there are two more samples.
      expect(exercise.d).to.equal(8 / 36);
    });
  });
});
