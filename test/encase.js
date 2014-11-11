/*!
 * test/encase.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'encase'
], function (assert, encase) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('encase.js', function () {

  it('Should wrap obj method with decorator fn.', function () {
    var called = false;
    var obj = { toDecorate: function () {} };

    encase(obj, 'toDecorate', function (fn, someArg) {
      assert.isFunction(fn);
      assert.isString(someArg);

      // make sure asserts were called
      called = true;

      fn.call(obj, someArg);
    });

    obj.toDecorate('someArg');

    assert.isTrue(called);
  });

  it('Should create noop function.', function () {
    var called = false;
    var obj = {};

    encase(obj, 'nonExistent', function (fn, someArg) {
      assert.isFunction(fn);
      assert.isString(someArg);

      // make sure asserts were called
      called = true;
    });

    obj.nonExistent('someArg');
    
    assert.isTrue(called);
  });

  it('Should continue method name does not map to a function.', function () {
    var obj = { nonFn: 'string' };

    encase(obj, 'nonFn', function () {});

    assert.equal(obj.nonFn, 'string');
  });

});


});