webpackHotUpdate_N_E("pages/studyBoard",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'PK'
    },
    content: '416 toㅁㄴㅇㄻㄴㅇ런ㅁ아럼ㄴ애ㅑ런매야러매냥러ㅐㄴ먕러ㅐㄴ먕러ㅐㄴ먕러ㅐㄴ먕러ㅐㄴ먕런매ㅑㅇ러ㅐㅑㄴㅇㄹ머ㅐㅑ럼내ㅑ럼내야런매ㅑㅇ러ㅐㄴ먕러ㅐㅑㅇㄴ러ㅐ먕ㄴ러맹냐러ㅐㄴ먕러맹냐러ㅐ먕ㄴ러ㅐㅇㄴ먀러ㅐㄴ먕러ㅐㅇㄴ먀러ㅐㅇㄴ먀런매야렁ㄴ매ㅑ러ㅐㅇㄴ먀러맹냐러ㅐㅇ냐런매야런매야럼내ㅑㅇ럼ㅇ내ㅑ렁ㄴ매ㅑ런매야런ㅁ애ㅑ런매ㅑㅇ럼내ㅑㅇ런매야럼ㅇ내ㅑ럼낼ㅇo hard #hard #cse416',
    Images: [{
      src: 'http://cubelink.me/media/article/6D25BEE8-B8E2-4405-9FB6-E8AFDC2E3441.jpeg'
    }, {
      src: 'http://cubelink.me/media/article/3303D5A6-966C-44F5-8B1A-98FAA7B8135C.jpeg'
    }, {
      src: 'http://cubelink.me/media/article/1613186271115-7.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: 'Coolllll'
    }, {
      User: {
        nickname: 'Hawon'
      },
      content: 'goooood'
    }]
  }],
  imagePaths: [],
  postAdded: false
};
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: 'DUMMMY.',
  User: {
    id: 1,
    nickname: 'PKKK'
  },
  Images: [],
  Comments: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
          postAdded: true
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0Iiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRSxDQUFDO0FBQ1JDLE1BQUUsRUFBRSxDQURJO0FBRVJDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxjQUFRLEVBQUU7QUFGUixLQUZFO0FBTVJDLFdBQU8sRUFBRSxzTUFORDtBQU9SQyxVQUFNLEVBQUUsQ0FBQztBQUNMQyxTQUFHLEVBQUU7QUFEQSxLQUFELEVBRUw7QUFDQ0EsU0FBRyxFQUFFO0FBRE4sS0FGSyxFQUlMO0FBQ0NBLFNBQUcsRUFBRTtBQUROLEtBSkssQ0FQQTtBQWNSQyxZQUFRLEVBQUUsQ0FBQztBQUNQTCxVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BREM7QUFJUEMsYUFBTyxFQUFFO0FBSkYsS0FBRCxFQUtQO0FBQ0NGLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEUDtBQUlDQyxhQUFPLEVBQUU7QUFKVixLQUxPO0FBZEYsR0FBRCxDQURhO0FBMkJ4QkksWUFBVSxFQUFFLEVBM0JZO0FBNEJ4QkMsV0FBUyxFQUFFO0FBNUJhLENBQXJCO0FBOEJQLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNPLElBQU1DLE9BQU8sR0FBRztBQUNuQkMsTUFBSSxFQUFFRjtBQURhLENBQWhCO0FBSVAsSUFBTUcsU0FBUyxHQUFHO0FBQ2RaLElBQUUsRUFBRSxDQURVO0FBRWRHLFNBQU8sRUFBRSxTQUZLO0FBR2RGLE1BQUksRUFBRTtBQUNGRCxNQUFFLEVBQUUsQ0FERjtBQUVGRSxZQUFRLEVBQUU7QUFGUixHQUhRO0FBT2RFLFFBQU0sRUFBRSxFQVBNO0FBUWRFLFVBQVEsRUFBRTtBQVJJLENBQWxCO0FBVWUsMkVBQWtDO0FBQUEsTUFBakNPLEtBQWlDLHVFQUF6QmYsWUFBeUI7QUFBQSxNQUFYZ0IsTUFBVzs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDSCxJQUFmO0FBQ0ksU0FBS0YsUUFBTDtBQUFlO0FBQ1gsK0NBQ09JLEtBRFA7QUFFSWQsbUJBQVMsR0FBR2EsU0FBSCxzR0FBaUJDLEtBQUssQ0FBQ2QsU0FBdkIsRUFGYjtBQUdJUyxtQkFBUyxFQUFFO0FBSGY7QUFLSDs7QUFDRDtBQUFTO0FBQ0wsaUNBQ09LLEtBRFA7QUFHSDtBQVpMO0FBY0gsQ0FmRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdHVkeUJvYXJkLmVkZWZmYmJhNTBkYjQwN2Y3OWVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAnUEsnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogJzQxNiB0b+OFgeOEtOOFh+OEu+OEtOOFh+ufsOOFgeyVhOufvOOEtOyVoOOFkeufsOunpOyVvOufrOunpOuDpeufrOOFkOOEtOuoleufrOOFkOOEtOuoleufrOOFkOOEtOuoleufrOOFkOOEtOuoleufrOOFkOOEtOuoleufsOunpOOFkeOFh+ufrOOFkOOFkeOEtOOFh+OEueuouOOFkOOFkeufvOuCtOOFkeufvOuCtOyVvOufsOunpOOFkeOFh+ufrOOFkOOEtOuoleufrOOFkOOFkeOFh+OEtOufrOOFkOuoleOEtOufrOunueuDkOufrOOFkOOEtOuoleufrOunueuDkOufrOOFkOuoleOEtOufrOOFkOOFh+OEtOuogOufrOOFkOOEtOuoleufrOOFkOOFh+OEtOuogOufrOOFkOOFh+OEtOuogOufsOunpOyVvOuggeOEtOunpOOFkeufrOOFkOOFh+OEtOuogOufrOunueuDkOufrOOFkOOFh+uDkOufsOunpOyVvOufsOunpOyVvOufvOuCtOOFkeOFh+ufvOOFh+uCtOOFkeuggeOEtOunpOOFkeufsOunpOyVvOufsOOFgeyVoOOFkeufsOunpOOFkeOFh+ufvOuCtOOFkeOFh+ufsOunpOyVvOufvOOFh+uCtOOFkeufvOuCvOOFh28gaGFyZCAjaGFyZCAjY3NlNDE2JyxcclxuICAgICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHA6Ly9jdWJlbGluay5tZS9tZWRpYS9hcnRpY2xlLzZEMjVCRUU4LUI4RTItNDQwNS05RkI2LUU4QUZEQzJFMzQ0MS5qcGVnJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHA6Ly9jdWJlbGluay5tZS9tZWRpYS9hcnRpY2xlLzMzMDNENUE2LTk2NkMtNDRGNS04QjFBLTk4RkFBN0I4MTM1Qy5qcGVnJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHA6Ly9jdWJlbGluay5tZS9tZWRpYS9hcnRpY2xlLzE2MTMxODYyNzExMTUtNy5qcGcnLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAnQ29vbGxsbGwnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICdIYXdvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdnb29vb29kJyxcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbn07XHJcbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XHJcbiAgICB0eXBlOiBBRERfUE9TVCxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkOiAyLFxyXG4gICAgY29udGVudDogJ0RVTU1NWS4nLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAnUEtLSycsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbXSxcclxuICAgIENvbW1lbnRzOiBbXSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=