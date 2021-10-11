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
            lineNumber: 16,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: " \uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
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
            lineNumber: 22,
            columnNumber: 15
          }, _this);
        }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Box, {
          className: classes.productCartTag,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ShoppingCartIcon, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: " \uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
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
              lineNumber: 43,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "/studyBoard",
              className: "global-nav-item",
              children: "\u2753 Ask Question "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "/about",
              className: "global-nav-item",
              children: "\uD83D\uDCE2 About"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "/rank",
              className: "global-nav-item",
              children: "\uD83D\uDC4D Rank "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
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
              lineNumber: 51,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "/studyBoard",
              children: "\uD83C\uDFEB Question Board"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "/studyBoard",
              children: "\u2705 Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
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
                    lineNumber: 64,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                    children: "From first day to finals, get homework help, exam prep & writing support\u2014tailored to your courses."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
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
                        lineNumber: 70,
                        columnNumber: 23
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 21
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
                className: "rightside",
                span: 12,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  id: "second-image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
          className: "scroll-section",
          id: "scroll-section-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
            children: "We are the SutdyBoard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "sticky-elem main-message",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["\uC6B0\uB9AC\uB294 \uBAA8\uB4E0 \uC9C8\uBB38\uC744 \uBC1B\uC2B5\uB2C8\uB2E4 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 32
              }, _this), "\uBAA8\uB974\uB294\uAC78 \uBB3C\uC5B4\uBCF4\uC138\uC694"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "sticky-elem main-message",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["\uC6B0\uB9AC\uB294 \uBAA8\uB4E0 \uC9C8\uBB38\uC744 \uBC1B\uC2B5\uB2C8\uB2E4 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 32
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "sticky-elem main-message",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["\uC6B0\uB9AC\uB294 \uBAA8\uB4E0 \uC9C8\uBB38\uC744 \uBC1B\uC2B5\uB2C8\uB2E4 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 32
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
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
              lineNumber: 102,
              columnNumber: 13
            }, _this), "\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4 \uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4 \uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4 \uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4 \uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4 \uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4 \uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4\uC6B0\uB9AC\uB294 \uACF5\uBD80\uD558\uAE30\uC2EB\uC740 \uC0AC\uB78C\uB4E4\uC774\uB2E4"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
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
                lineNumber: 117,
                columnNumber: 15
              }, _this), "\uBB3C\uC5B4\uBCF4\uACE0\uC2F6\uC740\uAC8C \uBB50\uC57C ?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "sticky-elem desc-message",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: "\uB0B4\uAC00 \uBAA8\uB974\uB294\uAC70\uC788\uC73C\uBA74 \uBB3C\uC5B4\uBD10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "pin"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "sticky-elem desc-message",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["\uC2A4\uD130\uB514\uBCF4\uB4DC\uC5D0\uC11C\uB294 \uC88B\uC544\uC694\uB3C4 \uC788\uC5B4, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 33
              }, _this), " \uC88B\uC544"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "pin"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
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
              lineNumber: 138,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 13
            }, _this), "\uACF5\uBD80\uB97C \uD558\uACE0\uC788\uC74C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 21
            }, _this), "\uACF5\uBD80\uD558\uAE30\uC2EB\uC5B4\uC694"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "canvas-caption",
            children: "ssssssssssssssssssssssssssssssssssss"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
          className: "footer",
          children: "2021, StudyBoard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        scr: "js/main.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNsYXNzZXMiLCJwcm9kdWN0Q2FydCIsImNhcnQiLCJwcm9kdWN0Q2FydFRhZyIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsImltYWdlIiwidGl0bGUiLCJwcmljZSIsInF1YW50aXR5IiwicmVtb3ZlVG9DYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFDQTtBQUNBOztBQUNBOzs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNCQUNYO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVDLE9BQU8sQ0FBQ0MsV0FBeEI7QUFBQSxrQkFHRUMsSUFBSSxLQUFLLElBQVQsZ0JBRUkscUVBQUMsR0FBRDtBQUFLLG1CQUFTLEVBQUVGLE9BQU8sQ0FBQ0csY0FBeEI7QUFBQSxrQ0FDRSxxRUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEdBT0lELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUFoQixHQUNFRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSw4QkFDVCxxRUFBQyxTQUFEO0FBRUUsaUJBQUssRUFBRUQsT0FBTyxDQUFDRSxLQUZqQjtBQUdFLGlCQUFLLEVBQUVGLE9BQU8sQ0FBQ0csS0FIakI7QUFJRSxpQkFBSyxFQUFFSCxPQUFPLENBQUNJLEtBSmpCO0FBS0Usb0JBQVEsRUFBRUosT0FBTyxDQUFDSyxRQUxwQjtBQU1FLHdCQUFZLEVBQUVDO0FBTmhCLGFBQ09MLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVQsQ0FERixnQkFZRSxxRUFBQyxHQUFEO0FBQUssbUJBQVMsRUFBRVAsT0FBTyxDQUFDRyxjQUF4QjtBQUFBLGtDQUNFLHFFQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF0QlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBK0JFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsa0JBQWY7QUFBQSxvQ0FDRTtBQUFHLGtCQUFJLEVBQUMsVUFBUjtBQUFtQix1QkFBUyxFQUFDLGlCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUcsa0JBQUksRUFBQyxhQUFSO0FBQXNCLHVCQUFTLEVBQUMsaUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBRyxrQkFBSSxFQUFDLFFBQVI7QUFBaUIsdUJBQVMsRUFBQyxpQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFJRTtBQUFHLGtCQUFJLEVBQUMsT0FBUjtBQUFnQix1QkFBUyxFQUFDLGlCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBU0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxvQ0FDRTtBQUFHLGtCQUFJLEVBQUMsR0FBUjtBQUFZLHVCQUFTLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFHLGtCQUFJLEVBQUMsYUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUcsa0JBQUksRUFBQyxhQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFtQkU7QUFBSyxtQkFBUyxFQUFDLE9BQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsbUJBQWY7QUFBQSxtQ0FDRSxxRUFBQyx3Q0FBRDtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUF5QixvQkFBTSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBakM7QUFBQSxzQ0FDRSxxRUFBQyx3Q0FBRDtBQUFLLHlCQUFTLEVBQUMsVUFBZjtBQUEwQixvQkFBSSxFQUFFLEVBQWhDO0FBQUEsdUNBQ0U7QUFBSywyQkFBUyxFQUFDLGNBQWY7QUFBQSwwQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLGVBS0U7QUFBSyw2QkFBUyxFQUFDLFNBQWY7QUFBQSwyQ0FDRTtBQUFLLCtCQUFTLEVBQUMsTUFBZjtBQUFBLDZDQUNFO0FBQUcsNEJBQUksRUFBQyxhQUFSO0FBQXNCLGlDQUFTLEVBQUMsT0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBY0UscUVBQUMsd0NBQUQ7QUFBSyx5QkFBUyxFQUFDLFdBQWY7QUFBMkIsb0JBQUksRUFBRSxFQUFqQztBQUFBLHVDQUNFO0FBQUssb0JBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CRixlQTJDRTtBQUFTLG1CQUFTLEVBQUMsZ0JBQW5CO0FBQW9DLFlBQUUsRUFBQyxrQkFBdkM7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUdFO0FBQUsscUJBQVMsRUFBQywwQkFBZjtBQUFBLG1DQUNFO0FBQUEsc0hBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFPRTtBQUFLLHFCQUFTLEVBQUMsMEJBQWY7QUFBQSxtQ0FDRTtBQUFBLHNIQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBV0U7QUFBSyxxQkFBUyxFQUFDLDBCQUFmO0FBQUEsbUNBQ0U7QUFBQSxzSEFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0NGLGVBNERFO0FBQVMsbUJBQVMsRUFBQyxnQkFBbkI7QUFBb0MsWUFBRSxFQUFDLGtCQUF2QztBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQyxhQUFiO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1REYsZUEwRUU7QUFBUyxtQkFBUyxFQUFDLGdCQUFuQjtBQUFvQyxZQUFFLEVBQUMsa0JBQXZDO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLDBCQUFmO0FBQUEsbUNBQ0U7QUFBQSxzQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0U7QUFBSyxxQkFBUyxFQUFDLDBCQUFmO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFLLHVCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQWFFO0FBQUsscUJBQVMsRUFBQywwQkFBZjtBQUFBLG9DQUNFO0FBQUEsa0lBQ29CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUssdUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExRUYsZUFnR0U7QUFBUyxtQkFBUyxFQUFDLGdCQUFuQjtBQUFvQyxZQUFFLEVBQUMsa0JBQXZDO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLGFBQWI7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsOERBR1U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPRTtBQUFHLHFCQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhHRixlQTJHRTtBQUFRLG1CQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0dGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9CRixlQThJRTtBQUFRLFdBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5SUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURXO0FBQUEsQ0FBYjs7S0FBTUosSTtBQXNKU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2E3NDEzZjE0ZGY4MmNiNGNlOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHt9IGZyb20gJy4vc3R5bGVzJztcclxuLy8gaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbi8vIGltcG9ydCB7IHVzZU1lbnUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBJbWFnZSB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICA8aHRtbD5cclxuICAgIDxib2R5PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0Q2FydH0+XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICBjYXJ0ID09PSBudWxsXHJcbiAgICAgICAgICA/IChcclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdENhcnRUYWd9PlxyXG4gICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+IOyepeuwlOq1rOuLiOqwgCDruYTslrTsnojsirXri4jri6QuPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIClcclxuICAgICAgICAgIDogY2FydC5sZW5ndGggIT09IDBcclxuICAgICAgICAgICAgPyBjYXJ0Lm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8QWRkVG9DYXJ0XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e3Byb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk9e3Byb2R1Y3QucXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICByZW1vdmVUb0NhcnQ9e3JlbW92ZVRvQ2FydH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0Q2FydFRhZ30+XHJcbiAgICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+IOyepeuwlOq1rOuLiOqwgCDruYTslrTsnojsirXri4jri6QuPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZ2xvYmFsLW5hdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbG9iYWwtbmF2LWxpbmtzXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvZmlsZVwiIGNsYXNzTmFtZT1cImdsb2JhbC1uYXYtaXRlbVwiPvCfmIAgUHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9zdHVkeUJvYXJkXCIgY2xhc3NOYW1lPVwiZ2xvYmFsLW5hdi1pdGVtXCI+4p2TIEFzayBRdWVzdGlvbiA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIiBjbGFzc05hbWU9XCJnbG9iYWwtbmF2LWl0ZW1cIj7wn5OiIEFib3V0PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL3JhbmtcIiBjbGFzc05hbWU9XCJnbG9iYWwtbmF2LWl0ZW1cIj7wn5GNIFJhbmsgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJsb2NhbC1uYXZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYWwtbmF2LWxpbmtzXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+U1RVRFkgQk9BUkQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvc3R1ZHlCb2FyZFwiPvCfj6sgUXVlc3Rpb24gQm9hcmQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvc3R1ZHlCb2FyZFwiPuKchSBMb2dpbjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICB7Lyog7LKrIOuztOyXrOyngOuKlOu2gOu2gCAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBndXR0ZXI9e1szMiwgMzJdfT5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImxlZnRzaWRlXCIgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0c2lkZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxPldlbGNvbSB0byBTdHVkeUJvYXJkPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgRnJvbSBmaXJzdCBkYXkgdG8gZmluYWxzLCBnZXQgaG9tZXdvcmsgaGVscCwgZXhhbSBwcmVwICYgd3JpdGluZyBzdXBwb3J04oCUdGFpbG9yZWQgdG8geW91ciBjb3Vyc2VzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU0lHTlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9zdHVkeWJvYXJkXCIgY2xhc3NOYW1lPVwiYy10YWdcIj5GaW5kIHlvdXIgQW5zd2VyITwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInJpZ2h0c2lkZVwiIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWNvbmQtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogIDHrsogg7Iqk7YGs66GkIO2VmOuKlOqzteqwhCAqL31cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzY3JvbGwtc2VjdGlvblwiIGlkPVwic2Nyb2xsLXNlY3Rpb24tMFwiPlxyXG4gICAgICAgICAgPGgxPldlIGFyZSB0aGUgU3V0ZHlCb2FyZDwvaDE+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktZWxlbSBtYWluLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHA+7Jqw66as64qUIOuqqOuToCDsp4jrrLjsnYQg67Cb7Iq164uI64ukIDxiciAvPuuqqOultOuKlOqxuCDrrLzslrTrs7TshLjsmpQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1lbGVtIG1haW4tbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8cD7smrDrpqzripQg66qo65OgIOyniOusuOydhCDrsJvsirXri4jri6QgPGJyIC8+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktZWxlbSBtYWluLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHA+7Jqw66as64qUIOuqqOuToCDsp4jrrLjsnYQg67Cb7Iq164uI64ukIDxiciAvPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgey8qICAy67KIIOyKpO2BrOuhpCDtlZjripTqs7XqsIQgKi99XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2Nyb2xsLXNlY3Rpb25cIiBpZD1cInNjcm9sbC1zZWN0aW9uLTFcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+67O07Ya1IOyKpO2BrOuhpCDsmIHsl608L3N0cm9uZz5cclxuICAgICAgICAgICAg7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpFxyXG4gICAgICAgICAgICDsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpFxyXG4gICAgICAgICAgICDsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064ukXHJcbiAgICAgICAgICAgIOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6RcclxuICAgICAgICAgICAg7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpFxyXG4gICAgICAgICAgICDsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064ukXHJcbiAgICAgICAgICAgIOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6TsmrDrpqzripQg6rO167aA7ZWY6riw7Iur7J2AIOyCrOuejOuTpOydtOuLpOyasOumrOuKlCDqs7XrtoDtlZjquLDsi6vsnYAg7IKs656M65Ok7J2064uk7Jqw66as64qUIOqzteu2gO2VmOq4sOyLq+ydgCDsgqzrnozrk6TsnbTri6RcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIHsvKiAgM+uyiCDsiqTtgazroaQg7ZWY64qU6rO16rCEICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNjcm9sbC1zZWN0aW9uXCIgaWQ9XCJzY3JvbGwtc2VjdGlvbi0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1lbGVtIG1haW4tbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c21hbGw+7JWM6rOg7Iu27Jy866m0IOyKpO2EsOuUlCDrs7Trk5zroZwgPC9zbWFsbD5cclxuICAgICAgICAgICAgICDrrLzslrTrs7Tqs6Dsi7bsnYDqsowg662Q7JW8ID9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1lbGVtIGRlc2MtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICDrgrTqsIAg66qo66W064qU6rGw7J6I7Jy866m0IOusvOyWtOu0kFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGluXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktZWxlbSBkZXNjLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAg7Iqk7YSw65SU67O065Oc7JeQ7ISc64qUIOyii+yVhOyalOuPhCDsnojslrQsIDxiciAvPiDsoovslYRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpblwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIHsvKiAgNOuyiCDsiqTtgazroaQg7ZWY64qU6rO16rCEICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNjcm9sbC1zZWN0aW9uXCIgaWQ9XCJzY3JvbGwtc2VjdGlvbi0zXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtaWQtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8c3Ryb25nPlJldGluYSDrqLjqt7g8L3N0cm9uZz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIOqzteu2gOulvCDtlZjqs6DsnojsnYw8YnIgLz5cclxuICAgICAgICAgICAg6rO167aA7ZWY6riw7Iur7Ja07JqUXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYW52YXMtY2FwdGlvblwiPlxyXG4gICAgICAgICAgICBzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgIDIwMjEsIFN0dWR5Qm9hcmRcclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzY3JpcHQgc2NyPVwianMvbWFpbi5qc1wiIC8+XHJcblxyXG4gICAgPC9ib2R5PlxyXG4gIDwvaHRtbD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=