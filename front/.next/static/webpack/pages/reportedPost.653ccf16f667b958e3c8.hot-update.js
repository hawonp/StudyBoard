webpackHotUpdate_N_E("pages/reportedPost",{

/***/ "./pages/reportedPost.js":
/*!*******************************!*\
  !*** ./pages/reportedPost.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_AdminLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AdminLayout */ "./components/AdminLayout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\PYUNGKANG HONG\\Desktop\\CSE416_capstone\\front\\pages\\reportedPost.js",
    _this = undefined;









var Header = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Header,
    Footer = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Footer,
    Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content;
var columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: function render(text) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 23
    }, _this);
  }
}, {
  title: 'Content',
  dataIndex: 'Content',
  key: 'Content'
}, {
  title: 'Action',
  key: 'action',
  render: function render(text, record) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
      size: "middle",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
        style: {
          color: 'red'
        },
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this);
  }
}];
var data = [{
  key: '1',
  name: 'Pk Hong',
  Content: 'This is so stupid' // tags: ['nice', 'developer'],

}, {
  key: '2',
  name: 'Jim Green',
  Content: 'hahahahahahahahahahahaahahahahahahahaha I am king' // tags: ['loser'],

}, {
  key: '3',
  name: 'Joe Black',
  Content: 'who is better than me??? lol ' // tags: ['cool', 'teacher'],

}, {
  key: '4',
  name: 'Joe Black',
  Content: 'no one block me haha' // tags: ['cool', 'teacher'],

}, {
  key: '5',
  name: 'Joe Black',
  Content: 'Everyone is under my feet.' // tags: ['cool', 'teacher'],

}];

var Rank = function Rank() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "Study Board | Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AdminLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          padding: '1rem 1rem'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], {
            columns: columns,
            dataSource: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_c = Rank;
/* harmony default export */ __webpack_exports__["default"] = (Rank);

var _c;

$RefreshReg$(_c, "Rank");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVwb3J0ZWRQb3N0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkxheW91dCIsIkZvb3RlciIsIkNvbnRlbnQiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwicmVjb3JkIiwiY29sb3IiLCJkYXRhIiwibmFtZSIsIlJhbmsiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQVFBLE1BQVIsR0FBb0NDLDJDQUFwQyxDQUFRRCxNQUFSO0FBQUEsSUFBZ0JFLE1BQWhCLEdBQW9DRCwyQ0FBcEMsQ0FBZ0JDLE1BQWhCO0FBQUEsSUFBd0JDLE9BQXhCLEdBQW9DRiwyQ0FBcEMsQ0FBd0JFLE9BQXhCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsV0FBUyxFQUFFLE1BRmI7QUFHRUMsS0FBRyxFQUFFLE1BSFA7QUFJRUMsUUFBTSxFQUFFLGdCQUFDQyxJQUFEO0FBQUEsd0JBQVU7QUFBQSxnQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVY7QUFBQTtBQUpWLENBRGMsRUFPZDtBQUNFSixPQUFLLEVBQUUsU0FEVDtBQUVFQyxXQUFTLEVBQUUsU0FGYjtBQUdFQyxLQUFHLEVBQUU7QUFIUCxDQVBjLEVBWWQ7QUFDRUYsT0FBSyxFQUFFLFFBRFQ7QUFFRUUsS0FBRyxFQUFFLFFBRlA7QUFHRUMsUUFBTSxFQUFFLGdCQUFDQyxJQUFELEVBQU9DLE1BQVA7QUFBQSx3QkFDTixxRUFBQywwQ0FBRDtBQUFPLFVBQUksRUFBQyxRQUFaO0FBQUEsNkJBRUU7QUFBRyxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETTtBQUFBO0FBSFYsQ0FaYyxDQUFoQjtBQXdCQSxJQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUNFTCxLQUFHLEVBQUUsR0FEUDtBQUVFTSxNQUFJLEVBQUUsU0FGUjtBQUdFVixTQUFPLEVBQUUsbUJBSFgsQ0FJRTs7QUFKRixDQURXLEVBT1g7QUFDRUksS0FBRyxFQUFFLEdBRFA7QUFFRU0sTUFBSSxFQUFFLFdBRlI7QUFHRVYsU0FBTyxFQUFFLG1EQUhYLENBSUU7O0FBSkYsQ0FQVyxFQWFYO0FBQ0VJLEtBQUcsRUFBRSxHQURQO0FBRUVNLE1BQUksRUFBRSxXQUZSO0FBR0VWLFNBQU8sRUFBRSwrQkFIWCxDQUlFOztBQUpGLENBYlcsRUFtQlg7QUFDRUksS0FBRyxFQUFFLEdBRFA7QUFFRU0sTUFBSSxFQUFFLFdBRlI7QUFHRVYsU0FBTyxFQUFFLHNCQUhYLENBSUU7O0FBSkYsQ0FuQlcsRUF3QlI7QUFDREksS0FBRyxFQUFFLEdBREo7QUFFRE0sTUFBSSxFQUFFLFdBRkw7QUFHRFYsU0FBTyxFQUFFLDRCQUhSLENBSUQ7O0FBSkMsQ0F4QlEsQ0FBYjs7QUFnQ0EsSUFBTVcsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQkFDWDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSxxRUFBQywrREFBRDtBQUFBLDZCQUVFO0FBQUssYUFBSyxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFaO0FBQUEsK0JBQ0U7QUFBQSxpQ0FDRSxxRUFBQywwQ0FBRDtBQUFPLG1CQUFPLEVBQUVYLE9BQWhCO0FBQXlCLHNCQUFVLEVBQUVRO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBLGtCQURXO0FBQUEsQ0FBYjs7S0FBTUUsSTtBQWtCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVwb3J0ZWRQb3N0LjY1M2NjZjE2ZjY2N2I5NThlM2M4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgTGF5b3V0LCBTcGFjZSwgVGFibGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgU21pbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FkbWluTGF5b3V0JztcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBGb290ZXIsIENvbnRlbnQgfSA9IExheW91dDtcclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ05hbWUnLFxyXG4gICAgZGF0YUluZGV4OiAnbmFtZScsXHJcbiAgICBrZXk6ICduYW1lJyxcclxuICAgIHJlbmRlcjogKHRleHQpID0+IDxhPnt0ZXh0fTwvYT4sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0NvbnRlbnQnLFxyXG4gICAgZGF0YUluZGV4OiAnQ29udGVudCcsXHJcbiAgICBrZXk6ICdDb250ZW50JyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQWN0aW9uJyxcclxuICAgIGtleTogJ2FjdGlvbicsXHJcbiAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IChcclxuICAgICAgPFNwYWNlIHNpemU9XCJtaWRkbGVcIj5cclxuICAgICAgICB7LyogPGE+SW52aXRlIHtyZWNvcmQubmFtZX08L2E+ICovfVxyXG4gICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5EZWxldGU8L2E+XHJcbiAgICAgIDwvU3BhY2U+XHJcbiAgICApLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGtleTogJzEnLFxyXG4gICAgbmFtZTogJ1BrIEhvbmcnLFxyXG4gICAgQ29udGVudDogJ1RoaXMgaXMgc28gc3R1cGlkJyxcclxuICAgIC8vIHRhZ3M6IFsnbmljZScsICdkZXZlbG9wZXInXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJzInLFxyXG4gICAgbmFtZTogJ0ppbSBHcmVlbicsXHJcbiAgICBDb250ZW50OiAnaGFoYWhhaGFoYWhhaGFoYWhhaGFoYWFoYWhhaGFoYWhhaGFoYWhhIEkgYW0ga2luZycsXHJcbiAgICAvLyB0YWdzOiBbJ2xvc2VyJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICczJyxcclxuICAgIG5hbWU6ICdKb2UgQmxhY2snLFxyXG4gICAgQ29udGVudDogJ3dobyBpcyBiZXR0ZXIgdGhhbiBtZT8/PyBsb2wgJyxcclxuICAgIC8vIHRhZ3M6IFsnY29vbCcsICd0ZWFjaGVyJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICc0JyxcclxuICAgIG5hbWU6ICdKb2UgQmxhY2snLFxyXG4gICAgQ29udGVudDogJ25vIG9uZSBibG9jayBtZSBoYWhhJyxcclxuICAgIC8vIHRhZ3M6IFsnY29vbCcsICd0ZWFjaGVyJ10sXHJcbiAgfSwge1xyXG4gICAga2V5OiAnNScsXHJcbiAgICBuYW1lOiAnSm9lIEJsYWNrJyxcclxuICAgIENvbnRlbnQ6ICdFdmVyeW9uZSBpcyB1bmRlciBteSBmZWV0LicsXHJcbiAgICAvLyB0YWdzOiBbJ2Nvb2wnLCAndGVhY2hlciddLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBSYW5rID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPlN0dWR5IEJvYXJkIHwgQWRtaW48L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxBZG1pbkxheW91dD5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzFyZW0gMXJlbScgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtkYXRhfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L0FkbWluTGF5b3V0PlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFuaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==