/*!
 * test/_amd.js
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

describe('amd - companion.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.decorate);
  });

});


});