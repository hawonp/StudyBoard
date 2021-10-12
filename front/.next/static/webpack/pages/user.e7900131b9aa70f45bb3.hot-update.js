webpackHotUpdate_N_E("pages/user",{

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
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
var _jsxFileName = "C:\\Users\\PYUNGKANG HONG\\Desktop\\CSE416_capstone\\front\\pages\\user.js",
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
      lineNumber: 15,
      columnNumber: 23
    }, _this);
  }
}, {
  title: 'Nickname',
  dataIndex: 'nickname',
  key: 'nickname'
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
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this);
  }
}];
var data = [{
  key: '1',
  name: 'Pk Hong',
  nickname: 'PK-dev'
}, {
  key: '2',
  name: 'Jim Green',
  nickname: 'King Of Green'
}, {
  key: '3',
  name: 'Joe Black',
  nickname: 'Black J'
}, {
  key: '4',
  name: 'Joe Black',
  nickname: 'no one block me haha'
}, {
  key: '5',
  name: 'Joe Black',
  nickname: 'Everyone is under my feet.'
}];

var Rank = function Rank() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "Study Board | Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
            lineNumber: 77,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJGb290ZXIiLCJDb250ZW50IiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwia2V5IiwicmVuZGVyIiwidGV4dCIsInJlY29yZCIsImNvbG9yIiwiZGF0YSIsIm5hbWUiLCJuaWNrbmFtZSIsIlJhbmsiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQVFBLE1BQVIsR0FBb0NDLDJDQUFwQyxDQUFRRCxNQUFSO0FBQUEsSUFBZ0JFLE1BQWhCLEdBQW9DRCwyQ0FBcEMsQ0FBZ0JDLE1BQWhCO0FBQUEsSUFBd0JDLE9BQXhCLEdBQW9DRiwyQ0FBcEMsQ0FBd0JFLE9BQXhCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsV0FBUyxFQUFFLE1BRmI7QUFHRUMsS0FBRyxFQUFFLE1BSFA7QUFJRUMsUUFBTSxFQUFFLGdCQUFDQyxJQUFEO0FBQUEsd0JBQVU7QUFBQSxnQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVY7QUFBQTtBQUpWLENBRGMsRUFPZDtBQUNFSixPQUFLLEVBQUUsVUFEVDtBQUVFQyxXQUFTLEVBQUUsVUFGYjtBQUdFQyxLQUFHLEVBQUU7QUFIUCxDQVBjLEVBYWQ7QUFDRUYsT0FBSyxFQUFFLFFBRFQ7QUFFRUUsS0FBRyxFQUFFLFFBRlA7QUFHRUMsUUFBTSxFQUFFLGdCQUFDQyxJQUFELEVBQU9DLE1BQVA7QUFBQSx3QkFDTixxRUFBQywwQ0FBRDtBQUFPLFVBQUksRUFBQyxRQUFaO0FBQUEsNkJBRUU7QUFBRyxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETTtBQUFBO0FBSFYsQ0FiYyxDQUFoQjtBQXlCQSxJQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUNFTCxLQUFHLEVBQUUsR0FEUDtBQUVFTSxNQUFJLEVBQUUsU0FGUjtBQUdFQyxVQUFRLEVBQUU7QUFIWixDQURXLEVBTVg7QUFDRVAsS0FBRyxFQUFFLEdBRFA7QUFFRU0sTUFBSSxFQUFFLFdBRlI7QUFHRUMsVUFBUSxFQUFFO0FBSFosQ0FOVyxFQVlYO0FBQ0VQLEtBQUcsRUFBRSxHQURQO0FBRUVNLE1BQUksRUFBRSxXQUZSO0FBR0VDLFVBQVEsRUFBRTtBQUhaLENBWlcsRUFrQlg7QUFDRVAsS0FBRyxFQUFFLEdBRFA7QUFFRU0sTUFBSSxFQUFFLFdBRlI7QUFHRUMsVUFBUSxFQUFFO0FBSFosQ0FsQlcsRUF1QlI7QUFDRFAsS0FBRyxFQUFFLEdBREo7QUFFRE0sTUFBSSxFQUFFLFdBRkw7QUFHREMsVUFBUSxFQUFFO0FBSFQsQ0F2QlEsQ0FBYjs7QUErQkEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQkFDWDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSxxRUFBQywrREFBRDtBQUFBLDZCQUVFO0FBQUssYUFBSyxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFaO0FBQUEsK0JBRUU7QUFBQSxpQ0FDRSxxRUFBQywwQ0FBRDtBQUFPLG1CQUFPLEVBQUVaLE9BQWhCO0FBQXlCLHNCQUFVLEVBQUVRO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBLGtCQURXO0FBQUEsQ0FBYjs7S0FBTUcsSTtBQW1CU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci5lNzkwMDEzMWI5YWE3MGY0NWJiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgUm93LCBDb2wsIExheW91dCwgUmVzdWx0LCBCdXR0b24sIFRhYmxlLCBUYWcsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFNtaWxlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BZG1pbkxheW91dCc7XHJcblxyXG5jb25zdCB7IEhlYWRlciwgRm9vdGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTmFtZScsXHJcbiAgICBkYXRhSW5kZXg6ICduYW1lJyxcclxuICAgIGtleTogJ25hbWUnLFxyXG4gICAgcmVuZGVyOiAodGV4dCkgPT4gPGE+e3RleHR9PC9hPixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTmlja25hbWUnLFxyXG4gICAgZGF0YUluZGV4OiAnbmlja25hbWUnLFxyXG4gICAga2V5OiAnbmlja25hbWUnLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIHRpdGxlOiAnQWN0aW9uJyxcclxuICAgIGtleTogJ2FjdGlvbicsXHJcbiAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IChcclxuICAgICAgPFNwYWNlIHNpemU9XCJtaWRkbGVcIj5cclxuICAgICAgICB7LyogPGE+SW52aXRlIHtyZWNvcmQubmFtZX08L2E+ICovfVxyXG4gICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5EZWxldGU8L2E+XHJcbiAgICAgIDwvU3BhY2U+XHJcbiAgICApLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGtleTogJzEnLFxyXG4gICAgbmFtZTogJ1BrIEhvbmcnLFxyXG4gICAgbmlja25hbWU6ICdQSy1kZXYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnMicsXHJcbiAgICBuYW1lOiAnSmltIEdyZWVuJyxcclxuICAgIG5pY2tuYW1lOiAnS2luZyBPZiBHcmVlbicsXHJcblxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnMycsXHJcbiAgICBuYW1lOiAnSm9lIEJsYWNrJyxcclxuICAgIG5pY2tuYW1lOiAnQmxhY2sgSicsXHJcblxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnNCcsXHJcbiAgICBuYW1lOiAnSm9lIEJsYWNrJyxcclxuICAgIG5pY2tuYW1lOiAnbm8gb25lIGJsb2NrIG1lIGhhaGEnLFxyXG5cclxuICB9LCB7XHJcbiAgICBrZXk6ICc1JyxcclxuICAgIG5hbWU6ICdKb2UgQmxhY2snLFxyXG4gICAgbmlja25hbWU6ICdFdmVyeW9uZSBpcyB1bmRlciBteSBmZWV0LicsXHJcblxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBSYW5rID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPlN0dWR5IEJvYXJkIHwgQWRtaW48L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxBZG1pbkxheW91dD5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzFyZW0gMXJlbScgfX0+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YVNvdXJjZT17ZGF0YX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9BZG1pbkxheW91dD5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhbms7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=