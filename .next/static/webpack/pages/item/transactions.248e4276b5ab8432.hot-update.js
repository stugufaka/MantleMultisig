"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/item/transactions",{

/***/ "./components/tabs/Properties.jsx":
/*!****************************************!*\
  !*** ./components/tabs/Properties.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_items_tabs_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/items_tabs_data */ \"./data/items_tabs_data.js\");\n/* harmony import */ var _utils_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/AuthProvider */ \"./utils/AuthProvider.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Properties = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_AuthProvider__WEBPACK_IMPORTED_MODULE_5__.AuthContext), address = ref.address, signer = ref.signer, contract = ref.contract, provider = ref.provider, chainId = ref.chainId, connect = ref.connect;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), transactions1 = ref1[0], settransactions = ref1[1];\n    function loadtransactions() {\n        return _loadtransactions.apply(this, arguments);\n    }\n    function _loadtransactions() {\n        _loadtransactions = _asyncToGenerator(_Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var transactions;\n            return _Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return contract === null || contract === void 0 ? void 0 : contract.getTransactionCount();\n                    case 2:\n                        transactions = _ctx.sent;\n                        settransactions(transactions);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadtransactions.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadtransactions();\n    }, [\n        contract\n    ]);\n    console.log(transactions1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tab-pane fade show active\",\n            id: \"offers\",\n            role: \"tabpanel\",\n            \"aria-labelledby\": \"offers-tab\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"focus:outline-none text-white bg-blue my-3 rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\",\n                    children: \"Set Signatures\"\n                }, void 0, false, {\n                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"relative border-2 mt-2 overflow-x-auto shadow-md sm:rounded-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n                        className: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                                className: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: [\n                                                \"Destination address\",\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"value\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"Data\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"AuthorizedUsers\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"Actions\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"row\",\n                                            className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                            children: \"0x6d8ee381e727bd18Eda7b3661621A123058Ce17d\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"row\",\n                                            className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                            children: \"2 ETH\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"row\",\n                                            className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                            children: \"Some Important Data\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"row\",\n                                            className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                            children: \"[ ' 0x6..7d',' 0x6..7d' ]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            className: \" py-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                className: \"focus:outline-none text-white bg-green rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\",\n                                                children: \"Confirm\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, _this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Properties, \"7MROE7wsxI6OS2PKBijDpxbKXhw=\");\n_c = Properties;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Properties);\nvar _c;\n$RefreshReg$(_c, \"Properties\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9HOztzREFDaEgsOERBQUNRLElBQUU7NENBQ0RDLEtBQUssRUFBQyxLQUFLOzRDQUNYVCxTQUFTLEVBQUMsdUVBQXVFO3NEQUNsRiw0Q0FFRDs7Ozs7aURBQUs7c0RBQ0wsOERBQUNRLElBQUU7NENBQ0RDLEtBQUssRUFBQyxLQUFLOzRDQUNYVCxTQUFTLEVBQUMsdUVBQXVFO3NEQUNsRixPQUVEOzs7OztpREFBSztzREFDTCw4REFBQ1EsSUFBRTs0Q0FDREMsS0FBSyxFQUFDLEtBQUs7NENBQ1hULFNBQVMsRUFBQyx1RUFBdUU7c0RBQ2xGLHFCQUVEOzs7OztpREFBSztzREFDTCw4REFBQ1EsSUFBRTs0Q0FDREMsS0FBSyxFQUFDLEtBQUs7NENBQ1hULFNBQVMsRUFBQyx1RUFBdUU7c0RBQ2xGLDJCQUVEOzs7OztpREFBSztzREFDTCw4REFBQ1csSUFBRTs0Q0FBQ1gsU0FBUyxFQUFDLE9BQU87c0RBQ25CLDRFQUFDSSxRQUFNO2dEQUFDSixTQUFTLEVBQUMsb01BQXNNOzBEQUFDLFNBRXpOOzs7OztxREFBUzs7Ozs7aURBQ047d0NBQUMsR0FBRzs7Ozs7O3lDQUNOOzs7OztxQ0FDQzs7Ozs7OzZCQUNGOzs7Ozt5QkFDSjs7Ozs7O2lCQUNGO3FCQUNMLENBQ0g7Q0FDSDtHQXRGS2QsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBd0ZoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFicy9Qcm9wZXJ0aWVzLmpzeD83MmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGl0ZW1zX29mZmVyX2RhdGEgfSBmcm9tIFwiLi4vLi4vZGF0YS9pdGVtc190YWJzX2RhdGFcIjtcclxuaW1wb3J0IHtcclxuICBNb2RhbCxcclxuICBCdXR0b24sXHJcbiAgVGV4dCxcclxuICBJbnB1dCxcclxuICBSb3csXHJcbiAgQ2hlY2tib3gsXHJcbiAgUHJvZ3Jlc3MsXHJcbiAgU3Bpbm5lcixcclxuICBMb2FkaW5nLFxyXG59IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi8uLi91dGlscy9BdXRoUHJvdmlkZXJcIjtcclxuXHJcbmNvbnN0IFByb3BlcnRpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBhZGRyZXNzLCBzaWduZXIsIGNvbnRyYWN0LCBwcm92aWRlciwgY2hhaW5JZCwgY29ubmVjdCB9ID1cclxuICAgIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuICBjb25zdCBbdHJhbnNhY3Rpb25zLCBzZXR0cmFuc2FjdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWR0cmFuc2FjdGlvbnMoKSB7XHJcbiAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBjb250cmFjdD8uZ2V0VHJhbnNhY3Rpb25Db3VudCgpO1xyXG4gICAgc2V0dHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9ucyk7XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkdHJhbnNhY3Rpb25zKCk7XHJcbiAgfSwgW2NvbnRyYWN0XSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHRyYW5zYWN0aW9ucyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8IS0tIFByb3BlcnRpZXMgLS0+ICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiXHJcbiAgICAgICAgaWQ9XCJvZmZlcnNcIlxyXG4gICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwib2ZmZXJzLXRhYlwiXHJcbiAgICAgID5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGJnLWJsdWUgbXktMyByb3VuZGVkLWZ1bGwgaG92ZXI6YmctcmVkLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1yZWQtMzAwIGZvbnQtbWVkaXVtICB0ZXh0LXNtIHB4LTUgcHktMi41IG1yLTIgbWItMiBkYXJrOmJnLXJlZC02MDAgZGFyazpob3ZlcjpiZy1yZWQtNzAwIGRhcms6Zm9jdXM6cmluZy1yZWQtOTAwXCI+XHJcbiAgICAgICAgICBTZXQgU2lnbmF0dXJlc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyLTIgbXQtMiBvdmVyZmxvdy14LWF1dG8gc2hhZG93LW1kIHNtOnJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIERlc3RpbmF0aW9uIGFkZHJlc3N7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIERhdGFcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIEF1dGhvcml6ZWRVc2Vyc1xyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBBY3Rpb25zXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgYm9yZGVyLWIgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwIGRhcms6aG92ZXI6YmctZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDB4NmQ4ZWUzODFlNzI3YmQxOEVkYTdiMzY2MTYyMUExMjMwNThDZTE3ZFxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDIgRVRIXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU29tZSBJbXBvcnRhbnQgRGF0YVxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFsgJyAweDYuLjdkJywnIDB4Ni4uN2QnIF1cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiIHB5LTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBiZy1ncmVlbiByb3VuZGVkLWZ1bGwgaG92ZXI6YmctcmVkLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1yZWQtMzAwIGZvbnQtbWVkaXVtICB0ZXh0LXNtIHB4LTUgcHktMS41ICBkYXJrOmJnLXJlZC02MDAgZGFyazpob3ZlcjpiZy1yZWQtNzAwIGRhcms6Zm9jdXM6cmluZy1yZWQtOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0aWVzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJMaW5rIiwiaXRlbXNfb2ZmZXJfZGF0YSIsIk1vZGFsIiwiQnV0dG9uIiwiVGV4dCIsIklucHV0IiwiUm93IiwiQ2hlY2tib3giLCJQcm9ncmVzcyIsIlNwaW5uZXIiLCJMb2FkaW5nIiwiQXV0aENvbnRleHQiLCJQcm9wZXJ0aWVzIiwiYWRkcmVzcyIsInNpZ25lciIsImNvbnRyYWN0IiwicHJvdmlkZXIiLCJjaGFpbklkIiwiY29ubmVjdCIsInRyYW5zYWN0aW9ucyIsInNldHRyYW5zYWN0aW9ucyIsImxvYWR0cmFuc2FjdGlvbnMiLCJnZXRUcmFuc2FjdGlvbkNvdW50IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwicm9sZSIsImFyaWEtbGFiZWxsZWRieSIsImJ1dHRvbiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJ0Ym9keSIsInRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tabs/Properties.jsx\n");

/***/ })

});