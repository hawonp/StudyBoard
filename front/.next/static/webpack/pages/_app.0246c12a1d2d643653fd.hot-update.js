webpackHotUpdate_N_E("pages/_app",{

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var yOffset = 0; // window.pageYOffset 대신 쓸 변수

  var prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합

  var currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)

  var enterNewScene = false; // 새로운 scene이 시작된 순간

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJ5T2Zmc2V0IiwicHJldlNjcm9sbEhlaWdodCIsImN1cnJlbnRTY2VuZSIsImVudGVyTmV3U2NlbmUiLCJzY2VuZUluZm8iLCJ0eXBlIiwiaGVpZ2h0TnVtIiwic2Nyb2xsSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBQyxZQUFNO0FBQ0wsTUFBTUEsT0FBTyxHQUFHLENBQWhCLENBREssQ0FDYzs7QUFDbkIsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FBekIsQ0FGSyxDQUV1Qjs7QUFDNUIsTUFBTUMsWUFBWSxHQUFHLENBQXJCLENBSEssQ0FHbUI7O0FBQ3hCLE1BQU1DLGFBQWEsR0FBRyxLQUF0QixDQUpLLENBSXdCOztBQUU3QixNQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFDRTtBQUNBQyxRQUFJLEVBQUUsUUFGUjtBQUdFQyxhQUFTLEVBQUUsQ0FIYjtBQUdnQjtBQUNkQyxnQkFBWSxFQUFFO0FBSmhCLEdBRGdCLEVBUWhCO0FBQ0U7QUFDQUYsUUFBSSxFQUFFLFFBRlI7QUFHRUMsYUFBUyxFQUFFLENBSGI7QUFHZ0I7QUFDZEMsZ0JBQVksRUFBRTtBQUpoQixHQVJnQixFQWVoQjtBQUNFO0FBQ0FGLFFBQUksRUFBRSxRQUZSO0FBR0VDLGFBQVMsRUFBRSxDQUhiO0FBR2dCO0FBQ2RDLGdCQUFZLEVBQUU7QUFKaEIsR0FmZ0IsRUFzQmhCO0FBQ0U7QUFDQUYsUUFBSSxFQUFFLFFBRlI7QUFHRUMsYUFBUyxFQUFFLENBSGI7QUFHZ0I7QUFDZEMsZ0JBQVksRUFBRTtBQUpoQixHQXRCZ0IsQ0FBbEI7QUErQkQsQ0FyQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wMjQ2YzEyYTFkMmQ2NDM2NTNmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcbiAgY29uc3QgeU9mZnNldCA9IDA7IC8vIHdpbmRvdy5wYWdlWU9mZnNldCDrjIDsi6Ag7JO4IOuzgOyImFxuICBjb25zdCBwcmV2U2Nyb2xsSGVpZ2h0ID0gMDsgLy8g7ZiE7J6sIOyKpO2BrOuhpCDsnITsuZgoeU9mZnNldCnrs7Tri6Qg7J207KCE7JeQIOychOy5mO2VnCDsiqTtgazroaQg7IS57IWY65Ok7J2YIOyKpO2BrOuhpCDrhpLsnbTqsJLsnZgg7ZWpXG4gIGNvbnN0IGN1cnJlbnRTY2VuZSA9IDA7IC8vIO2YhOyerCDtmZzshLHtmZTrkJwo64iIIOyVnuyXkCDrs7Tqs6DsnojripQpIOyUrChzY3JvbGwtc2VjdGlvbilcbiAgY29uc3QgZW50ZXJOZXdTY2VuZSA9IGZhbHNlOyAvLyDsg4jroZzsmrQgc2NlbmXsnbQg7Iuc7J6R65CcIOyInOqwhFxuXG4gIGNvbnN0IHNjZW5lSW5mbyA9IFtcbiAgICB7XG4gICAgICAvLyAwXG4gICAgICB0eXBlOiAnc3RpY2t5JyxcbiAgICAgIGhlaWdodE51bTogNSwgLy8g67iM65287Jqw7KCAIOuGkuydtOydmCA167Cw66GcIHNjcm9sbEhlaWdodCDshLjtjIVcbiAgICAgIHNjcm9sbEhlaWdodDogMCxcblxuICAgIH0sXG4gICAge1xuICAgICAgLy8gMVxuICAgICAgdHlwZTogJ25vcm1hbCcsXG4gICAgICBoZWlnaHROdW06IDUsIC8vIOu4jOudvOyasOyggCDrhpLsnbTsnZggNeuwsOuhnCBzY3JvbGxIZWlnaHQg7IS47YyFXG4gICAgICBzY3JvbGxIZWlnaHQ6IDAsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIDJcbiAgICAgIHR5cGU6ICdzdGlja3knLFxuICAgICAgaGVpZ2h0TnVtOiA1LCAvLyDruIzrnbzsmrDsoIAg64aS7J207J2YIDXrsLDroZwgc2Nyb2xsSGVpZ2h0IOyEuO2MhVxuICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyAzXG4gICAgICB0eXBlOiAnc3RpY2t5JyxcbiAgICAgIGhlaWdodE51bTogNSwgLy8g67iM65287Jqw7KCAIOuGkuydtOydmCA167Cw66GcIHNjcm9sbEhlaWdodCDshLjtjIVcbiAgICAgIHNjcm9sbEhlaWdodDogMCxcblxuICAgIH0sXG5cbiAgXTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9