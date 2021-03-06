/*!
 * encase.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
], function (_) {


/* -----------------------------------------------------------------------------
 * encase
 * ---------------------------------------------------------------------------*/

/**
 * Wrap an object method with a decorator. If no property exists, create
 * a dummy method to wrap.
 *
 * @example
 * decorate(settings, 'beforeSend', decorator);
 *
 * @param {Object} obj - Object containing method to decorate.
 * @param {string} method - Name representing method to decorate.
 * @param {Function} decorator - Function that is called prior to
 *   object method.
 */
return function (obj, method, decorator) {
  // We need to grab the current fn or create a dummy.
  var fn  = obj[method] || function () {};

  // Only decorate functions Dawg!
  if (typeof fn === 'function') {
    obj[method] = _.wrap(function () {
      fn.apply(obj, arguments);
    }, decorator);
  }
};


});