/*!
 * bindPrototypes.js
 *
 * Copyright (c) 2014
 */

define([
  'underscore',
], function (_) {


/* -----------------------------------------------------------------------------
 * bindPrototypes
 * ---------------------------------------------------------------------------*/

/**
 * Bind all object prototype functions. Rarely do we actually want to call
 * a Class method without using the class as the context.
 *
 * @example
 * _.bindPrototypes(this);
 *
 * @param {object} obj - Object to bind methods to.
 */
return function (obj) {
  var args = _.keys(Object.getPrototypeOf(obj));
  args.unshift(obj);

  _.bindAll.apply(_, args);
};


});