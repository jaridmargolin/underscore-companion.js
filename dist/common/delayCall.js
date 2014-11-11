/*!
 * delayCall.js
 * 
 * Copyright (c) 2014
 */

var _ = require('underscore');


/* -----------------------------------------------------------------------------
 * delayCall
 * ---------------------------------------------------------------------------*/

/**
 * Call except with a delay.
 *
 * @public
 *
 * @params {number} milliseconds - Milliseconds to delay.
 * @params {function} fn - Function to call.
 * @params {object} context - Context to call function with.
 */
module.exports = function (milliseconds, fn, context) {
  var args = _.rest(arguments, 3);

  setTimeout(function () {
    fn.apply(context, args);
  }, milliseconds);
};


