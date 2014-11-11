/*!
 * delayApply.js
 * 
 * Copyright (c) 2014
 */

var _ = require('underscore');


/* -----------------------------------------------------------------------------
 * delayApply
 * ---------------------------------------------------------------------------*/

/**
 * Apply except with a delay.
 *
 * @public
 *
 * @params {number} milliseconds - Milliseconds to delay.
 * @params {function} fn - Function to call.
 * @params {object} context - Context to call function with.
 */
module.exports = function (milliseconds, fn, context, args) {
  args = _.toArray(args || []);

  setTimeout(function () {
    fn.apply(context, args);
  }, milliseconds);
};


