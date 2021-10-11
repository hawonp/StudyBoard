webpackHotUpdate_N_E("pages/studyBoard",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "C:\\Users\\PYUNGKANG HONG\\Desktop\\CSE416_capstone\\front\\components\\PostCard.js",
    _templateObject,
    _this = undefined,
    _s = $RefreshSig$();







 // 커맨트폼










var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 20px;\n"])));
_c = CardWrapper;

var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user.me && state.user.me.id;
  });

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      liked = _useState2[0],
      setLiked = _useState2[1]; // const { me } = useSelector((state) => state.user);
  // 좋아요를 눌르고 때고 하는부분


  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_13__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  });
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(CardWrapper, {
    style: {
      paddingTop: '20px'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      title: "Card",
      style: {
        border: '2px inset ',
        boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px rgba(6, 24, 44, 0.65) 0px 4px 6px -1px rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
      },
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_12__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 34
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MessageOutlined"], {
        onClick: onToggleComment
      }, "message", false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              type: "danger",
              onClick: onRemovePost,
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 23
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            children: "Report"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, _this)
      }, "ellipsis", false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this)] // 우측상단에 만들어주는 extra
      ,
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 22
      }, _this),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          children: [post.User.nickname[0], " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 19
        }, _this),
        title: post.User.nickname // 해시테그
        ,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 24
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("div", {
        style: {
          position: 'absolute',
          right: '0px',
          bottom: '0px'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faStar"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
        header: "".concat(post.Comments ? post.Comments.length : 0, " \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments || [],
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"] // 누가썼는지
            , {
              author: item.User.nickname // 유저 아바타
              ,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                href: {
                  pathname: '/user',
                  query: {
                    id: item.User.id
                  }
                },
                as: "/user/".concat(item.User.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                    children: item.User.nickname[0]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 26
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 21
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, _this)]
    }, void 0, true)]
  }, post.id, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_s(PostCard, "H26VXBMN7q54TATKqAsFZXfTuHw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c2 = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    UserId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c, _c2;

$RefreshReg$(_c, "CardWrapper");
$RefreshReg$(_c2, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlBvc3RDYXJkIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsaWtlZCIsInNldExpa2VkIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25SZW1vdmVQb3N0IiwidHlwZSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwib25Ub2dnbGVDb21tZW50IiwicGFkZGluZ1RvcCIsImJvcmRlciIsImJveFNoYWRvdyIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJwb3NpdGlvbiIsInJpZ2h0IiwiYm90dG9tIiwiZmFTdGFyIiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwicGF0aG5hbWUiLCJxdWVyeSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0IiwiVXNlcklkIiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiYXJyYXlPZiIsImFueSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVix5S0FBakI7S0FBTUYsVzs7QUFJTixJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLE1BQU1DLFFBQVEsR0FBR0Ms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TUFGSTtBQUdwQkMsVUFBTSxFQUFFSixpREFBUyxDQUFDRSxNQUhFO0FBSXBCYixXQUFPLEVBQUVXLGlEQUFTLENBQUNLLE1BSkM7QUFLcEJDLGFBQVMsRUFBRU4saURBQVMsQ0FBQ0csTUFMRDtBQU1wQlQsWUFBUSxFQUFFTSxpREFBUyxDQUFDTyxPQUFWLENBQWtCUCxpREFBUyxDQUFDUSxHQUE1QixDQU5VO0FBT3BCdEIsVUFBTSxFQUFFYyxpREFBUyxDQUFDTyxPQUFWLENBQWtCUCxpREFBUyxDQUFDUSxHQUE1QjtBQVBZLEdBQWhCLEVBUUhDO0FBVGdCLENBQXJCO0FBWWVoRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdHVkeUJvYXJkLmZmNDBmNWNiYTE3OGFiOGE2NTllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIEF2YXRhciwgUG9wb3ZlciwgTGlzdCwgQ29tbWVudCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBSZXR3ZWV0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy8g7Luk66eo7Yq47Y+8XHJcbmltcG9ydCB7IGZhU3RhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL1Bvc3RDYXJkQ29udGVudCc7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tICcuL0ZvbGxvd0J1dHRvbic7XHJcblxyXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lICYmIHN0YXRlLnVzZXIubWUuaWQpO1xyXG4gIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIC8vIOyii+yVhOyalOulvCDriIzrpbTqs6Ag65WM6rOgIO2VmOuKlOu2gOu2hFxyXG4gIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldExpa2VkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcblxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRXcmFwcGVyIGtleT17cG9zdC5pZH0gc3R5bGU9e3sgcGFkZGluZ1RvcDogJzIwcHgnIH19PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIHRpdGxlPVwiQ2FyZFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAnMnB4IGluc2V0ICcsIGJveFNoYWRvdzogJ3JnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0JyB9fVxyXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiAvPixcclxuICAgICAgICAgIGxpa2VkXHJcbiAgICAgICAgICAgID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+XHJcbiAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+LFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJtZXNzYWdlXCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgIGtleT1cImVsbGlwc2lzXCJcclxuICAgICAgICAgICAgY29udGVudD17KFxyXG4gICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZFxyXG4gICAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5FZGl0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PkRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIDogPEJ1dHRvbj5SZXBvcnQ8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgIF19XHJcbiAgICAgICAgLy8g7Jqw7Lih7IOB64uo7JeQIOunjOuTpOyWtOyjvOuKlCBleHRyYVxyXG4gICAgICAgIGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG5cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfSA8L0F2YXRhcj59XHJcbiAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG5cclxuICAgICAgICAgICAgLy8g7ZW07Iuc7YWM6re4XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMHB4JywgYm90dG9tOiAnMHB4JyB9fT5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7Lyog646D6riA7J2EIOyekeyEse2VoOuVjCDqsozsi5zquIDsl5Ag7IaN7ZW07J6I7Jy864uIIOygleuztOqwgCDtlYTsmpTtlZjri6Qg6rKM7Iuc6riA7J2YIOyVhOydtOuUlOqwgCDtlYTsmpTtlZjri6QgKi99XHJcbiAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cyA/IHBvc3QuQ29tbWVudHMubGVuZ3RoIDogMH0g64yT6riAYH1cclxuICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzIHx8IFtdfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIHsvKiDsl5TtirjrlJTsl5Ag7Luk66eo7Yq465286rOgIOykgOu5hO2VtOuRoCAqL31cclxuICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g64iE6rCA7I2864qU7KeAXHJcbiAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOycoOyggCDslYTrsJTtg4BcclxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXsoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy91c2VyJywgcXVlcnk6IHsgaWQ6IGl0ZW0uVXNlci5pZCB9IH19IGFzPXtgL3VzZXIvJHtpdGVtLlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT48QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvQ2FyZFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgVXNlcklkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcclxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9