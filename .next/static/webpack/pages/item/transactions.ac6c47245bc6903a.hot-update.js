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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_items_tabs_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/items_tabs_data */ \"./data/items_tabs_data.js\");\n/* harmony import */ var _utils_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/AuthProvider */ \"./utils/AuthProvider.tsx\");\n/* harmony import */ var _lib_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/utilities */ \"./lib/utilities.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Properties = function() {\n    var _this1 = _this;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_AuthProvider__WEBPACK_IMPORTED_MODULE_5__.AuthContext), address = ref2.address, signer = ref2.signer, contract = ref2.contract, provider = ref2.provider, chainId = ref2.chainId, connect = ref2.connect;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), transactions1 = ref1[0], settransactions = ref1[1];\n    function loadtransactions() {\n        return _loadtransactions.apply(this, arguments);\n    }\n    function _loadtransactions() {\n        _loadtransactions = _asyncToGenerator(_Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var transactions;\n            return _Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return contract === null || contract === void 0 ? void 0 : contract.getAllTransactions();\n                    case 2:\n                        transactions = _ctx.sent;\n                        settransactions(transactions);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadtransactions.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadtransactions();\n    }, [\n        contract\n    ]);\n    console.log(transactions1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tab-pane fade show active\",\n            id: \"offers\",\n            role: \"tabpanel\",\n            \"aria-labelledby\": \"offers-tab\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"focus:outline-none text-white bg-blue my-3 rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\",\n                    children: \"Set Signatures\"\n                }, void 0, false, {\n                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"relative border-2 mt-2 overflow-x-auto shadow-md sm:rounded-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n                        className: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                                className: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: [\n                                                \"Destination address\",\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"value\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"Data\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"AuthorizedUsers\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"Actions\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                                children: transactions1 === null || transactions1 === void 0 ? void 0 : transactions1.map(function(transaction, index) {\n                                    var ref;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                        className: \"bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                                scope: \"row\",\n                                                className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                                children: [\n                                                    (0,_lib_utilities__WEBPACK_IMPORTED_MODULE_6__.ellipseAddress)(transaction === null || transaction === void 0 ? void 0 : transaction.destination),\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                                scope: \"row\",\n                                                className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                                children: [\n                                                    ethers.utils.formatEther(transaction === null || transaction === void 0 ? void 0 : (ref = transaction.value) === null || ref === void 0 ? void 0 : ref.toString()),\n                                                    \" \",\n                                                    \"ETH\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                                scope: \"row\",\n                                                className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                                children: \"Some Important Data\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                                scope: \"row\",\n                                                className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                                children: \"[ ' 0x6..7d',' 0x6..7d' ]\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                                className: \" py-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    className: \"focus:outline-none text-white bg-green rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\",\n                                                    children: \"Confirm\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 23\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 19\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Properties, \"7MROE7wsxI6OS2PKBijDpxbKXhw=\");\n_c = Properties;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Properties);\nvar _c;\n$RefreshReg$(_c, \"Properties\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7Ozs7Ozs4Q0FDTixDQUNMO2lDQUNILENBQUM7Ozs7O3FDQUNJOzs7Ozs7NkJBQ0Y7Ozs7O3lCQUNKOzs7Ozs7aUJBQ0Y7cUJBQ0wsQ0FDSDtDQUNIO0dBM0ZLZCxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUE2RmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJzL1Byb3BlcnRpZXMuanN4PzcyYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgaXRlbXNfb2ZmZXJfZGF0YSB9IGZyb20gXCIuLi8uLi9kYXRhL2l0ZW1zX3RhYnNfZGF0YVwiO1xyXG5pbXBvcnQge1xyXG4gIE1vZGFsLFxyXG4gIEJ1dHRvbixcclxuICBUZXh0LFxyXG4gIElucHV0LFxyXG4gIFJvdyxcclxuICBDaGVja2JveCxcclxuICBQcm9ncmVzcyxcclxuICBTcGlubmVyLFxyXG4gIExvYWRpbmcsXHJcbn0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL0F1dGhQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBlbGxpcHNlQWRkcmVzcyB9IGZyb20gXCIuLi8uLi9saWIvdXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBQcm9wZXJ0aWVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWRkcmVzcywgc2lnbmVyLCBjb250cmFjdCwgcHJvdmlkZXIsIGNoYWluSWQsIGNvbm5lY3QgfSA9XHJcbiAgICB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW3RyYW5zYWN0aW9ucywgc2V0dHJhbnNhY3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBhc3luYyBmdW5jdGlvbiBsb2FkdHJhbnNhY3Rpb25zKCkge1xyXG4gICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgY29udHJhY3Q/LmdldEFsbFRyYW5zYWN0aW9ucygpO1xyXG4gICAgc2V0dHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9ucyk7XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkdHJhbnNhY3Rpb25zKCk7XHJcbiAgfSwgW2NvbnRyYWN0XSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHRyYW5zYWN0aW9ucyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8IS0tIFByb3BlcnRpZXMgLS0+ICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiXHJcbiAgICAgICAgaWQ9XCJvZmZlcnNcIlxyXG4gICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwib2ZmZXJzLXRhYlwiXHJcbiAgICAgID5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGJnLWJsdWUgbXktMyByb3VuZGVkLWZ1bGwgaG92ZXI6YmctcmVkLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1yZWQtMzAwIGZvbnQtbWVkaXVtICB0ZXh0LXNtIHB4LTUgcHktMi41IG1yLTIgbWItMiBkYXJrOmJnLXJlZC02MDAgZGFyazpob3ZlcjpiZy1yZWQtNzAwIGRhcms6Zm9jdXM6cmluZy1yZWQtOTAwXCI+XHJcbiAgICAgICAgICBTZXQgU2lnbmF0dXJlc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyLTIgbXQtMiBvdmVyZmxvdy14LWF1dG8gc2hhZG93LW1kIHNtOnJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIERlc3RpbmF0aW9uIGFkZHJlc3N7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIERhdGFcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIEF1dGhvcml6ZWRVc2Vyc1xyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBBY3Rpb25zXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7dHJhbnNhY3Rpb25zPy5tYXAoKHRyYW5zYWN0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIGJvcmRlci1iIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbGxpcHNlQWRkcmVzcyh0cmFuc2FjdGlvbj8uZGVzdGluYXRpb24pfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHRyYW5zYWN0aW9uPy52YWx1ZT8udG9TdHJpbmcoKSl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgRVRIXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU29tZSBJbXBvcnRhbnQgRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFsgJyAweDYuLjdkJywnIDB4Ni4uN2QnIF1cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCIgcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBiZy1ncmVlbiByb3VuZGVkLWZ1bGwgaG92ZXI6YmctcmVkLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1yZWQtMzAwIGZvbnQtbWVkaXVtICB0ZXh0LXNtIHB4LTUgcHktMS41ICBkYXJrOmJnLXJlZC02MDAgZGFyazpob3ZlcjpiZy1yZWQtNzAwIGRhcms6Zm9jdXM6cmluZy1yZWQtOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb3BlcnRpZXM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkxpbmsiLCJpdGVtc19vZmZlcl9kYXRhIiwiTW9kYWwiLCJCdXR0b24iLCJUZXh0IiwiSW5wdXQiLCJSb3ciLCJDaGVja2JveCIsIlByb2dyZXNzIiwiU3Bpbm5lciIsIkxvYWRpbmciLCJBdXRoQ29udGV4dCIsImVsbGlwc2VBZGRyZXNzIiwiUHJvcGVydGllcyIsImFkZHJlc3MiLCJzaWduZXIiLCJjb250cmFjdCIsInByb3ZpZGVyIiwiY2hhaW5JZCIsImNvbm5lY3QiLCJ0cmFuc2FjdGlvbnMiLCJzZXR0cmFuc2FjdGlvbnMiLCJsb2FkdHJhbnNhY3Rpb25zIiwiZ2V0QWxsVHJhbnNhY3Rpb25zIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwicm9sZSIsImFyaWEtbGFiZWxsZWRieSIsImJ1dHRvbiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJ0Ym9keSIsIm1hcCIsInRyYW5zYWN0aW9uIiwiaW5kZXgiLCJkZXN0aW5hdGlvbiIsImV0aGVycyIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJ2YWx1ZSIsInRvU3RyaW5nIiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tabs/Properties.jsx\n");

/***/ })

});