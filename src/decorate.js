/*!
 * decorate.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
], function (_) {


/* -----------------------------------------------------------------------------
 * decorate
 * ---------------------------------------------------------------------------*/

/**
 * Wrapper around _.wrap to allow a chain of methods to be applied before a
 * fn. Acts similiar to python decorators. Great for use on route methods (auth,
 * argument checking, etc...)
 *
 * @example
 * var route = _.decorate([
 *   authenticate,
 *   showApp
 * ], handleRoute);
 *
 * @param {Array} decorators - Chain of methods to call before final fn.
 * @returns Decorated function.
 */
return function (decorators, original) {
  // Start at first decorator and work backwards
  var i = decorators.length;
  var fn = original;

  while((i--) > 0) {
    fn = _.wrap(fn, decorators[i]);
  }

  return fn;
};


});