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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

(() => {
  const sceneInfo = [{
    // 0
    type: 'sticky',
    heightNum: 5,
    // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0
  }, {
    // 1
    type: 'normal',
    heightNum: 5,
    // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0
  }, {
    // 2
    type: 'sticky',
    heightNum: 5,
    // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0
  }, {
    // 3
    type: 'sticky',
    heightNum: 5,
    // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0
  }];

  function setLayout() {
    //  각 스크롤섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
    }
  } // setLayout(sceneInfo);

})();

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.css */ "./pages/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _leadership_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leadership.css */ "./pages/leadership.css");
/* harmony import */ var _leadership_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_leadership_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about.css */ "./pages/about.css");
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_about_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../js/main */ "./js/main.js");
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_main__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\PYUNGKANG HONG\\Desktop\\CSE416_capstone\\front\\pages\\_app.js";




 // css 디자인부분








const App = ({
  Component
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("title", {
      children: "Study Board | Find your answer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Component, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)]
}, void 0, true);

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(App));

/***/ }),

/***/ "./pages/about.css":
/*!*************************!*\
  !*** ./pages/about.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/leadership.css":
/*!******************************!*\
  !*** ./pages/leadership.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/main.css":
/*!************************!*\
  !*** ./pages/main.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 엑션을 의미한다
 // 리듀서 합쳐주는거



 // 초기상태
// 비동기 엑션 크리에이터
// action creator example
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data,
//     }
// };
// (이전상태, 액션) => 다음상태
// 서버사이드 렌더링을위해서 HYDRATE를 indext 부분을 넣은거다 없어도 돼는건데

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null
};
const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.sentence()
  }]
}));
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'PKKK'
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'PKCC'
  }
}); // 이전 상태를 액션을 통해 다음 상태로 만들어내느 함수가 리덕스(불변성은 지키면서 꼭)


const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_2___default()(state, draft => {
  switch (action.type) {
    // 포스트할때 로딩
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;
    // 인피니티드 스크롤링

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = action.data.concat(draft.mainPosts);
      draft.hasMorePosts = draft.mainPosts.length < 30;
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;
    // 포스트 업로드

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(dummyPost(action.data));
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;
    // 포스트 지우기

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;
    // 댓글 추가

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        // 드래프트에다 메인포스트에있으면 찾으면 id가 찾으면
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break; // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  id: 1,
  nickname: 'PK',
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: 'pk'
  }, {
    nickname: 'hawon'
  }, {
    nickname: 'Shin jeoungho'
  }],
  Followers: [{
    nickname: 'pk'
  }, {
    nickname: 'hawon'
  }, {
    nickname: 'jeoungho'
  }]
});

const initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
}); // return produce 라는건데 지금 eslint 편하게 코드하기위해서 추가해놨음

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
  switch (action.type) {
    // 팔로우
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data
      });
      draft.followDone = true;
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;
    // 언팔로우

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
      draft.unfollowDone = true;
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;
    // 로그인

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = dummyUser(action.data);
      draft.logInDone = true;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;
    // 로그아웃

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;
    // 회원가입

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;
    // 닉네임변경

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;
    // 자기자신에게 포스트 붙여주는거

    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;
    // 그 전에꺼 inner 뭐지.. 쉽네
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: [{ id: action.data }, ...state.me.Posts],
    //   },
    // };

    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
    //   },
    // };

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
// saga 이펙트이다 all fork take call etc..
// fork 는 비동기 함수 역활 call 은 동기함수 호출
// call이랑 fork 의 차이점은 결과갑을 받아와서 기다려 주느냐 아니냐


 // saga가 제너레이터이다

function* rootSaga() {
  // all 은 배열안에 한방에 다 실행해준다
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");






function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/posts', data);
}

function* loadPosts(action) {
  try {
    // const result = yield call(loadPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["generateDummyPost"])(10)
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
      data: e.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete('/api/post', data);
}

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);
}

function* logIn(action) {
  try {
    console.log('saga logIn'); // const result = yield call(logInAPI);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: e.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: e.response.data
    });
  }
}

function signUpAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/signUp');
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: e.response.data
    });
  }
}

function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/follow');
}

function* follow(action) {
  try {
    // const result = yield call(followAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: e.response.data
    });
  }
}

function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/unfollow');
}

function* unfollow(action) {
  try {
    // const result = yield call(unfollowAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: e.response.data
    });
  }
} // takeLatest 두번눌렸을때 마지막꺼만


function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([// fork는 함수를 실행해준다
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");


 // 개발용인지 아니면 배포용인지 구분

 // 리덕스 SAGA
// 리듀서를 불러오는거




const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbInNjZW5lSW5mbyIsInR5cGUiLCJoZWlnaHROdW0iLCJzY3JvbGxIZWlnaHQiLCJzZXRMYXlvdXQiLCJpIiwibGVuZ3RoIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwiZmluZCIsInBvc3RJZCIsImR1bW15VXNlciIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicHVzaCIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInVzZXJTYWdhIiwicG9zdFNhZ2EiLCJsb2FkUG9zdHNBUEkiLCJheGlvcyIsImdldCIsImxvYWRQb3N0cyIsImRlbGF5IiwicHV0IiwiZSIsInJlc3BvbnNlIiwiYWRkUG9zdEFQSSIsImVyciIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50IiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxDQUFDLE1BQU07QUFDTCxRQUFNQSxTQUFTLEdBQUcsQ0FDaEI7QUFDRTtBQUNBQyxRQUFJLEVBQUUsUUFGUjtBQUdFQyxhQUFTLEVBQUUsQ0FIYjtBQUdnQjtBQUNkQyxnQkFBWSxFQUFFO0FBSmhCLEdBRGdCLEVBUWhCO0FBQ0U7QUFDQUYsUUFBSSxFQUFFLFFBRlI7QUFHRUMsYUFBUyxFQUFFLENBSGI7QUFHZ0I7QUFDZEMsZ0JBQVksRUFBRTtBQUpoQixHQVJnQixFQWVoQjtBQUNFO0FBQ0FGLFFBQUksRUFBRSxRQUZSO0FBR0VDLGFBQVMsRUFBRSxDQUhiO0FBR2dCO0FBQ2RDLGdCQUFZLEVBQUU7QUFKaEIsR0FmZ0IsRUFzQmhCO0FBQ0U7QUFDQUYsUUFBSSxFQUFFLFFBRlI7QUFHRUMsYUFBUyxFQUFFLENBSGI7QUFHZ0I7QUFDZEMsZ0JBQVksRUFBRTtBQUpoQixHQXRCZ0IsQ0FBbEI7O0FBOEJBLFdBQVNDLFNBQVQsR0FBcUI7QUFDbkI7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdMLFNBQVMsQ0FBQ00sTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekNMLGVBQVMsQ0FBQ0ssQ0FBRCxDQUFULENBQWFGLFlBQWIsR0FBNEJILFNBQVMsQ0FBQ0ssQ0FBRCxDQUFULENBQWFILFNBQWIsR0FBeUJLLE1BQU0sQ0FBQ0MsV0FBNUQ7QUFDRDtBQUNGLEdBcENJLENBcUNMOztBQUNELENBdENELEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1DLEdBQUcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxrQkFDVjtBQUFBLDBCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNEJBQ0U7QUFBTSxhQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUUscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQSxnQkFERjs7QUFZQUQsR0FBRyxDQUFDRSxTQUFKLEdBQWdCO0FBQ2RELFdBQVMsRUFBRUUsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkM7QUFEbkIsQ0FBaEI7QUFJZUMsNEhBQU8sQ0FBQ0MsU0FBUixDQUFrQlAsR0FBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsTUFBTVEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxPQUFLLEVBQUUsQ0FBQ0MsS0FBSyxHQUFHLEVBQVQsRUFBYUMsTUFBYixLQUF3QjtBQUM3QixZQUFRQSxNQUFNLENBQUNwQixJQUFmO0FBQ0UsV0FBS3FCLDBEQUFMO0FBQ0VDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJILE1BQXZCO0FBQ0EsK0NBQVlELEtBQVosR0FBc0JDLE1BQU0sQ0FBQ0ksT0FBN0I7O0FBQ0Y7QUFDRSxlQUFPTCxLQUFQO0FBTEo7QUFPRCxHQVRpQztBQVVsQ00scURBVmtDO0FBV2xDQyxxREFBSUE7QUFYOEIsQ0FBRCxDQUFuQztBQWNlViwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU1XLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLEVBRGU7QUFFMUJDLFlBQVUsRUFBRSxFQUZjO0FBRzFCQyxjQUFZLEVBQUUsSUFIWTtBQUsxQkMsZ0JBQWMsRUFBRSxLQUxVO0FBTTFCQyxhQUFXLEVBQUUsS0FOYTtBQU8xQkMsY0FBWSxFQUFFLElBUFk7QUFTMUJDLG1CQUFpQixFQUFFLEtBVE87QUFVMUJDLGdCQUFjLEVBQUUsS0FWVTtBQVcxQkMsaUJBQWUsRUFBRSxJQVhTO0FBYTFCQyxtQkFBaUIsRUFBRSxLQWJPO0FBYzFCQyxnQkFBYyxFQUFFLEtBZFU7QUFlMUJDLGlCQUFlLEVBQUUsSUFmUztBQWlCMUJDLGtCQUFnQixFQUFFLEtBakJRO0FBa0IxQkMsZUFBYSxFQUFFLEtBbEJXO0FBbUIxQkMsZ0JBQWMsRUFBRTtBQW5CVSxDQUFyQjtBQXNCQSxNQUFNQyxpQkFBaUIsR0FBSUMsTUFBRCxJQUFZQyxLQUFLLENBQUNELE1BQUQsQ0FBTCxDQUFjRSxJQUFkLEdBQXFCQyxHQUFyQixDQUF5QixPQUFPO0FBQzNFQyxJQUFFLEVBQUVDLDhDQUFPLENBQUNDLFFBQVIsRUFEdUU7QUFFM0VDLE1BQUksRUFBRTtBQUNKSCxNQUFFLEVBQUVDLDhDQUFPLENBQUNDLFFBQVIsRUFEQTtBQUVKRSxZQUFRLEVBQUVDLDRDQUFLLENBQUNDLElBQU4sQ0FBV0MsUUFBWDtBQUZOLEdBRnFFO0FBTTNFQyxTQUFPLEVBQUVILDRDQUFLLENBQUNJLEtBQU4sQ0FBWUMsU0FBWixFQU5rRTtBQU8zRUMsUUFBTSxFQUFFLENBQUM7QUFDUEMsT0FBRyxFQUFFUCw0Q0FBSyxDQUFDUSxLQUFOLENBQVlBLEtBQVo7QUFERSxHQUFELENBUG1FO0FBVTNFQyxVQUFRLEVBQUUsQ0FBQztBQUNUWCxRQUFJLEVBQUU7QUFDSkgsUUFBRSxFQUFFQyw4Q0FBTyxDQUFDQyxRQUFSLEVBREE7QUFFSkUsY0FBUSxFQUFFQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVg7QUFGTixLQURHO0FBS1RDLFdBQU8sRUFBRUgsNENBQUssQ0FBQ0ksS0FBTixDQUFZTSxRQUFaO0FBTEEsR0FBRDtBQVZpRSxDQUFQLENBQXpCLENBQXRDO0FBbUJBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLE9BQU8sR0FBSUMsSUFBRCxLQUFXO0FBQ2hDN0UsTUFBSSxFQUFFbUUsZ0JBRDBCO0FBRWhDVTtBQUZnQyxDQUFYLENBQWhCO0FBS0EsTUFBTUMsVUFBVSxHQUFJRCxJQUFELEtBQVc7QUFDbkM3RSxNQUFJLEVBQUV5RSxtQkFENkI7QUFFbkNJO0FBRm1DLENBQVgsQ0FBbkI7O0FBS1AsTUFBTUUsU0FBUyxHQUFJRixJQUFELEtBQVc7QUFDM0I3QixJQUFFLEVBQUU2QixJQUFJLENBQUM3QixFQURrQjtBQUUzQlEsU0FBTyxFQUFFcUIsSUFBSSxDQUFDckIsT0FGYTtBQUczQkwsTUFBSSxFQUFFO0FBQ0pILE1BQUUsRUFBRSxDQURBO0FBRUpJLFlBQVEsRUFBRTtBQUZOLEdBSHFCO0FBTzNCTyxRQUFNLEVBQUUsRUFQbUI7QUFRM0JHLFVBQVEsRUFBRTtBQVJpQixDQUFYLENBQWxCOztBQVdBLE1BQU1rQixZQUFZLEdBQUlILElBQUQsS0FBVztBQUM5QjdCLElBQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUixFQUQwQjtBQUU5Qk0sU0FBTyxFQUFFcUIsSUFGcUI7QUFHOUIxQixNQUFJLEVBQUU7QUFDSkgsTUFBRSxFQUFFLENBREE7QUFFSkksWUFBUSxFQUFFO0FBRk47QUFId0IsQ0FBWCxDQUFyQixDLENBU0E7OztBQUNBLE1BQU02QixPQUFPLEdBQUcsQ0FBQzlELEtBQUssR0FBR1EsWUFBVCxFQUF1QlAsTUFBdkIsS0FBa0M4RCw0Q0FBTyxDQUFDL0QsS0FBRCxFQUFTZ0UsS0FBRCxJQUFXO0FBQzFFLFVBQVEvRCxNQUFNLENBQUNwQixJQUFmO0FBQ0U7QUFDQSxTQUFLZ0Usa0JBQUw7QUFDRW1CLFdBQUssQ0FBQzNDLGdCQUFOLEdBQXlCLElBQXpCO0FBQ0EyQyxXQUFLLENBQUMxQyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0EwQyxXQUFLLENBQUN6QyxjQUFOLEdBQXVCLElBQXZCO0FBQ0E7QUFDQTs7QUFDRixTQUFLdUIsa0JBQUw7QUFDRWtCLFdBQUssQ0FBQzNDLGdCQUFOLEdBQXlCLEtBQXpCO0FBQ0EyQyxXQUFLLENBQUMxQyxhQUFOLEdBQXNCLElBQXRCO0FBQ0EwQyxXQUFLLENBQUN2RCxTQUFOLEdBQWtCUixNQUFNLENBQUN5RCxJQUFQLENBQVlPLE1BQVosQ0FBbUJELEtBQUssQ0FBQ3ZELFNBQXpCLENBQWxCO0FBQ0F1RCxXQUFLLENBQUNyRCxZQUFOLEdBQXFCcUQsS0FBSyxDQUFDdkQsU0FBTixDQUFnQnZCLE1BQWhCLEdBQXlCLEVBQTlDO0FBQ0E7O0FBQ0YsU0FBSzZELGtCQUFMO0FBQ0VpQixXQUFLLENBQUMzQyxnQkFBTixHQUF5QixLQUF6QjtBQUNBMkMsV0FBSyxDQUFDekMsY0FBTixHQUF1QnRCLE1BQU0sQ0FBQ2lFLEtBQTlCO0FBQ0E7QUFFRjs7QUFDQSxTQUFLbEIsZ0JBQUw7QUFDRWdCLFdBQUssQ0FBQ3BELGNBQU4sR0FBdUIsSUFBdkI7QUFDQW9ELFdBQUssQ0FBQ25ELFdBQU4sR0FBb0IsS0FBcEI7QUFDQW1ELFdBQUssQ0FBQ2xELFlBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFDRixTQUFLbUMsZ0JBQUw7QUFDRWUsV0FBSyxDQUFDcEQsY0FBTixHQUF1QixLQUF2QjtBQUNBb0QsV0FBSyxDQUFDbkQsV0FBTixHQUFvQixJQUFwQjtBQUNBbUQsV0FBSyxDQUFDdkQsU0FBTixDQUFnQjBELE9BQWhCLENBQXdCUCxTQUFTLENBQUMzRCxNQUFNLENBQUN5RCxJQUFSLENBQWpDO0FBQ0E7O0FBQ0YsU0FBS1IsZ0JBQUw7QUFDRWMsV0FBSyxDQUFDcEQsY0FBTixHQUF1QixLQUF2QjtBQUNBb0QsV0FBSyxDQUFDbEQsWUFBTixHQUFxQmIsTUFBTSxDQUFDaUUsS0FBNUI7QUFDQTtBQUVBOztBQUNGLFNBQUtmLG1CQUFMO0FBQ0VhLFdBQUssQ0FBQzlDLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0E4QyxXQUFLLENBQUM3QyxjQUFOLEdBQXVCLEtBQXZCO0FBQ0E2QyxXQUFLLENBQUM1QyxlQUFOLEdBQXdCLElBQXhCO0FBQ0E7O0FBQ0YsU0FBS2dDLG1CQUFMO0FBQ0VZLFdBQUssQ0FBQzlDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E4QyxXQUFLLENBQUM3QyxjQUFOLEdBQXVCLElBQXZCO0FBQ0E2QyxXQUFLLENBQUN2RCxTQUFOLEdBQWtCdUQsS0FBSyxDQUFDdkQsU0FBTixDQUFnQjJELE1BQWhCLENBQXdCQyxDQUFELElBQU9BLENBQUMsQ0FBQ3hDLEVBQUYsS0FBUzVCLE1BQU0sQ0FBQ3lELElBQTlDLENBQWxCO0FBQ0E7O0FBQ0YsU0FBS0wsbUJBQUw7QUFDRVcsV0FBSyxDQUFDOUMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQThDLFdBQUssQ0FBQzVDLGVBQU4sR0FBd0JuQixNQUFNLENBQUNpRSxLQUEvQjtBQUNBO0FBRUE7O0FBQ0YsU0FBS1osbUJBQUw7QUFDRVUsV0FBSyxDQUFDakQsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQWlELFdBQUssQ0FBQ2hELGNBQU4sR0FBdUIsS0FBdkI7QUFDQWdELFdBQUssQ0FBQy9DLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDRixTQUFLc0MsbUJBQUw7QUFBMEI7QUFDeEI7QUFDQSxjQUFNaEQsSUFBSSxHQUFHeUQsS0FBSyxDQUFDdkQsU0FBTixDQUFnQjZELElBQWhCLENBQXNCRCxDQUFELElBQU9BLENBQUMsQ0FBQ3hDLEVBQUYsS0FBUzVCLE1BQU0sQ0FBQ3lELElBQVAsQ0FBWWEsTUFBakQsQ0FBYjtBQUNBaEUsWUFBSSxDQUFDb0MsUUFBTCxDQUFjd0IsT0FBZCxDQUFzQk4sWUFBWSxDQUFDNUQsTUFBTSxDQUFDeUQsSUFBUCxDQUFZckIsT0FBYixDQUFsQztBQUNBMkIsYUFBSyxDQUFDakQsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWlELGFBQUssQ0FBQ2hELGNBQU4sR0FBdUIsSUFBdkI7QUFDQSxjQU53QixDQVF4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUNELFNBQUt3QyxtQkFBTDtBQUNFUSxXQUFLLENBQUNqRCxpQkFBTixHQUEwQixLQUExQjtBQUNBaUQsV0FBSyxDQUFDL0MsZUFBTixHQUF3QmhCLE1BQU0sQ0FBQ2lFLEtBQS9CO0FBQ0E7O0FBRUY7QUFDRTtBQWxGSjtBQW9GRCxDQXJGd0QsQ0FBekQ7O0FBdUZlSixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkxBO0FBQ0E7O0FBRUEsTUFBTVUsU0FBUyxHQUFJZCxJQUFELG9DQUNiQSxJQURhO0FBRWhCN0IsSUFBRSxFQUFFLENBRlk7QUFHaEJJLFVBQVEsRUFBRSxJQUhNO0FBSWhCd0MsT0FBSyxFQUFFLENBQUM7QUFBRTVDLE1BQUUsRUFBRTtBQUFOLEdBQUQsQ0FKUztBQUtoQjZDLFlBQVUsRUFBRSxDQUFDO0FBQUV6QyxZQUFRLEVBQUU7QUFBWixHQUFELEVBQXFCO0FBQUVBLFlBQVEsRUFBRTtBQUFaLEdBQXJCLEVBQTRDO0FBQUVBLFlBQVEsRUFBRTtBQUFaLEdBQTVDLENBTEk7QUFNaEIwQyxXQUFTLEVBQUUsQ0FBQztBQUFFMUMsWUFBUSxFQUFFO0FBQVosR0FBRCxFQUFxQjtBQUFFQSxZQUFRLEVBQUU7QUFBWixHQUFyQixFQUE0QztBQUFFQSxZQUFRLEVBQUU7QUFBWixHQUE1QztBQU5LLEVBQWxCOztBQVNPLE1BQU16QixZQUFZLEdBQUc7QUFDMUJvRSxjQUFZLEVBQUUsS0FEWTtBQUUxQkMsV0FBUyxFQUFFLEtBRmU7QUFHMUJDLFlBQVUsRUFBRSxJQUhjO0FBSTFCQyxlQUFhLEVBQUUsS0FKVztBQUsxQkMsWUFBVSxFQUFFLEtBTGM7QUFNMUJDLGFBQVcsRUFBRSxJQU5hO0FBTzFCQyxlQUFhLEVBQUUsS0FQVztBQVExQkMsWUFBVSxFQUFFLEtBUmM7QUFTMUJDLGFBQVcsRUFBRSxJQVRhO0FBVTFCQyx1QkFBcUIsRUFBRSxLQVZHO0FBVzFCQyxvQkFBa0IsRUFBRSxLQVhNO0FBWTFCQyxxQkFBbUIsRUFBRSxJQVpLO0FBYTFCQyxlQUFhLEVBQUUsS0FiVztBQWMxQkMsWUFBVSxFQUFFLEtBZGM7QUFlMUJDLGFBQVcsRUFBRSxJQWZhO0FBZ0IxQkMsaUJBQWUsRUFBRSxLQWhCUztBQWlCMUJDLGNBQVksRUFBRSxLQWpCWTtBQWtCMUJDLGVBQWEsRUFBRSxJQWxCVztBQW1CMUJDLElBQUUsRUFBRSxJQW5Cc0I7QUFvQjFCQyxZQUFVLEVBQUUsRUFwQmM7QUFxQjFCQyxXQUFTLEVBQUU7QUFyQmUsQ0FBckI7QUF3QkEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLGtCQUFrQixHQUFJM0QsSUFBRCxLQUFXO0FBQzNDN0UsTUFBSSxFQUFFb0gsY0FEcUM7QUFFM0N2QztBQUYyQyxDQUFYLENBQTNCO0FBS0EsTUFBTTRELG1CQUFtQixHQUFHLE9BQU87QUFDeEN6SSxNQUFJLEVBQUV1SDtBQURrQyxDQUFQLENBQTVCLEMsQ0FJUDs7QUFDQSxNQUFNdEMsT0FBTyxHQUFHLENBQUM5RCxLQUFLLEdBQUdRLFlBQVQsRUFBdUJQLE1BQXZCLEtBQWtDOEQsNENBQU8sQ0FBQy9ELEtBQUQsRUFBU2dFLEtBQUQsSUFBVztBQUMxRSxVQUFRL0QsTUFBTSxDQUFDcEIsSUFBZjtBQUNFO0FBQ0EsU0FBS2dJLGNBQUw7QUFDRTdDLFdBQUssQ0FBQ3dCLGFBQU4sR0FBc0IsSUFBdEI7QUFDQXhCLFdBQUssQ0FBQzBCLFdBQU4sR0FBb0IsSUFBcEI7QUFDQTFCLFdBQUssQ0FBQ3lCLFVBQU4sR0FBbUIsS0FBbkI7QUFDQTs7QUFDRixTQUFLcUIsY0FBTDtBQUNFOUMsV0FBSyxDQUFDd0IsYUFBTixHQUFzQixLQUF0QjtBQUNBeEIsV0FBSyxDQUFDOEIsRUFBTixDQUFTcEIsVUFBVCxDQUFvQjZDLElBQXBCLENBQXlCO0FBQUUxRixVQUFFLEVBQUU1QixNQUFNLENBQUN5RDtBQUFiLE9BQXpCO0FBQ0FNLFdBQUssQ0FBQ3lCLFVBQU4sR0FBbUIsSUFBbkI7QUFDQTs7QUFDRixTQUFLc0IsY0FBTDtBQUNFL0MsV0FBSyxDQUFDd0IsYUFBTixHQUFzQixLQUF0QjtBQUNBeEIsV0FBSyxDQUFDMEIsV0FBTixHQUFvQnpGLE1BQU0sQ0FBQ2lFLEtBQTNCO0FBQ0E7QUFFQTs7QUFDRixTQUFLOEMsZ0JBQUw7QUFDRWhELFdBQUssQ0FBQzJCLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTNCLFdBQUssQ0FBQzZCLGFBQU4sR0FBc0IsSUFBdEI7QUFDQTdCLFdBQUssQ0FBQzRCLFlBQU4sR0FBcUIsS0FBckI7QUFDQTs7QUFDRixTQUFLcUIsZ0JBQUw7QUFDRWpELFdBQUssQ0FBQzJCLGVBQU4sR0FBd0IsS0FBeEI7QUFDQTNCLFdBQUssQ0FBQzhCLEVBQU4sQ0FBU3BCLFVBQVQsR0FBc0JWLEtBQUssQ0FBQzhCLEVBQU4sQ0FBU3BCLFVBQVQsQ0FBb0JOLE1BQXBCLENBQTRCQyxDQUFELElBQU9BLENBQUMsQ0FBQ3hDLEVBQUYsS0FBUzVCLE1BQU0sQ0FBQ3lELElBQWxELENBQXRCO0FBQ0FNLFdBQUssQ0FBQzRCLFlBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFDRixTQUFLc0IsZ0JBQUw7QUFDRWxELFdBQUssQ0FBQzJCLGVBQU4sR0FBd0IsS0FBeEI7QUFDQTNCLFdBQUssQ0FBQzZCLGFBQU4sR0FBc0I1RixNQUFNLENBQUNpRSxLQUE3QjtBQUNBO0FBRUY7O0FBQ0EsU0FBSytCLGNBQUw7QUFDRWpDLFdBQUssQ0FBQ1ksWUFBTixHQUFxQixJQUFyQjtBQUNBWixXQUFLLENBQUNjLFVBQU4sR0FBbUIsSUFBbkI7QUFDQWQsV0FBSyxDQUFDYSxTQUFOLEdBQWtCLEtBQWxCO0FBQ0E7O0FBQ0YsU0FBS3FCLGNBQUw7QUFDRWxDLFdBQUssQ0FBQ1ksWUFBTixHQUFxQixLQUFyQjtBQUNBWixXQUFLLENBQUM4QixFQUFOLEdBQVd0QixTQUFTLENBQUN2RSxNQUFNLENBQUN5RCxJQUFSLENBQXBCO0FBQ0FNLFdBQUssQ0FBQ2EsU0FBTixHQUFrQixJQUFsQjtBQUNBOztBQUNGLFNBQUtzQixjQUFMO0FBQ0VuQyxXQUFLLENBQUNZLFlBQU4sR0FBcUIsS0FBckI7QUFDQVosV0FBSyxDQUFDYyxVQUFOLEdBQW1CN0UsTUFBTSxDQUFDaUUsS0FBMUI7QUFDQTtBQUVBOztBQUNGLFNBQUtrQyxlQUFMO0FBQ0VwQyxXQUFLLENBQUNlLGFBQU4sR0FBc0IsSUFBdEI7QUFDQWYsV0FBSyxDQUFDaUIsV0FBTixHQUFvQixJQUFwQjtBQUNBakIsV0FBSyxDQUFDZ0IsVUFBTixHQUFtQixLQUFuQjtBQUNBOztBQUNGLFNBQUtxQixlQUFMO0FBQ0VyQyxXQUFLLENBQUNlLGFBQU4sR0FBc0IsS0FBdEI7QUFDQWYsV0FBSyxDQUFDZ0IsVUFBTixHQUFtQixJQUFuQjtBQUNBaEIsV0FBSyxDQUFDOEIsRUFBTixHQUFXLElBQVg7QUFDQTs7QUFDRixTQUFLUSxlQUFMO0FBQ0V0QyxXQUFLLENBQUNlLGFBQU4sR0FBc0IsS0FBdEI7QUFDQWYsV0FBSyxDQUFDaUIsV0FBTixHQUFvQmhGLE1BQU0sQ0FBQ2lFLEtBQTNCO0FBQ0E7QUFFQTs7QUFDRixTQUFLcUMsZUFBTDtBQUNFdkMsV0FBSyxDQUFDa0IsYUFBTixHQUFzQixJQUF0QjtBQUNBbEIsV0FBSyxDQUFDb0IsV0FBTixHQUFvQixJQUFwQjtBQUNBcEIsV0FBSyxDQUFDbUIsVUFBTixHQUFtQixLQUFuQjtBQUNBOztBQUNGLFNBQUtxQixlQUFMO0FBQ0V4QyxXQUFLLENBQUNrQixhQUFOLEdBQXNCLEtBQXRCO0FBQ0FsQixXQUFLLENBQUNtQixVQUFOLEdBQW1CLElBQW5CO0FBQ0E7O0FBQ0YsU0FBS3NCLGVBQUw7QUFDRXpDLFdBQUssQ0FBQ2tCLGFBQU4sR0FBc0IsS0FBdEI7QUFDQWxCLFdBQUssQ0FBQ29CLFdBQU4sR0FBb0JuRixNQUFNLENBQUNpRSxLQUEzQjtBQUNBO0FBRUE7O0FBQ0YsU0FBS3dDLHVCQUFMO0FBQ0UxQyxXQUFLLENBQUNxQixxQkFBTixHQUE4QixJQUE5QjtBQUNBckIsV0FBSyxDQUFDdUIsbUJBQU4sR0FBNEIsSUFBNUI7QUFDQXZCLFdBQUssQ0FBQ3NCLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0E7O0FBQ0YsU0FBS3FCLHVCQUFMO0FBQ0UzQyxXQUFLLENBQUNxQixxQkFBTixHQUE4QixLQUE5QjtBQUNBckIsV0FBSyxDQUFDc0Isa0JBQU4sR0FBMkIsSUFBM0I7QUFDQTs7QUFDRixTQUFLc0IsdUJBQUw7QUFDRTVDLFdBQUssQ0FBQ3FCLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0FyQixXQUFLLENBQUN1QixtQkFBTixHQUE0QnRGLE1BQU0sQ0FBQ2lFLEtBQW5DO0FBQ0E7QUFFQTs7QUFDRixTQUFLaUQsY0FBTDtBQUNFbkQsV0FBSyxDQUFDOEIsRUFBTixDQUFTckIsS0FBVCxDQUFlTixPQUFmLENBQXVCO0FBQUV0QyxVQUFFLEVBQUU1QixNQUFNLENBQUN5RDtBQUFiLE9BQXZCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVGLFNBQUswRCxpQkFBTDtBQUNFcEQsV0FBSyxDQUFDOEIsRUFBTixDQUFTckIsS0FBVCxHQUFpQlQsS0FBSyxDQUFDOEIsRUFBTixDQUFTckIsS0FBVCxDQUFlTCxNQUFmLENBQXVCQyxDQUFELElBQU9BLENBQUMsQ0FBQ3hDLEVBQUYsS0FBUzVCLE1BQU0sQ0FBQ3lELElBQTdDLENBQWpCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRjtBQUNFO0FBMUhKO0FBNEhELENBN0h3RCxDQUF6RDs7QUErSGVJLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7O0FBQ2UsVUFBVTBELFFBQVYsR0FBcUI7QUFDbEM7QUFDQSxRQUFNQyw4REFBRyxDQUFDLENBQ1JDLCtEQUFJLENBQUNDLDZDQUFELENBREksRUFFUkQsK0RBQUksQ0FBQ0UsNkNBQUQsQ0FGSSxDQUFELENBQVQ7QUFJRCxDOzs7Ozs7Ozs7Ozs7QUNmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQm5FLElBQXRCLEVBQTRCO0FBQzFCLFNBQU9vRSw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsWUFBVixFQUF3QnJFLElBQXhCLENBQVA7QUFDRDs7QUFFRCxVQUFVc0UsU0FBVixDQUFvQi9ILE1BQXBCLEVBQTRCO0FBQzFCLE1BQUk7QUFDRjtBQUNBLFVBQU1nSSxnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDUnJKLFVBQUksRUFBRWlFLGlFQURFO0FBRVJZLFVBQUksRUFBRWxDLHdFQUFpQixDQUFDLEVBQUQ7QUFGZixLQUFELENBQVQ7QUFJRCxHQVBELENBT0UsT0FBTzJHLENBQVAsRUFBVTtBQUNWaEksV0FBTyxDQUFDK0QsS0FBUixDQUFjaUUsQ0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDUnJKLFVBQUksRUFBRWtFLGlFQURFO0FBRVJXLFVBQUksRUFBRXlFLENBQUMsQ0FBQ0MsUUFBRixDQUFXMUU7QUFGVCxLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVMyRSxVQUFULENBQW9CM0UsSUFBcEIsRUFBMEI7QUFDeEIsU0FBT29FLDRDQUFLLENBQUN2SCxJQUFOLENBQVcsV0FBWCxFQUF3Qm1ELElBQXhCLENBQVA7QUFDRDs7QUFFRCxVQUFVRCxPQUFWLENBQWtCeEQsTUFBbEIsRUFBMEI7QUFDeEIsTUFBSTtBQUNGO0FBQ0EsVUFBTWdJLGdFQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTXBHLEVBQUUsR0FBR0MsOENBQU8sQ0FBQ0MsUUFBUixFQUFYO0FBQ0EsVUFBTW1HLDhEQUFHLENBQUM7QUFDUnJKLFVBQUksRUFBRW9FLCtEQURFO0FBRVJTLFVBQUksRUFBRTtBQUNKN0IsVUFESTtBQUVKUSxlQUFPLEVBQUVwQyxNQUFNLENBQUN5RDtBQUZaO0FBRkUsS0FBRCxDQUFUO0FBT0EsVUFBTXdFLDhEQUFHLENBQUM7QUFDUnJKLFVBQUksRUFBRXNJLDZEQURFO0FBRVJ6RCxVQUFJLEVBQUU3QjtBQUZFLEtBQUQsQ0FBVDtBQUlELEdBZkQsQ0FlRSxPQUFPeUcsR0FBUCxFQUFZO0FBQ1puSSxXQUFPLENBQUMrRCxLQUFSLENBQWNvRSxHQUFkO0FBQ0EsVUFBTUosOERBQUcsQ0FBQztBQUNSckosVUFBSSxFQUFFcUUsK0RBREU7QUFFUlEsVUFBSSxFQUFFNEUsR0FBRyxDQUFDRixRQUFKLENBQWExRTtBQUZYLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsU0FBUzZFLGFBQVQsQ0FBdUI3RSxJQUF2QixFQUE2QjtBQUMzQixTQUFPb0UsNENBQUssQ0FBQ1UsTUFBTixDQUFhLFdBQWIsRUFBMEI5RSxJQUExQixDQUFQO0FBQ0Q7O0FBRUQsVUFBVStFLFVBQVYsQ0FBcUJ4SSxNQUFyQixFQUE2QjtBQUMzQixNQUFJO0FBQ0Y7QUFDQSxVQUFNZ0ksZ0VBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyw4REFBRyxDQUFDO0FBQ1JySixVQUFJLEVBQUV1RSxrRUFERTtBQUVSTSxVQUFJLEVBQUV6RCxNQUFNLENBQUN5RDtBQUZMLEtBQUQsQ0FBVDtBQUlBLFVBQU13RSw4REFBRyxDQUFDO0FBQ1JySixVQUFJLEVBQUV1SSxnRUFERTtBQUVSMUQsVUFBSSxFQUFFekQsTUFBTSxDQUFDeUQ7QUFGTCxLQUFELENBQVQ7QUFJRCxHQVhELENBV0UsT0FBTzRFLEdBQVAsRUFBWTtBQUNabkksV0FBTyxDQUFDK0QsS0FBUixDQUFjb0UsR0FBZDtBQUNBLFVBQU1KLDhEQUFHLENBQUM7QUFDUnJKLFVBQUksRUFBRXdFLGtFQURFO0FBRVJLLFVBQUksRUFBRTRFLEdBQUcsQ0FBQ0YsUUFBSixDQUFhMUU7QUFGWCxLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVNnRixhQUFULENBQXVCaEYsSUFBdkIsRUFBNkI7QUFDM0IsU0FBT29FLDRDQUFLLENBQUN2SCxJQUFOLENBQVksYUFBWW1ELElBQUksQ0FBQ2EsTUFBTyxVQUFwQyxFQUErQ2IsSUFBL0MsQ0FBUDtBQUNEOztBQUVELFVBQVVDLFVBQVYsQ0FBcUIxRCxNQUFyQixFQUE2QjtBQUMzQixNQUFJO0FBQ0Y7QUFDQSxVQUFNZ0ksZ0VBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyw4REFBRyxDQUFDO0FBQ1JySixVQUFJLEVBQUUwRSxrRUFERTtBQUVSRyxVQUFJLEVBQUV6RCxNQUFNLENBQUN5RDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBUEQsQ0FPRSxPQUFPNEUsR0FBUCxFQUFZO0FBQ1osVUFBTUosOERBQUcsQ0FBQztBQUNSckosVUFBSSxFQUFFMkUsa0VBREU7QUFFUkUsVUFBSSxFQUFFNEUsR0FBRyxDQUFDRixRQUFKLENBQWExRTtBQUZYLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsVUFBVWlGLGNBQVYsR0FBMkI7QUFDekIsUUFBTUMsbUVBQVEsQ0FBQyxJQUFELEVBQU8vRixpRUFBUCxFQUEyQm1GLFNBQTNCLENBQWQ7QUFDRDs7QUFFRCxVQUFVYSxZQUFWLEdBQXlCO0FBQ3ZCLFFBQU1DLHFFQUFVLENBQUM5RiwrREFBRCxFQUFtQlMsT0FBbkIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVc0YsZUFBVixHQUE0QjtBQUMxQixRQUFNRCxxRUFBVSxDQUFDM0Ysa0VBQUQsRUFBc0JzRixVQUF0QixDQUFoQjtBQUNEOztBQUVELFVBQVVPLGVBQVYsR0FBNEI7QUFDMUIsUUFBTUYscUVBQVUsQ0FBQ3hGLGtFQUFELEVBQXNCSyxVQUF0QixDQUFoQjtBQUNEOztBQUVjLFVBQVVpRSxRQUFWLEdBQXFCO0FBQ2xDLFFBQU1ILDhEQUFHLENBQUMsQ0FDUkMsK0RBQUksQ0FBQ21CLFlBQUQsQ0FESSxFQUVSbkIsK0RBQUksQ0FBQ2lCLGNBQUQsQ0FGSSxFQUdSakIsK0RBQUksQ0FBQ3FCLGVBQUQsQ0FISSxFQUlSckIsK0RBQUksQ0FBQ3NCLGVBQUQsQ0FKSSxDQUFELENBQVQ7QUFNRCxDOzs7Ozs7Ozs7Ozs7QUNuSUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBUUEsU0FBU0MsUUFBVCxDQUFrQnZGLElBQWxCLEVBQXdCO0FBQ3RCLFNBQU9vRSw0Q0FBSyxDQUFDdkgsSUFBTixDQUFXLFlBQVgsRUFBeUJtRCxJQUF6QixDQUFQO0FBQ0Q7O0FBRUQsVUFBVXdGLEtBQVYsQ0FBZ0JqSixNQUFoQixFQUF3QjtBQUN0QixNQUFJO0FBQ0ZFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFERSxDQUVGOztBQUNBLFVBQU02SCxnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDUnJKLFVBQUksRUFBRXFILDZEQURFO0FBRVJ4QyxVQUFJLEVBQUV6RCxNQUFNLENBQUN5RDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBUkQsQ0FRRSxPQUFPeUUsQ0FBUCxFQUFVO0FBQ1ZoSSxXQUFPLENBQUMrRCxLQUFSLENBQWNpRSxDQUFkO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNSckosVUFBSSxFQUFFc0gsNkRBREU7QUFFUmpDLFdBQUssRUFBRWlFLENBQUMsQ0FBQ0MsUUFBRixDQUFXMUU7QUFGVixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVN5RixTQUFULEdBQXFCO0FBQ25CLFNBQU9yQiw0Q0FBSyxDQUFDdkgsSUFBTixDQUFXLGFBQVgsQ0FBUDtBQUNEOztBQUVELFVBQVU2SSxNQUFWLEdBQW1CO0FBQ2pCLE1BQUk7QUFDRjtBQUNBLFVBQU1uQixnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDUnJKLFVBQUksRUFBRXdILDhEQUFlQTtBQURiLEtBQUQsQ0FBVDtBQUdELEdBTkQsQ0FNRSxPQUFPOEIsQ0FBUCxFQUFVO0FBQ1ZoSSxXQUFPLENBQUMrRCxLQUFSLENBQWNpRSxDQUFkO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNSckosVUFBSSxFQUFFeUgsOERBREU7QUFFUnBDLFdBQUssRUFBRWlFLENBQUMsQ0FBQ0MsUUFBRixDQUFXMUU7QUFGVixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVMyRixTQUFULEdBQXFCO0FBQ25CLFNBQU92Qiw0Q0FBSyxDQUFDdkgsSUFBTixDQUFXLGFBQVgsQ0FBUDtBQUNEOztBQUVELFVBQVUrSSxNQUFWLEdBQW1CO0FBQ2pCLE1BQUk7QUFDRjtBQUNBLFVBQU1yQixnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDUnJKLFVBQUksRUFBRTJILDhEQUFlQTtBQURiLEtBQUQsQ0FBVDtBQUdELEdBTkQsQ0FNRSxPQUFPMkIsQ0FBUCxFQUFVO0FBQ1ZoSSxXQUFPLENBQUMrRCxLQUFSLENBQWNpRSxDQUFkO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNSckosVUFBSSxFQUFFNEgsOERBREU7QUFFUnZDLFdBQUssRUFBRWlFLENBQUMsQ0FBQ0MsUUFBRixDQUFXMUU7QUFGVixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVM2RixTQUFULEdBQXFCO0FBQ25CLFNBQU96Qiw0Q0FBSyxDQUFDdkgsSUFBTixDQUFXLGFBQVgsQ0FBUDtBQUNEOztBQUVELFVBQVVpSixNQUFWLENBQWlCdkosTUFBakIsRUFBeUI7QUFDdkIsTUFBSTtBQUNGO0FBQ0EsVUFBTWdJLGdFQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTUMsOERBQUcsQ0FBQztBQUNSckosVUFBSSxFQUFFaUksNkRBREU7QUFFUnBELFVBQUksRUFBRXpELE1BQU0sQ0FBQ3lEO0FBRkwsS0FBRCxDQUFUO0FBSUQsR0FQRCxDQU9FLE9BQU95RSxDQUFQLEVBQVU7QUFDVmhJLFdBQU8sQ0FBQytELEtBQVIsQ0FBY2lFLENBQWQ7QUFDQSxVQUFNRCw4REFBRyxDQUFDO0FBQ1JySixVQUFJLEVBQUVrSSw2REFERTtBQUVSN0MsV0FBSyxFQUFFaUUsQ0FBQyxDQUFDQyxRQUFGLENBQVcxRTtBQUZWLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsU0FBUytGLFdBQVQsR0FBdUI7QUFDckIsU0FBTzNCLDRDQUFLLENBQUN2SCxJQUFOLENBQVcsZUFBWCxDQUFQO0FBQ0Q7O0FBRUQsVUFBVW1KLFFBQVYsQ0FBbUJ6SixNQUFuQixFQUEyQjtBQUN6QixNQUFJO0FBQ0Y7QUFDQSxVQUFNZ0ksZ0VBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyw4REFBRyxDQUFDO0FBQ1JySixVQUFJLEVBQUVvSSwrREFERTtBQUVSdkQsVUFBSSxFQUFFekQsTUFBTSxDQUFDeUQ7QUFGTCxLQUFELENBQVQ7QUFJRCxHQVBELENBT0UsT0FBT3lFLENBQVAsRUFBVTtBQUNWaEksV0FBTyxDQUFDK0QsS0FBUixDQUFjaUUsQ0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDUnJKLFVBQUksRUFBRXFJLCtEQURFO0FBRVJoRCxXQUFLLEVBQUVpRSxDQUFDLENBQUNDLFFBQUYsQ0FBVzFFO0FBRlYsS0FBRCxDQUFUO0FBSUQ7QUFDRixDLENBRUQ7OztBQUNBLFVBQVVpRyxXQUFWLEdBQXdCO0FBQ3RCLFFBQU1iLHFFQUFVLENBQUNqQyw2REFBRCxFQUFpQjJDLE1BQWpCLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVUksYUFBVixHQUEwQjtBQUN4QixRQUFNZCxxRUFBVSxDQUFDOUIsK0RBQUQsRUFBbUIwQyxRQUFuQixDQUFoQjtBQUNEOztBQUVELFVBQVVHLFVBQVYsR0FBdUI7QUFDckIsUUFBTWYscUVBQVUsQ0FBQzdDLDZEQUFELEVBQWlCaUQsS0FBakIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVWSxXQUFWLEdBQXdCO0FBQ3RCLFFBQU1oQixxRUFBVSxDQUFDMUMsOERBQUQsRUFBa0JnRCxNQUFsQixDQUFoQjtBQUNEOztBQUVELFVBQVVXLFdBQVYsR0FBd0I7QUFDdEIsUUFBTWpCLHFFQUFVLENBQUN2Qyw4REFBRCxFQUFrQitDLE1BQWxCLENBQWhCO0FBQ0Q7O0FBRWMsVUFBVTNCLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUYsOERBQUcsQ0FBQyxDQUNSO0FBQ0FDLGlFQUFJLENBQUNpQyxXQUFELENBRkksRUFHUmpDLCtEQUFJLENBQUNrQyxhQUFELENBSEksRUFJUmxDLCtEQUFJLENBQUNtQyxVQUFELENBSkksRUFLUm5DLCtEQUFJLENBQUNvQyxXQUFELENBTEksRUFNUnBDLCtEQUFJLENBQUNxQyxXQUFELENBTkksQ0FBRCxDQUFUO0FBUUQsQzs7Ozs7Ozs7Ozs7O0FDakpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBQ2dFOztDQUVqQjtBQUUvQzs7QUFDQTtBQUNBOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQztBQUFaLENBQUQsS0FBNkJDLElBQUQsSUFBV2xLLE1BQUQsSUFBWTtBQUN6RUUsU0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFDQSxTQUFPa0ssSUFBSSxDQUFDbEssTUFBRCxDQUFYO0FBQ0QsQ0FIRDs7QUFLQSxNQUFNbUssY0FBYyxHQUFJQyxPQUFELElBQWE7QUFDbEMsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxFQUFpQk4sZ0JBQWpCLENBQXBCO0FBQ0EsUUFBTVMsUUFBUSxHQUFHLFFBQ2JDLFNBRGEsR0FFYkMsb0ZBQW1CLENBQ25CQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FESSxDQUZ2QjtBQUtBLFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ2hILGlEQUFELEVBQVUyRyxRQUFWLENBQXpCO0FBRUFJLE9BQUssQ0FBQ0UsUUFBTixHQUFpQlQsY0FBYyxDQUFDVSxHQUFmLENBQW1CeEQsOENBQW5CLENBQWpCO0FBQ0EsU0FBT3FELEtBQVA7QUFDRCxDQVpEOztBQWNBLE1BQU1sTCxPQUFPLEdBQUdzTCx3RUFBYSxDQUFDYixjQUFELEVBQWlCO0FBQUVjLE9BQUs7QUFBUCxDQUFqQixDQUE3QjtBQUVldkwsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIigoKSA9PiB7XG4gIGNvbnN0IHNjZW5lSW5mbyA9IFtcbiAgICB7XG4gICAgICAvLyAwXG4gICAgICB0eXBlOiAnc3RpY2t5JyxcbiAgICAgIGhlaWdodE51bTogNSwgLy8g67iM65287Jqw7KCAIOuGkuydtOydmCA167Cw66GcIHNjcm9sbEhlaWdodCDshLjtjIVcbiAgICAgIHNjcm9sbEhlaWdodDogMCxcblxuICAgIH0sXG4gICAge1xuICAgICAgLy8gMVxuICAgICAgdHlwZTogJ25vcm1hbCcsXG4gICAgICBoZWlnaHROdW06IDUsIC8vIOu4jOudvOyasOyggCDrhpLsnbTsnZggNeuwsOuhnCBzY3JvbGxIZWlnaHQg7IS47YyFXG4gICAgICBzY3JvbGxIZWlnaHQ6IDAsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIDJcbiAgICAgIHR5cGU6ICdzdGlja3knLFxuICAgICAgaGVpZ2h0TnVtOiA1LCAvLyDruIzrnbzsmrDsoIAg64aS7J207J2YIDXrsLDroZwgc2Nyb2xsSGVpZ2h0IOyEuO2MhVxuICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyAzXG4gICAgICB0eXBlOiAnc3RpY2t5JyxcbiAgICAgIGhlaWdodE51bTogNSwgLy8g67iM65287Jqw7KCAIOuGkuydtOydmCA167Cw66GcIHNjcm9sbEhlaWdodCDshLjtjIVcbiAgICAgIHNjcm9sbEhlaWdodDogMCxcblxuICAgIH0sXG4gIF07XG4gIGZ1bmN0aW9uIHNldExheW91dCgpIHtcbiAgICAvLyAg6rCBIOyKpO2BrOuhpOyEueyFmOydmCDrhpLsnbQg7IS47YyFXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuZUluZm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNjZW5lSW5mb1tpXS5zY3JvbGxIZWlnaHQgPSBzY2VuZUluZm9baV0uaGVpZ2h0TnVtICogd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgfVxuICAvLyBzZXRMYXlvdXQoc2NlbmVJbmZvKTtcbn0pKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbi8vIGNzcyDrlJTsnpDsnbjrtoDrtoRcclxuaW1wb3J0ICcuL21haW4uY3NzJztcclxuaW1wb3J0ICcuL2xlYWRlcnNoaXAuY3NzJztcclxuaW1wb3J0ICcuL2Fib3V0LmNzcyc7XHJcbmltcG9ydCAnLi4vanMvbWFpbic7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICA8dGl0bGU+U3R1ZHkgQm9hcmQgfCBGaW5kIHlvdXIgYW5zd2VyPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxDb21wb25lbnQgLz5cclxuXHJcbiAgPC8+XHJcbik7XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iLCIvLyDsl5HshZjsnYQg7J2Y66+47ZWc64ukXHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG4vLyDrpqzrk4DshJwg7ZWp7LOQ7KO864qU6rGwXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuLy8g7LSI6riw7IOB7YOcXHJcblxyXG4vLyDruYTrj5nquLAg7JeR7IWYIO2BrOumrOyXkOydtO2EsFxyXG5cclxuLy8gYWN0aW9uIGNyZWF0b3IgZXhhbXBsZVxyXG4vLyBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4vLyAgICAgICAgIGRhdGEsXHJcbi8vICAgICB9XHJcbi8vIH07XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG4vLyDshJzrsoTsgqzsnbTrk5wg66CM642U66eB7J2E7JyE7ZW07IScIEhZRFJBVEXrpbwgaW5kZXh0IOu2gOu2hOydhCDrhKPsnYDqsbDri6Qg7JeG7Ja064+EIOuPvOuKlOqxtOuNsFxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1c2VyLFxyXG4gIHBvc3QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG5cclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgfSxcclxuICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICBJbWFnZXM6IFt7XHJcbiAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgfV0sXHJcbiAgQ29tbWVudHM6IFt7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICB9XSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAnUEtLSycsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ1BLQ0MnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8g7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qQIO2VqOyImOqwgCDrpqzrjZXsiqQo67aI67OA7ISx7J2AIOyngO2CpOuptOyEnCDqvK0pXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgLy8g7Y+s7Iqk7Yq47ZWg65WMIOuhnOuUqVxyXG4gICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIOyduO2UvOuLiO2LsOuTnCDsiqTtgazroaTrp4FcclxuICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDMwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAvLyDtj6zsiqTtirgg7JeF66Gc65OcXHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8g7Y+s7Iqk7Yq4IOyngOyasOq4sFxyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyDrjJPquIAg7LaU6rCAXHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgLy8g65Oc656Y7ZSE7Yq47JeQ64ukIOuplOyduO2PrOyKpO2KuOyXkOyeiOycvOuptCDssL7snLzrqbQgaWTqsIAg7LC+7Jy866m0XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbWFpblBvc3RzLFxyXG4gICAgICAvLyAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gIC4uLmRhdGEsXHJcbiAgaWQ6IDEsXHJcbiAgbmlja25hbWU6ICdQSycsXHJcbiAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiAncGsnIH0sIHsgbmlja25hbWU6ICdoYXdvbicgfSwgeyBuaWNrbmFtZTogJ1NoaW4gamVvdW5naG8nIH1dLFxyXG4gIEZvbGxvd2VyczogW3sgbmlja25hbWU6ICdwaycgfSwgeyBuaWNrbmFtZTogJ2hhd29uJyB9LCB7IG5pY2tuYW1lOiAnamVvdW5naG8nIH1dLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbi8vIHJldHVybiBwcm9kdWNlIOudvOuKlOqxtOuNsCDsp4DquIggZXNsaW50IO2OuO2VmOqyjCDsvZTrk5ztlZjquLDsnITtlbTshJwg7LaU6rCA7ZW064ao7J2MXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgLy8g7YyU66Gc7JqwXHJcbiAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8g7Ja47YyU66Gc7JqwXHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAvLyDroZzqt7jsnbhcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIOuhnOq3uOyVhOybg1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIO2ajOybkOqwgOyehVxyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyDri4nrhKTsnoTrs4Dqsr1cclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyDsnpDquLDsnpDsi6Dsl5Dqsowg7Y+s7Iqk7Yq4IOu2meyXrOyjvOuKlOqxsFxyXG4gICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyDqt7gg7KCE7JeQ6rq8IGlubmVyIOutkOyngC4uIOyJveuEpFxyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgLy8gICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH07XHJcblxyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgLy8gICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCIvLyBzYWdhIOydtO2Ome2KuOydtOuLpCBhbGwgZm9yayB0YWtlIGNhbGwgZXRjLi5cclxuLy8gZm9yayDripQg67mE64+Z6riwIO2VqOyImCDsl63tmZwgY2FsbCDsnYAg64+Z6riw7ZWo7IiYIO2YuOy2nFxyXG4vLyBjYWxs7J20656RIGZvcmsg7J2YIOywqOydtOygkOydgCDqsrDqs7zqsJHsnYQg67Cb7JWE7JmA7IScIOq4sOuLpOugpCDso7zripDrg5Ag7JWE64uI64OQXHJcbmltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyBzYWdh6rCAIOygnOuEiOugiOydtO2EsOydtOuLpFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgLy8gYWxsIOydgCDrsLDsl7TslYjsl5Ag7ZWc67Cp7JeQIOuLpCDsi6TtlontlbTspIDri6RcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICBmb3JrKHBvc3RTYWdhKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX1BPU1RfRkFJTFVSRSwgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBnZW5lcmF0ZUR1bW15UG9zdCxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogZ2VuZXJhdGVEdW1teVBvc3QoMTApLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZS5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgY29udGVudDogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiBpZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRk9MTE9XX0ZBSUxVUkUsIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLCBVTkZPTExPV19SRVFVRVNULCBVTkZPTExPV19TVUNDRVNTLFxyXG4gIExPR19JTl9GQUlMVVJFLCBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgTE9HX09VVF9GQUlMVVJFLCBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coJ3NhZ2EgbG9nSW4nKTtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZS5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvc2lnblVwJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2ZvbGxvdycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdW5mb2xsb3cnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gdGFrZUxhdGVzdCDrkZDrsojriIzroLjsnYTrlYwg66eI7KeA66eJ6rq866eMXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICAvLyBmb3Jr64qUIO2VqOyImOulvCDsi6TtlontlbTspIDri6RcclxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJzsgLy8g6rCc67Cc7Jqp7J247KeAIOyVhOuLiOuptCDrsLDtj6zsmqnsnbjsp4Ag6rWs67aEXHJcblxyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7IC8vIOumrOuNleyKpCBTQUdBXHJcblxyXG4vLyDrpqzrk4DshJzrpbwg67aI65+s7Jik64qU6rGwXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKFxyXG4gICAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpLFxyXG4gICAgKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuXHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==