webpackJsonp([6,18],{

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(84);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },

/***/ 7:
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(16)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setLang = undefined;

	var _cn = __webpack_require__(76);

	var _cn2 = _interopRequireDefault(_cn);

	var _en = __webpack_require__(77);

	var _en2 = _interopRequireDefault(_en);

	var _Cookie = __webpack_require__(54);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var langs = { cn: _cn2['default'], en: _en2['default'] };

	var lang = void 0;
	var cookieLang = (0, _Cookie.getCookie)('I18N_LOCALE'); // ceres 系统的国际化模式
	if (cookieLang === 'en_US') {
	  lang = langs.en;
	} else {
	  lang = langs.cn;
	}

	var i18n = function i18n(key, arr) {
	  if (arr) {
	    return lang[key].replace(/{\d}/ig, function (placeholder) {
	      return arr[placeholder.replace(/{|}/ig, '')];
	    });
	  }
	  return lang[key];
	};

	var setLang = exports.setLang = function setLang(key) {
	  if (typeof langs[key] !== 'undefined') {
	    lang = langs[key];
	  }
	};

	exports['default'] = i18n;

/***/ },

/***/ 12:
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(41)
	  , defined = __webpack_require__(31);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },

/***/ 17:
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },

/***/ 19:
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(60)
	  , toPrimitive    = __webpack_require__(48)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , core      = __webpack_require__(12)
	  , ctx       = __webpack_require__(58)
	  , hide      = __webpack_require__(24)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(20)
	  , createDesc = __webpack_require__(34);
	module.exports = __webpack_require__(8) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(61)
	  , enumBugKeys = __webpack_require__(44);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },

/***/ 31:
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },

/***/ 32:
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },

/***/ 33:
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },

/***/ 34:
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },

/***/ 35:
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// export this package's api
	module.exports = __webpack_require__(94);

/***/ },

/***/ 40:
/***/ function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(57);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },

/***/ 43:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports['default'];

/***/ },

/***/ 44:
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },

/***/ 45:
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(47)('keys')
	  , uid    = __webpack_require__(35);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(17);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },

/***/ 54:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// cookie 操作
	var getCookie = exports.getCookie = function getCookie(name) {
	  var i = void 0;
	  var cookie = void 0;
	  var cookieStr = void 0;
	  var cookies = document.cookie.split(';');
	  for (i = 0; i < cookies.length; i++) {
	    cookie = cookies[i];
	    cookieStr = cookie.split('=');
	    if (cookieStr && cookieStr[0].replace(/^(\s*)|(\s*)$/g, '') === name) {
	      return decodeURI(cookieStr[1]);
	    }
	  }
	  return null;
	};

	var setCookie = exports.setCookie = function setCookie(name, value, expire, domain, path, secure) {
	  var date = new Date();
	  var str = escape(name) + '=' + escape(value);
	  date.setTime(date.getTime() + expire);
	  str += domain ? '; domain=' + domain : '';
	  str += path ? '; path=' + path : '';
	  str += expire ? '; expires=' + date.toGMTString() : '';
	  str += secure ? '; secure' : '';
	  document.cookie = str;
	};

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	try {
	  var index = __webpack_require__(40);
	} catch (err) {
	  var index = __webpack_require__(40);
	}

	/**
	 * Whitespace regexp.
	 */

	var re = /\s+/;

	/**
	 * toString reference.
	 */

	var toString = Object.prototype.toString;

	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */

	module.exports = function(el){
	  return new ClassList(el);
	};

	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */

	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}

	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }

	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */

	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};

	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }

	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }

	  return this;
	};

	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */

	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};

	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ },

/***/ 57:
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(86);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17)
	  , document = __webpack_require__(7).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(8) && !__webpack_require__(16)(function(){
	  return Object.defineProperty(__webpack_require__(59)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(19)
	  , toIObject    = __webpack_require__(13)
	  , arrayIndexOf = __webpack_require__(87)(false)
	  , IE_PROTO     = __webpack_require__(46)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(31);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },

/***/ 76:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = {
	  'CgType.title': '采购类别',
	  'CgType.selected': '已选择',

	  'CustomFee.label.1': '自定义费用',
	  'CustomFee.label.2': '增/减项类型',
	  'CustomFee.label.3': '备注说明',
	  'CustomFee.label.4': '金额',
	  'CustomFee.label.INCREASE': '增项',
	  'CustomFee.label.DECREASE': '减项',
	  'CustomFee.btn.add': '添加行',
	  'CustomFee.tip': '可在此添加上述设备型号无法覆盖的费用，如其他相关服务费、耗材类费用，或其他折扣、扣减费用等。',
	  'CustomFee.error': '其他费用部分存在错误',

	  'Employee.placeholder': '姓名 / 花名 / 工号',
	  'BizUnit.placeholder': '部门编号 / 名称',

	  'GadgetQuote.title.brand': '品牌',
	  'GadgetQuote.title.type': '型号',
	  'GadgetQuote.title.number': '数量(个)',
	  'GadgetQuote.title.typeDesc': '型号描述',
	  'GadgetQuote.title.priceWithTax': '含税单价',
	  'GadgetQuote.title.amountWithTax': '含税金额',
	  'GadgetQuote.title.remark': '备注',
	  'GadgetQuote.title.attach': '报价附件',
	  'GadgetQuote.desc.attach': '可上传对应产品或服务的产品性能/参数报告、产品质量/试用报告，或对应服务相关说明文档',
	  'GadgetQuote.error': '配件报价填写存在错误，请修改',

	  // 'GadgetDetail.component.summary': '品牌：{0}, 共 {1} 条记录',
	  'GadgetDetail.component.summary': '品牌：{0}',
	  'GadgetDetail.modal.title': '配置明细',
	  'GadgetDetail.labels.areaName': '区块',
	  'GadgetDetail.labels.children.thirdType': '三级分类',
	  'GadgetDetail.labels.children.typeName': '型号',
	  'GadgetDetail.labels.children.number': '数量(个)',
	  'GadgetDetail.labels.children.typeDesc': '型号描述',
	  'GadgetDetail.version': '第 {0} 版',

	  'QuoteHistory.labes.quoteDate': '报价时间',
	  'QuoteHistory.labes.unitPrice': '含税单价',
	  'QuoteHistory.labes.vatRates': '增值税率',
	  'QuoteHistory.labes.quotation': '报价单',
	  'QuoteHistory.labes.effectDate': '有效期',
	  'QuoteHistory.labes.priceSourcre': '价格来源',
	  'QuoteHistory.labes.contractCode': '合同号',
	  'QuoteHistory.title.modal': '报价历史',
	  'QuoteHistory.supplier': '供应商',
	  'QuoteHistory.model': '型号',
	  'QuoteHistory.tabs.0': '历史低价(按价格递增)',
	  'QuoteHistory.tabs.1': '最新报价(按时间倒序)',
	  'QuoteHistory.title.quotation.pre': '在（',
	  'QuoteHistory.title.quotation.after': '）币种下的报价',
	  'QuoteHistory.title.quotation.pre.1': '在OU：',
	  'QuoteHistory.title.quotation.after.1': '下的报价',

	  'LocationFormField.1': '省/直辖市',
	  'LocationFormField.2': '市',
	  'LocationFormField.3': '县/区',

	  'TableList.noData': '没有数据',

	  'FrontCatalog.name': '前台类目',

	  'common.all': '全部',
	  'common.add': '增加',
	  'common.canNotEmpty': '不能为空',
	  'common.required': '该项必须填写',
	  'common.choice': '选择',
	  'common.confirm': '确定',
	  'common.cancel': '取消',
	  'common.close': '关闭',
	  'common.delete': '删除',
	  'common.doYouConfirm': '确定执行此操作吗?',
	  'common.edition': '版本',
	  'common.emptyText': '没有数据',
	  'common.fieldName': '该项',
	  'common.opt': '操作',
	  'common.edit': '编辑',
	  'common.tip': '提示',
	  'common.operationTip': '操作提示',
	  'common.pleaseSelect': '请选择',
	  'common.pleaseInput': '请输入',
	  'common.isRequired': '必须填写',
	  'common.modify': '修改',
	  'common.maxLengthIs': '最大长度为',
	  'common.minLengthIs': '最小长度为',
	  'common.maxValueIs': '不能大于',
	  'common.minValueIs': '不能小于',
	  'common.formatError': '格式错误',
	  'common.uploadAttach': '上传附件',
	  'common.supplier': '供应商',
	  'common.index': '序号',
	  'common.notFound': '没有找到',
	  'common.inValidEmail': 'Email 格式错误',
	  'common.inValidMobile': '手机格式错误',
	  'common.inValidChs': '中文格式错误',
	  'common.serverError': '服务器错误',
	  'common.alreadyChoose': '已选择',
	  'common.pleaseSelectDate': '请选择日期',

	  'common.locale': 'zh-cn',
	  'common.locale_1': 'zh-cn'
	};
	module.exports = exports['default'];

/***/ },

/***/ 77:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = {
	  'CgType.title': 'Procurement Type',
	  'CgType.selected': 'Selected',

	  'CustomFee.label.1': 'Other cost',
	  'CustomFee.label.2': 'Inc/Dec Type',
	  'CustomFee.label.3': 'Remark',
	  'CustomFee.label.4': 'Amount',
	  'CustomFee.label.INCREASE': 'Increase',
	  'CustomFee.label.DECREASE': 'Decrease',
	  'CustomFee.btn.add': 'Add cost',
	  'CustomFee.tip': '可在此添加上述设备型号无法覆盖的费用，如其他相关服务费、耗材类费用，或其他折扣、扣减费用等。',
	  'CustomFee.error': 'Error found in other cost',

	  'Employee.placeholder': 'Real name / Nick name / Work No.',
	  'BizUnit.placeholder': 'department ID / Name',

	  'GadgetQuote.title.brand': 'Brand',
	  'GadgetQuote.title.type': 'Type',
	  'GadgetQuote.title.number': 'Number',
	  'GadgetQuote.title.typeDesc': 'Type Desc.',
	  'GadgetQuote.title.priceWithTax': 'UnitPrice',
	  'GadgetQuote.title.amountWithTax': 'Amount',
	  'GadgetQuote.title.remark': 'Remark',
	  'GadgetQuote.title.attach': 'Attachment',
	  'GadgetQuote.desc.attach': '可上传对应产品或服务的产品性能/参数报告、产品质量/试用报告，或对应服务相关说明文档',
	  'GadgetQuote.error': '配件报价填写存在错误，请修改',

	  // 'GadgetDetail.component.summary': 'Brand：{0}, {1} records totally',
	  'GadgetDetail.component.summary': 'Brand：{0}',
	  'GadgetDetail.modal.title': 'Configuration Details',
	  'GadgetDetail.labels.areaName': 'Area Name',
	  'GadgetDetail.labels.children.thirdType': 'Third Type',
	  'GadgetDetail.labels.children.typeName': 'Type Name',
	  'GadgetDetail.labels.children.number': 'Quantity',
	  'GadgetDetail.labels.children.typeDesc': 'Description',
	  'GadgetDetail.version': 'Version: {0}.',

	  'QuoteHistory.labes.quoteDate': 'QuoteDate',
	  'QuoteHistory.labes.unitPrice': 'UnitPrice',
	  'QuoteHistory.labes.vatRates': 'VatRates',
	  'QuoteHistory.labes.quotation': 'Quotation',
	  'QuoteHistory.labes.effectDate': 'EffectDate',
	  'QuoteHistory.labes.priceSourcre': 'PriceSourcre',
	  'QuoteHistory.labes.contractCode': 'ContractCode',
	  'QuoteHistory.title.modal': 'Quotation',
	  'QuoteHistory.supplier': 'supplier',
	  'QuoteHistory.model': 'model',
	  'QuoteHistory.tabs.0': 'The lowest price (by price increments)',
	  'QuoteHistory.tabs.1': 'The latest quotation (by time flashback)',
	  'QuoteHistory.title.quotation.pre': 'currency ',
	  'QuoteHistory.title.quotation.after': ': quoted price',
	  'QuoteHistory.title.quotation.pre.1': 'OU:',
	  'QuoteHistory.title.quotation.after.1': ' quoted price',

	  'LocationFormField.1': '省/直辖市',
	  'LocationFormField.2': '市',
	  'LocationFormField.3': '县/区',

	  'TableList.noData': 'No Data',

	  'FrontCatalog.name': 'Front Catalog',

	  'common.all': 'All',
	  'common.add': 'Add',
	  'common.required': 'Please fill in all mandatory fields',
	  'common.canNotEmpty': 'Can not be empty',
	  'common.choice': 'Choice',
	  'common.confirm': 'Confirm',
	  'common.cancel': 'Cancel',
	  'common.close': 'Close',
	  'common.delete': 'Delete',
	  'common.doYouConfirm': 'Do you confirm?',
	  'common.emptyText': 'No data found.',
	  'common.edition': 'Edition',
	  'common.formatError': 'Format error',
	  'common.opt': 'Operation',
	  'common.edit': 'Edit',
	  'common.tip': 'Hint',
	  'common.operationTip': 'Information',
	  'common.pleaseSelect': 'Please select',
	  'common.pleaseInput': 'Please input',
	  'common.fieldName': 'The field',
	  'common.isRequired': ' is required',
	  'common.modify': 'Modify',
	  'common.maxLengthIs': 'maximum length is',
	  'common.minLengthIs': 'minimal length is',
	  'common.maxValueIs': 'can not large than',
	  'common.minValueIs': 'can not less than',
	  'common.uploadAttach': 'Upload Files',
	  'common.supplier': 'Supplier',
	  'common.index': 'Index',
	  'common.notFound': 'Not Found',
	  'common.inValidEmail': 'Invalid email',
	  'common.inValidMobile': 'Invalid mobile',
	  'common.inValidChs': 'Invalid chinese',
	  'common.serverError': 'Server Error',
	  'common.alreadyChoose': 'Already Choose',
	  'common.pleaseSelectDate': 'Please select date',

	  'common.locale': 'en-us',
	  'common.locale_1': 'en'
	};
	module.exports = exports['default'];

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91);
	module.exports = __webpack_require__(12).Object.assign;

/***/ },

/***/ 86:
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(13)
	  , toLength  = __webpack_require__(90)
	  , toIndex   = __webpack_require__(89);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(29)
	  , gOPS     = __webpack_require__(45)
	  , pIE      = __webpack_require__(33)
	  , toObject = __webpack_require__(62)
	  , IObject  = __webpack_require__(41)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(16)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(32)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(32)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(23);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(88)});

/***/ },

/***/ 92:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },

	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}

	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },


	  endEvents: endEvents,

	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	exports["default"] = TransitionEvents;
	module.exports = exports['default'];

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _Event = __webpack_require__(92);

	var _Event2 = _interopRequireDefault(_Event);

	var _componentClasses = __webpack_require__(56);

	var _componentClasses2 = _interopRequireDefault(_componentClasses);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var isCssAnimationSupported = _Event2["default"].endEvents.length !== 0;


	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);

	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}

	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}

	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}

	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2["default"])(node);

	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }

	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);

	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };

	  _Event2["default"].addEndEventListener(node, node.rcEndListener);

	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);

	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);

	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};

	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };

	  _Event2["default"].addEndEventListener(node, node.rcEndListener);

	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};

	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};

	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

	exports["default"] = cssAnimation;
	module.exports = exports['default'];

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ChildrenUtils = __webpack_require__(96);

	var _AnimateChild = __webpack_require__(95);

	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);

	var _util = __webpack_require__(43);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var defaultKey = 'rc_animate_' + Date.now();


	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2["default"].isValidElement(children)) {
	    if (!children.key) {
	      return _react2["default"].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}

	function noop() {}

	var Animate = _react2["default"].createClass({
	  displayName: 'Animate',

	  propTypes: {
	    component: _react2["default"].PropTypes.any,
	    animation: _react2["default"].PropTypes.object,
	    transitionName: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.object]),
	    transitionEnter: _react2["default"].PropTypes.bool,
	    transitionAppear: _react2["default"].PropTypes.bool,
	    exclusive: _react2["default"].PropTypes.bool,
	    transitionLeave: _react2["default"].PropTypes.bool,
	    onEnd: _react2["default"].PropTypes.func,
	    onEnter: _react2["default"].PropTypes.func,
	    onLeave: _react2["default"].PropTypes.func,
	    onAppear: _react2["default"].PropTypes.func,
	    showProp: _react2["default"].PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true,
	      transitionAppear: false,
	      onEnd: noop,
	      onEnter: noop,
	      onLeave: noop,
	      onAppear: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      if (child) {
	        _this.performAppear(child.key);
	      }
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;

	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this2.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = void 0;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }

	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });

	    nextChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this2.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this2.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this2.keysToEnter.push(key);
	      }
	    });

	    currentChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this2.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this2.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  },
	  performAppear: function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  },
	  handleDoneAdding: function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2["default"].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2["default"].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  },
	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  },
	  handleDoneLeaving: function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2["default"].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      /* eslint react/no-is-mounted:0 */
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  },
	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  },
	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },
	  render: function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null || child === undefined) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2["default"].createElement(
	          _AnimateChild2["default"],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave
	          },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      var passedProps = props;
	      if (typeof Component === 'string') {
	        passedProps = {
	          className: props.className,
	          style: props.style
	        };
	      }
	      return _react2["default"].createElement(
	        Component,
	        passedProps,
	        children
	      );
	    }
	    return children[0] || null;
	  }
	});

	exports["default"] = Animate;
	module.exports = exports['default'];

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _cssAnimation = __webpack_require__(93);

	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

	var _util = __webpack_require__(43);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};

	var AnimateChild = _react2["default"].createClass({
	  displayName: 'AnimateChild',

	  propTypes: {
	    children: _react2["default"].PropTypes.any
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },
	  componentWillEnter: function componentWillEnter(done) {
	    if (_util2["default"].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	  componentWillAppear: function componentWillAppear(done) {
	    if (_util2["default"].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },
	  componentWillLeave: function componentWillLeave(done) {
	    if (_util2["default"].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      // always sync, do not interupt with react component life cycle
	      // update hidden -> animate hidden ->
	      // didUpdate -> animate leave -> unmount (if animate is none)
	      done();
	    }
	  },
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;

	    var node = _reactDom2["default"].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	      var activeName = name + '-active';
	      if (nameIsObj && transitionName[animationType + 'Active']) {
	        activeName = transitionName[animationType + 'Active'];
	      }
	      this.stopper = (0, _cssAnimation2["default"])(node, {
	        name: name,
	        active: activeName
	      }, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },
	  stop: function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  },
	  render: function render() {
	    return this.props.children;
	  }
	});

	exports["default"] = AnimateChild;
	module.exports = exports['default'];

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}

	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}

	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}

	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}

	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}

	function mergeChildren(prev, next) {
	  var ret = [];

	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });

	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });

	  ret = ret.concat(pendingChildren);

	  return ret;
	}

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * @author: vincent
	                                                                                                                                                                                                                                                                               * @date: 15/5/19
	                                                                                                                                                                                                                                                                               */


	var _rcDialog = __webpack_require__(212);

	var _rcDialog2 = _interopRequireDefault(_rcDialog);

	var _uxcoreButton = __webpack_require__(137);

	var _uxcoreButton2 = _interopRequireDefault(_uxcoreButton);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(4);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _objectAssign = __webpack_require__(5);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _confirm = __webpack_require__(219);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _i18n = __webpack_require__(136);

	var _i18n2 = _interopRequireDefault(_i18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function noop() {}

	var htmlNode = document.documentElement;
	var supportClassList = !!htmlNode.classList;
	var isSafari = false;
	if ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object') {
	  if (navigator && /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
	    isSafari = true;
	  }
	}

	var getIEVer = function getIEVer() {
	  if (window) {
	    var ua = window.navigator.userAgent;
	    var idx = ua.indexOf('MSIE');
	    if (idx > 0) {
	      // "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64;
	      // Trident/6.0; SLCC2; .NET CLR 2.0.50727)"
	      return parseInt(ua.substring(idx + 5, ua.indexOf('.', idx)), 10);
	    }
	    if (ua.match(/Trident\/7\./)) {
	      // "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2;
	      // .NET CLR 2.0.50727; rv:11.0) like Gecko"
	      return 11;
	    }
	    return 0;
	  }
	  return 0;
	};

	var Dialog = function (_React$Component) {
	  _inherits(Dialog, _React$Component);

	  function Dialog(props) {
	    _classCallCheck(this, Dialog);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.state = {
	      confirmLoading: false
	    };
	    return _this;
	  }

	  Dialog.prototype.componentWillUpdate = function componentWillUpdate(nextProps) {
	    var htmlClassName = this.props.htmlClassName;

	    if (htmlClassName) {
	      if (nextProps.visible) {
	        if (supportClassList) {
	          htmlNode.classList.add(htmlClassName);
	        } else {
	          htmlNode.className += ' ' + htmlClassName;
	        }
	      } else if (supportClassList) {
	        htmlNode.classList.remove(htmlClassName);
	      } else {
	        var cls = htmlNode.className;
	        cls = cls.replace(new RegExp('\\s?' + htmlClassName), '');
	        htmlNode.className = cls;
	      }
	    }
	  };

	  Dialog.prototype.handleCancel = function handleCancel() {
	    this.props.onCancel();
	  };

	  Dialog.prototype.handleOk = function handleOk() {
	    this.props.onOk();
	  };

	  Dialog.prototype.render = function render() {
	    var _classnames;

	    var props = this.props;
	    var transitionName = props.transitionName;

	    var locale = _i18n2["default"][props.locale];

	    if (isSafari) {
	      // safari animation bug when using threeFallV
	      transitionName = 'slideDown';
	    }
	    var defaultFooter = [_react2["default"].createElement(
	      _uxcoreButton2["default"],
	      {
	        key: 'confirm',
	        type: 'primary',
	        size: 'medium',
	        onClick: this.handleOk.bind(this)
	      },
	      locale.ok
	    ), _react2["default"].createElement(
	      _uxcoreButton2["default"],
	      {
	        key: 'cancel',
	        type: 'secondary',
	        size: 'medium',
	        onClick: this.handleCancel.bind(this)
	      },
	      locale.cancel
	    )];
	    var footer = props.footer || defaultFooter;
	    var className = void 0;
	    if (!props.title) {
	      className = props.className + ' ' + props.prefixCls + '-noheader';
	    } else {
	      className = props.className;
	    }
	    var wrapClassName = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, props.wrapClassName, !!props.wrapClassName), _defineProperty(_classnames, 'vertical-center-dialog', getIEVer() < 8), _classnames));
	    return _react2["default"].createElement(_rcDialog2["default"], _extends({
	      onClose: this.handleCancel.bind(this),
	      footer: footer
	    }, props, {
	      transitionName: transitionName,
	      className: className,
	      wrapClassName: wrapClassName,
	      visible: props.visible
	    }));
	  };

	  return Dialog;
	}(_react2["default"].Component);

	exports["default"] = Dialog;


	Dialog.propTypes = {
	  visible: _react2["default"].PropTypes.bool,
	  onCancel: _react2["default"].PropTypes.func,
	  onOk: _react2["default"].PropTypes.func
	};

	Dialog.defaultProps = {
	  prefixCls: 'kuma-dlg',
	  className: '',
	  wrapClassName: '',
	  onOk: noop,
	  locale: 'zh-cn',
	  onCancel: noop,
	  width: 520,
	  transitionName: 'threeFallV',
	  maskTransitionName: 'fade',
	  confirmLoading: false,
	  visible: false,
	  closable: true,
	  maskClosable: false,
	  title: '',
	  htmlClassName: ''
	};

	Dialog.info = function (props) {
	  (0, _objectAssign2["default"])(props, {
	    iconClassName: 'kuma-icon-information',
	    okCancel: false
	  });
	  return (0, _confirm2["default"])(props);
	};

	Dialog.success = function (props) {
	  (0, _objectAssign2["default"])(props, {
	    iconClassName: 'kuma-icon-success',
	    okCancel: false
	  });
	  return (0, _confirm2["default"])(props);
	};

	Dialog.error = function (props) {
	  (0, _objectAssign2["default"])(props, {
	    iconClassName: 'kuma-icon-error',
	    okCancel: false
	  });
	  return (0, _confirm2["default"])(props);
	};

	Dialog.confirm = function (props) {
	  (0, _objectAssign2["default"])(props, {
	    okCancel: true
	  });
	  return (0, _confirm2["default"])(props);
	};
	module.exports = exports['default'];

/***/ },

/***/ 136:
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  'zh-cn': {
	    ok: '确定',
	    cancel: '取消',
	    isee: '知道了',
	    confirm: '确定'
	  },
	  'en-us': {
	    ok: 'OK',
	    cancel: 'Cancel',
	    isee: 'OK',
	    confirm: 'Yes'
	  },
	  'pl-pl': {
	    ok: 'OK',
	    cancel: 'anuluj',
	    isee: 'OK',
	    confirm: 'tak'
	  }
	};

/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Button = __webpack_require__(221);

	var _Button2 = _interopRequireDefault(_Button);

	var _ButtonGroup = __webpack_require__(222);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Button Component for uxcore
	 * @author
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */

	_Button2["default"].ButtonGroup = _ButtonGroup2["default"];
	module.exports = _Button2["default"];

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _Dialog = __webpack_require__(225);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _i18n = __webpack_require__(9);

	var _i18n2 = _interopRequireDefault(_i18n);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var dlg = {};

	var uxConfirm = _Dialog2['default'].confirm;
	var uxAlert = _Dialog2['default'].info;
	var uxSuccess = _Dialog2['default'].success;
	var uxError = _Dialog2['default'].error;
	var defaultWidth = 290;
	var lang = (0, _i18n2['default'])('common.locale');

	var processString = function processString(string) {
	  if ((typeof string === 'undefined' ? 'undefined' : _typeof(string)) === 'object') {
	    return {
	      title: string.title,
	      content: string.content
	    };
	  }
	  return {
	    title: string
	  };
	};

	dlg.confirm = function (string, onOk, onCancel) {
	  var option = {};
	  var body = processString(string);
	  option.title = body.title;
	  if (body.content) {
	    option.content = body.content;
	  }
	  option.transitionName = 'fall';
	  option.closable = false;
	  option.width = defaultWidth;
	  option.onOk = onOk;
	  option.onCancel = onCancel;
	  option.locale = lang;
	  uxConfirm(option);
	};

	dlg.alert = function (string, onOk) {
	  var option = {};
	  option.transitionName = 'fall';
	  option.closable = false;
	  var body = processString(string);
	  option.title = body.title;
	  if (body.content) {
	    option.content = body.content;
	  }
	  option.width = defaultWidth;
	  option.onOk = onOk;
	  option.locale = lang;
	  uxAlert(option);
	};

	dlg.success = function (string, onOk) {
	  var option = {};
	  option.transitionName = 'fall';
	  option.closable = false;
	  var body = processString(string);
	  option.title = body.title;
	  if (body.content) {
	    option.content = body.content;
	  }
	  option.width = defaultWidth;
	  option.onOk = onOk;
	  option.locale = lang;
	  uxSuccess(option);
	};

	dlg.error = function (string, onOk) {
	  var option = {};
	  option.transitionName = 'fall';
	  option.closable = false;
	  var body = processString(string);
	  option.title = body.title;
	  if (body.content) {
	    option.content = body.content;
	  }
	  option.width = defaultWidth;
	  option.onOk = onOk;
	  option.locale = lang;
	  uxError(option);
	};

	exports['default'] = dlg;
	module.exports = exports['default'];

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(6);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _KeyCode = __webpack_require__(213);

	var _KeyCode2 = _interopRequireDefault(_KeyCode);

	var _rcAnimate = __webpack_require__(36);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _LazyRenderBox = __webpack_require__(211);

	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var uuid = 0;
	var openCount = 0;

	// Measure scrollbar width for padding body during modal show/hide
	var scrollbarMeasure = {
	  position: 'absolute',
	  top: '-9999px',
	  width: '50px',
	  height: '50px',
	  overflow: 'scroll'
	};

	/* eslint react/no-is-mounted:0 */

	function noop() {}

	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function setTransformOrigin(node, value) {
	  var style = node.style;
	  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
	    style[prefix + 'TransformOrigin'] = value;
	  });
	  style['transformOrigin'] = value;
	}

	function offset(el) {
	  var rect = el.getBoundingClientRect();
	  var pos = {
	    left: rect.left,
	    top: rect.top
	  };
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScroll(w);
	  pos.top += getScroll(w, 1);
	  return pos;
	}

	var Dialog = _react2["default"].createClass({
	  displayName: 'Dialog',

	  propTypes: {
	    className: _react.PropTypes.string,
	    keyboard: _react.PropTypes.bool,
	    style: _react.PropTypes.object,
	    mask: _react.PropTypes.bool,
	    children: _react.PropTypes.any,
	    onAfterClose: _react.PropTypes.func,
	    onClose: _react.PropTypes.func,
	    closable: _react.PropTypes.bool,
	    maskClosable: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    mousePosition: _react.PropTypes.object,
	    wrapStyle: _react.PropTypes.object,
	    maskStyle: _react.PropTypes.object,
	    prefixCls: _react.PropTypes.string,
	    wrapClassName: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onAfterClose: noop,
	      className: '',
	      mask: true,
	      visible: false,
	      keyboard: true,
	      closable: true,
	      maskClosable: true,
	      prefixCls: 'rc-dialog',
	      onClose: noop
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this.titleId = 'rcDialogTitle' + uuid++;
	  },
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate({});
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var props = this.props;
	    var mousePosition = this.props.mousePosition;
	    if (props.visible) {
	      // first show
	      if (!prevProps.visible) {
	        this.lastOutSideFocusNode = document.activeElement;
	        this.addScrollingEffect();
	        this.refs.wrap.focus();
	        var dialogNode = _reactDom2["default"].findDOMNode(this.refs.dialog);
	        if (mousePosition) {
	          var elOffset = offset(dialogNode);
	          setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
	        } else {
	          setTransformOrigin(dialogNode, '');
	        }
	      }
	    } else if (prevProps.visible) {
	      if (props.mask && this.lastOutSideFocusNode) {
	        try {
	          this.lastOutSideFocusNode.focus();
	        } catch (e) {
	          this.lastOutSideFocusNode = null;
	        }
	        this.lastOutSideFocusNode = null;
	      }
	    }
	  },
	  onAnimateLeave: function onAnimateLeave() {
	    // need demo?
	    // https://github.com/react-component/dialog/pull/28
	    if (this.refs.wrap) {
	      this.refs.wrap.style.display = 'none';
	    }
	    this.removeScrollingEffect();
	    this.props.onAfterClose();
	  },
	  onMaskClick: function onMaskClick(e) {
	    if (e.target === e.currentTarget && this.props.closable && this.props.maskClosable) {
	      this.close(e);
	    }
	  },
	  onKeyDown: function onKeyDown(e) {
	    var props = this.props;
	    if (props.closable && props.keyboard) {
	      if (e.keyCode === _KeyCode2["default"].ESC) {
	        this.close(e);
	      }
	    }
	    // keep focus inside dialog
	    if (props.visible) {
	      if (e.keyCode === _KeyCode2["default"].TAB) {
	        var activeElement = document.activeElement;
	        var dialogRoot = this.refs.wrap;
	        var sentinel = this.refs.sentinel;
	        if (e.shiftKey) {
	          if (activeElement === dialogRoot) {
	            sentinel.focus();
	          }
	        } else if (activeElement === this.refs.sentinel) {
	          dialogRoot.focus();
	        }
	      }
	    }
	  },
	  getDialogElement: function getDialogElement() {
	    var props = this.props;
	    var closable = props.closable;
	    var prefixCls = props.prefixCls;
	    var dest = {};
	    if (props.width !== undefined) {
	      dest.width = props.width;
	    }
	    if (props.height !== undefined) {
	      dest.height = props.height;
	    }

	    var footer = void 0;
	    if (props.footer) {
	      footer = _react2["default"].createElement(
	        'div',
	        { className: prefixCls + '-footer', ref: 'footer' },
	        props.footer
	      );
	    }

	    var header = void 0;
	    if (props.title) {
	      header = _react2["default"].createElement(
	        'div',
	        { className: prefixCls + '-header', ref: 'header' },
	        _react2["default"].createElement(
	          'div',
	          { className: prefixCls + '-title', id: this.titleId },
	          props.title
	        )
	      );
	    }

	    var closer = void 0;
	    if (closable) {
	      closer = _react2["default"].createElement(
	        'button',
	        {
	          onClick: this.close,
	          'aria-label': 'Close',
	          className: prefixCls + '-close'
	        },
	        _react2["default"].createElement('span', { className: prefixCls + '-close-x' })
	      );
	    }

	    var style = (0, _extends3["default"])({}, props.style, dest);
	    var transitionName = this.getTransitionName();
	    var dialogElement = _react2["default"].createElement(
	      _LazyRenderBox2["default"],
	      {
	        role: 'document',
	        ref: 'dialog',
	        style: style,
	        className: prefixCls + ' ' + (props.className || ''),
	        visible: props.visible
	      },
	      _react2["default"].createElement(
	        'div',
	        { className: prefixCls + '-content' },
	        closer,
	        header,
	        _react2["default"].createElement(
	          'div',
	          { className: prefixCls + '-body', style: props.bodyStyle, ref: 'body' },
	          props.children
	        ),
	        footer
	      ),
	      _react2["default"].createElement(
	        'div',
	        { tabIndex: '0', ref: 'sentinel', style: { width: 0, height: 0, overflow: 'hidden' } },
	        'sentinel'
	      )
	    );
	    return _react2["default"].createElement(
	      _rcAnimate2["default"],
	      {
	        key: 'dialog',
	        showProp: 'visible',
	        onLeave: this.onAnimateLeave,
	        transitionName: transitionName,
	        component: '',
	        transitionAppear: true
	      },
	      dialogElement
	    );
	  },
	  getZIndexStyle: function getZIndexStyle() {
	    var style = {};
	    var props = this.props;
	    if (props.zIndex !== undefined) {
	      style.zIndex = props.zIndex;
	    }
	    return style;
	  },
	  getWrapStyle: function getWrapStyle() {
	    return (0, _extends3["default"])({}, this.getZIndexStyle(), this.props.wrapStyle);
	  },
	  getMaskStyle: function getMaskStyle() {
	    return (0, _extends3["default"])({}, this.getZIndexStyle(), this.props.maskStyle);
	  },
	  getMaskElement: function getMaskElement() {
	    var props = this.props;
	    var maskElement = void 0;
	    if (props.mask) {
	      var maskTransition = this.getMaskTransitionName();
	      maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], {
	        style: this.getMaskStyle(),
	        key: 'mask',
	        className: props.prefixCls + '-mask',
	        hiddenClassName: props.prefixCls + '-mask-hidden',
	        visible: props.visible
	      });
	      if (maskTransition) {
	        maskElement = _react2["default"].createElement(
	          _rcAnimate2["default"],
	          {
	            key: 'mask',
	            showProp: 'visible',
	            transitionAppear: true,
	            component: '',
	            transitionName: maskTransition
	          },
	          maskElement
	        );
	      }
	    }
	    return maskElement;
	  },
	  getMaskTransitionName: function getMaskTransitionName() {
	    var props = this.props;
	    var transitionName = props.maskTransitionName;
	    var animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  },
	  getTransitionName: function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var animation = props.animation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  },
	  getElement: function getElement(part) {
	    return this.refs[part];
	  },
	  setScrollbar: function setScrollbar() {
	    if (this.bodyIsOverflowing && this.scrollbarWidth) {
	      document.body.style.paddingRight = this.scrollbarWidth + 'px';
	    }
	  },
	  addScrollingEffect: function addScrollingEffect() {
	    openCount++;
	    if (openCount !== 1) {
	      return;
	    }
	    this.checkScrollbar();
	    this.setScrollbar();
	    document.body.style.overflow = 'hidden';
	    // this.adjustDialog();
	  },
	  removeScrollingEffect: function removeScrollingEffect() {
	    openCount--;
	    if (openCount !== 0) {
	      return;
	    }
	    document.body.style.overflow = '';
	    this.resetScrollbar();
	    // this.resetAdjustments();
	  },
	  close: function close(e) {
	    this.props.onClose(e);
	  },
	  checkScrollbar: function checkScrollbar() {
	    var fullWindowWidth = window.innerWidth;
	    if (!fullWindowWidth) {
	      // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect();
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
	    if (this.bodyIsOverflowing) {
	      this.scrollbarWidth = this.measureScrollbar();
	    }
	  },
	  resetScrollbar: function resetScrollbar() {
	    document.body.style.paddingRight = '';
	  },
	  measureScrollbar: function measureScrollbar() {
	    if (this.scrollbarWidth !== undefined) {
	      return this.scrollbarWidth;
	    }
	    var scrollDiv = document.createElement('div');
	    for (var scrollProp in scrollbarMeasure) {
	      if (scrollbarMeasure.hasOwnProperty(scrollProp)) {
	        scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
	      }
	    }
	    document.body.appendChild(scrollDiv);
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	    document.body.removeChild(scrollDiv);
	    this.scrollbarWidth = scrollbarWidth;
	    return scrollbarWidth;
	  },
	  adjustDialog: function adjustDialog() {
	    if (this.refs.wrap && this.scrollbarWidth) {
	      var modalIsOverflowing = this.refs.wrap.scrollHeight > document.documentElement.clientHeight;
	      this.refs.wrap.style.paddingLeft = (!this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '') + 'px';
	      this.refs.wrap.style.paddingRight = (this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : '') + 'px';
	    }
	  },
	  resetAdjustments: function resetAdjustments() {
	    if (this.refs.wrap) {
	      this.refs.wrap.style.paddingLeft = this.refs.wrap.style.paddingLeft = '';
	    }
	  },
	  render: function render() {
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var style = this.getWrapStyle();
	    // clear hide display
	    // and only set display after async anim, not here for hide
	    if (props.visible) {
	      style.display = null;
	    }
	    return _react2["default"].createElement(
	      'div',
	      null,
	      this.getMaskElement(),
	      _react2["default"].createElement(
	        'div',
	        {
	          tabIndex: '-1',
	          onKeyDown: this.onKeyDown,
	          className: prefixCls + '-wrap ' + (props.wrapClassName || ''),
	          ref: 'wrap',
	          onClick: this.onMaskClick,
	          role: 'dialog',
	          'aria-labelledby': props.title ? this.titleId : null,
	          style: style
	        },
	        this.getDialogElement()
	      )
	    );
	  }
	});

	exports["default"] = Dialog;
	module.exports = exports['default'];

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(6);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(209);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _getContainerRenderMixin = __webpack_require__(214);

	var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var DialogWrap = _react2["default"].createClass({
	  displayName: 'DialogWrap',

	  propTypes: {
	    visible: _react.PropTypes.bool
	  },
	  mixins: [(0, _getContainerRenderMixin2["default"])({
	    isVisible: function isVisible(instance) {
	      return instance.props.visible;
	    },

	    autoDestroy: false,
	    getComponent: function getComponent(instance, extra) {
	      return _react2["default"].createElement(_Dialog2["default"], (0, _extends3["default"])({}, instance.props, extra, {
	        key: 'dialog'
	      }));
	    }
	  })],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      visible: false
	    };
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(_ref) {
	    var visible = _ref.visible;

	    return !!(this.props.visible || visible);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.props.visible) {
	      this.renderComponent({
	        onAfterClose: this.removeContainer,
	        onClose: function onClose() {},

	        visible: false
	      });
	    } else {
	      this.removeContainer();
	    }
	  },
	  getElement: function getElement(part) {
	    return this._component.getElement(part);
	  },
	  render: function render() {
	    return null;
	  }
	});

	exports["default"] = DialogWrap;
	module.exports = exports['default'];

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(6);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var LazyRenderBox = _react2["default"].createClass({
	  displayName: 'LazyRenderBox',

	  propTypes: {
	    className: _react.PropTypes.string,
	    visible: _react.PropTypes.bool,
	    hiddenClassName: _react.PropTypes.string
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return nextProps.hiddenClassName || nextProps.visible;
	  },
	  render: function render() {
	    var className = this.props.className;
	    if (this.props.hiddenClassName && !this.props.visible) {
	      className += ' ' + this.props.hiddenClassName;
	    }
	    var props = (0, _extends3["default"])({}, this.props);
	    delete props.hiddenClassName;
	    delete props.visible;
	    props.className = className;
	    return _react2["default"].createElement('div', props);
	  }
	});

	exports["default"] = LazyRenderBox;
	module.exports = exports['default'];

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(210);

/***/ },

/***/ 213:
/***/ function(module, exports) {

	'use strict';

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */

	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};

	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }

	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};

	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }

	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }

	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }

	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }

	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};

	module.exports = KeyCode;

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = getContainerRenderMixin;

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function defaultGetContainer() {
	  var container = document.createElement('div');
	  document.body.appendChild(container);
	  return container;
	}

	function getContainerRenderMixin(config) {
	  var _config$autoMount = config.autoMount;
	  var autoMount = _config$autoMount === undefined ? true : _config$autoMount;
	  var _config$autoDestroy = config.autoDestroy;
	  var autoDestroy = _config$autoDestroy === undefined ? true : _config$autoDestroy;
	  var isVisible = config.isVisible;
	  var getComponent = config.getComponent;
	  var _config$getContainer = config.getContainer;
	  var getContainer = _config$getContainer === undefined ? defaultGetContainer : _config$getContainer;


	  var mixin = void 0;

	  function _renderComponent(instance, componentArg, ready) {
	    if (!isVisible || instance._component || isVisible(instance)) {
	      if (!instance._container) {
	        instance._container = getContainer(instance);
	      }
	      _reactDom2["default"].unstable_renderSubtreeIntoContainer(instance, getComponent(instance, componentArg), instance._container, function callback() {
	        instance._component = this;
	        if (ready) {
	          ready.call(this);
	        }
	      });
	    }
	  }

	  if (autoMount) {
	    mixin = _extends({}, mixin, {
	      componentDidMount: function componentDidMount() {
	        _renderComponent(this);
	      },
	      componentDidUpdate: function componentDidUpdate() {
	        _renderComponent(this);
	      }
	    });
	  }

	  if (!autoMount || !autoDestroy) {
	    mixin = _extends({}, mixin, {
	      renderComponent: function renderComponent(componentArg, ready) {
	        _renderComponent(this, componentArg, ready);
	      }
	    });
	  }

	  function _removeContainer(instance) {
	    if (instance._container) {
	      var container = instance._container;
	      _reactDom2["default"].unmountComponentAtNode(container);
	      container.parentNode.removeChild(container);
	      instance._container = null;
	    }
	  }

	  if (autoDestroy) {
	    mixin = _extends({}, mixin, {
	      componentWillUnmount: function componentWillUnmount() {
	        _removeContainer(this);
	      }
	    });
	  } else {
	    mixin = _extends({}, mixin, {
	      removeContainer: function removeContainer() {
	        _removeContainer(this);
	      }
	    });
	  }

	  return mixin;
	}
	module.exports = exports['default'];

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports["default"] = function () {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var div = document.createElement('div');
	  document.body.appendChild(div);

	  props = (0, _objectAssign2["default"])({
	    iconClassName: 'kuma-icon-caution',
	    width: 300,
	    locale: 'zh-cn',
	    transitionName: defaultTransitionName
	  }, props);
	  var locale = _i18n2["default"][props.locale];

	  // 默认为 true，保持向下兼容
	  if (!('okCancel' in props)) {
	    props.okCancel = true;
	  }

	  function close() {
	    if (props.htmlClassName) {
	      if (supportClassList) {
	        htmlNode.classList.remove(props.htmlClassName);
	      } else {
	        var cls = htmlNode.className;
	        cls = cls.replace(new RegExp('\\s?' + props.htmlClassName), '');
	        htmlNode.className = cls;
	      }
	    }
	    _reactDom2["default"].unmountComponentAtNode(div);
	    document.body.removeChild(div);
	  }

	  if (props.timer) {
	    setTimeout(function () {
	      close();
	    }, props.timer);
	  }

	  function onCancel() {
	    var cancelFn = props.onCancel;
	    if (cancelFn) {
	      var ret = void 0;
	      if (cancelFn.length) {
	        ret = cancelFn(close);
	      } else {
	        ret = cancelFn();
	        if (!ret) {
	          close();
	        }
	      }
	      if (ret && ret.then) {
	        ret.then(close);
	      }
	    } else {
	      close();
	    }
	  }

	  function onOk() {
	    var okFn = props.onOk;
	    if (okFn) {
	      var ret = void 0;
	      if (okFn.length) {
	        ret = okFn(close);
	      } else {
	        ret = okFn();
	        if (!ret) {
	          close();
	        }
	      }
	      if (ret && ret.then) {
	        ret.then(close);
	      }
	    } else {
	      close();
	    }
	  }

	  var body = _react2["default"].createElement(
	    'div',
	    { className: 'kuma-confirm-body' },
	    _react2["default"].createElement('i', { className: 'kuma-icon ' + props.iconClassName }),
	    _react2["default"].createElement(
	      'span',
	      { className: 'kuma-confirm-title' },
	      props.title
	    ),
	    _react2["default"].createElement(
	      'div',
	      { className: 'kuma-confirm-content' },
	      props.content
	    )
	  );
	  var footer = void 0;

	  if (props.okCancel) {
	    footer = _react2["default"].createElement(
	      'div',
	      { className: 'kuma-confirm-action' },
	      _react2["default"].createElement(
	        _uxcoreButton2["default"],
	        { size: props.buttonSize || 'small', onClick: onOk },
	        locale.confirm
	      ),
	      _react2["default"].createElement(
	        _uxcoreButton2["default"],
	        { type: 'secondary', size: props.buttonSize || 'small', onClick: onCancel },
	        locale.cancel
	      )
	    );
	  } else {
	    footer = _react2["default"].createElement(
	      'div',
	      { className: 'kuma-confirm-action' },
	      _react2["default"].createElement(
	        _uxcoreButton2["default"],
	        { size: props.buttonSize || 'small', onClick: onOk },
	        locale.isee
	      )
	    );
	  }

	  if (props.htmlClassName) {
	    if (supportClassList) {
	      htmlNode.classList.add(props.htmlClassName);
	    } else {
	      htmlNode.className += ' ' + props.htmlClassName;
	    }
	  }

	  _reactDom2["default"].render(_react2["default"].createElement(
	    _Dialog2["default"],
	    {
	      prefixCls: 'kuma-dlg',
	      className: 'kuma-dlg-confirm',
	      onCancel: onCancel,
	      visible: true,
	      closable: true,
	      title: '',
	      footer: '',
	      transitionName: props.transitionName,
	      maskTransitionName: props.maskTransitionName,
	      width: props.width,
	      htmlClassName: props.htmlClassName
	    },
	    _react2["default"].createElement(
	      'div',
	      null,
	      body,
	      ' ',
	      footer
	    )
	  ), div);
	};

	var _uxcoreButton = __webpack_require__(137);

	var _uxcoreButton2 = _interopRequireDefault(_uxcoreButton);

	var _Dialog = __webpack_require__(135);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _i18n = __webpack_require__(136);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _objectAssign = __webpack_require__(5);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var htmlNode = document.documentElement;
	var supportClassList = !!htmlNode.classList;

	var defaultTransitionName = 'threeFallV';
	if ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object') {
	  if (navigator && /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
	    // safari animation bug when using threeFallV
	    defaultTransitionName = 'slideDown';
	  }
	}

	module.exports = exports['default'];

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Dialog Component for uxcore
	 * @author 
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */

	module.exports = __webpack_require__(135);

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var sizeMap = {
	    small: 'sm',
	    medium: '',
	    large: 'lg'
	},
	    typeMap = {
	    primary: 'primary',
	    secondary: 'secondary',
	    outline: 'outline',
	    disabled: 'disabled'
	},
	    clsPrefix = 'kuma-button';

	var Button = function (_React$Component) {
	    _inherits(Button, _React$Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, _React$Component.call(this, props));
	    }

	    Button.prototype.render = function render() {
	        var props = this.props;
	        var type = props.type;
	        var disabled = props.disabled;
	        var className = props.className;
	        var size = props.size;
	        var children = props.children;
	        var htmlType = props.htmlType;

	        var others = _objectWithoutProperties(props, ['type', 'disabled', 'className', 'size', 'children', 'htmlType']);

	        type = disabled ? 'disabled' : type;
	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	        var classNames = (0, _classnames2["default"])(clsPrefix, clsPrefix + '-' + typeMap[type], clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classNames,
	                disabled: disabled
	            }, others),
	            props.children
	        );
	    };

	    return Button;
	}(_react2["default"].Component);

	Button.displayName = 'uxcore-button';
	Button.propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _react2["default"].PropTypes.oneOf(['small', 'medium', 'large']),
	    /**
	     * @title 样式
	     */
	    style: _react2["default"].PropTypes.object,
	    /**
	    * @title 类型
	    */
	    type: _react2["default"].PropTypes.oneOf(['primary', 'secondary', 'outline', 'disabled']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _react2["default"].PropTypes.bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _react2["default"].PropTypes.string,
	    /**
	     * @title 内容
	     */
	    children: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string]),
	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _react2["default"].PropTypes.oneOf(['submit', 'button', 'reset'])
	};
	Button.defaultProps = {
	    size: 'medium',
	    type: 'primary',
	    disabled: false,
	    className: '',
	    children: 'Button',
	    htmlType: 'button'
	};

	module.exports = Button;

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ButtonGroup = function (_React$Component) {
		_inherits(ButtonGroup, _React$Component);

		function ButtonGroup(props) {
			_classCallCheck(this, ButtonGroup);

			return _possibleConstructorReturn(this, _React$Component.call(this, props));
		}

		ButtonGroup.prototype.render = function render() {
			return _react2["default"].createElement(
				'div',
				{ className: 'kuma-button-group' },
				this.props.children
			);
		};

		return ButtonGroup;
	}(_react2["default"].Component);

	ButtonGroup.displayName = 'ButtonGroup';
	ButtonGroup.propTypes = {};
	ButtonGroup.defaultProps = {};

	module.exports = ButtonGroup;

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(220);


/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(331);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	exports['default'] = _Button2['default'];
	module.exports = exports['default'];

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(334);


/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var sizeMap = {
	    small: 'sm',
	    medium: '',
	    large: 'lg'
	},
	    typeMap = {
	    primary: 'primary',
	    secondary: 'secondary',
	    outline: 'outline',
	    disabled: 'disabled'
	},
	    clsPrefix = 'kuma-button';

	var Button = function (_React$Component) {
	    _inherits(Button, _React$Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, _React$Component.call(this, props));
	    }

	    Button.prototype.render = function render() {
	        var props = this.props;
	        var type = props.type;
	        var disabled = props.disabled;
	        var className = props.className;
	        var size = props.size;
	        var children = props.children;
	        var htmlType = props.htmlType;

	        var others = _objectWithoutProperties(props, ['type', 'disabled', 'className', 'size', 'children', 'htmlType']);

	        type = disabled ? 'disabled' : type;
	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	        var classNames = (0, _classnames2["default"])(clsPrefix, clsPrefix + '-' + typeMap[type], clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classNames,
	                disabled: disabled
	            }, others),
	            props.children
	        );
	    };

	    return Button;
	}(_react2["default"].Component);

	Button.displayName = 'uxcore-button';
	Button.propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _react2["default"].PropTypes.oneOf(['small', 'medium', 'large']),
	    /**
	     * @title 样式
	     */
	    style: _react2["default"].PropTypes.object,
	    /**
	    * @title 类型
	    */
	    type: _react2["default"].PropTypes.oneOf(['primary', 'secondary', 'outline', 'disabled']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _react2["default"].PropTypes.bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _react2["default"].PropTypes.string,
	    /**
	     * @title 内容
	     */
	    children: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string]),
	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _react2["default"].PropTypes.oneOf(['submit', 'button', 'reset'])
	};
	Button.defaultProps = {
	    size: 'medium',
	    type: 'primary',
	    disabled: false,
	    className: '',
	    children: 'Button',
	    htmlType: 'button'
	};

	module.exports = Button;

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ButtonGroup = function (_React$Component) {
		_inherits(ButtonGroup, _React$Component);

		function ButtonGroup(props) {
			_classCallCheck(this, ButtonGroup);

			return _possibleConstructorReturn(this, _React$Component.call(this, props));
		}

		ButtonGroup.prototype.render = function render() {
			return _react2["default"].createElement(
				'div',
				{ className: 'kuma-button-group' },
				this.props.children
			);
		};

		return ButtonGroup;
	}(_react2["default"].Component);

	ButtonGroup.displayName = 'ButtonGroup';
	ButtonGroup.propTypes = {};
	ButtonGroup.defaultProps = {};

	module.exports = ButtonGroup;

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Button = __webpack_require__(332);

	var _Button2 = _interopRequireDefault(_Button);

	var _ButtonGroup = __webpack_require__(333);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Button Component for uxcore
	 * @author
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */

	_Button2["default"].ButtonGroup = _ButtonGroup2["default"];
	module.exports = _Button2["default"];

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Button = __webpack_require__(245);

	var _Button2 = _interopRequireDefault(_Button);

	var _Dialog = __webpack_require__(159);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h1',
	        { className: 'title' },
	        'Dialog'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'body' },
	        _react2.default.createElement(
	          _Button2.default,
	          { onClick: function onClick() {
	              return _Dialog2.default.success('操作成功');
	            } },
	          'success'
	        ),
	        '\xA0\xA0',
	        _react2.default.createElement(
	          _Button2.default,
	          { onClick: function onClick() {
	              return _Dialog2.default.error('失败信息失败信息失败信息失败信息');
	            } },
	          'error'
	        ),
	        '\xA0\xA0',
	        _react2.default.createElement(
	          _Button2.default,
	          { onClick: function onClick() {
	              return _Dialog2.default.alert('成功成功成功成功成功', function () {
	                console.log('点击了确定');
	              });
	            } },
	          'alert'
	        ),
	        '\xA0\xA0',
	        _react2.default.createElement(
	          _Button2.default,
	          { onClick: function onClick() {
	              return _Dialog2.default.confirm({ title: '询问', content: '说明说明说明' }, function () {
	                console.log('点击了确定');
	              }, function () {
	                console.log('点击了取消');
	              });
	            } },
	          'confirm'
	        )
	      )
	    );
	  }],
	  "meta": {
	    "order": 1,
	    "title": "使用介绍",
	    "filename": "posts/dialog/base.md"
	  },
	  "description": ["section", ["p", "主要处理 alert、confirm 提示信息。"]],
	  "toc": ["ul"],
	  "jscode": ["pre", {
	    "lang": "javascript",
	    "highlighted": "<span class=\"token keyword\">import</span> Dialog <span class=\"token keyword\">from</span> <span class=\"token string\">'@ali/cg-react/dist/Dialog'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'@ali/cg-react/dist/Button'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h1</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Dialog<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h1</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>body<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span>\n        <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> Dialog<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token string\">'操作成功'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        success\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span><span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span>\n        <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> Dialog<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'失败信息失败信息失败信息失败信息'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        error\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span><span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span>\n        <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> Dialog<span class=\"token punctuation\">.</span><span class=\"token function\">alert</span><span class=\"token punctuation\">(</span>\n        <span class=\"token string\">'成功成功成功成功成功'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'点击了确定'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        alert\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span><span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span>\n        <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> Dialog<span class=\"token punctuation\">.</span><span class=\"token function\">confirm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'询问'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'说明说明说明'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n            console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'点击了确定'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n            console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'点击了取消'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        confirm\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import Dialog from '@ali/cg-react/dist/Dialog';\nimport Button from '@ali/cg-react/dist/Button';\n\nReactDOM.render(\n<div>\n  <h1 className=\"title\">Dialog</h1>\n    <div className=\"body\">\n      <Button\n        onClick={() => Dialog.success('操作成功')}\n      >\n        success\n      </Button>\n      &nbsp;&nbsp;\n      <Button\n        onClick={() => Dialog.error('失败信息失败信息失败信息失败信息')}\n      >\n        error\n      </Button>\n      &nbsp;&nbsp;\n      <Button\n        onClick={() => Dialog.alert(\n        '成功成功成功成功成功',\n        () => {\n          console.log('点击了确定');\n        })\n        }\n      >\n        alert\n      </Button>\n      &nbsp;&nbsp;\n      <Button\n        onClick={() => Dialog.confirm({ title: '询问', content: '说明说明说明' },\n          () => {\n            console.log('点击了确定');\n          },\n          () => {\n            console.log('点击了取消');\n          }\n        )\n        }\n      >\n        confirm\n      </Button>\n    </div>\n\n</div>\n  , mountNode);"]]
	};

/***/ }

});