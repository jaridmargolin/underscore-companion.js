/*!
 * companion.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  './decorate',
  './deepMerge',
  './encase',
  './evaluate'
], function (_, decorate, deepMerge, encase, evaluate) {


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

return _;


});