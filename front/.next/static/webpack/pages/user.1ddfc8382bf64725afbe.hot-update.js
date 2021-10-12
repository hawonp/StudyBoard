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
  title: 'Content',
  dataIndex: 'Content',
  key: 'Content'
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: function render(tags) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
      children: tags.map(function (tag) {
        var color = tag.length > 5 ? 'geekblue' : 'green';

        if (tag === 'loser') {
          color = 'volcano';
        }

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
          color: color,
          children: tag.toUpperCase()
        }, tag, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false);
  }
}, {
  title: 'Action',
  key: 'action',
  render: function render(text, record) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
      size: "middle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
        children: ["Invite ", record.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this);
  }
}];
var data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer']
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser']
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher']
}];

var Rank = function Rank() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "Study Board | Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AdminLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          padding: '0.5rem 1rem'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], {
            columns: columns,
            dataSource: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJGb290ZXIiLCJDb250ZW50IiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwia2V5IiwicmVuZGVyIiwidGV4dCIsInRhZ3MiLCJtYXAiLCJ0YWciLCJjb2xvciIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwicmVjb3JkIiwibmFtZSIsImRhdGEiLCJhZ2UiLCJhZGRyZXNzIiwiUmFuayIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBUUEsTUFBUixHQUFvQ0MsMkNBQXBDLENBQVFELE1BQVI7QUFBQSxJQUFnQkUsTUFBaEIsR0FBb0NELDJDQUFwQyxDQUFnQkMsTUFBaEI7QUFBQSxJQUF3QkMsT0FBeEIsR0FBb0NGLDJDQUFwQyxDQUF3QkUsT0FBeEI7QUFFQSxJQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUNFQyxPQUFLLEVBQUUsTUFEVDtBQUVFQyxXQUFTLEVBQUUsTUFGYjtBQUdFQyxLQUFHLEVBQUUsTUFIUDtBQUlFQyxRQUFNLEVBQUUsZ0JBQUNDLElBQUQ7QUFBQSx3QkFBVTtBQUFBLGdCQUFJQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVjtBQUFBO0FBSlYsQ0FEYyxFQU9kO0FBQ0VKLE9BQUssRUFBRSxTQURUO0FBRUVDLFdBQVMsRUFBRSxTQUZiO0FBR0VDLEtBQUcsRUFBRTtBQUhQLENBUGMsRUFZZDtBQUNFRixPQUFLLEVBQUUsTUFEVDtBQUVFRSxLQUFHLEVBQUUsTUFGUDtBQUdFRCxXQUFTLEVBQUUsTUFIYjtBQUlFRSxRQUFNLEVBQUUsZ0JBQUNFLElBQUQ7QUFBQSx3QkFDTjtBQUFBLGdCQUNHQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQVM7QUFDakIsWUFBSUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLE1BQUosR0FBYSxDQUFiLEdBQWlCLFVBQWpCLEdBQThCLE9BQTFDOztBQUNBLFlBQUlGLEdBQUcsS0FBSyxPQUFaLEVBQXFCO0FBQ25CQyxlQUFLLEdBQUcsU0FBUjtBQUNEOztBQUNELDRCQUNFLHFFQUFDLHdDQUFEO0FBQUssZUFBSyxFQUFFQSxLQUFaO0FBQUEsb0JBQ0dELEdBQUcsQ0FBQ0csV0FBSjtBQURILFdBQXdCSCxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBS0QsT0FWQTtBQURILHFCQURNO0FBQUE7QUFKVixDQVpjLEVBZ0NkO0FBQ0VQLE9BQUssRUFBRSxRQURUO0FBRUVFLEtBQUcsRUFBRSxRQUZQO0FBR0VDLFFBQU0sRUFBRSxnQkFBQ0MsSUFBRCxFQUFPTyxNQUFQO0FBQUEsd0JBQ04scUVBQUMsMENBQUQ7QUFBTyxVQUFJLEVBQUMsUUFBWjtBQUFBLDhCQUNFO0FBQUEsOEJBQVdBLE1BQU0sQ0FBQ0MsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURNO0FBQUE7QUFIVixDQWhDYyxDQUFoQjtBQTRDQSxJQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUNFWCxLQUFHLEVBQUUsR0FEUDtBQUVFVSxNQUFJLEVBQUUsWUFGUjtBQUdFRSxLQUFHLEVBQUUsRUFIUDtBQUlFQyxTQUFPLEVBQUUsMEJBSlg7QUFLRVYsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLFdBQVQ7QUFMUixDQURXLEVBUVg7QUFDRUgsS0FBRyxFQUFFLEdBRFA7QUFFRVUsTUFBSSxFQUFFLFdBRlI7QUFHRUUsS0FBRyxFQUFFLEVBSFA7QUFJRUMsU0FBTyxFQUFFLHdCQUpYO0FBS0VWLE1BQUksRUFBRSxDQUFDLE9BQUQ7QUFMUixDQVJXLEVBZVg7QUFDRUgsS0FBRyxFQUFFLEdBRFA7QUFFRVUsTUFBSSxFQUFFLFdBRlI7QUFHRUUsS0FBRyxFQUFFLEVBSFA7QUFJRUMsU0FBTyxFQUFFLHdCQUpYO0FBS0VWLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxTQUFUO0FBTFIsQ0FmVyxDQUFiOztBQXdCQSxJQUFNVyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNCQUNYO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLHFFQUFDLCtEQUFEO0FBQUEsNkJBRUU7QUFBSyxhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQVo7QUFBQSwrQkFFRTtBQUFBLGlDQUNFLHFFQUFDLDBDQUFEO0FBQU8sbUJBQU8sRUFBRWxCLE9BQWhCO0FBQXlCLHNCQUFVLEVBQUVjO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBLGtCQURXO0FBQUEsQ0FBYjs7S0FBTUcsSTtBQW1CU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci4xZGRmYzgzODJiZjY0NzI1YWZiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgUm93LCBDb2wsIExheW91dCwgUmVzdWx0LCBCdXR0b24sIFRhYmxlLCBUYWcsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFNtaWxlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BZG1pbkxheW91dCc7XHJcblxyXG5jb25zdCB7IEhlYWRlciwgRm9vdGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTmFtZScsXHJcbiAgICBkYXRhSW5kZXg6ICduYW1lJyxcclxuICAgIGtleTogJ25hbWUnLFxyXG4gICAgcmVuZGVyOiAodGV4dCkgPT4gPGE+e3RleHR9PC9hPixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ29udGVudCcsXHJcbiAgICBkYXRhSW5kZXg6ICdDb250ZW50JyxcclxuICAgIGtleTogJ0NvbnRlbnQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdUYWdzJyxcclxuICAgIGtleTogJ3RhZ3MnLFxyXG4gICAgZGF0YUluZGV4OiAndGFncycsXHJcbiAgICByZW5kZXI6ICh0YWdzKSA9PiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RhZ3MubWFwKCh0YWcpID0+IHtcclxuICAgICAgICAgIGxldCBjb2xvciA9IHRhZy5sZW5ndGggPiA1ID8gJ2dlZWtibHVlJyA6ICdncmVlbic7XHJcbiAgICAgICAgICBpZiAodGFnID09PSAnbG9zZXInKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJ3ZvbGNhbm8nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhZyBjb2xvcj17Y29sb3J9IGtleT17dGFnfT5cclxuICAgICAgICAgICAgICB7dGFnLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC8+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBY3Rpb24nLFxyXG4gICAga2V5OiAnYWN0aW9uJyxcclxuICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4gKFxyXG4gICAgICA8U3BhY2Ugc2l6ZT1cIm1pZGRsZVwiPlxyXG4gICAgICAgIDxhPkludml0ZSB7cmVjb3JkLm5hbWV9PC9hPlxyXG4gICAgICAgIDxhPkRlbGV0ZTwvYT5cclxuICAgICAgPC9TcGFjZT5cclxuICAgICksXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAga2V5OiAnMScsXHJcbiAgICBuYW1lOiAnSm9obiBCcm93bicsXHJcbiAgICBhZ2U6IDMyLFxyXG4gICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsXHJcbiAgICB0YWdzOiBbJ25pY2UnLCAnZGV2ZWxvcGVyJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICcyJyxcclxuICAgIG5hbWU6ICdKaW0gR3JlZW4nLFxyXG4gICAgYWdlOiA0MixcclxuICAgIGFkZHJlc3M6ICdMb25kb24gTm8uIDEgTGFrZSBQYXJrJyxcclxuICAgIHRhZ3M6IFsnbG9zZXInXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJzMnLFxyXG4gICAgbmFtZTogJ0pvZSBCbGFjaycsXHJcbiAgICBhZ2U6IDMyLFxyXG4gICAgYWRkcmVzczogJ1NpZG5leSBOby4gMSBMYWtlIFBhcmsnLFxyXG4gICAgdGFnczogWydjb29sJywgJ3RlYWNoZXInXSxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgUmFuayA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5TdHVkeSBCb2FyZCB8IEFkbWluPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuXHJcbiAgICA8QWRtaW5MYXlvdXQ+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwLjVyZW0gMXJlbScgfX0+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YVNvdXJjZT17ZGF0YX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9BZG1pbkxheW91dD5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhbms7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=