/*!
 * test/underscore-companion.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'underscore-companion'
], function (assert, _) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('underscore-companion.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.bindPrototypes);
    assert.ok(_.decorate);
    assert.ok(_.deepMerge);
    assert.ok(_.delayApply);
    assert.ok(_.delayCall);
    assert.ok(_.encase);
    assert.ok(_.evaluate);
  });

});


});