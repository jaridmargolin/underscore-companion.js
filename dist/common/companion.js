/*!
 * companion.js
 * 
 * Copyright (c) 2014
 */

var _ = require('underscore');
var decorate = require('./decorate');
var deepMerge = require('./deepMerge');
var encase = require('./encase');
var evaluate = require('./evaluate');


/* -----------------------------------------------------------------------------
 * companion
 * ---------------------------------------------------------------------------*/

_.mixin({
  decorate: decorate,
  deepMerge: deepMerge,
  encase: encase,
  evaluate: evaluate
});


/* -----------------------------------------------------------------------------
 * companion
 * ---------------------------------------------------------------------------*/

module.exports = _;


