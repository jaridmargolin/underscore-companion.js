/*!
 * test/companion.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'companion'
], function (assert, _) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('companion.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.decorate);
    assert.ok(_.deepMerge);
    assert.ok(_.encase);
    assert.ok(_.evaluate);
  });

});


});