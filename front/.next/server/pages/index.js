module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\PYUNGKANG HONG\\Desktop\\CSE416_capstone\\front\\pages\\index.js";
 // import {} from './styles';
// import AppLayout from '../components/AppLayout';
// import { useMenu } from 'react';




const Home = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("html", {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("body", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
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
            lineNumber: 14,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "/studyBoard",
            className: "global-nav-item",
            children: "\u2753 Ask Question "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "/about",
            className: "global-nav-item",
            children: "\uD83D\uDCE2 About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "/rank",
            className: "global-nav-item",
            children: "\uD83D\uDC4D Rank "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("nav", {
        className: "local-nav",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "local-nav-links",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "/",
            className: "product-name",
            children: "STUDY BOARD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "/studyBoard",
            children: "\uD83C\uDFEB Question Board"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            href: "/studyBoard",
            children: "\u2705 Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "outer",
        id: "scroll-section-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
          className: "content",
          gutter: 8,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            className: "leftside",
            span: 24,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "leftside-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
                children: "Welcom to StudyBoard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                children: "94% of Chegg customers say they get better grades when they use Chegg to understand their coursework"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "wrapper",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "SIGN",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                    href: "/studyboard",
                    className: "c-tag",
                    children: "Find your Answer!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
        className: "scroll-section",
        id: "scroll-section-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          children: "Here for every moment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
          gutter: [16, 24],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "homeformoment",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Image"], {
                  src: "http://cubelink.me/media/article/1_601Tb6M.png",
                  width: "100%",
                  height: "100%"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
                  children: "Homework help"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                  className: "fh5co-position",
                  children: "Study with 55+ million step-by-step explanations, Expert Q&As & math suppor"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "homeformoment",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Image"], {
                  src: "http://cubelink.me/media/article/2.png",
                  width: "100%",
                  height: "100%"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
                  children: "Exam prep & practice"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                  className: "fh5co-position",
                  children: "Get ready for test day with 500+ million flashcards or review with practice exams."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "homeformoment",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Image"], {
                  src: "http://cubelink.me/media/article/3.png",
                  width: "100%",
                  height: "100%"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
                  children: "Understand a topic"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                  className: "fh5co-position",
                  children: "Simplify the toughest concepts with digestible topic breakdowns & videos."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "homeformoment",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Image"], {
                  src: "http://cubelink.me/media/article/4.png",
                  alt: "Trulli",
                  width: "100%",
                  height: "100%"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
                  children: "Network Work"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                  className: "fh5co-position",
                  children: "Strengthen your writing with plagiarism checks, expert proofreading & instant citations."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
        className: "scroll-section",
        id: "scroll-section-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "mid-message",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
            children: "Ranking System"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, undefined), "\uACF5\uBD80\uB97C \uD558\uACE0\uC788\uC74C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 21
          }, undefined), "\uACF5\uBD80\uD558\uAE30\uC2EB\uC5B4\uC694"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
          gutter: [8, 16],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 12,
            className: "square",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "RankBox",
              children: ["CSS \uBC15\uC2A4 \uBAA8\uB378\uC785\uB2C8\uB2E4.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 53
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 59
              }, undefined), "\uC0AC\uC9C4"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            className: "square",
            span: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "RankBox",
              children: ["CSS \uBC15\uC2A4 \uBAA8\uB378\uC785\uB2C8\uB2E4.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 53
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 59
              }, undefined), "\uC0AC\uC9C4"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
        className: "footer",
        children: "@2021, StudyBoard Inc, All rights reserved."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
      scr: "js/main.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDdkZBO0FBQ0E7QUFDQTs7QUFDQTs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLG1CQUNYO0FBQUEseUJBQ0U7QUFBQSw0QkFFRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDRTtBQUFL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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7fSBmcm9tICcuL3N0eWxlcyc7XHJcbi8vIGltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG4vLyBpbXBvcnQgeyB1c2VNZW51IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgSW1hZ2UgfSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiAoXHJcbiAgPGh0bWw+XHJcbiAgICA8Ym9keT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJnbG9iYWwtbmF2XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbC1uYXYtbGlua3NcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9maWxlXCIgY2xhc3NOYW1lPVwiZ2xvYmFsLW5hdi1pdGVtXCI+8J+YgCBQcm9maWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL3N0dWR5Qm9hcmRcIiBjbGFzc05hbWU9XCJnbG9iYWwtbmF2LWl0ZW1cIj7inZMgQXNrIFF1ZXN0aW9uIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT1cImdsb2JhbC1uYXYtaXRlbVwiPvCfk6IgQWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvcmFua1wiIGNsYXNzTmFtZT1cImdsb2JhbC1uYXYtaXRlbVwiPvCfkY0gUmFuayA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImxvY2FsLW5hdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhbC1uYXYtbGlua3NcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj5TVFVEWSBCT0FSRDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9zdHVkeUJvYXJkXCI+8J+PqyBRdWVzdGlvbiBCb2FyZDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9zdHVkeUJvYXJkXCI+4pyFIExvZ2luPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgIHsvKiDssqsg67O07Jes7KeA64qU67aA67aAICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyXCIgaWQ9XCJzY3JvbGwtc2VjdGlvbi0xXCI+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBndXR0ZXI9ezh9PlxyXG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImxlZnRzaWRlXCIgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdHNpZGUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+V2VsY29tIHRvIFN0dWR5Qm9hcmQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDk0JSBvZiBDaGVnZyBjdXN0b21lcnMgc2F5IHRoZXkgZ2V0IGJldHRlciBncmFkZXMgd2hlbiB0aGV5IHVzZSBDaGVnZyB0byB1bmRlcnN0YW5kIHRoZWlyIGNvdXJzZXdvcmtcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNJR05cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3N0dWR5Ym9hcmRcIiBjbGFzc05hbWU9XCJjLXRhZ1wiPkZpbmQgeW91ciBBbnN3ZXIhPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgey8qIDxDb2wgY2xhc3NOYW1lPVwicmlnaHRzaWRlXCIgc3Bhbj17MTJ9PiAqL31cclxuICAgICAgICAgICAgey8qICA8ZGl2IGlkPVwic2Vjb25kLWltYWdlXCIgLz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8L0NvbD4gKi99XHJcbiAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiAgMeuyiCDsiqTtgazroaQg7ZWY64qU6rO16rCEICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNjcm9sbC1zZWN0aW9uXCIgaWQ9XCJzY3JvbGwtc2VjdGlvbi0wXCI+XHJcbiAgICAgICAgICA8aDE+SGVyZSBmb3IgZXZlcnkgbW9tZW50PC9oMT5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDI0XX0+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezZ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZWZvcm1vbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cDovL2N1YmVsaW5rLm1lL21lZGlhL2FydGljbGUvMV82MDFUYjZNLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5Ib21ld29yayBoZWxwPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmg1Y28tcG9zaXRpb25cIj5TdHVkeSB3aXRoIDU1KyBtaWxsaW9uIHN0ZXAtYnktc3RlcCBleHBsYW5hdGlvbnMsIEV4cGVydCBRJkFzICYgbWF0aCBzdXBwb3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17Nn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lZm9ybW9tZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cDovL2N1YmVsaW5rLm1lL21lZGlhL2FydGljbGUvMi5wbmdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgyPkV4YW0gcHJlcCAmIHByYWN0aWNlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmg1Y28tcG9zaXRpb25cIj5HZXQgcmVhZHkgZm9yIHRlc3QgZGF5IHdpdGggNTAwKyBtaWxsaW9uIGZsYXNoY2FyZHMgb3IgcmV2aWV3IHdpdGggcHJhY3RpY2UgZXhhbXMuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezZ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZWZvcm1vbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHA6Ly9jdWJlbGluay5tZS9tZWRpYS9hcnRpY2xlLzMucG5nXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+VW5kZXJzdGFuZCBhIHRvcGljPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmg1Y28tcG9zaXRpb25cIj5TaW1wbGlmeSB0aGUgdG91Z2hlc3QgY29uY2VwdHMgd2l0aCBkaWdlc3RpYmxlIHRvcGljIGJyZWFrZG93bnMgJiB2aWRlb3MuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezZ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZWZvcm1vbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHA6Ly9jdWJlbGluay5tZS9tZWRpYS9hcnRpY2xlLzQucG5nXCIgYWx0PVwiVHJ1bGxpXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5OZXR3b3JrIFdvcms8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaDVjby1wb3NpdGlvblwiPlN0cmVuZ3RoZW4geW91ciB3cml0aW5nIHdpdGggcGxhZ2lhcmlzbSBjaGVja3MsIGV4cGVydCBwcm9vZnJlYWRpbmcgJiBpbnN0YW50IGNpdGF0aW9ucy48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICB7LyogIDTrsogg7Iqk7YGs66GkIO2VmOuKlOqzteqwhCAqL31cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzY3JvbGwtc2VjdGlvblwiIGlkPVwic2Nyb2xsLXNlY3Rpb24tM1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWlkLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHN0cm9uZz5SYW5raW5nIFN5c3RlbTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAg6rO167aA66W8IO2VmOqzoOyeiOydjDxiciAvPlxyXG4gICAgICAgICAgICDqs7XrtoDtlZjquLDsi6vslrTsmpRcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbOCwgMTZdfT5cclxuXHJcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cInNxdWFyZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmFua0JveFwiPkNTUyDrsJXsiqQg66qo64247J6F64uI64ukLjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAg7IKs7KeEXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJzcXVhcmVcIiBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSYW5rQm94XCI+Q1NTIOuwleyKpCDrqqjrjbjsnoXri4jri6QuPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICDsgqzsp4RcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICBAMjAyMSwgU3R1ZHlCb2FyZCBJbmMsIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2NyaXB0IHNjcj1cImpzL21haW4uanNcIiAvPlxyXG5cclxuICAgIDwvYm9keT5cclxuICA8L2h0bWw+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9