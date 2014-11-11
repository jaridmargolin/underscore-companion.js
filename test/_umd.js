/*!
 * test/_umd.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'companion/companion'
], function (assert, _) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('umd - companion.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.decorate);
  });

});


});