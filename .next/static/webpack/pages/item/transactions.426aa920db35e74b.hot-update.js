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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_items_tabs_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/items_tabs_data */ \"./data/items_tabs_data.js\");\n/* harmony import */ var _utils_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/AuthProvider */ \"./utils/AuthProvider.tsx\");\n/* harmony import */ var _lib_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/utilities */ \"./lib/utilities.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3-utils */ \"./node_modules/web3-utils/lib/index.js\");\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_7__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Properties = function() {\n    var _this1 = _this;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_AuthProvider__WEBPACK_IMPORTED_MODULE_5__.AuthContext), address = ref2.address, signer = ref2.signer, contract = ref2.contract, provider = ref2.provider, chainId = ref2.chainId, connect = ref2.connect;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), transactions1 = ref1[0], settransactions = ref1[1];\n    function loadtransactions() {\n        return _loadtransactions.apply(this, arguments);\n    }\n    function _loadtransactions() {\n        _loadtransactions = _asyncToGenerator(_Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var transactions;\n            return _Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return contract === null || contract === void 0 ? void 0 : contract.getAllTransactions();\n                    case 2:\n                        transactions = _ctx.sent;\n                        settransactions(transactions);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadtransactions.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadtransactions();\n    }, [\n        contract\n    ]);\n    console.log(transactions1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tab-pane fade show active\",\n            id: \"offers\",\n            role: \"tabpanel\",\n            \"aria-labelledby\": \"offers-tab\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"focus:outline-none text-white bg-blue my-3 rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\",\n                    children: \"Set Signatures\"\n                }, void 0, false, {\n                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"relative border-2 mt-2 overflow-x-auto shadow-md sm:rounded-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n                        className: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                                className: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: [\n                                                \"Destination address\",\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"value\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"Data\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"AuthorizedUsers\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"Actions\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                                children: transactions1 === null || transactions1 === void 0 ? void 0 : transactions1.map(function(transaction, index) {\n                                    var ref;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                        className: \"bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                                scope: \"row\",\n                                                className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                                children: [\n                                                    (0,_lib_utilities__WEBPACK_IMPORTED_MODULE_6__.ellipseAddress)(transaction === null || transaction === void 0 ? void 0 : transaction.destination),\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                                scope: \"row\",\n                                                className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                                children: [\n                                                    ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatEther(transaction === null || transaction === void 0 ? void 0 : (ref = transaction.value) === null || ref === void 0 ? void 0 : ref.toString()),\n                                                    \" \",\n                                                    \"ETH\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                                scope: \"row\",\n                                                className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                                children: transaction[2].toString()\n                                            }, void 0, false, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                                scope: \"row\",\n                                                className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                                children: transaction.authorizedUsers\n                                            }, void 0, false, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                                className: \" py-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    onClick: function() {\n                                                    // onConfirmTransaction();\n                                                    },\n                                                    className: \"focus:outline-none text-white bg-green rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\",\n                                                    children: \"Confirm\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 23\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 19\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Properties, \"7MROE7wsxI6OS2PKBijDpxbKXhw=\");\n_c = Properties;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Properties);\nvar _c;\n$RefreshReg$(_c, \"Properties\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBTTtvREFDYiwwQkFBMEI7cURBQzNCO29EQUNEckIsU0FBUyxFQUFDLG9NQUFzTTs4REFDak4sU0FFRDs7Ozs7MERBQVM7Ozs7O3NEQUNOOzRDQUFDLEdBQUc7Ozs7Ozs4Q0FDTixDQUNMO2lDQUNILENBQUM7Ozs7O3FDQUNJOzs7Ozs7NkJBQ0Y7Ozs7O3lCQUNKOzs7Ozs7aUJBQ0Y7cUJBQ0wsQ0FDSDtDQUNIO0dBakdLZCxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFtR2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJzL1Byb3BlcnRpZXMuanN4PzcyYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgaXRlbXNfb2ZmZXJfZGF0YSB9IGZyb20gXCIuLi8uLi9kYXRhL2l0ZW1zX3RhYnNfZGF0YVwiO1xyXG5pbXBvcnQge1xyXG4gIE1vZGFsLFxyXG4gIEJ1dHRvbixcclxuICBUZXh0LFxyXG4gIElucHV0LFxyXG4gIFJvdyxcclxuICBDaGVja2JveCxcclxuICBQcm9ncmVzcyxcclxuICBTcGlubmVyLFxyXG4gIExvYWRpbmcsXHJcbn0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL0F1dGhQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBlbGxpcHNlQWRkcmVzcyB9IGZyb20gXCIuLi8uLi9saWIvdXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHsgaGV4VG9TdHJpbmcgfSBmcm9tIFwid2ViMy11dGlsc1wiO1xyXG5cclxuY29uc3QgUHJvcGVydGllcyA9ICgpID0+IHtcclxuICBjb25zdCB7IGFkZHJlc3MsIHNpZ25lciwgY29udHJhY3QsIHByb3ZpZGVyLCBjaGFpbklkLCBjb25uZWN0IH0gPVxyXG4gICAgdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFt0cmFuc2FjdGlvbnMsIHNldHRyYW5zYWN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZHRyYW5zYWN0aW9ucygpIHtcclxuICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IGF3YWl0IGNvbnRyYWN0Py5nZXRBbGxUcmFuc2FjdGlvbnMoKTtcclxuICAgIHNldHRyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnMpO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZHRyYW5zYWN0aW9ucygpO1xyXG4gIH0sIFtjb250cmFjdF0pO1xyXG5cclxuICBjb25zb2xlLmxvZyh0cmFuc2FjdGlvbnMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPCEtLSBQcm9wZXJ0aWVzIC0tPiAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIlxyXG4gICAgICAgIGlkPVwib2ZmZXJzXCJcclxuICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm9mZmVycy10YWJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBiZy1ibHVlIG15LTMgcm91bmRlZC1mdWxsIGhvdmVyOmJnLXJlZC04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctcmVkLTMwMCBmb250LW1lZGl1bSAgdGV4dC1zbSBweC01IHB5LTIuNSBtci0yIG1iLTIgZGFyazpiZy1yZWQtNjAwIGRhcms6aG92ZXI6YmctcmVkLTcwMCBkYXJrOmZvY3VzOnJpbmctcmVkLTkwMFwiPlxyXG4gICAgICAgICAgU2V0IFNpZ25hdHVyZXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJvcmRlci0yIG10LTIgb3ZlcmZsb3cteC1hdXRvIHNoYWRvdy1tZCBzbTpyb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc20gdGV4dC1sZWZ0IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgYm9yZGVyLWIgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwIGRhcms6aG92ZXI6YmctZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBEZXN0aW5hdGlvbiBhZGRyZXNze1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBEYXRhXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBBdXRob3JpemVkVXNlcnNcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgQWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge3RyYW5zYWN0aW9ucz8ubWFwKCh0cmFuc2FjdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWxsaXBzZUFkZHJlc3ModHJhbnNhY3Rpb24/LmRlc3RpbmF0aW9uKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2V0aGVycy51dGlscy5mb3JtYXRFdGhlcih0cmFuc2FjdGlvbj8udmFsdWU/LnRvU3RyaW5nKCkpfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIEVUSFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiB7aGV4VG9TdHJpbmcodHJhbnNhY3Rpb24/LmRhdGEpfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvblsyXS50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbi5hdXRob3JpemVkVXNlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiIHB5LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ29uZmlybVRyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGJnLWdyZWVuIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1yZWQtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLXJlZC0zMDAgZm9udC1tZWRpdW0gIHRleHQtc20gcHgtNSBweS0xLjUgIGRhcms6YmctcmVkLTYwMCBkYXJrOmhvdmVyOmJnLXJlZC03MDAgZGFyazpmb2N1czpyaW5nLXJlZC05MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0aWVzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJMaW5rIiwiaXRlbXNfb2ZmZXJfZGF0YSIsIk1vZGFsIiwiQnV0dG9uIiwiVGV4dCIsIklucHV0IiwiUm93IiwiQ2hlY2tib3giLCJQcm9ncmVzcyIsIlNwaW5uZXIiLCJMb2FkaW5nIiwiQXV0aENvbnRleHQiLCJlbGxpcHNlQWRkcmVzcyIsImV0aGVycyIsImhleFRvU3RyaW5nIiwiUHJvcGVydGllcyIsImFkZHJlc3MiLCJzaWduZXIiLCJjb250cmFjdCIsInByb3ZpZGVyIiwiY2hhaW5JZCIsImNvbm5lY3QiLCJ0cmFuc2FjdGlvbnMiLCJzZXR0cmFuc2FjdGlvbnMiLCJsb2FkdHJhbnNhY3Rpb25zIiwiZ2V0QWxsVHJhbnNhY3Rpb25zIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwicm9sZSIsImFyaWEtbGFiZWxsZWRieSIsImJ1dHRvbiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJ0Ym9keSIsIm1hcCIsInRyYW5zYWN0aW9uIiwiaW5kZXgiLCJkZXN0aW5hdGlvbiIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiYXV0aG9yaXplZFVzZXJzIiwidGQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tabs/Properties.jsx\n");

/***/ })

});