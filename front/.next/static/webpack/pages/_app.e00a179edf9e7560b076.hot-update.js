webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
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
    content: '416 정말어렵다 다신하기싫다 쿤 싫다 너무 어렵게한다 왜그렇게 하는지 모르겠다 진짜로 어렵게만들면 뭐 좋나 꼭 패스해야함 hard #hard #cse416',
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
  addPostLoading: false,
  addPostDone: false,
  addPostError: null
};
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
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

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });
    // 커맨트

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentDone: true
      });

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
      });

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUFDO0FBQ1ZDLE1BQUUsRUFBRSxDQURNO0FBRVZDLFFBQUksRUFBRTtBQUNKRCxRQUFFLEVBQUUsQ0FEQTtBQUVKRSxjQUFRLEVBQUU7QUFGTixLQUZJO0FBTVZDLFdBQU8sRUFBRSx5RkFOQztBQU9WQyxVQUFNLEVBQUUsQ0FBQztBQUNQQyxTQUFHLEVBQUU7QUFERSxLQUFELEVBRUw7QUFDREEsU0FBRyxFQUFFO0FBREosS0FGSyxFQUlMO0FBQ0RBLFNBQUcsRUFBRTtBQURKLEtBSkssQ0FQRTtBQWNWQyxZQUFRLEVBQUUsQ0FBQztBQUNUTCxVQUFJLEVBQUU7QUFDSkMsZ0JBQVEsRUFBRTtBQUROLE9BREc7QUFJVEMsYUFBTyxFQUFFO0FBSkEsS0FBRCxFQUtQO0FBQ0RGLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFO0FBRE4sT0FETDtBQUlEQyxhQUFPLEVBQUU7QUFKUixLQUxPO0FBZEEsR0FBRCxDQURlO0FBMkIxQkksWUFBVSxFQUFFLEVBM0JjO0FBNEIxQkMsZ0JBQWMsRUFBRSxLQTVCVTtBQTZCMUJDLGFBQVcsRUFBRSxLQTdCYTtBQThCMUJDLGNBQVksRUFBRTtBQTlCWSxDQUFyQjtBQWlDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFEO0FBQUEsU0FBVztBQUNoQ0MsUUFBSSxFQUFFUixnQkFEMEI7QUFFaENPLFFBQUksRUFBSkE7QUFGZ0MsR0FBWDtBQUFBLENBQWhCO0FBS0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0YsSUFBRDtBQUFBLFNBQVc7QUFDbkNDLFFBQUksRUFBRUwsbUJBRDZCO0FBRW5DSSxRQUFJLEVBQUpBO0FBRm1DLEdBQVg7QUFBQSxDQUFuQjtBQUtQLElBQU1HLFNBQVMsR0FBRztBQUNoQnJCLElBQUUsRUFBRSxDQURZO0FBRWhCRyxTQUFPLEVBQUUsU0FGTztBQUdoQkYsTUFBSSxFQUFFO0FBQ0pELE1BQUUsRUFBRSxDQURBO0FBRUpFLFlBQVEsRUFBRTtBQUZOLEdBSFU7QUFPaEJFLFFBQU0sRUFBRSxFQVBRO0FBUWhCRSxVQUFRLEVBQUU7QUFSTSxDQUFsQjs7QUFVQSxJQUFNZ0IsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCekIsWUFBeUI7QUFBQSxNQUFYMEIsTUFBVzs7QUFDaEQsVUFBUUEsTUFBTSxDQUFDTCxJQUFmO0FBQ0UsU0FBS1IsZ0JBQUw7QUFDRSw2Q0FDS1ksS0FETDtBQUVFZixzQkFBYyxFQUFFLElBRmxCO0FBR0VDLG1CQUFXLEVBQUUsS0FIZjtBQUlFQyxvQkFBWSxFQUFFO0FBSmhCOztBQU1GLFNBQUtFLGdCQUFMO0FBQ0UsNkNBQ0tXLEtBREw7QUFFRXhCLGlCQUFTLEdBQUdzQixTQUFILHNHQUFpQkUsS0FBSyxDQUFDeEIsU0FBdkIsRUFGWDtBQUdFUyxzQkFBYyxFQUFFLEtBSGxCO0FBSUVDLG1CQUFXLEVBQUU7QUFKZjs7QUFPRixTQUFLSSxnQkFBTDtBQUNFLDZDQUNLVSxLQURMO0FBRUVmLHNCQUFjLEVBQUUsS0FGbEI7QUFHRUUsb0JBQVksRUFBRWMsTUFBTSxDQUFDQztBQUh2QjtBQU1BOztBQUNGLFNBQUtYLG1CQUFMO0FBQ0UsNkNBQ0tTLEtBREw7QUFFRUcseUJBQWlCLEVBQUUsSUFGckI7QUFHRUMsc0JBQWMsRUFBRSxLQUhsQjtBQUlFQyx1QkFBZSxFQUFFO0FBSm5COztBQU1GLFNBQUtiLG1CQUFMO0FBQ0UsNkNBQ0tRLEtBREw7QUFFRUcseUJBQWlCLEVBQUUsS0FGckI7QUFHRUMsc0JBQWMsRUFBRTtBQUhsQjs7QUFNRixTQUFLWCxtQkFBTDtBQUNFLDZDQUNLTyxLQURMO0FBRUVHLHlCQUFpQixFQUFFLEtBRnJCO0FBR0VFLHVCQUFlLEVBQUVKLE1BQU0sQ0FBQ0M7QUFIMUI7O0FBTUY7QUFBUztBQUNQLGlDQUNLRixLQURMO0FBR0Q7QUFqREg7QUFtREQsQ0FwREQ7O0FBc0RlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmUwMGExNzllZGY5ZTc1NjBiMDc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW3tcclxuICAgIGlkOiAxLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmlja25hbWU6ICdQSycsXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogJzQxNiDsoJXrp5DslrTroLXri6Qg64uk7Iug7ZWY6riw7Iur64ukIOy/pCDsi6vri6Qg64SI66y0IOyWtOugteqyjO2VnOuLpCDsmZzqt7jroIfqsowg7ZWY64qU7KeAIOuqqOultOqyoOuLpCDsp4Tsp5zroZwg7Ja066C16rKM66eM65Ok66m0IOutkCDsoovrgpgg6rytIO2MqOyKpO2VtOyVvO2VqCBoYXJkICNoYXJkICNjc2U0MTYnLFxyXG4gICAgSW1hZ2VzOiBbe1xyXG4gICAgICBzcmM6ICdodHRwOi8vY3ViZWxpbmsubWUvbWVkaWEvYXJ0aWNsZS82RDI1QkVFOC1COEUyLTQ0MDUtOUZCNi1FOEFGREMyRTM0NDEuanBlZycsXHJcbiAgICB9LCB7XHJcbiAgICAgIHNyYzogJ2h0dHA6Ly9jdWJlbGluay5tZS9tZWRpYS9hcnRpY2xlLzMzMDNENUE2LTk2NkMtNDRGNS04QjFBLTk4RkFBN0I4MTM1Qy5qcGVnJyxcclxuICAgIH0sIHtcclxuICAgICAgc3JjOiAnaHR0cDovL2N1YmVsaW5rLm1lL21lZGlhL2FydGljbGUvMTYxMzE4NjI3MTExNS03LmpwZycsXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgbmlja25hbWU6ICduZXJvJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ0Nvb2xsbGxsJyxcclxuICAgIH0sIHtcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIG5pY2tuYW1lOiAnSGF3b24nLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiAnZ29vb29vZCcsXHJcbiAgICB9XSxcclxuICB9XSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gIGlkOiAyLFxyXG4gIGNvbnRlbnQ6ICdEVU1NTVkuJyxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAnUEtLSycsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufTtcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8g7Luk66eo7Yq4XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuXHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==