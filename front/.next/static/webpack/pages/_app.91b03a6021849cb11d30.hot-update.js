webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fortawesome/react-fontawesome/index.es.js ***!
  \*****************************************************************/
/*! exports provided: FontAwesomeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIcon", function() { return FontAwesomeIcon; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var spin = props.spin,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-spin': spin,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, ["style"]);

  mixins.attrs['style'] = _objectSpread2({}, mixins.attrs['style'], {}, existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2({}, mixins.attrs, {}, remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = "development" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }

  if (_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].icon) {
    return _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].icon(icon);
  } // if the icon is null, there's nothing to do


  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

function FontAwesomeIcon(_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["forwardedRef"]);

  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title,
      titleId = props.titleId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["icon"])(iconLookup, _objectSpread2({}, classes, {}, transform, {}, mask, {
    symbol: symbol,
    title: title,
    titleId: titleId
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: forwardedRef
  };
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  border: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mask: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  fixedWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  flip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['horizontal', 'vertical', 'both']),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  listItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  pull: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['right', 'left']),
  pulse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([0, 90, 180, 270]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  swapOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: '',
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement);




/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.css */ "./pages/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _leadership_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leadership.css */ "./pages/leadership.css");
/* harmony import */ var _leadership_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_leadership_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\PYUNGKANG HONG\\Desktop\\CSE416_capstone\\front\\pages\\_app.js",
    _this = undefined;





 // css 디자인부분



 // import your icons






var App = function App(_ref) {
  var Component = _ref.Component;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: "Study Board | Find your answer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_c = App;
App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_c2 = _store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(App));

var _c, _c2;

$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZS9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0U7QUFDN0I7QUFDVDs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0I7O0FBRWpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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O0FDclkzQjtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7Q0FJQTs7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxzQkFDVjtBQUFBLDRCQUNFLHNFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0Usc0VBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQSxrQkFEVTtBQUFBLENBQVo7O0tBQU1ELEc7QUFVTkEsR0FBRyxDQUFDRSxTQUFKLEdBQWdCO0FBQ2RELFdBQVMsRUFBRUUsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkM7QUFEbkIsQ0FBaEI7QUFJZSxxRUFBQUMsNkRBQU8sQ0FBQ0MsU0FBUixDQUFrQlAsR0FBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjkxYjAzYTYwMjE4NDljYjExZDMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZSwgaWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG4vLyBHZXQgQ1NTIGNsYXNzIGxpc3QgZnJvbSBhIHByb3BzIG9iamVjdFxuZnVuY3Rpb24gY2xhc3NMaXN0KHByb3BzKSB7XG4gIHZhciBfY2xhc3NlcztcblxuICB2YXIgc3BpbiA9IHByb3BzLnNwaW4sXG4gICAgICBwdWxzZSA9IHByb3BzLnB1bHNlLFxuICAgICAgZml4ZWRXaWR0aCA9IHByb3BzLmZpeGVkV2lkdGgsXG4gICAgICBpbnZlcnNlID0gcHJvcHMuaW52ZXJzZSxcbiAgICAgIGJvcmRlciA9IHByb3BzLmJvcmRlcixcbiAgICAgIGxpc3RJdGVtID0gcHJvcHMubGlzdEl0ZW0sXG4gICAgICBmbGlwID0gcHJvcHMuZmxpcCxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgcm90YXRpb24gPSBwcm9wcy5yb3RhdGlvbixcbiAgICAgIHB1bGwgPSBwcm9wcy5wdWxsOyAvLyBtYXAgb2YgQ1NTIGNsYXNzIG5hbWVzIHRvIHByb3BlcnRpZXNcblxuICB2YXIgY2xhc3NlcyA9IChfY2xhc3NlcyA9IHtcbiAgICAnZmEtc3Bpbic6IHNwaW4sXG4gICAgJ2ZhLXB1bHNlJzogcHVsc2UsXG4gICAgJ2ZhLWZ3JzogZml4ZWRXaWR0aCxcbiAgICAnZmEtaW52ZXJzZSc6IGludmVyc2UsXG4gICAgJ2ZhLWJvcmRlcic6IGJvcmRlcixcbiAgICAnZmEtbGknOiBsaXN0SXRlbSxcbiAgICAnZmEtZmxpcC1ob3Jpem9udGFsJzogZmxpcCA9PT0gJ2hvcml6b250YWwnIHx8IGZsaXAgPT09ICdib3RoJyxcbiAgICAnZmEtZmxpcC12ZXJ0aWNhbCc6IGZsaXAgPT09ICd2ZXJ0aWNhbCcgfHwgZmxpcCA9PT0gJ2JvdGgnXG4gIH0sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgXCJmYS1cIi5jb25jYXQoc2l6ZSksIHR5cGVvZiBzaXplICE9PSAndW5kZWZpbmVkJyAmJiBzaXplICE9PSBudWxsKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCBcImZhLXJvdGF0ZS1cIi5jb25jYXQocm90YXRpb24pLCB0eXBlb2Ygcm90YXRpb24gIT09ICd1bmRlZmluZWQnICYmIHJvdGF0aW9uICE9PSBudWxsICYmIHJvdGF0aW9uICE9PSAwKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCBcImZhLXB1bGwtXCIuY29uY2F0KHB1bGwpLCB0eXBlb2YgcHVsbCAhPT0gJ3VuZGVmaW5lZCcgJiYgcHVsbCAhPT0gbnVsbCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgJ2ZhLXN3YXAtb3BhY2l0eScsIHByb3BzLnN3YXBPcGFjaXR5KSwgX2NsYXNzZXMpOyAvLyBtYXAgb3ZlciBhbGwgdGhlIGtleXMgaW4gdGhlIGNsYXNzZXMgb2JqZWN0XG4gIC8vIHJldHVybiBhbiBhcnJheSBvZiB0aGUga2V5cyB3aGVyZSB0aGUgdmFsdWUgZm9yIHRoZSBrZXkgaXMgbm90IG51bGxcblxuICByZXR1cm4gT2JqZWN0LmtleXMoY2xhc3NlcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gY2xhc3Nlc1trZXldID8ga2V5IDogbnVsbDtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9KTtcbn1cblxuLy8gQ2FtZWxpemUgdGFrZW4gZnJvbSBodW1wc1xuLy8gaHVtcHMgaXMgY29weXJpZ2h0IMKpIDIwMTIrIERvbSBDaHJpc3RpZVxuLy8gUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuLy8gUGVyZm9ybWFudCB3YXkgdG8gZGV0ZXJtaW5lIGlmIG9iamVjdCBjb2VyY2VzIHRvIGEgbnVtYmVyXG5mdW5jdGlvbiBfaXNOdW1lcmljYWwob2JqKSB7XG4gIG9iaiA9IG9iaiAtIDA7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcblxuICByZXR1cm4gb2JqID09PSBvYmo7XG59XG5cbmZ1bmN0aW9uIGNhbWVsaXplKHN0cmluZykge1xuICBpZiAoX2lzTnVtZXJpY2FsKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuXG5cbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1tcXC1fXFxzXSsoLik/L2csIGZ1bmN0aW9uIChtYXRjaCwgY2hyKSB7XG4gICAgcmV0dXJuIGNociA/IGNoci50b1VwcGVyQ2FzZSgpIDogJyc7XG4gIH0pOyAvLyBFbnN1cmUgMXN0IGNoYXIgaXMgYWx3YXlzIGxvd2VyY2FzZVxuXG4gIHJldHVybiBzdHJpbmcuc3Vic3RyKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBzdHJpbmcuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHZhbCkge1xuICByZXR1cm4gdmFsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBzdHlsZVRvT2JqZWN0KHN0eWxlKSB7XG4gIHJldHVybiBzdHlsZS5zcGxpdCgnOycpLm1hcChmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLnRyaW0oKTtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHM7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwYWlyKSB7XG4gICAgdmFyIGkgPSBwYWlyLmluZGV4T2YoJzonKTtcbiAgICB2YXIgcHJvcCA9IGNhbWVsaXplKHBhaXIuc2xpY2UoMCwgaSkpO1xuICAgIHZhciB2YWx1ZSA9IHBhaXIuc2xpY2UoaSArIDEpLnRyaW0oKTtcbiAgICBwcm9wLnN0YXJ0c1dpdGgoJ3dlYmtpdCcpID8gYWNjW2NhcGl0YWxpemUocHJvcCldID0gdmFsdWUgOiBhY2NbcHJvcF0gPSB2YWx1ZTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnQoY3JlYXRlRWxlbWVudCwgZWxlbWVudCkge1xuICB2YXIgZXh0cmFQcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gKGVsZW1lbnQuY2hpbGRyZW4gfHwgW10pLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY29udmVydChjcmVhdGVFbGVtZW50LCBjaGlsZCk7XG4gIH0pO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBkb3Qtbm90YXRpb24gKi9cblxuICB2YXIgbWl4aW5zID0gT2JqZWN0LmtleXMoZWxlbWVudC5hdHRyaWJ1dGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgdmFyIHZhbCA9IGVsZW1lbnQuYXR0cmlidXRlc1trZXldO1xuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgYWNjLmF0dHJzWydjbGFzc05hbWUnXSA9IHZhbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuYXR0cmlidXRlc1snY2xhc3MnXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgYWNjLmF0dHJzWydzdHlsZSddID0gc3R5bGVUb09iamVjdCh2YWwpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCdhcmlhLScpID09PSAwIHx8IGtleS5pbmRleE9mKCdkYXRhLScpID09PSAwKSB7XG4gICAgICAgICAgYWNjLmF0dHJzW2tleS50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY2MuYXR0cnNbY2FtZWxpemUoa2V5KV0gPSB2YWw7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHtcbiAgICBhdHRyczoge31cbiAgfSk7XG5cbiAgdmFyIF9leHRyYVByb3BzJHN0eWxlID0gZXh0cmFQcm9wcy5zdHlsZSxcbiAgICAgIGV4aXN0aW5nU3R5bGUgPSBfZXh0cmFQcm9wcyRzdHlsZSA9PT0gdm9pZCAwID8ge30gOiBfZXh0cmFQcm9wcyRzdHlsZSxcbiAgICAgIHJlbWFpbmluZyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhleHRyYVByb3BzLCBbXCJzdHlsZVwiXSk7XG5cbiAgbWl4aW5zLmF0dHJzWydzdHlsZSddID0gX29iamVjdFNwcmVhZDIoe30sIG1peGlucy5hdHRyc1snc3R5bGUnXSwge30sIGV4aXN0aW5nU3R5bGUpO1xuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkodm9pZCAwLCBbZWxlbWVudC50YWcsIF9vYmplY3RTcHJlYWQyKHt9LCBtaXhpbnMuYXR0cnMsIHt9LCByZW1haW5pbmcpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNoaWxkcmVuKSkpO1xufVxuXG52YXIgUFJPRFVDVElPTiA9IGZhbHNlO1xuXG50cnkge1xuICBQUk9EVUNUSU9OID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbn0gY2F0Y2ggKGUpIHt9XG5cbmZ1bmN0aW9uIGxvZyAoKSB7XG4gIGlmICghUFJPRFVDVElPTiAmJiBjb25zb2xlICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIF9jb25zb2xlO1xuXG4gICAgKF9jb25zb2xlID0gY29uc29sZSkuZXJyb3IuYXBwbHkoX2NvbnNvbGUsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplSWNvbkFyZ3MoaWNvbikge1xuICAvLyB0aGlzIGhhcyBldmVyeXRoaW5nIHRoYXQgaXQgbmVlZHMgdG8gYmUgcmVuZGVyZWQgd2hpY2ggbWVhbnMgaXQgd2FzIHByb2JhYmx5IGltcG9ydGVkXG4gIC8vIGRpcmVjdGx5IGZyb20gYW4gaWNvbiBzdmcgcGFja2FnZVxuICBpZiAoaWNvbiAmJiBfdHlwZW9mKGljb24pID09PSAnb2JqZWN0JyAmJiBpY29uLnByZWZpeCAmJiBpY29uLmljb25OYW1lICYmIGljb24uaWNvbikge1xuICAgIHJldHVybiBpY29uO1xuICB9XG5cbiAgaWYgKHBhcnNlLmljb24pIHtcbiAgICByZXR1cm4gcGFyc2UuaWNvbihpY29uKTtcbiAgfSAvLyBpZiB0aGUgaWNvbiBpcyBudWxsLCB0aGVyZSdzIG5vdGhpbmcgdG8gZG9cblxuXG4gIGlmIChpY29uID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gaWYgdGhlIGljb24gaXMgYW4gb2JqZWN0IGFuZCBoYXMgYSBwcmVmaXggYW5kIGFuIGljb24gbmFtZSwgcmV0dXJuIGl0XG5cblxuICBpZiAoaWNvbiAmJiBfdHlwZW9mKGljb24pID09PSAnb2JqZWN0JyAmJiBpY29uLnByZWZpeCAmJiBpY29uLmljb25OYW1lKSB7XG4gICAgcmV0dXJuIGljb247XG4gIH0gLy8gaWYgaXQncyBhbiBhcnJheSB3aXRoIGxlbmd0aCBvZiB0d29cblxuXG4gIGlmIChBcnJheS5pc0FycmF5KGljb24pICYmIGljb24ubGVuZ3RoID09PSAyKSB7XG4gICAgLy8gdXNlIHRoZSBmaXJzdCBpdGVtIGFzIHByZWZpeCwgc2Vjb25kIGFzIGljb24gbmFtZVxuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXg6IGljb25bMF0sXG4gICAgICBpY29uTmFtZTogaWNvblsxXVxuICAgIH07XG4gIH0gLy8gaWYgaXQncyBhIHN0cmluZywgdXNlIGl0IGFzIHRoZSBpY29uIG5hbWVcblxuXG4gIGlmICh0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4OiAnZmFzJyxcbiAgICAgIGljb25OYW1lOiBpY29uXG4gICAgfTtcbiAgfVxufVxuXG4vLyBjcmVhdGVzIGFuIG9iamVjdCB3aXRoIGEga2V5IG9mIGtleVxuLy8gYW5kIGEgdmFsdWUgb2YgdmFsdWVcbi8vIGlmIGNlcnRhaW4gY29uZGl0aW9ucyBhcmUgbWV0XG5mdW5jdGlvbiBvYmplY3RXaXRoS2V5KGtleSwgdmFsdWUpIHtcbiAgLy8gaWYgdGhlIHZhbHVlIGlzIGEgbm9uLWVtcHR5IGFycmF5XG4gIC8vIG9yIGl0J3Mgbm90IGFuIGFycmF5IGJ1dCBpdCBpcyB0cnV0aHlcbiAgLy8gdGhlbiBjcmVhdGUgdGhlIG9iamVjdCB3aXRoIHRoZSBrZXkgYW5kIHRoZSB2YWx1ZVxuICAvLyBpZiBub3QsIHJldHVybiBhbiBlbXB0eSBhcnJheVxuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUgPyBfZGVmaW5lUHJvcGVydHkoe30sIGtleSwgdmFsdWUpIDoge307XG59XG5cbmZ1bmN0aW9uIEZvbnRBd2Vzb21lSWNvbihfcmVmKSB7XG4gIHZhciBmb3J3YXJkZWRSZWYgPSBfcmVmLmZvcndhcmRlZFJlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImZvcndhcmRlZFJlZlwiXSk7XG5cbiAgdmFyIGljb25BcmdzID0gcHJvcHMuaWNvbixcbiAgICAgIG1hc2tBcmdzID0gcHJvcHMubWFzayxcbiAgICAgIHN5bWJvbCA9IHByb3BzLnN5bWJvbCxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgICB0aXRsZUlkID0gcHJvcHMudGl0bGVJZDtcbiAgdmFyIGljb25Mb29rdXAgPSBub3JtYWxpemVJY29uQXJncyhpY29uQXJncyk7XG4gIHZhciBjbGFzc2VzID0gb2JqZWN0V2l0aEtleSgnY2xhc3NlcycsIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NMaXN0KHByb3BzKSksIF90b0NvbnN1bWFibGVBcnJheShjbGFzc05hbWUuc3BsaXQoJyAnKSkpKTtcbiAgdmFyIHRyYW5zZm9ybSA9IG9iamVjdFdpdGhLZXkoJ3RyYW5zZm9ybScsIHR5cGVvZiBwcm9wcy50cmFuc2Zvcm0gPT09ICdzdHJpbmcnID8gcGFyc2UudHJhbnNmb3JtKHByb3BzLnRyYW5zZm9ybSkgOiBwcm9wcy50cmFuc2Zvcm0pO1xuICB2YXIgbWFzayA9IG9iamVjdFdpdGhLZXkoJ21hc2snLCBub3JtYWxpemVJY29uQXJncyhtYXNrQXJncykpO1xuICB2YXIgcmVuZGVyZWRJY29uID0gaWNvbihpY29uTG9va3VwLCBfb2JqZWN0U3ByZWFkMih7fSwgY2xhc3Nlcywge30sIHRyYW5zZm9ybSwge30sIG1hc2ssIHtcbiAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgdGl0bGVJZDogdGl0bGVJZFxuICB9KSk7XG5cbiAgaWYgKCFyZW5kZXJlZEljb24pIHtcbiAgICBsb2coJ0NvdWxkIG5vdCBmaW5kIGljb24nLCBpY29uTG9va3VwKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBhYnN0cmFjdCA9IHJlbmRlcmVkSWNvbi5hYnN0cmFjdDtcbiAgdmFyIGV4dHJhUHJvcHMgPSB7XG4gICAgcmVmOiBmb3J3YXJkZWRSZWZcbiAgfTtcbiAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICBpZiAoIUZvbnRBd2Vzb21lSWNvbi5kZWZhdWx0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZXh0cmFQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY29udmVydEN1cnJ5KGFic3RyYWN0WzBdLCBleHRyYVByb3BzKTtcbn1cbkZvbnRBd2Vzb21lSWNvbi5kaXNwbGF5TmFtZSA9ICdGb250QXdlc29tZUljb24nO1xuRm9udEF3ZXNvbWVJY29uLnByb3BUeXBlcyA9IHtcbiAgYm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtYXNrOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXksIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgZml4ZWRXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gIGludmVyc2U6IFByb3BUeXBlcy5ib29sLFxuICBmbGlwOiBQcm9wVHlwZXMub25lT2YoWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ2JvdGgnXSksXG4gIGljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBsaXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIHB1bGw6IFByb3BUeXBlcy5vbmVPZihbJ3JpZ2h0JywgJ2xlZnQnXSksXG4gIHB1bHNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm90YXRpb246IFByb3BUeXBlcy5vbmVPZihbMCwgOTAsIDE4MCwgMjcwXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ2xnJywgJ3hzJywgJ3NtJywgJzF4JywgJzJ4JywgJzN4JywgJzR4JywgJzV4JywgJzZ4JywgJzd4JywgJzh4JywgJzl4JywgJzEweCddKSxcbiAgc3BpbjogUHJvcFR5cGVzLmJvb2wsXG4gIHN5bWJvbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYW5zZm9ybTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBzd2FwT3BhY2l0eTogUHJvcFR5cGVzLmJvb2xcbn07XG5Gb250QXdlc29tZUljb24uZGVmYXVsdFByb3BzID0ge1xuICBib3JkZXI6IGZhbHNlLFxuICBjbGFzc05hbWU6ICcnLFxuICBtYXNrOiBudWxsLFxuICBmaXhlZFdpZHRoOiBmYWxzZSxcbiAgaW52ZXJzZTogZmFsc2UsXG4gIGZsaXA6IG51bGwsXG4gIGljb246IG51bGwsXG4gIGxpc3RJdGVtOiBmYWxzZSxcbiAgcHVsbDogbnVsbCxcbiAgcHVsc2U6IGZhbHNlLFxuICByb3RhdGlvbjogbnVsbCxcbiAgc2l6ZTogbnVsbCxcbiAgc3BpbjogZmFsc2UsXG4gIHN5bWJvbDogZmFsc2UsXG4gIHRpdGxlOiAnJyxcbiAgdHJhbnNmb3JtOiBudWxsLFxuICBzd2FwT3BhY2l0eTogZmFsc2Vcbn07XG52YXIgY29udmVydEN1cnJ5ID0gY29udmVydC5iaW5kKG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQpO1xuXG5leHBvcnQgeyBGb250QXdlc29tZUljb24gfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuLy8gY3NzIOuUlOyekOyduOu2gOu2hFxyXG5pbXBvcnQgJy4vbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4vbGVhZGVyc2hpcC5jc3MnO1xyXG5cclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcblxyXG4vLyBpbXBvcnQgeW91ciBpY29uc1xyXG5pbXBvcnQgeyBmYUNvZGUsIGZhSGlnaGxpZ2h0ZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPHRpdGxlPlN0dWR5IEJvYXJkIHwgRmluZCB5b3VyIGFuc3dlcjwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8Q29tcG9uZW50IC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9