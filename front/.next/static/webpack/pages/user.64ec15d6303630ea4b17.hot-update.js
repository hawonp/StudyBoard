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
}, // {
//   title: 'Tags',
//   key: 'tags',
//   dataIndex: 'tags',
//   render: (tags) => (
//     <>
//       {tags.map((tag) => {
//         let color = tag.length > 5 ? 'geekblue' : 'green';
//         if (tag === 'loser') {
//           color = 'volcano';
//         }
//         return (
//           <Tag color={color} key={tag}>
//             {tag.toUpperCase()}
//           </Tag>
//         );
//       })}
//     </>
//   ),
// },
{
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
        style: {
          color: 'red'
        },
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
  Content: 'New York No. 1 Lake Park' // tags: ['nice', 'developer'],

}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  Content: 'London No. 1 Lake Park' // tags: ['loser'],

}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  Content: 'Sidney No. 1 Lake Park' // tags: ['cool', 'teacher'],

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJGb290ZXIiLCJDb250ZW50IiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwia2V5IiwicmVuZGVyIiwidGV4dCIsInJlY29yZCIsIm5hbWUiLCJjb2xvciIsImRhdGEiLCJhZ2UiLCJSYW5rIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFRQSxNQUFSLEdBQW9DQywyQ0FBcEMsQ0FBUUQsTUFBUjtBQUFBLElBQWdCRSxNQUFoQixHQUFvQ0QsMkNBQXBDLENBQWdCQyxNQUFoQjtBQUFBLElBQXdCQyxPQUF4QixHQUFvQ0YsMkNBQXBDLENBQXdCRSxPQUF4QjtBQUVBLElBQU1DLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLE9BQUssRUFBRSxNQURUO0FBRUVDLFdBQVMsRUFBRSxNQUZiO0FBR0VDLEtBQUcsRUFBRSxNQUhQO0FBSUVDLFFBQU0sRUFBRSxnQkFBQ0MsSUFBRDtBQUFBLHdCQUFVO0FBQUEsZ0JBQUlBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFWO0FBQUE7QUFKVixDQURjLEVBT2Q7QUFDRUosT0FBSyxFQUFFLFNBRFQ7QUFFRUMsV0FBUyxFQUFFLFNBRmI7QUFHRUMsS0FBRyxFQUFFO0FBSFAsQ0FQYyxFQVlkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFRixPQUFLLEVBQUUsUUFEVDtBQUVFRSxLQUFHLEVBQUUsUUFGUDtBQUdFQyxRQUFNLEVBQUUsZ0JBQUNDLElBQUQsRUFBT0MsTUFBUDtBQUFBLHdCQUNOLHFFQUFDLDBDQUFEO0FBQU8sVUFBSSxFQUFDLFFBQVo7QUFBQSw4QkFDRTtBQUFBLDhCQUFXQSxNQUFNLENBQUNDLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBRyxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURNO0FBQUE7QUFIVixDQWhDYyxDQUFoQjtBQTRDQSxJQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUNFTixLQUFHLEVBQUUsR0FEUDtBQUVFSSxNQUFJLEVBQUUsWUFGUjtBQUdFRyxLQUFHLEVBQUUsRUFIUDtBQUlFWCxTQUFPLEVBQUUsMEJBSlgsQ0FLRTs7QUFMRixDQURXLEVBUVg7QUFDRUksS0FBRyxFQUFFLEdBRFA7QUFFRUksTUFBSSxFQUFFLFdBRlI7QUFHRUcsS0FBRyxFQUFFLEVBSFA7QUFJRVgsU0FBTyxFQUFFLHdCQUpYLENBS0U7O0FBTEYsQ0FSVyxFQWVYO0FBQ0VJLEtBQUcsRUFBRSxHQURQO0FBRUVJLE1BQUksRUFBRSxXQUZSO0FBR0VHLEtBQUcsRUFBRSxFQUhQO0FBSUVYLFNBQU8sRUFBRSx3QkFKWCxDQUtFOztBQUxGLENBZlcsQ0FBYjs7QUF3QkEsSUFBTVksSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQkFDWDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSxxRUFBQywrREFBRDtBQUFBLDZCQUVFO0FBQUssYUFBSyxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFaO0FBQUEsK0JBRUU7QUFBQSxpQ0FDRSxxRUFBQywwQ0FBRDtBQUFPLG1CQUFPLEVBQUVaLE9BQWhCO0FBQXlCLHNCQUFVLEVBQUVTO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBLGtCQURXO0FBQUEsQ0FBYjs7S0FBTUUsSTtBQW1CU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci42NGVjMTVkNjMwMzYzMGVhNGIxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgUm93LCBDb2wsIExheW91dCwgUmVzdWx0LCBCdXR0b24sIFRhYmxlLCBUYWcsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFNtaWxlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BZG1pbkxheW91dCc7XHJcblxyXG5jb25zdCB7IEhlYWRlciwgRm9vdGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTmFtZScsXHJcbiAgICBkYXRhSW5kZXg6ICduYW1lJyxcclxuICAgIGtleTogJ25hbWUnLFxyXG4gICAgcmVuZGVyOiAodGV4dCkgPT4gPGE+e3RleHR9PC9hPixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ29udGVudCcsXHJcbiAgICBkYXRhSW5kZXg6ICdDb250ZW50JyxcclxuICAgIGtleTogJ0NvbnRlbnQnLFxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgdGl0bGU6ICdUYWdzJyxcclxuICAvLyAgIGtleTogJ3RhZ3MnLFxyXG4gIC8vICAgZGF0YUluZGV4OiAndGFncycsXHJcbiAgLy8gICByZW5kZXI6ICh0YWdzKSA9PiAoXHJcbiAgLy8gICAgIDw+XHJcbiAgLy8gICAgICAge3RhZ3MubWFwKCh0YWcpID0+IHtcclxuICAvLyAgICAgICAgIGxldCBjb2xvciA9IHRhZy5sZW5ndGggPiA1ID8gJ2dlZWtibHVlJyA6ICdncmVlbic7XHJcbiAgLy8gICAgICAgICBpZiAodGFnID09PSAnbG9zZXInKSB7XHJcbiAgLy8gICAgICAgICAgIGNvbG9yID0gJ3ZvbGNhbm8nO1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgcmV0dXJuIChcclxuICAvLyAgICAgICAgICAgPFRhZyBjb2xvcj17Y29sb3J9IGtleT17dGFnfT5cclxuICAvLyAgICAgICAgICAgICB7dGFnLnRvVXBwZXJDYXNlKCl9XHJcbiAgLy8gICAgICAgICAgIDwvVGFnPlxyXG4gIC8vICAgICAgICAgKTtcclxuICAvLyAgICAgICB9KX1cclxuICAvLyAgICAgPC8+XHJcbiAgLy8gICApLFxyXG4gIC8vIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBY3Rpb24nLFxyXG4gICAga2V5OiAnYWN0aW9uJyxcclxuICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4gKFxyXG4gICAgICA8U3BhY2Ugc2l6ZT1cIm1pZGRsZVwiPlxyXG4gICAgICAgIDxhPkludml0ZSB7cmVjb3JkLm5hbWV9PC9hPlxyXG4gICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5EZWxldGU8L2E+XHJcbiAgICAgIDwvU3BhY2U+XHJcbiAgICApLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGtleTogJzEnLFxyXG4gICAgbmFtZTogJ0pvaG4gQnJvd24nLFxyXG4gICAgYWdlOiAzMixcclxuICAgIENvbnRlbnQ6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLFxyXG4gICAgLy8gdGFnczogWyduaWNlJywgJ2RldmVsb3BlciddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnMicsXHJcbiAgICBuYW1lOiAnSmltIEdyZWVuJyxcclxuICAgIGFnZTogNDIsXHJcbiAgICBDb250ZW50OiAnTG9uZG9uIE5vLiAxIExha2UgUGFyaycsXHJcbiAgICAvLyB0YWdzOiBbJ2xvc2VyJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICczJyxcclxuICAgIG5hbWU6ICdKb2UgQmxhY2snLFxyXG4gICAgYWdlOiAzMixcclxuICAgIENvbnRlbnQ6ICdTaWRuZXkgTm8uIDEgTGFrZSBQYXJrJyxcclxuICAgIC8vIHRhZ3M6IFsnY29vbCcsICd0ZWFjaGVyJ10sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFJhbmsgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+U3R1ZHkgQm9hcmQgfCBBZG1pbjwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcblxyXG4gICAgPEFkbWluTGF5b3V0PlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMC41cmVtIDFyZW0nIH19PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e2RhdGF9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvQWRtaW5MYXlvdXQ+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYW5rO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9