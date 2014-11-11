/*!
 * deepMerge.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore'
], function (_) {


/* -----------------------------------------------------------------------------
 * deepMerge
 * ---------------------------------------------------------------------------*/

/**
 * Deep merge properties onto an object with the properties of the second
 * object taking precedence over the first.
 *
 * @example
 * var dest = deep(dest, objToMerge);
 *
 * @param {object} dest - Object to merge properties into.
 * @param {object} obj - Object to merge properties from.
 */
var deepMerge = function (dest, obj) {
  for (var k in obj) {
    var destVal = dest[k] || {};
    var objVal = obj[k];

    var isObj = _.isObject(objVal);
    var isArr = _.isArray(objVal);

    if (isObj || isArr) {
      if (isObj && !_.isObject(destVal)) {
        dest[k] = {};
      }

      if (isArr && !_.isArray(destVal)) {
        dest[k] = [];
      }

      dest[k] = deepMerge(destVal, objVal);
    } else {
      dest[k] = objVal;
    }
  }

  return dest;
};


/* -----------------------------------------------------------------------------
 * deepMerge
 * ---------------------------------------------------------------------------*/

return deepMerge;


});