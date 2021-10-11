webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\PYUNGKANG HONG\\Desktop\\CSE416_capstone\\front\\pages\\index.js",
    _this = undefined;

 // import {} from './styles';
// import AppLayout from '../components/AppLayout';
// import { useMenu } from 'react';




var Home = function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("html", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("body", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: classes.productCart,
        children: cart === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Box, {
          className: classes.productCartTag,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ShoppingCartIcon, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: " \uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, _this) : cart.length !== 0 ? cart.map(function (product, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(AddToCart, {
            image: product.image,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
            removeToCart: removeToCart
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 26
          }, _this);
        }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Box, {
          className: classes.productCartTag,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ShoppingCartIcon, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: " \uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("nav", {
          className: "global-nav",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "global-nav-links",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "/profile",
              className: "global-nav-item",
              children: "\uD83D\uDE00 Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "/studyBoard",
              className: "global-nav-item",
              children: "\u2753 Ask Question "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "/about",
              className: "global-nav-item",
              children: "\uD83D\uDCE2 About"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "/rank",
              className: "global-nav-item",
              children: "\uD83D\uDC4D Rank "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("nav", {
          className: "local-nav",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "local-nav-links",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "/",
              className: "product-name",
              children: "STUDY BOARD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "/studyBoard",
              children: "\uD83C\uDFEB Question Board"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "/studyBoard",
              children: "\u2705 Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "outer",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "first-description",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
              className: "content",
              gutter: [32, 32],
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
                className: "leftside",
                span: 12,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "leftside-box",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
                    children: "Welcom to StudyBoard"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                    children: "From first day to finals, get homework help, exam prep & writing support\u2014tailored to your courses."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "wrapper",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "SIGN",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                        href: "/studyboard",
                        className: "c-tag",
                        children: "Find your Answer!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 23
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 21
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
                className: "rightside",
                span: 12,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  id: "second-image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
          className: "scroll-section",
          id: "scroll-section-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
            children: "We are the SutdyBoard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "sticky-elem main-message",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["\uC6B0\uB9AC\uB294 \uBAA8\uB4E0 \uC9C8\uBB38\uC744 \uBC1B\uC2B5\uB2C8\uB2E4 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 32
              }, _this), "\uBAA8\uB974\uB294\uAC78 \uBB3C\uC5B4\uBCF4\uC138\uC694"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "sticky-elem main-message",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["\uC6B0\uB9AC\uB294 \uBAA8\uB4E0 \uC9C8\uBB38\uC744 \uBC1B\uC2B5\uB2C8\uB2E4 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 32
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "sticky-elem main-message",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["\uC6B0\uB9AC\uB294 \uBAA8\uB4E0 \uC9C8\uBB38\uC744 \uBC1B\uC2B5\uB2C8\uB2E4 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 32
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
          className: "scroll-section",
          id: "scroll-section-1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "description",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
              children: "\uBCF4\uD1B5 \uC2A4\uD06C\uB864 \uC601\uC5ED"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 13
            }, _this), "\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4 \uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4 \uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4 \uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4 \uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4 \uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4 \uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
          className: "scroll-section",
          id: "scroll-section-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "sticky-elem main-message",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("small", {
                children: "\uC54C\uACE0\uC2F6\uC73C\uBA74 \uC2A4\uD130\uB514 \uBCF4\uB4DC\uB85C "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 15
              }, _this), "\uBB3C\uC5B4\uBCF4\uACE0\uC2F6\uC740\uAC8C \uBB50\uC57C ?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "sticky-elem desc-message",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: "\uB0B4\uAC00 \uBAA8\uB974\uB294\uAC70\uC788\uC73C\uBA74 \uBB3C\uC5B4\uBD10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "pin"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "sticky-elem desc-message",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["\uC2A4\uD130\uB514\uBCF4\uB4DC\uC5D0\uC11C\uB294 \uC88B\uC544\uC694\uB3C4 \uC788\uC5B4, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 33
              }, _this), " \uC88B\uC544"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "pin"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
          className: "scroll-section",
          id: "scroll-section-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "mid-message",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
              children: "Retina \uBA38\uADF8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 13
            }, _this), "\uACF5\uBD80\uB97C \uD558\uACE0\uC788\uC74C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 21
            }, _this), "\uACF5\uBD80\uD558\uAE30\uC2EB\uC5B4\uC694"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "canvas-caption",
            children: "ssssssssssssssssssssssssssssssssssss"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
          className: "footer",
          children: "2021, StudyBoard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        scr: "js/main.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, _this);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNsYXNzZXMiLCJwcm9kdWN0Q2FydCIsImNhcnQiLCJwcm9kdWN0Q2FydFRhZyIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsImltYWdlIiwidGl0bGUiLCJwcmljZSIsInF1YW50aXR5IiwicmVtb3ZlVG9DYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFDQTtBQUNBOztBQUNBOzs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNCQUNYO0FBQUEsMkJBQ0U7QUFBQSw4QkFDQTtBQUFLLGlCQUFTLEVBQUVDLE9BQU8sQ0FBQ0MsV0FBeEI7QUFBQSxrQkFHSUMsSUFBSSxLQUFLLElBQVQsZ0JBQ0kscUVBQUMsR0FBRDtBQUFLLG1CQUFTLEVBQUVGLE9BQU8sQ0FBQ0csY0FBeEI7QUFBQSxrQ0FDRSxxRUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEdBTUlELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUFoQixHQUNJRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDM0IsOEJBQU8scUVBQUMsU0FBRDtBQUVILGlCQUFLLEVBQUVELE9BQU8sQ0FBQ0UsS0FGWjtBQUdILGlCQUFLLEVBQUVGLE9BQU8sQ0FBQ0csS0FIWjtBQUlILGlCQUFLLEVBQUVILE9BQU8sQ0FBQ0ksS0FKWjtBQUtILG9CQUFRLEVBQUVKLE9BQU8sQ0FBQ0ssUUFMZjtBQU1ILHdCQUFZLEVBQUVDO0FBTlgsYUFDRUwsS0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBUUQsU0FURCxDQURKLGdCQVdJLHFFQUFDLEdBQUQ7QUFBSyxt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O0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFc7QUFBQSxDQUFiOztLQUFNSixJO0FBbUpTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZDUwNzgxYzQwYzRlYTAzYTVmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQge30gZnJvbSAnLi9zdHlsZXMnO1xyXG4vLyBpbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuLy8gaW1wb3J0IHsgdXNlTWVudSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wsIEltYWdlIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4gKFxyXG4gIDxodG1sPlxyXG4gICAgPGJvZHk+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0Q2FydH0+XHJcbiAgICAgIHtcclxuXHJcbiAgICAgICAgY2FydCA9PT0gbnVsbCA/XHJcbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RDYXJ0VGFnfT5cclxuICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuID4g7J6l67CU6rWs64uI6rCAIOu5hOyWtOyeiOyKteuLiOuLpC48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIGNhcnQubGVuZ3RoICE9PSAwID9cclxuICAgICAgICAgICAgICAgIGNhcnQubWFwKChwcm9kdWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPEFkZFRvQ2FydFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5PXtwcm9kdWN0LnF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVG9DYXJ0PXtyZW1vdmVUb0NhcnR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9KSA6XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0Q2FydFRhZ30+XHJcbiAgICAgICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuID4g7J6l67CU6rWs64uI6rCAIOu5hOyWtOyeiOyKteuLiOuLpC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZ2xvYmFsLW5hdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbG9iYWwtbmF2LWxpbmtzXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvZmlsZVwiIGNsYXNzTmFtZT1cImdsb2JhbC1uYXYtaXRlbVwiPvCfmIAgUHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9zdHVkeUJvYXJkXCIgY2xhc3NOYW1lPVwiZ2xvYmFsLW5hdi1pdGVtXCI+4p2TIEFzayBRdWVzdGlvbiA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIiBjbGFzc05hbWU9XCJnbG9iYWwtbmF2LWl0ZW1cIj7wn5OiIEFib3V0PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL3JhbmtcIiBjbGFzc05hbWU9XCJnbG9iYWwtbmF2LWl0ZW1cIj7wn5GNIFJhbmsgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJsb2NhbC1uYXZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYWwtbmF2LWxpbmtzXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+U1RVRFkgQk9BUkQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvc3R1ZHlCb2FyZFwiPvCfj6sgUXVlc3Rpb24gQm9hcmQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvc3R1ZHlCb2FyZFwiPuKchSBMb2dpbjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICB7Lyog7LKrIOuztOyXrOyngOuKlOu2gOu2gCAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBndXR0ZXI9e1szMiwgMzJdfT5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImxlZnRzaWRlXCIgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0c2lkZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxPldlbGNvbSB0byBTdHVkeUJvYXJkPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgRnJvbSBmaXJzdCBkYXkgdG8gZmluYWxzLCBnZXQgaG9tZXdvcmsgaGVscCwgZXhhbSBwcmVwICYgd3JpdGluZyBzdXBwb3J04oCUdGFpbG9yZWQgdG8geW91ciBjb3Vyc2VzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU0lHTlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9zdHVkeWJvYXJkXCIgY2xhc3NOYW1lPVwiYy10YWdcIj5GaW5kIHlvdXIgQW5zd2VyITwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInJpZ2h0c2lkZVwiIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWNvbmQtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogIDHrsogg7Iqk7YGs66GkIO2VmOuKlOqzteqwhCAqL31cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzY3JvbGwtc2VjdGlvblwiIGlkPVwic2Nyb2xsLXNlY3Rpb24tMFwiPlxyXG4gICAgICAgICAgPGgxPldlIGFyZSB0aGUgU3V0ZHlCb2FyZDwvaDE+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktZWxlbSBtYWluLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHA+7Jqw66as64qUIOuqqOuToCDsp4jrrLjsnYQg67Cb7Iq164uI64ukIDxiciAvPuuqqOultOuKlOqxuCDrrLzslrTrs7TshLjsmpQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1lbGVtIG1haW4tbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8cD7smrDrpqzripQg66qo65OgIOyniOusuOydhCDrsJvsirXri4jri6QgPGJyIC8+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktZWxlbSBtYWluLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHA+7Jqw66as64qUIOuqqOuToCDsp4jrrLjsnYQg67Cb7Iq164uI64ukIDxiciAvPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgey8qICAy67KIIOyKpO2BrOuhpCDtlZjripTqs7XqsIQgKi99XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2Nyb2xsLXNlY3Rpb25cIiBpZD1cInNjcm9sbC1zZWN0aW9uLTFcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+67O07Ya1IOyKpO2BrOuhpCDsmIHsl608L3N0cm9uZz5cclxuICAgICAgICAgICAg7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpFxyXG4gICAgICAgICAgICDsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpFxyXG4gICAgICAgICAgICDsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064ukXHJcbiAgICAgICAgICAgIOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6RcclxuICAgICAgICAgICAg7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpFxyXG4gICAgICAgICAgICDsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064ukXHJcbiAgICAgICAgICAgIOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6RcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIHsvKiAgM+uyiCDsiqTtgazroaQg7ZWY64qU6rO16rCEICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNjcm9sbC1zZWN0aW9uXCIgaWQ9XCJzY3JvbGwtc2VjdGlvbi0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1lbGVtIG1haW4tbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c21hbGw+7JWM6rOg7Iu27Jy866m0IOyKpO2EsOuUlCDrs7Trk5zroZwgPC9zbWFsbD5cclxuICAgICAgICAgICAgICDrrLzslrTrs7Tqs6Dsi7bsnYDqsowg662Q7JW8ID9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1lbGVtIGRlc2MtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICDrgrTqsIAg66qo66W064qU6rGw7J6I7Jy866m0IOusvOyWtOu0kFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGluXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktZWxlbSBkZXNjLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAg7Iqk7YSw65SU67O065Oc7JeQ7ISc64qUIOyii+yVhOyalOuPhCDsnojslrQsIDxiciAvPiDsoovslYRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpblwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIHsvKiAgNOuyiCDsiqTtgazroaQg7ZWY64qU6rO16rCEICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNjcm9sbC1zZWN0aW9uXCIgaWQ9XCJzY3JvbGwtc2VjdGlvbi0zXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtaWQtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8c3Ryb25nPlJldGluYSDrqLjqt7g8L3N0cm9uZz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIOqzteu2gOulvCDtlZjqs6DsnojsnYw8YnIgLz5cclxuICAgICAgICAgICAg6rO167aA7ZWY6riw7Iur7Ja07JqUXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYW52YXMtY2FwdGlvblwiPlxyXG4gICAgICAgICAgICBzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgIDIwMjEsIFN0dWR5Qm9hcmRcclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzY3JpcHQgc2NyPVwianMvbWFpbi5qc1wiIC8+XHJcblxyXG4gICAgPC9ib2R5PlxyXG4gIDwvaHRtbD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=