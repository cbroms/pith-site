webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_cbroms_Documents_pith_site_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/cbroms/Documents/pith-site/pages/index.js\";\n\nfunction _templateObject6() {\n  var data = Object(_Users_cbroms_Documents_pith_site_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 51vw;\\n  font-weight: bold;\\n  color: #171717;\\n\\n  @media (max-width: 768px) {\\n    font-size: 45vw;\\n    margin-bottom: -10vw;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_Users_cbroms_Documents_pith_site_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  border-top: 1px solid #7c7c7c;\\n\\n  height: 100%;\\n\\n  display: flex;\\n  flex-flow: wrap;\\n  align-content: flex-end;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_Users_cbroms_Documents_pith_site_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  box-sizing: border-box;\\n\\n  grid-column-start: intro;\\n  grid-column-end: free-end;\\n  grid-row-start: pith;\\n  grid-row-end: pith-end;\\n\\n  padding: 0 40px;\\n  max-width: 100%;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_Users_cbroms_Documents_pith_site_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  box-sizing: border-box;\\n  grid-column-start: links;\\n  grid-column-end: links-end;\\n  grid-row-start: content;\\n  grid-row-end: content-end;\\n\\n  padding: 60px 40px;\\n  height: 100%;\\n\\n  @media (max-width: 768px) {\\n    grid-column-start: intro;\\n    grid-column-end: free-end;\\n    grid-row-start: links;\\n    grid-row-end: links-end;\\n\\n    padding 20px 40px;\\n  }\\n\\n  a {\\n    width: 100%;\\n    display: inline-block;\\n    margin-bottom: 25px;\\n    color: #e2e2e2;\\n  }\\n\\n  a:visited {\\n    color: #7c7c7c;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_cbroms_Documents_pith_site_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  box-sizing: border-box;\\n  grid-column-start: intro;\\n  grid-column-end: intro-end;\\n  grid-row-start: content;\\n  grid-row-end: content-end;\\n\\n  padding: 60px 40px;\\n\\n  height: 100%;\\n\\n  @media (max-width: 768px) {\\n    grid-column-start: intro;\\n    grid-column-end: free-end;\\n\\n    padding 20px 40px;\\n    padding-top: 40px;\\n  }\\n\\n  h1 {\\n    margin: 0;\\n    max-width: 350px;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_cbroms_Documents_pith_site_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: grid;\\n  grid-template-columns: [intro] 2fr [intro-end links] 1fr [links-end free] 2.75fr [free-end];\\n  grid-template-rows: [content] 1fr [content-end pith] 3fr [pith-end];\\n\\n  max-height: 100vh;\\n  color: #e2e2e2;\\n\\n  background-color: #0f0f0f;\\n\\n  @media (max-width: 768px) {\\n    grid-template-columns: [intro] 2fr [intro-end links] 1fr [links-end free] 0fr [free-end];\\n    grid-template-rows: [content] 1fr [content-end links] 1fr [links-end pith] 3fr [pith-end];\\n  }\\n\\n  overflow-y: hidden;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = StyledContainer;\nvar StyledIntro = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = StyledIntro;\nvar StyledLinks = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c3 = StyledLinks;\nvar StyledPith = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n_c4 = StyledPith;\nvar StyledPithContent = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c5 = StyledPithContent;\nvar StyledPithText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6());\n_c6 = StyledPithText;\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Pith\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledContainer, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledIntro, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n            children: \"Pith is an experimental space for productive online discussions.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledLinks, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            href: \"https://alpha.pith.is\",\n            children: \"Try it out.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            href: \"https://why.pith.is\",\n            children: \"Read about it.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            href: \"https://github.com/rainflame/pith\",\n            children: \"Get the code.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 130,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledPith, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledPithContent, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledPithText, {\n              children: \"Pith\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 114,\n    columnNumber: 5\n  }, this);\n}\n_c7 = Home;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"StyledContainer\");\n$RefreshReg$(_c2, \"StyledIntro\");\n$RefreshReg$(_c3, \"StyledLinks\");\n$RefreshReg$(_c4, \"StyledPith\");\n$RefreshReg$(_c5, \"StyledPithContent\");\n$RefreshReg$(_c6, \"StyledPithText\");\n$RefreshReg$(_c7, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJTdHlsZWRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJTdHlsZWRJbnRybyIsIlN0eWxlZExpbmtzIiwiU3R5bGVkUGl0aCIsIlN0eWxlZFBpdGhDb250ZW50IiwiU3R5bGVkUGl0aFRleHQiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFyQjtLQUFNRixlO0FBa0JOLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBakI7TUFBTUMsVztBQXlCTixJQUFNQyxXQUFXLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCO01BQU1FLFc7QUErQk4sSUFBTUMsVUFBVSxHQUFHSix5REFBTSxDQUFDQyxHQUFWLG9CQUFoQjtNQUFNRyxVO0FBWU4sSUFBTUMsaUJBQWlCLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYsb0JBQXZCO01BQU1JLGlCO0FBVU4sSUFBTUMsY0FBYyxHQUFHTix5REFBTSxDQUFDQyxHQUFWLG9CQUFwQjtNQUFNSyxjO0FBV1MsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQUEsNkJBQ0UscUVBQUMsZUFBRDtBQUFBLGdDQUNFLHFFQUFDLFdBQUQ7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFNRSxxRUFBQyxXQUFEO0FBQUEsa0NBQ0U7QUFBRyxnQkFBSSxFQUFDLHVCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBRyxnQkFBSSxFQUFDLHFCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0U7QUFBRyxnQkFBSSxFQUFDLG1DQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQVdFLHFFQUFDLFVBQUQ7QUFBQSxpQ0FDRSxxRUFBQyxpQkFBRDtBQUFBLG1DQUNFLHFFQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7TUE3QnVCQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW2ludHJvXSAyZnIgW2ludHJvLWVuZCBsaW5rc10gMWZyIFtsaW5rcy1lbmQgZnJlZV0gMi43NWZyIFtmcmVlLWVuZF07XG4gIGdyaWQtdGVtcGxhdGUtcm93czogW2NvbnRlbnRdIDFmciBbY29udGVudC1lbmQgcGl0aF0gM2ZyIFtwaXRoLWVuZF07XG5cbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIGNvbG9yOiAjZTJlMmUyO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMGY7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbaW50cm9dIDJmciBbaW50cm8tZW5kIGxpbmtzXSAxZnIgW2xpbmtzLWVuZCBmcmVlXSAwZnIgW2ZyZWUtZW5kXTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IFtjb250ZW50XSAxZnIgW2NvbnRlbnQtZW5kIGxpbmtzXSAxZnIgW2xpbmtzLWVuZCBwaXRoXSAzZnIgW3BpdGgtZW5kXTtcbiAgfVxuXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IFN0eWxlZEludHJvID0gc3R5bGVkLmRpdmBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGludHJvO1xuICBncmlkLWNvbHVtbi1lbmQ6IGludHJvLWVuZDtcbiAgZ3JpZC1yb3ctc3RhcnQ6IGNvbnRlbnQ7XG4gIGdyaWQtcm93LWVuZDogY29udGVudC1lbmQ7XG5cbiAgcGFkZGluZzogNjBweCA0MHB4O1xuXG4gIGhlaWdodDogMTAwJTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogaW50cm87XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiBmcmVlLWVuZDtcblxuICAgIHBhZGRpbmcgMjBweCA0MHB4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICB9XG5cbiAgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRMaW5rcyA9IHN0eWxlZC5kaXZgXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBsaW5rcztcbiAgZ3JpZC1jb2x1bW4tZW5kOiBsaW5rcy1lbmQ7XG4gIGdyaWQtcm93LXN0YXJ0OiBjb250ZW50O1xuICBncmlkLXJvdy1lbmQ6IGNvbnRlbnQtZW5kO1xuXG4gIHBhZGRpbmc6IDYwcHggNDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiBpbnRybztcbiAgICBncmlkLWNvbHVtbi1lbmQ6IGZyZWUtZW5kO1xuICAgIGdyaWQtcm93LXN0YXJ0OiBsaW5rcztcbiAgICBncmlkLXJvdy1lbmQ6IGxpbmtzLWVuZDtcblxuICAgIHBhZGRpbmcgMjBweCA0MHB4O1xuICB9XG5cbiAgYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgY29sb3I6ICNlMmUyZTI7XG4gIH1cblxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiAjN2M3YzdjO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRQaXRoID0gc3R5bGVkLmRpdmBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBncmlkLWNvbHVtbi1zdGFydDogaW50cm87XG4gIGdyaWQtY29sdW1uLWVuZDogZnJlZS1lbmQ7XG4gIGdyaWQtcm93LXN0YXJ0OiBwaXRoO1xuICBncmlkLXJvdy1lbmQ6IHBpdGgtZW5kO1xuXG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgU3R5bGVkUGl0aENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzdjN2M3YztcblxuICBoZWlnaHQ6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IFN0eWxlZFBpdGhUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiA1MXZ3O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMxNzE3MTc7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiA0NXZ3O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHZ3O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBpdGg8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8U3R5bGVkQ29udGFpbmVyPlxuICAgICAgICAgIDxTdHlsZWRJbnRybz5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgUGl0aCBpcyBhbiBleHBlcmltZW50YWwgc3BhY2UgZm9yIHByb2R1Y3RpdmUgb25saW5lIGRpc2N1c3Npb25zLlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L1N0eWxlZEludHJvPlxuICAgICAgICAgIDxTdHlsZWRMaW5rcz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FscGhhLnBpdGguaXNcIj5UcnkgaXQgb3V0LjwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3doeS5waXRoLmlzXCI+UmVhZCBhYm91dCBpdC48L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JhaW5mbGFtZS9waXRoXCI+R2V0IHRoZSBjb2RlLjwvYT5cbiAgICAgICAgICA8L1N0eWxlZExpbmtzPlxuICAgICAgICAgIDxTdHlsZWRQaXRoPlxuICAgICAgICAgICAgPFN0eWxlZFBpdGhDb250ZW50PlxuICAgICAgICAgICAgICA8U3R5bGVkUGl0aFRleHQ+UGl0aDwvU3R5bGVkUGl0aFRleHQ+XG4gICAgICAgICAgICA8L1N0eWxlZFBpdGhDb250ZW50PlxuICAgICAgICAgIDwvU3R5bGVkUGl0aD5cbiAgICAgICAgPC9TdHlsZWRDb250YWluZXI+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})