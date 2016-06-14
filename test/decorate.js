/*!
 * test/decorate.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'decorate'
], function (assert, decorate) {


/* -----------------------------------------------------------------------------
 * reusable
 * ---------------------------------------------------------------------------*/

var decorator1 = function (fn, data) {
  data[0] = 1;
  fn(data);
};

var decorator2 = function (fn, data) {
  data[1] = 2;
  fn(data);
};


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('decorate.js', function () {

  it('Should call decorators in order.', function () {
    var fn = function (data) {
      assert.deepEqual(data, [1, 2]);
    };

    decorate([decorator1, decorator2], fn)([]);
  });

  it('Should return original function if no decorators passed.', function () {
    var fn = function (data) {
      assert.deepEqual(data, []);
    };

    decorate([], fn)([]);
  });

});


});