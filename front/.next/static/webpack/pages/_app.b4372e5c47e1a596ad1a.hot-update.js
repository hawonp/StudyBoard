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

  var sceneInfo = {
    type: 'sti'
  };
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJ5T2Zmc2V0IiwicHJldlNjcm9sbEhlaWdodCIsImN1cnJlbnRTY2VuZSIsImVudGVyTmV3U2NlbmUiLCJzY2VuZUluZm8iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBQyxZQUFNO0FBQ0wsTUFBTUEsT0FBTyxHQUFHLENBQWhCLENBREssQ0FDYzs7QUFDbkIsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FBekIsQ0FGSyxDQUV1Qjs7QUFDNUIsTUFBTUMsWUFBWSxHQUFHLENBQXJCLENBSEssQ0FHbUI7O0FBQ3hCLE1BQU1DLGFBQWEsR0FBRyxLQUF0QixDQUpLLENBSXdCOztBQUU3QixNQUFNQyxTQUFTLEdBQUc7QUFDaEJDLFFBQUksRUFBRTtBQURVLEdBQWxCO0FBR0QsQ0FURCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI0MzcyZTVjNDdlMWE1OTZhZDFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xuICBjb25zdCB5T2Zmc2V0ID0gMDsgLy8gd2luZG93LnBhZ2VZT2Zmc2V0IOuMgOyLoCDsk7gg67OA7IiYXG4gIGNvbnN0IHByZXZTY3JvbGxIZWlnaHQgPSAwOyAvLyDtmITsnqwg7Iqk7YGs66GkIOychOy5mCh5T2Zmc2V0KeuztOuLpCDsnbTsoITsl5Ag7JyE7LmY7ZWcIOyKpO2BrOuhpCDshLnshZjrk6TsnZgg7Iqk7YGs66GkIOuGkuydtOqwkuydmCDtlalcbiAgY29uc3QgY3VycmVudFNjZW5lID0gMDsgLy8g7ZiE7J6sIO2ZnOyEse2ZlOuQnCjriIgg7JWe7JeQIOuztOqzoOyeiOuKlCkg7JSsKHNjcm9sbC1zZWN0aW9uKVxuICBjb25zdCBlbnRlck5ld1NjZW5lID0gZmFsc2U7IC8vIOyDiOuhnOyatCBzY2VuZeydtCDsi5zsnpHrkJwg7Iic6rCEXG5cbiAgY29uc3Qgc2NlbmVJbmZvID0ge1xuICAgIHR5cGU6ICdzdGknLFxuICB9O1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9