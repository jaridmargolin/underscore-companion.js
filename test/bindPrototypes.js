/*!
 * test/bindPrototypes.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'bindPrototypes'
], function (assert, bindPrototypes) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('bindPrototypes.js', function () {

  it('Should bind items found in __proto__ to instance.', function () {
    var MyClass = function () {
      this.one = 'one';
      this.two = 'two';
      bindPrototypes(this);
    };

    MyClass.prototype.assertOne = function () {
      assert.equal(this.one, 'one');
    };

    MyClass.prototype.assertTwo = function () {
      assert.equal(this.two, 'two');
    };

    var myInstance = new MyClass();
    myInstance.assertOne();
    myInstance.assertTwo();
  });

});


});