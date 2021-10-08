webpackHotUpdate_N_E("pages/about",{

/***/ "./components/OtherLayout.js":
/*!***********************************!*\
  !*** ./components/OtherLayout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\PYUNGKANG HONG\\Desktop\\CSE416_capstone\\front\\components\\OtherLayout.js",
    _templateObject,
    _this = undefined,
    _s = $RefreshSig$();

 // npm i prop-tyeps 설치를 해줘야지 돌아간다


 // 디자인


 // or 'antd/dist/antd.less'




 // 스타일 컴포넌트


var SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search)(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  vertical-align: middle;\n\n"])));
_c = SearchInput;

var OtherLayout = function OtherLayout(_ref) {
  _s();

  var children = _ref.children;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
      mode: "horizontal",
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        // maxWidth: '1000px',
        margin: '0 auto',
        color: '#FFFFFF'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            style: {
              fontSize: '1.2rem'
            },
            children: "StudyBaord"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            children: "\uD83D\uDE00 Profile "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/studyBoard",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            children: "\u2753 Ask Question"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 36
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/about",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            children: "\uD83D\uDCE2 About "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 31
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/rank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            children: "\uD83D\uDC4D Rank "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 30
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(SearchInput, {
          enterButton: true,
          placeholder: "type what you want",
          allowClear: true,
          style: {
            width: 400,
            color: '#FFFFFF',
            borderRadius: '20px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      gutter: 8,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          style: {
            width: '70%',
            margin: '30px auto'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            style: {
              paddingTop: '10px',
              paddingBottom: '10px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/about",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                block: true,
                style: {
                  borderRadius: '8px'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                  children: "About"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 81
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 35
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            style: {
              paddingTop: '10px',
              paddingBottom: '10px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/leaderShip",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                block: true,
                style: {
                  borderRadius: '8px'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                  children: "LeaderShip"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 86
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 40
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            style: {
              paddingTop: '10px',
              paddingBottom: '10px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/contact",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                block: true,
                style: {
                  borderRadius: '8px'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                  children: "Contact"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 83
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 24,
        md: 16,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(OtherLayout, "877P/f/MnA4yuj3K53yr4WjuRPQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c2 = OtherLayout;
OtherLayout.propTypes = {
  // 칠드런은 노드입니다 화면에 그릴 수 있는게 노드
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OtherLayout);

var _c, _c2;

$RefreshReg$(_c, "SearchInput");
$RefreshReg$(_c2, "OtherLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PdGhlckxheW91dC5qcyJdLCJuYW1lcyI6WyJTZWFyY2hJbnB1dCIsInN0eWxlZCIsIklucHV0IiwiU2VhcmNoIiwiT3RoZXJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtDQUVBOztBQUNBO0NBQzZCOztBQUU3QjtBQUNBO0FBQ0E7Q0FHQTs7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHQyxpRUFBTSxDQUFDQywwQ0FBSyxDQUFDQyxNQUFQLENBQVQsOEtBQWpCO0tBQU1ILFc7O0FBS04sSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQ3BDLHFCQUF1QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBbEM7QUFBQSxNQUFRQyxVQUFSLGdCQUFRQSxVQUFSOztBQUNBLHNCQUNFO0FBQUEsNEJBQ0Usc0VBQUMseUNBQUQ7QUFDRSxVQUFJLEVBQUMsWUFEUDtBQUVFLFdBQUssRUFBRTtBQUNMQyxlQUFPLEVBQUUsTUFESjtBQUVMQyxzQkFBYyxFQUFFLGVBRlg7QUFHTDtBQUNBQyxjQUFNLEVBQUUsUUFKSDtBQUtMQyxhQUFLLEVBQUU7QUFMRixPQUZUO0FBQUEsOEJBU0Usc0VBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsK0JBQ0Usc0VB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aWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuYmM2NDEwNjIwNTlhMWM5MmM1ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gbnBtIGkgcHJvcC10eWVwcyDshKTsuZjrpbwg7ZW07KSY7JW87KeAIOuPjOyVhOqwhOuLpFxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vLyDrlJTsnpDsnbhcclxuaW1wb3J0IHsgTWVudSwgSW5wdXQsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnOyAvLyBvciAnYW50ZC9kaXN0L2FudGQubGVzcydcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4vVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vTG9naW5Gb3JtJztcclxuXHJcbi8vIOyKpO2DgOydvCDsu7Ttj6zrhIztirhcclxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuYDtcclxuXHJcbmNvbnN0IE90aGVyTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAvLyBtYXhXaWR0aDogJzEwMDBweCcsXHJcbiAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgY29sb3I6ICcjRkZGRkZGJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4ycmVtJyB9fT5cclxuICAgICAgICAgICAgICBTdHVkeUJhb3JkXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+PGE+8J+YgCBQcm9maWxlIDwvYT48L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3R1ZHlCb2FyZFwiPjxhPuKdkyBBc2sgUXVlc3Rpb248L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+PGE+8J+ToiBBYm91dCA8L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3JhbmtcIj48YT7wn5GNIFJhbmsgPC9hPjwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgZW50ZXJCdXR0b25cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInR5cGUgd2hhdCB5b3Ugd2FudFwiXHJcbiAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0gLz5cclxuICAgICAgPC9NZW51PlxyXG4gICAgICB7Lyog6rGw7YSw652864qU6rG0IOy7rOufvOyCrOydtCDqsITqsqkgKi99XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzcwJScsIG1hcmdpbjogJzMwcHggYXV0bycgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzEwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPjxCdXR0b24gYmxvY2sgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnOHB4JyB9fT48YT5BYm91dDwvYT48L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcxMHB4JywgcGFkZGluZ0JvdHRvbTogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGVhZGVyU2hpcFwiPjxCdXR0b24gYmxvY2sgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnOHB4JyB9fT48YT5MZWFkZXJTaGlwPC9hPjwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzEwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+PEJ1dHRvbiBibG9jayBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc4cHgnIH19PjxhPkNvbnRhY3Q8L2E+PC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTZ9PlxyXG4gICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5PdGhlckxheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgLy8g7Lmg65Oc65+w7J2AIOuFuOuTnOyeheuLiOuLpCDtmZTrqbTsl5Ag6re466a0IOyImCDsnojripTqsowg64W465OcXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdGhlckxheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==