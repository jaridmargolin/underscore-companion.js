/*!
 * test/_umd.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'underscore-companion/underscore-companion'
], function (assert, _) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('umd - underscore-companion.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.deepMerge);
  });

});


});