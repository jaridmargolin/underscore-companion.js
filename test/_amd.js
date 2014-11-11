/*!
 * test/_amd.js
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

describe('amd - companion.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.deepMerge);
  });

});


});