webpackHotUpdate_N_E("pages/studyBoard",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\PYUNGKANG HONG\\Desktop\\CSE416_capstone\\front\\components\\PostForm.js",
    _this = undefined,
    _s = $RefreshSig$();







var PostForm = function PostForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths,
      postAdded = _useSelector.postAdded;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      text = _useState[0],
      setText = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (postAdded) {
      setText('');
    }
  }, [postAdded]);
  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setText(e.target.value);
  }, []); //리듀서에있는 디스페치 포스트를 가져와서 ADD해준다 ADDPOST는 객체다다

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["addPost"]);
    setText('');
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "Write your Question"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "file",
        multiple: true,
        hidden: true,
        ref: imageInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: onClickImageUpload,
        children: "Image Upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        style: {
          "float": 'right'
        },
        htmlType: "submit",
        children: "POST"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: imagePaths.map(function (v) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          style: {
            display: 'inline-block'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: 'http://localhost:3000/' + v,
            style: {
              width: '200px'
            },
            alt: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 29
          }, _this)]
        }, v, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, _this);
};

_s(PostForm, "KS8sw6YOHyOjSgoytHLTIUl8z+Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPost: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'pk'
    },
    content: 'this is first #hastage',
    Images: [{
      src: 'data:image/jpeg;base64,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'
    }],
    Comments: [{
      user: {
        nickname: 'pk'
      },
      content: 'thisis new'
    }, {
      user: {
        nickname: 'hero'
      },
      content: 'thisis new!@#!@$'
    }]
  }],
  //이미지 경로
  imagePaths: [],
  postAdded: false
};
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: 'dummpy',
  User: {
    id: 1,
    nickname: 'pp'
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPost)),
        postAdded: true
      });

    default:
      return state;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImNsaWNrIiwidXNlRWZmZWN0Iiwib25DaGFuZ2VUZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJhZGRQb3N0IiwibWFyZ2luIiwibWFwIiwidiIsImRpc3BsYXkiLCJ3aWR0aCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0IiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJ1c2VyIiwiQUREX1BPU1QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwicmVkdWNlciIsImFjdGlvbiIsIm1haW5Qb3N0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ25CLHFCQUFrQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBN0M7QUFBQSxNQUFRQyxVQUFSLGdCQUFRQSxVQUFSO0FBQUEsTUFBb0JDLFNBQXBCLGdCQUFvQkEsU0FBcEI7O0FBQ0Esa0JBQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFX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UDtBQVJSO0FBVUgsQ0FYRDs7QUFhZXdDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0dWR5Qm9hcmQuNTE1OTNiNTNkMjVmNmFjN2RhMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYWRkUG9zdCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlUGF0aHMsIHBvc3RBZGRlZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocG9zdEFkZGVkKSB7XHJcbiAgICAgICAgICAgIHNldFRleHQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwb3N0QWRkZWRdKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8v66as65OA7ISc7JeQ7J6I64qUIOuUlOyKpO2OmOy5mCDtj6zsiqTtirjrpbwg6rCA7KC47JmA7IScIEFERO2VtOykgOuLpCBBRERQT1NU64qUIOqwneyytOuLpOuLpFxyXG4gICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhZGRQb3N0KTtcclxuICAgICAgICBzZXRUZXh0KCcnKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCAyMHB4JyB9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBRdWVzdGlvblwiIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7LypyZWbqsIAg7Iuk7KCcIOuPhOuplOyduOyXkCDsoJHqt7ztlZjripTqsbAg7J2066+47KeAIOyduO2Si+uEo+ycvOugpOuptCDtjIzsnbztg4DsnoXsnLzroZwqL31cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+SW1hZ2UgVXBsb2FkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj5QT1NUPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgey8q7J2066+47KeA6rK966Gc66W8IOuwmOuzteusuOuPjOugpOyEnCDsl4XroZzrk5ztlZjripTqsbDsnoQqL31cclxuICAgICAgICAgICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cDovL2xvY2FsaG9zdDozMDAwLycgKyB2fSBzdHlsZT17eyB3aWR0aDogJzIwMHB4JyB9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+RGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdDpbe1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOidwaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAndGhpcyBpcyBmaXJzdCAjaGFzdGFnZScsXHJcbiAgICAgICAgSW1hZ2VzOlt7XHJcbiAgICAgICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9IQ0JjVkZSVVdFaFFTR0JVYUdSVVlIQmtZSFIwY0VoZ1dHaFlhR1JrY0hCWWVMaTRvSEI0c0h4a1lKanNtS3k4eE5UbzFHaVE3UURzMlB5NDBOVEVCREF3TUVBOFFIaElTSHpnckpTczBQVFEwTkQ4ME1UWTZORFEwTkRRMFBUWTNQelEwTkRZMFB6UTBORFEwTkQwL05EUTBORFEwTkQwME5qWTBNVFEwTlAvQUFCRUlBTUlCQXdNQklnQUNFUUVERVFIL3hBQWJBQUVBQWdNQkFRQUFBQUFBQUFBQUFBQUFCQVVDQXdZQkIvL0VBRUFRQUFJQkFnSUhCd1FCQVFRSkJRQUFBQUVDQUFNUkVpRUVCUk14UVZHaEJoUWlVbUZpMFRKeGdaR3g0VUpUYzVJV0l6TTBncUt5d2NJSEpITGk4UC9FQUJvQkFRQUNBd0VBQUFBQUFBQUFBQUFBQUFBREJBRUNCUWIveEFBbkVRRUFBZ0lCQXdRQ0FnTUFBQUFBQUFBQUFRSURFVEVFRWlGQlVXR3hFeUtCa1JRamNmL2FBQXdEQVFBQ0VRTVJBRDhBK3pSRVFFUkVCRVJBUkUwNlJYVkZaMk5sVUVrOGdJR1prV3BwOUpUWnF0TUhrV0YvMU9HMDNXdGZUWDJkQU1xOEZVMnVQTXpmOXQwbVVleERFZU9zb1BJS1dIN0pFdWY0MUtSL3R0cWZiVzFiODFwbjlJMzh1em8xbFlYVmxZY3dRUit4Tm9uenpTT3oyazZNd2VneGJNQzZYRDUrWmVJL2M3dlFOcHMxMjJIYVdHTER1dklzMkt0SWlhMmlZbiswbU85clRNV2pVcFVSRWdTa1JFQkU4bnNCRVJBOG5oTnA3T0w3ZjFDTmpZa2Y3VGNTUEpOYlcxRzBlUy9aV2JPMEU5a0xWUi8xTkgvRHAvOEFTSk1temVKM0czc1JFTWtSRUJFUkFSRVFFUkVCRVJBUkVRRVJFRHljajI4MG9xbE9tRDliRmo5bHRZZnNqOVRycHhmL0FLZ1VUYWkvQUZsUDNOaVA0TXNkSkVUbXJ0RDFFekdPZExUc2pvQXAwRmEzaWNZeWVOajlJL1g4bVhiMUFvdVNBT1pOaCt6S3pzenBJZlJxUkc4S0ZQb1Z5K0QrWnUxMXEvdkZKcWVMRGNxYjJ2OEFTd082NDVUVEw1eXozVHJ6NVpwNHBHdlpJNzdUL3ZLZitZVDFOTFFrQU9oSjNBTUNUK0p5UCtncC92eC9rLzhBdEtqVk9pWWROUkZiRmdxRVlnTFh3ZzN5ejVHV0k2ZkZhSm10OTZqZkNPY3Q0bUltT2ZsM091TmRVOUdVR29UaU81Um14K0I2bWN5ZTN2aS8ySGgvK2ZpL1ZyU3NlbWRNMDlrY25EamRmc2lYeUhLOXVzNzlkVzBRbXpGS25ndGEyRVduSzNlOHoyenFJZHUyUEIwOWF4a2ladE1ibnpyVUkycGRlMHRKQndFaGhtVmI2aDZqbUpQMG5TVlJjVEhMcVQ2VDV6ckNqM1BUVjJaT0VGV0E5akd6S2VZeWJwT3AxZ3hlc0Z2a0NvSDV0YzlaVzZucTdZc2ZpUDIzcVA4QXJUTDB0SXRXMVovV1kya3RyelBKTXZVNXlib09zbHFaWmc4angreG0rbG9pS3Rnb3Q5djU1eWkxcG8reWRXVEsrWUE0RUgrSlh5Wk9xNmFJeTN0RXg2eHJqZnNpclhIa250ckdwOUY5cFdrclRVczdCVkc4bWNuWDdiZ040S0pLODJiQ1QrQURJM2JiVFN6VWtIMDRBOXViTmNEOUFkVE9uMVRxZW5SUlZDS1dzTVRFQXN4dG5tZUhwUFNZNjRxWXE1THh1YmNSOE9iYWIydk5henJYS25idHFtRlNLYmxqZTYzQXcydFlnOFFmKzBnOXRhK09ub3IydGlWbXR5eEJEYS81bXJ0bnF0YVRJOU1BQjhRWlJrdUlXTndPRjdtZWRxLzkzMEwvQUEvL0FCU1I5WGp4UmhyZWtjcStXMSsyMFc5TmZicktHbHBSMGFtOVJzS2luVHovQU9FWkFjVE9kMGp0NEFiSlFKWG16V0ovQUJsWjJ0MG9sZEZwZytGYUtNUndKWmJBbjdBZFRKNmE2MFRSVUNVVUZWN0RFMWhZbmpkanYrd0U1MXNrek9vblVROUgwM1MwakRXOXF6YVo0amlJajVsZTZqN1MwOUo4TmlsUVo0VzRqbUR4bDlQbW1ydFZhUldyQ3ZUcExSR0lNTDNWUnpBWGVRZnRiT2ZTbE1seFd0YVBLdjFtTEhqdkhaUFBNYzZuMlp4UEo3SlZRaUlnSWlJQ0lpQWlJZ0lpSUNJaUI1SU90TkFXdlRhbSs0N2p4Qkc0ajh5ZEVSTXhNVERFeEV4cVh6YlJOS3JhQlZaWFc2bmV2OWxod1pXNS93RDR6cDZIYTdSMkYyWmxQSXFTZitXOHVkSzBSS2k0YWlLeThtRjVTMU94K2prM0FkZlFObDF2THM1Y09YemtpWW4zajFWb3g1S2VLVHVQbFg2MjdZTGhLNk9HeEhMR3dzQjlodkorOHo3RzZtWlNhOVVFTXdzb1AxV085ajZuNWx2b1BaMmhTSVpVeE1OeFk0aVB0ZklTM0FtdDg5SzBtbUtOUlBNenpMYXVLMDI3cnp4eEQ1dHJWSDBMVE5xQmRXWm5ISmczMXJmbUxucE9vVHRkb3hYRVhJUGtzY1YrWEw4M3RMalRkRFNxcFdvZ1ljano1ZzhES005aTlIdmUxUzNseFpmUFdjM3N2V1o3ZGFsMlp6NE0xYS9taVltSTF1UFdITVVjZW42WUd3a0tDcFB0cHFjZ1R6UDhtZFhyYWlhZFFWQnVKQnZ5STRkSmJhQm9GT2l1R2tvVWVtOG5tVHZKa21wVERBaGdDT1IzU3ZuNlA4dU9ZbWRUdmNUOHRNdlZ4YThkc2FyRWFpUGhBcGEzcGxic2NKNGdneXEwdXFhOVFCUWJiaDl1Sk10WDFOVEo0ajBCeWtyUjlFUkJaVkE1bmlmeksxdW02clBFVXl6RVY5ZGN6cEZHVEZUOXFiMzlPUzdiYXROa3FxQ1FxaEc5QUQ0VDlzeVAxSjJxdTFkRmtHMmJBNEFEWEJJTmh2Qkg4U3oxenJXbm82amFnbkZjQlFMNHVZenk0OFpWMGV6K2lhUW9xVThRVTUyVnNnZUlJenNmU2VrcE5Kd3hYTEU2amlZK25NdEZvdk0wbU56ekRudTFHdWwwaGxDWHdKZXhJc1dKdGMrZ3lranRWL3UraGY0Zi9nazE5cXFOR20xT2pRVVhYRVd0bXhac0lBSjRuTHJPc2ZVMUtwVG9wWFhFVVFBREVRZnBVTnVPZTRUUFdSV2NGSXBHdWRiKzBYWmE4M2pmbnc1YnRYcTVqUjBldW91QlNSVzlCWUVIN1prZnFiZXpPc05EcG9DNmhhbzNzd0xYUE5XenNQVEtkc3RCUWdTd3doUXRqbU1JRnJHKy9LVVdrOWtOR1k0Z3JKZmdwc3Y2TjdmaWNxY1ZvdDNWMS9MdlllcXBPR01PWGNSSHJIMGpEdGlyVmxwMDZiTWpFTGlIMUVrN3dwL3MvZWRZSlZhczFKUm9aMDA4Unl4TWJ0YmxjN3Z4TGFTMGlkZVZiUE9LYlIrS0ppSTkvVjdQWWlib1NJaUFpSWdJaUlDSmppakZBeWlZNG94UU1vbU9LTVVES0pqaWpGQXlpWTRveFFNb21PS01VREtKamlqRkE5bnN4eFJpZ1pUeTA4eFJpZ1F0WjZ1U3VoUnhsdkJHOEhnUVp5TDlrTklRblpWbHduMVpEYjFBQm5kWGk4bHg5UmZIR3F6NDlrVjhWYlR1ZVhMYWs3S0Ntd2VzMkpnYmdDK0FOekpQMUdYV242TXpNcFRnTEVnMk5qVXBrNWoycTBuM2k4eGZMZTl1NjArVzFjY1ZqVUtSOUNxZ1dCWWpqNGlXM3ZhMXp5S2ZyY2JUU0tWWWtMZDhZVTRtdTJBNUpZRGNML1VMam52MzI2SEZGeE1SZWZabnRoVlVOSHFCbEpMRVhOd1Q0Vlc3SGNEdnpHL0VQWEs4dDU1ZU1VMW1kc3hHbVVUSEZHS1laWlJNY1VZb0dVVEhGR0tCbEV4eFJBMTdIM04wK0kyUHVicDhSVnJLZ0JkbFVFaGJrZ0RFeEFVWjhTU0FCNnpiQTFiSDNOMCtJMlB1YnA4UlRxcXhZS3dKVTRTQVFTcldEV0k0R3hCdHlJbTI4RFZzZmMzVDRqWSs1dW54TnNRTld4OXpkUGlOajdtNmZFM1JBMDdIM04wK0kyUHVicDhUZEVEVHNmYzNUNGpZKzV1bnhOMFFOT3g5emRQaU5qN202ZkUzUkEwN0gzTjArSTJQdWJwOFRkRURUc2ZjM1Q0alkrNXVueE4wUU5PeDl6ZFBpTmo3bTZmRTNSQTA3SDNOMCtJMlB1YnA4VGRFRFRzZmMzVDRqWSs1dW54TjBRTk94OXpkUGlOajdtNmZFM1JBMDdIM04wK0kyUHVicDhUZEVEVHNmYzNUNGpZKzV1bnhOMFFOT3g5emRQaU5qN202ZkUzUkEwN0gzTjArSW02SUhKYVpxS3FkR3FVVnMvOEE3cEtxSzlSeC9xVnJwVXdiWE5sTmxibmE4amFzMWJwQzE2S08xVFpoV3FWZkU3SXBTcTUwZWt0VnJZL0RVQWJqYWl0OTh2RjF3RUpTcG13SXVVREJWVTRSaU9PMXhpY0M2NHI3K2R0VmZ0RXFvekJIeEJiMk9Hd0pURlR4RUhjd0kzWHR4dEFxOWFkbjlJcVBwRExVS3F4cXRUdzFIUXF4b1VFUWtMdXM2VkRiTVpnOFpxMHJzOXBXT21LYjJwcFdhb0NhMVRHRU5kSHdtOThRS0J4WTdyMnZZMm5ScHJoQ0tqMmNLaldZa1pXeFlTdzlvSU4rT1c3ZElkVHRFRGZaMDNidzRzN0N4Q3NiYjh6ZFN2b1FaalE1UFJkVmFaVjJvVWFSVEtpa0dMMUtpaXV5MWF4cU1wWUVKY01qZUVGY2dMOHZvT3JhTEpTcG83Rm5WRlZtSnV6TUFBU1RZWE4rTmhJOWZYQ0lxdXl2Wm1LMjhPSlNHd3RjWHpBUEs4eHBhNFJxZTBBY0tHUVdZREZaMVZsTmdlS3NPUDRtUmJSS09wMmlSVkxOVHFpd0pzY0dJZ0M3VzhXZGhZL24wTnNqMmdURUZ3MUxrZ0N3QnVwWmx4V0J2WUZUa1JmMGdYVVNwcmEzVlhaQ3JraGdDVkF3aTZvUmU1dWJsd01oL0Y1b0hhSk15YWRRQUJiV3dsaXpHcGlYQ0RrUUtUSHB2eWdYc1NqcTlvRnU2b2psMUlIOW5EaHg0QzE3N3I4UHE5SnQwelcyRnhUUldMNDFTNXRnektZdUlPUzFGUDV5dm5BdDRsTWRkQU5oTk9wZkZVVVd3a1dSaW9KTnhiRVJ4M2NiYjV2MWZyTVZpMkJXQ2hVWldOdkVHTGo2YjNIMDhiSE9CWlJLVnRhTWpPS2dES3JsUmdIaUFGSVZXWnJuY0ZhMWhubDZ6WnBldGdxQmtSbXhZc080RENyV0xFay9UbUNMWEp1TW9GdEVwRjdRSVdSY0ZTN3FyS1BCbmlLZ0Q2c2paMU9kc2pOWTdTSVFoQzFNTEFzTWw4UUNGaUI0c2lDTFo1ZnpBdjRsWG8ydDFkZ2dSd1RjWE9Hd1pSY3FiRW05dUl1UFdhZEgxK2p0aENWUHFDaytIQ0w0TUp1R3pCMmk3cjhZRjFFcHEydkZSaXBTb3hVdGZEaHNMWS9Nd3ZsVGI5VEU5b2FlSmxDMUNWMzJ3V3czdGlCeGJyNVczK2tDN2lVNDEwR3A3U21sUmhqUk1KQURNSEsySzNOdHpBNWtldHBoL3BGVDRMVXR6d2kxc0RPeDM4QXJYRy9sZUJkeEl1aGFVS3FCd3JMY2tXWVdZRUVnL3dBY0pLZ0lpSUNJaUFpSWdJaUlFUk5BcGkyR25URmppRmxVV2Exc1F5eVByTk5UVlZKaWhOTmJMaUlVQUJMdHZPSGRuMTR5eGlCSDdzbG1BVkxOY3NMQ3pFN3kzUDhBTTg3bW5GRTNrL1NONXZjLzh6ZnM4NUppQkdxYUlqV0RJaEFKSXVvTmlkNUY5eDM1eklhT2xyWVZ0bGxZV3lBQXk5QUFQeE44eFkyQk1DUFUwT213czFPbXc1RlFSZjhBTTAwZFYwbFptQ0tXWmc1SkFObUJKQkY5eEdJNTc4NUoycDhvL2Y4QVNOcWVRL2Y5SUE2T3BKSlZibmViQzUzYnorQitoTlEwQ25hMnpwMkZoYkN0Z0FjUXl0d0pKKzVtM2Fua1AzL1NOcWVRL2Y4QVNCcjdoVC91cWYxWXZwWDY4L0Z1K3JNNStwbVowWk1XTEFtTEx4V0dMSTNHZS9JejNhbmtQMmZpTnFlUS9mOEFTQmcyaG9UY29oUGlOeW9KdXdzMzdBQVAybVNhTW9PSUlnSjNrS0F4M25NLzhSL1o1ejNhbmtQMy9TTnFlUS9mOUlIbFRSMUliSUFtOXlBQTJZd2szNTJ5dlBEb2xQQ3FsRUtwaHdnZ0VMaEZoYSs2d21XMVBJZnYra2JVOGgrLzZRTkZmVmxOZ1FVVVhBVWtCUTJFV3NMMjNaRExkTU5IMVJTUml5b0w0VlhQT3lxdUVBWDlNcE5wdmNYKy9RMm15QkNYVnlDcHRRdml3bFFlQUJOellldnp6bWRMUTBYNlVSYzc1S0JuY0crWEc0SDZFbFJBam5SMXp1aVo3OGhudjMvNWorenprYXZxbWsxcjAxRm1EK0VBWFlHNEp0dlBydjM4NVl4QWpwb3lBV0NvQmZGWUFBWXIzdmJuZmpQRjBSQWJoRUJ5ekNnSEpjSXo5QVNQc2JTVEVEUlJvS29BVlZVQVdzb0FGc3phdzRabjl6ZkVRRVJFQkVSQVJFUUVSRURubDB6U2d3dlNVcmNENld4WWRvRlBpeGI4SnhYdHdrWFNOZGFTaUZxaVUxOFhoTEtWdU1ETUZ3bHN6aUFGd2VPNmRIaWJuMGdrOFNQMUFydEEwcXUxUmhVUlZwMnlOaUR3c2NWN0c5emxsYTBxeU5MWlFvMm9aVlZHSk5nem11THNDTjR3WHpIQ2RMaWJuMGpFM1BwQXBOVjFhNnVvckxYWlNwVTVYVVB0WDQ4Umh3K0xpSmYxUHBQMlA4VFhpYm1QMVBHSklJdjBnVVhhSjY2TlFlZ3RWMUFycTYwN0ZzVFVpS1JLOFFINDhKemcxbnJCa3FhT3FGbnBVMHB1NkE3VVZlN1VuTGJURllzWFpoaEM3amUrVStnaUxRT1JmV3VzQUt0dEhXNFlCUEF6QWVObHpzNDJnS0JXeEREYkZheG5tcjlOMCtwcEdqYmFpMUtuWUZ3cW5EZHRIdWNUbGp1cUVnTGJMQ0RjM25YeEE1SjlaNndOU29xYU9vVEdpbzdJM2hYYTRIWnJQNHhnczl4aG16UzlNMHpaNk02MGY5YWFibW9sbXdLOWtBQlVIZDlXUkozYjUxTVFPTmJXdXNRajMwZE1kMUNFVTJLNVZLaUVzdU81dXFVMjM1WStOcEcvMG8wdzFHcExRbzdiWkZ4UjMxQXdvSS9pT1BMeHN5NFNCOUl6OFFuZHp6Q0wzc0w4K01RSy9VZGVzOUZXMGxWU3Bkc2xWbEJVRTRUZ1lrcWJjTG1SZFRtdGlVVlZxV3dQaUxFMkxZZ0ZGanhzQ2JqemVrdTRnWjBOMzViL0FLak5zakM0M0hudzVtODl4Tno2UUpFU1BpYm4wakUzUHBBa1JJK0p1ZlNNVGMra0NSRWo0bTU5SXhOejZRSkVTUGlibjBqRTNQcEFrUkkrSnVmU01UYytrQ1JFajRtNTlJeE56NlFKRVNQaWJuMGpFM1BwQWtSSStKdWZTSUNKVTBkTlZ6Wkt3WTJ2WldVbTE3WHNPRTNZMjh6ZFBpQllSSVZUV0NJRTJoTjNSbXVCY2VCUXpYNUhQS1pWTlkwMVIzeEtWUVhleEJaZVFJNEgwZ1M0a1RSOVlJOWdHQUpOZ0NSZGpoVnpoc1RpeVlaaVpuVEtZSkJxVXdRd1Vnc0xoanVVK3VSeTlJRWlKRVRXVklyaU5SQUxCamlJQkNrMkJJTzdPMzdoTlkwbTNWRTN1TXlCbW4xMnZ2dFk1d0pjVFJvdWxKVVhHaHhMZGx1TnhLc1ZOdVl1RE44QkVSQVJFUUVSRUJFUkFSRVFFUkVCRVJBUkVRRVJFQkVSQVJFUUVSRURuZEYxQ0tiRmtGWEVkNUxJU1Q0Ym0rOFhDS0xDd3NNZ0pZVXRIZFJhMVJ2VmloTzREZ1J5ditUTEtJRUd0cTVhaUt0VEY5REprYkVCZ3Q3SG1Db3NaNVQxVWlod0M5bkZqY2p3akV6MlhMek94enZ2NUFTZkVDc282bHBveU91SzY3cmtFSHdoUmZMaGJoYWVWdFMwMlptYkdjVGg3WFhDRFpnUmh0Yk1PMXljL1hJUzBpQlZMcUttQ1dVc3JlR3pBcmlVcmhGd1NEblpBTThzdDNHZTFkUjAzTjJ4bjY5NUg5cTVPZHJqTm1JdHo1WlMwaUJIMFRSZ2k0UXpObXpFdGE1Wm1abU9RSEZwSWlJQ0lpQWlJZ0lpSUNJaUFpSWdJaUlDSWlBaUlnSWlJQ0lpQWlJZ0lpSUdqdkI4dldPOEh5OVpJMklqWWlCSDd3ZkwxanZCOHZXU05pSTJJZ1IrOEh5OVk3d2ZMMWtqWWlOaUlFZnZCOHZXTzhIeTlaSTJJallpQkg3d2ZMMWp2Qjh2V1NOaUkySWdSKzhIeTlZN3dmTDFrallpTmlJRWZ2Qjh2V084SHk5WkkySWpZaUJIN3dmTDFqdkI4dldTTmlJMklnUis4SHk5WTd3Zkwxa2pZaU5pSUVmdkI4dldPOEh5OVpJMklqWWlCSDd3ZkwxanZCOHZXU05pSTJJZ1IrOEh5OVk3d2ZMMWtqWWlOaUlFZnZCOHZXTzhIeTlaSTJJallpQkg3d2ZMMWp2Qjh2V1NOaUkySWdSKzhIeTlZN3dmTDFrallpTmlJRWZ2Qjh2V084SHk5WkkySWpZaUJIN3dmTDFua2s3RVJBM3hFUUVSRUJFUkFSRVFFUkVCRVJBUkVRRVJFQkVSQVJFUUVSRUJFUkFSRVFFUkVCRVJBUkVRRVJFQkVSQVJFUUVSRUJFUkFSRVFFUkVCRVJBUkVRRVJFQkVSQVJFUUVSRUJFUkFSRVFFUkVCRVJBUkVRUC8vWicsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIHVzZXI6e1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICdwaycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICd0aGlzaXMgbmV3JyxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgdXNlcjp7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ2hlcm8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAndGhpc2lzIG5ldyFAIyFAJCcsXHJcbiAgICAgICAgfV1cclxuICAgIH1dLFxyXG4gICAgLy/snbTrr7jsp4Ag6rK966GcXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPXtcclxuICAgIHR5cGU6IEFERF9QT1NULFxyXG59XHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkOjIsXHJcbiAgICBjb250ZW50OiAnZHVtbXB5JyxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6J3BwJyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6W10sXHJcbiAgICBDb21tZW50czpbXSxcclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdF0sXHJcbiAgICAgICAgICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9