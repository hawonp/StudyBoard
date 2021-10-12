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
  Content: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer']
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  Content: 'London No. 1 Lake Park',
  tags: ['loser']
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  Content: 'Sidney No. 1 Lake Park',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJGb290ZXIiLCJDb250ZW50IiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwia2V5IiwicmVuZGVyIiwidGV4dCIsInJlY29yZCIsIm5hbWUiLCJkYXRhIiwiYWdlIiwidGFncyIsIlJhbmsiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQVFBLE1BQVIsR0FBb0NDLDJDQUFwQyxDQUFRRCxNQUFSO0FBQUEsSUFBZ0JFLE1BQWhCLEdBQW9DRCwyQ0FBcEMsQ0FBZ0JDLE1BQWhCO0FBQUEsSUFBd0JDLE9BQXhCLEdBQW9DRiwyQ0FBcEMsQ0FBd0JFLE9BQXhCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsV0FBUyxFQUFFLE1BRmI7QUFHRUMsS0FBRyxFQUFFLE1BSFA7QUFJRUMsUUFBTSxFQUFFLGdCQUFDQyxJQUFEO0FBQUEsd0JBQVU7QUFBQSxnQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVY7QUFBQTtBQUpWLENBRGMsRUFPZDtBQUNFSixPQUFLLEVBQUUsU0FEVDtBQUVFQyxXQUFTLEVBQUUsU0FGYjtBQUdFQyxLQUFHLEVBQUU7QUFIUCxDQVBjLEVBWWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VGLE9BQUssRUFBRSxRQURUO0FBRUVFLEtBQUcsRUFBRSxRQUZQO0FBR0VDLFFBQU0sRUFBRSxnQkFBQ0MsSUFBRCxFQUFPQyxNQUFQO0FBQUEsd0JBQ04scUVBQUMsMENBQUQ7QUFBTyxVQUFJLEVBQUMsUUFBWjtBQUFBLDhCQUNFO0FBQUEsOEJBQVdBLE1BQU0sQ0FBQ0MsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURNO0FBQUE7QUFIVixDQWhDYyxDQUFoQjtBQTRDQSxJQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUNFTCxLQUFHLEVBQUUsR0FEUDtBQUVFSSxNQUFJLEVBQUUsWUFGUjtBQUdFRSxLQUFHLEVBQUUsRUFIUDtBQUlFVixTQUFPLEVBQUUsMEJBSlg7QUFLRVcsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLFdBQVQ7QUFMUixDQURXLEVBUVg7QUFDRVAsS0FBRyxFQUFFLEdBRFA7QUFFRUksTUFBSSxFQUFFLFdBRlI7QUFHRUUsS0FBRyxFQUFFLEVBSFA7QUFJRVYsU0FBTyxFQUFFLHdCQUpYO0FBS0VXLE1BQUksRUFBRSxDQUFDLE9BQUQ7QUFMUixDQVJXLEVBZVg7QUFDRVAsS0FBRyxFQUFFLEdBRFA7QUFFRUksTUFBSSxFQUFFLFdBRlI7QUFHRUUsS0FBRyxFQUFFLEVBSFA7QUFJRVYsU0FBTyxFQUFFLHdCQUpYO0FBS0VXLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxTQUFUO0FBTFIsQ0FmVyxDQUFiOztBQXdCQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNCQUNYO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLHFFQUFDLCtEQUFEO0FBQUEsNkJBRUU7QUFBSyxhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQVo7QUFBQSwrQkFFRTtBQUFBLGlDQUNFLHFFQUFDLDBDQUFEO0FBQU8sbUJBQU8sRUFBRVosT0FBaEI7QUFBeUIsc0JBQVUsRUFBRVE7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUEsa0JBRFc7QUFBQSxDQUFiOztLQUFNRyxJO0FBbUJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyLjc4ZGNiZDdlODZlYzY5MmYyNjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgTGF5b3V0LCBSZXN1bHQsIEJ1dHRvbiwgVGFibGUsIFRhZywgU3BhY2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgU21pbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FkbWluTGF5b3V0JztcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBGb290ZXIsIENvbnRlbnQgfSA9IExheW91dDtcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdOYW1lJyxcclxuICAgIGRhdGFJbmRleDogJ25hbWUnLFxyXG4gICAga2V5OiAnbmFtZScsXHJcbiAgICByZW5kZXI6ICh0ZXh0KSA9PiA8YT57dGV4dH08L2E+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdDb250ZW50JyxcclxuICAgIGRhdGFJbmRleDogJ0NvbnRlbnQnLFxyXG4gICAga2V5OiAnQ29udGVudCcsXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICB0aXRsZTogJ1RhZ3MnLFxyXG4gIC8vICAga2V5OiAndGFncycsXHJcbiAgLy8gICBkYXRhSW5kZXg6ICd0YWdzJyxcclxuICAvLyAgIHJlbmRlcjogKHRhZ3MpID0+IChcclxuICAvLyAgICAgPD5cclxuICAvLyAgICAgICB7dGFncy5tYXAoKHRhZykgPT4ge1xyXG4gIC8vICAgICAgICAgbGV0IGNvbG9yID0gdGFnLmxlbmd0aCA+IDUgPyAnZ2Vla2JsdWUnIDogJ2dyZWVuJztcclxuICAvLyAgICAgICAgIGlmICh0YWcgPT09ICdsb3NlcicpIHtcclxuICAvLyAgICAgICAgICAgY29sb3IgPSAndm9sY2Fubyc7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgICByZXR1cm4gKFxyXG4gIC8vICAgICAgICAgICA8VGFnIGNvbG9yPXtjb2xvcn0ga2V5PXt0YWd9PlxyXG4gIC8vICAgICAgICAgICAgIHt0YWcudG9VcHBlckNhc2UoKX1cclxuICAvLyAgICAgICAgICAgPC9UYWc+XHJcbiAgLy8gICAgICAgICApO1xyXG4gIC8vICAgICAgIH0pfVxyXG4gIC8vICAgICA8Lz5cclxuICAvLyAgICksXHJcbiAgLy8gfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0FjdGlvbicsXHJcbiAgICBrZXk6ICdhY3Rpb24nLFxyXG4gICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiAoXHJcbiAgICAgIDxTcGFjZSBzaXplPVwibWlkZGxlXCI+XHJcbiAgICAgICAgPGE+SW52aXRlIHtyZWNvcmQubmFtZX08L2E+XHJcbiAgICAgICAgPGE+RGVsZXRlPC9hPlxyXG4gICAgICA8L1NwYWNlPlxyXG4gICAgKSxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBrZXk6ICcxJyxcclxuICAgIG5hbWU6ICdKb2huIEJyb3duJyxcclxuICAgIGFnZTogMzIsXHJcbiAgICBDb250ZW50OiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJyxcclxuICAgIHRhZ3M6IFsnbmljZScsICdkZXZlbG9wZXInXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJzInLFxyXG4gICAgbmFtZTogJ0ppbSBHcmVlbicsXHJcbiAgICBhZ2U6IDQyLFxyXG4gICAgQ29udGVudDogJ0xvbmRvbiBOby4gMSBMYWtlIFBhcmsnLFxyXG4gICAgdGFnczogWydsb3NlciddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnMycsXHJcbiAgICBuYW1lOiAnSm9lIEJsYWNrJyxcclxuICAgIGFnZTogMzIsXHJcbiAgICBDb250ZW50OiAnU2lkbmV5IE5vLiAxIExha2UgUGFyaycsXHJcbiAgICB0YWdzOiBbJ2Nvb2wnLCAndGVhY2hlciddLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBSYW5rID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPlN0dWR5IEJvYXJkIHwgQWRtaW48L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxBZG1pbkxheW91dD5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzAuNXJlbSAxcmVtJyB9fT5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtkYXRhfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L0FkbWluTGF5b3V0PlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFuaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==