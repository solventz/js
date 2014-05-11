require.config({
  paths: {
    'bignumber': 'node_modules/bignumber.js/bignumber',
    'chai': 'node_modules/chai/chai',
    'mocha': 'node_modules/mocha/mocha'
  },
  shim: {
    'mocha': {
      init: function() {
        'use strict';
        this.mocha.setup('bdd');
        return this.mocha;
      }
    },
  }
});
require(['mocha'], function() {
  'use strict';
  require(['samples/fortytwo_test',
           'probability-and-computing/chapter1/1.1_test.js',
           'projecteuler/001/multiples_of_three_and_five_test',
           'projecteuler/002/even_fibonacci_numbers_test',
           'projecteuler/003/largest_prime_factor_test',
           'projecteuler/004/largest_palindrome_product_test'],
          function() {
    if (window.mochaPhantomJS) {
      mochaPhantomJS.run();
    } else {
      mocha.checkLeaks();
      mocha.run();
    }
  });
});
