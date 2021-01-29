webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/Form.js":
/*!**********************************!*\
  !*** ./pages/components/Form.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/Form.module.css */ \"./styles/Form.module.css\");\n/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _services_simServices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/simServices */ \"./pages/services/simServices.js\");\n/* harmony import */ var _services_AlertService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/AlertService */ \"./pages/services/AlertService.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/emmanueletukudo/Sites/truid-challenge/client/pages/components/Form.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar Form = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Form, _React$Component);\n\n  var _super = _createSuper(Form);\n\n  function Form(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Form);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      isLoading: false,\n      phone: \"\",\n      errors: \"\"\n    };\n    _this.verify = _this.verify.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    _this.onChange = _this.onChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Form, [{\n    key: \"onChange\",\n    value: function onChange(e) {\n      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, e.target.name, e.target.value));\n    }\n  }, {\n    key: \"verify\",\n    value: function verify(e) {\n      e.preventDefault();\n      this.setState({\n        isLoading: true\n      });\n      var phone = this.state.phone;\n      var sim = Object(_services_simServices__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(phone).then(function (res) {\n        if (res) {\n          var details = {};\n          details.changeDate = \"Fri 29 2021\";\n          details.status = res.status;\n          details.simChange = !res.no_sim_change ? \"No\" : \"Yes\";\n          Object(_services_AlertService__WEBPACK_IMPORTED_MODULE_13__[\"simToast\"])(details.status, \"Last sim changed: \".concat(details.changeDate, \". Sim changed in the last 7 days: \").concat(details.simChange), \"success\");\n        }\n      })[\"catch\"](function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          onSubmit: this.verify,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Stack\"], {\n            spacing: 7,\n            className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.form,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"InputGroup\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"InputLeftElement\"], {\n                pointerEvents: \"none\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__[\"PhoneIcon\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 64\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Input\"], {\n                name: \"phone\",\n                value: this.state.phone,\n                onChange: this.onChange,\n                type: \"tel\",\n                disabled: this.state.isLoading,\n                placeholder: \"Phone number\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 15\n              }, this), \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 13\n            }, this), !this.state.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n              colorScheme: \"blue\",\n              disabled: !this.state.phone,\n              type: \"submit\",\n              isFullWidth: \"true\",\n              children: \"Verify\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 15\n            }, this) : \"\", this.state.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n              isLoading: true,\n              loadingText: \"Verifying...\",\n              colorScheme: \"teal\",\n              variant: \"outline\",\n              children: \"Submit\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 15\n            }, this) : \"\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return Form;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Gb3JtLmpzPzg3YjkiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwic3RhdGUiLCJpc0xvYWRpbmciLCJwaG9uZSIsImVycm9ycyIsInZlcmlmeSIsImJpbmQiLCJvbkNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2ltIiwic2ltQ2hlY2siLCJ0aGVuIiwicmVzIiwiZGV0YWlscyIsImNoYW5nZURhdGUiLCJzdGF0dXMiLCJzaW1DaGFuZ2UiLCJub19zaW1fY2hhbmdlIiwic2ltVG9hc3QiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZm9ybSIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSTs7Ozs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTLEVBQUUsS0FEQTtBQUVYQyxXQUFLLEVBQUUsRUFGSTtBQUdYQyxZQUFNLEVBQUU7QUFIRyxLQUFiO0FBS0EsVUFBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWix5R0FBZDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjRCxJQUFkLHlHQUFoQjtBQVJpQjtBQVNsQjs7Ozs2QkFFUUUsQyxFQUFHO0FBQ1YsV0FBS0MsUUFBTCwrRkFBaUJELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxJQUExQixFQUFpQ0gsQ0FBQyxDQUFDRSxNQUFGLENBQVNFLEtBQTFDO0FBQ0Q7OzsyQkFDTUosQyxFQUFHO0FBQ1JBLE9BQUMsQ0FBQ0ssY0FBRjtBQUNBLFdBQUtKLFFBQUwsQ0FBYztBQUFFUCxpQkFBUyxFQUFFO0FBQWIsT0FBZDtBQUNBLFVBQU1DLEtBQUssR0FBRyxLQUFLRixLQUFMLENBQVdFLEtBQXpCO0FBQ0EsVUFBSVcsR0FBRyxHQUFHQyxzRUFBUSxDQUFDWixLQUFELENBQVIsQ0FDUGEsSUFETyxDQUNGLFVBQUNDLEdBQUQsRUFBUztBQUNiLFlBQUdBLEdBQUgsRUFBTztBQUNQLGNBQU1DLE9BQU8sR0FBRyxFQUFoQjtBQUNBQSxpQkFBTyxDQUFDQyxVQUFSLEdBQXFCLGFBQXJCO0FBQ0FELGlCQUFPLENBQUNFLE1BQVIsR0FBaUJILEdBQUcsQ0FBQ0csTUFBckI7QUFDQUYsaUJBQU8sQ0FBQ0csU0FBUixHQUFxQixDQUFDSixHQUFHLENBQUNLLGFBQU4sR0FBdUIsSUFBdkIsR0FBOEIsS0FBbEQ7QUFDQUMsa0ZBQVEsQ0FDTkwsT0FBTyxDQUFDRSxNQURGLDhCQUVlRixPQUFPLENBQUNDLFVBRnZCLCtDQUVzRUQsT0FBTyxDQUFDRyxTQUY5RSxHQUdOLFNBSE0sQ0FBUjtBQUtDO0FBQ0YsT0FiTyxXQWNELFVBQUFHLEdBQUcsRUFBSTtBQUNaQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELE9BaEJPLENBQVY7QUFpQkQ7Ozs2QkFFUTtBQUNQLDBCQUNFO0FBQUEsK0JBQ0U7QUFBTSxrQkFBUSxFQUFFLEtBQUtuQixNQUFyQjtBQUFBLGlDQUNFLHFFQUFDLHNEQUFEO0FBQU8sbUJBQU8sRUFBRSxDQUFoQjtBQUFtQixxQkFBUyxFQUFFc0IsK0RBQU0sQ0FBQ0MsSUFBckM7QUFBQSxvQ0FDRSxxRUFBQywyREFBRDtBQUFBLHNDQUNFLHFFQUFDLGlFQUFEO0FBQWtCLDZCQUFhLEVBQUMsTUFBaEM7QUFBdUMsd0JBQVEsZUFBRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSxxRUFBQyxzREFBRDtBQUNFLG9CQUFJLEVBQUMsT0FEUDtBQUVFLHFCQUFLLEVBQUUsS0FBSzNCLEtBQUwsQ0FBV0UsS0FGcEI7QUFHRSx3QkFBUSxFQUFFLEtBQUtJLFFBSGpCO0FBSUUsb0JBQUksRUFBQyxLQUpQO0FBS0Usd0JBQVEsRUFBRSxLQUFLTixLQUFMLENBQVdDLFNBTHZCO0FBTUUsMkJBQVcsRUFBQztBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsRUFTSyxHQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQVlHLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxTQUFaLGdCQUNDLHFFQUFDLHVEQUFEO0FBQ0UseUJBQVcsRUFBQyxNQURkO0FBRUUsc0JBQVEsRUFBRSxDQUFDLEtBQUtELEtBQUwsQ0FBV0UsS0FGeEI7QUFHRSxrQkFBSSxFQUFDLFFBSFA7QUFJRSx5QkFBVyxFQUFDLE1BSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsR0FVQyxFQXRCSixFQXdCRyxLQUFLRixLQUFMLENBQVdDLFNBQVgsZ0JBQ0MscUVBQUMsdURBQUQ7QUFDRSx1QkFBUyxNQURYO0FBRUUseUJBQVcsRUFBQyxjQUZkO0FBR0UseUJBQVcsRUFBQyxNQUhkO0FBSUUscUJBQU8sRUFBQyxTQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELEdBVUMsRUFsQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQTJDRDs7OztFQWxGZ0IyQiwrQzs7QUFxRko5QixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgU3RhY2ssXG4gIElucHV0R3JvdXAsXG4gIElucHV0TGVmdEVsZW1lbnQsXG4gIElucHV0LFxuICBJbnB1dFJpZ2h0RWxlbWVudCxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgUGhvbmVJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Gb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBzaW1DaGVjayBmcm9tIFwiLi4vc2VydmljZXMvc2ltU2VydmljZXNcIjtcbmltcG9ydCB7IHNpbVRvYXN0IH0gZnJvbSBcIi4uL3NlcnZpY2VzL0FsZXJ0U2VydmljZVwiO1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICBwaG9uZTogXCJcIixcbiAgICAgIGVycm9yczogXCJcIixcbiAgICB9O1xuICAgIHRoaXMudmVyaWZ5ID0gdGhpcy52ZXJpZnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25DaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG4gIHZlcmlmeShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XG4gICAgY29uc3QgcGhvbmUgPSB0aGlzLnN0YXRlLnBob25lO1xuICAgIGxldCBzaW0gPSBzaW1DaGVjayhwaG9uZSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYocmVzKXtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IHt9O1xuICAgICAgICBkZXRhaWxzLmNoYW5nZURhdGUgPSBcIkZyaSAyOSAyMDIxXCI7XG4gICAgICAgIGRldGFpbHMuc3RhdHVzID0gcmVzLnN0YXR1cztcbiAgICAgICAgZGV0YWlscy5zaW1DaGFuZ2UgPSAoIXJlcy5ub19zaW1fY2hhbmdlKSA/IFwiTm9cIiA6IFwiWWVzXCI7XG4gICAgICAgIHNpbVRvYXN0KFxuICAgICAgICAgIGRldGFpbHMuc3RhdHVzLFxuICAgICAgICAgIGBMYXN0IHNpbSBjaGFuZ2VkOiAke2RldGFpbHMuY2hhbmdlRGF0ZX0uIFNpbSBjaGFuZ2VkIGluIHRoZSBsYXN0IDcgZGF5czogJHtkZXRhaWxzLnNpbUNoYW5nZX1gLFxuICAgICAgICAgIFwic3VjY2Vzc1wiXG4gICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy52ZXJpZnl9PlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs3fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudCBwb2ludGVyRXZlbnRzPVwibm9uZVwiIGNoaWxkcmVuPXs8UGhvbmVJY29uIC8+fSAvPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmlzTG9hZGluZ31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lIG51bWJlclwiXG4gICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmlzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiYmx1ZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnBob25lfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGlzRnVsbFdpZHRoPVwidHJ1ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWZXJpZnlcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nXG4gICAgICAgICAgICAgICAgbG9hZGluZ1RleHQ9XCJWZXJpZnlpbmcuLi5cIlxuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Form.js\n");

/***/ })

})