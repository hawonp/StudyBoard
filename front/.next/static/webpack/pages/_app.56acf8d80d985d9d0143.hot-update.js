webpackHotUpdate_N_E("pages/_app",{

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var sceneInfo = [{
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
    for (var i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
    }
  } // setLayout(sceneInfo);

})();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJzY2VuZUluZm8iLCJ0eXBlIiwiaGVpZ2h0TnVtIiwic2Nyb2xsSGVpZ2h0Iiwic2V0TGF5b3V0IiwiaSIsImxlbmd0aCIsIndpbmRvdyIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBQyxZQUFNO0FBQ0wsTUFBTUEsU0FBUyxHQUFHLENBQ2hCO0FBQ0U7QUFDQUMsUUFBSSxFQUFFLFFBRlI7QUFHRUMsYUFBUyxFQUFFLENBSGI7QUFHZ0I7QUFDZEMsZ0JBQVksRUFBRTtBQUpoQixHQURnQixFQVFoQjtBQUNFO0FBQ0FGLFFBQUksRUFBRSxRQUZSO0FBR0VDLGFBQVMsRUFBRSxDQUhiO0FBR2dCO0FBQ2RDLGdCQUFZLEVBQUU7QUFKaEIsR0FSZ0IsRUFlaEI7QUFDRTtBQUNBRixRQUFJLEVBQUUsUUFGUjtBQUdFQyxhQUFTLEVBQUUsQ0FIYjtBQUdnQjtBQUNkQyxnQkFBWSxFQUFFO0FBSmhCLEdBZmdCLEVBc0JoQjtBQUNFO0FBQ0FGLFFBQUksRUFBRSxRQUZSO0FBR0VDLGFBQVMsRUFBRSxDQUhiO0FBR2dCO0FBQ2RDLGdCQUFZLEVBQUU7QUFKaEIsR0F0QmdCLENBQWxCOztBQThCQSxXQUFTQyxTQUFULEdBQXFCO0FBQ25CO0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxTQUFTLENBQUNNLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDTCxlQUFTLENBQUNLLENBQUQsQ0FBVCxDQUFhRixZQUFiLEdBQTRCSCxTQUFTLENBQUNLLENBQUQsQ0FBVCxDQUFhSCxTQUFiLEdBQXlCSyxNQUFNLENBQUNDLFdBQTVEO0FBQ0Q7QUFDRixHQXBDSSxDQXFDTDs7QUFDRCxDQXRDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU2YWNmOGQ4MGQ5ODVkOWQwMTQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xuICBjb25zdCBzY2VuZUluZm8gPSBbXG4gICAge1xuICAgICAgLy8gMFxuICAgICAgdHlwZTogJ3N0aWNreScsXG4gICAgICBoZWlnaHROdW06IDUsIC8vIOu4jOudvOyasOyggCDrhpLsnbTsnZggNeuwsOuhnCBzY3JvbGxIZWlnaHQg7IS47YyFXG4gICAgICBzY3JvbGxIZWlnaHQ6IDAsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIDFcbiAgICAgIHR5cGU6ICdub3JtYWwnLFxuICAgICAgaGVpZ2h0TnVtOiA1LCAvLyDruIzrnbzsmrDsoIAg64aS7J207J2YIDXrsLDroZwgc2Nyb2xsSGVpZ2h0IOyEuO2MhVxuICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyAyXG4gICAgICB0eXBlOiAnc3RpY2t5JyxcbiAgICAgIGhlaWdodE51bTogNSwgLy8g67iM65287Jqw7KCAIOuGkuydtOydmCA167Cw66GcIHNjcm9sbEhlaWdodCDshLjtjIVcbiAgICAgIHNjcm9sbEhlaWdodDogMCxcblxuICAgIH0sXG4gICAge1xuICAgICAgLy8gM1xuICAgICAgdHlwZTogJ3N0aWNreScsXG4gICAgICBoZWlnaHROdW06IDUsIC8vIOu4jOudvOyasOyggCDrhpLsnbTsnZggNeuwsOuhnCBzY3JvbGxIZWlnaHQg7IS47YyFXG4gICAgICBzY3JvbGxIZWlnaHQ6IDAsXG5cbiAgICB9LFxuICBdO1xuICBmdW5jdGlvbiBzZXRMYXlvdXQoKSB7XG4gICAgLy8gIOqwgSDsiqTtgazroaTshLnshZjsnZgg64aS7J20IOyEuO2MhVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmVJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzY2VuZUluZm9baV0uc2Nyb2xsSGVpZ2h0ID0gc2NlbmVJbmZvW2ldLmhlaWdodE51bSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG4gIH1cbiAgLy8gc2V0TGF5b3V0KHNjZW5lSW5mbyk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==