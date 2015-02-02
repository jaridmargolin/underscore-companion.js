(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['underscore'], function (underscore) {
      return (root.returnExportsGlobal = factory(underscore));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require('underscore'));
  } else {
    root['companion'] = factory(root.underscore);
  }
}(this, function (underscore) {

/*!
 * bindPrototypes.js
 *
 * Copyright (c) 2014
 */
var bindPrototypes, decorate, delayApply, delayCall, encase, evaluate, underscoreCompanion, _deepMerge_;
bindPrototypes = function (_) {
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
}(underscore);
/*!
 * decorate.js
 * 
 * Copyright (c) 2014
 */
decorate = function (_) {
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
    var fn;
    while (i-- > 0) {
      fn = _.wrap(fn ? fn : original, decorators[i]);
    }
    return fn;
  };
}(underscore);
/*!
 * deepMerge.js
 * 
 * Copyright (c) 2014
 */
_deepMerge_ = function (_) {
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
}(underscore);
/*!
 * delayApply.js
 * 
 * Copyright (c) 2014
 */
delayApply = function (_) {
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
  return function (milliseconds, fn, context, args) {
    args = _.toArray(args || []);
    setTimeout(function () {
      fn.apply(context, args);
    }, milliseconds);
  };
}(underscore);
/*!
 * delayCall.js
 * 
 * Copyright (c) 2014
 */
delayCall = function (_) {
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
  return function (milliseconds, fn, context) {
    var args = _.rest(arguments, 3);
    setTimeout(function () {
      fn.apply(context, args);
    }, milliseconds);
  };
}(underscore);
/*!
 * encase.js
 * 
 * Copyright (c) 2014
 */
encase = function (_) {
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
    var fn = obj[method] || function () {
    };
    // Only decorate functions Dawg!
    if (typeof fn === 'function') {
      obj[method] = _.wrap(function () {
        fn.apply(obj, arguments);
      }, decorator);
    }
  };
}(underscore);
/*!
 * evaluate.js
 * 
 * Copyright (c) 2014
 */
evaluate = function (_) {
  /* -----------------------------------------------------------------------------
   * evaluate
   * ---------------------------------------------------------------------------*/
  /**
   * Loop over all object keys. If value is a function execute it and set
   * the return value as the value for that key.
   *
   * @example
   * var test = { key: function () { return 'str'; } }
   * evaluate(test);
   * // test = { key: 'str' }
   *
   * @param {Object} obj - Object to evaluate.
   * @param {Object} context - Context to call fn on (obj by default.
   * @returns Evaluated object.
   */
  return function (obj, context) {
    for (var k in obj) {
      if (_.isFunction(obj[k])) {
        obj[k] = obj[k].call(context || obj);
      }
    }
    return obj;
  };
}(underscore);
/*!
 * underscore-companion.js
 * 
 * Copyright (c) 2014
 */
underscoreCompanion = {
  bindPrototypes: bindPrototypes,
  decorate: decorate,
  deepMerge: _deepMerge_,
  delayApply: delayApply,
  delayCall: delayCall,
  encase: encase,
  evaluate: evaluate
};

return underscoreCompanion;


}));