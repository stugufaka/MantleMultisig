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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_items_tabs_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/items_tabs_data */ \"./data/items_tabs_data.js\");\n/* harmony import */ var _utils_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/AuthProvider */ \"./utils/AuthProvider.tsx\");\n/* harmony import */ var _lib_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/utilities */ \"./lib/utilities.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3-utils */ \"./node_modules/web3-utils/lib/index.js\");\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_7__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Properties = function() {\n    var _this1 = _this;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_AuthProvider__WEBPACK_IMPORTED_MODULE_5__.AuthContext), address = ref2.address, signer = ref2.signer, contract = ref2.contract, provider = ref2.provider, chainId = ref2.chainId, connect = ref2.connect;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), transactions1 = ref1[0], settransactions = ref1[1];\n    function loadtransactions() {\n        return _loadtransactions.apply(this, arguments);\n    }\n    function _loadtransactions() {\n        _loadtransactions = _asyncToGenerator(_Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var transactions;\n            return _Users_albertmends_Documents_Hackertons_MantleMultisig_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return contract === null || contract === void 0 ? void 0 : contract.getAllTransactions();\n                    case 2:\n                        transactions = _ctx.sent;\n                        settransactions(transactions);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadtransactions.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadtransactions();\n    }, [\n        contract\n    ]);\n    console.log(transactions1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tab-pane fade show active\",\n            id: \"offers\",\n            role: \"tabpanel\",\n            \"aria-labelledby\": \"offers-tab\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"focus:outline-none text-white bg-blue my-3 rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\",\n                    children: \"Set Signatures\"\n                }, void 0, false, {\n                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"relative border-2 mt-2 overflow-x-auto shadow-md sm:rounded-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n                        className: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                                className: \"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: [\n                                                \"Destination address\",\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"value\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"Data\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"AuthorizedUsers\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"Actions\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                                children: transactions1 === null || transactions1 === void 0 ? void 0 : transactions1.map(function(transaction, index) {\n                                    var ref;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                        className: \"bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                                scope: \"row\",\n                                                className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                                children: [\n                                                    (0,_lib_utilities__WEBPACK_IMPORTED_MODULE_6__.ellipseAddress)(transaction === null || transaction === void 0 ? void 0 : transaction.destination),\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                                scope: \"row\",\n                                                className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                                children: [\n                                                    ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatEther(transaction === null || transaction === void 0 ? void 0 : (ref = transaction.value) === null || ref === void 0 ? void 0 : ref.toString()),\n                                                    \" \",\n                                                    \"ETH\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                                scope: \"row\",\n                                                className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                                children: (0,web3_utils__WEBPACK_IMPORTED_MODULE_7__.hexToString)(transaction === null || transaction === void 0 ? void 0 : transaction.data)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                                scope: \"row\",\n                                                className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white\",\n                                                children: transaction.authorizedUsers\n                                            }, void 0, false, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                                className: \" py-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    onClick: function() {\n                                                        onConfirmTransaction();\n                                                    },\n                                                    className: \"focus:outline-none text-white bg-green rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\",\n                                                    children: \"Confirm\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 23\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 19\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/albertmends/Documents/Hackertons/MantleMultisig/components/tabs/Properties.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Properties, \"7MROE7wsxI6OS2PKBijDpxbKXhw=\");\n_c = Properties;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Properties);\nvar _c;\n$RefreshReg$(_c, \"Properties\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsT0FBTzswREFDbkIsNEVBQUNJLFFBQU07b0RBQ0xrQixPQUFPLEVBQUUsV0FBTTt3REFDYkMsb0JBQW9CLEVBQUUsQ0FBQztxREFDeEI7b0RBQ0R2QixTQUFTLEVBQUMsb01BQXNNOzhEQUNqTixTQUVEOzs7OzswREFBUzs7Ozs7c0RBQ047NENBQUMsR0FBRzs7Ozs7OzhDQUNOLENBQ0w7aUNBQ0gsQ0FBQzs7Ozs7cUNBQ0k7Ozs7Ozs2QkFDRjs7Ozs7eUJBQ0o7Ozs7OztpQkFDRjtxQkFDTCxDQUNIO0NBQ0g7R0FoR0tkLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQWtHaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RhYnMvUHJvcGVydGllcy5qc3g/NzJjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBpdGVtc19vZmZlcl9kYXRhIH0gZnJvbSBcIi4uLy4uL2RhdGEvaXRlbXNfdGFic19kYXRhXCI7XHJcbmltcG9ydCB7XHJcbiAgTW9kYWwsXHJcbiAgQnV0dG9uLFxyXG4gIFRleHQsXHJcbiAgSW5wdXQsXHJcbiAgUm93LFxyXG4gIENoZWNrYm94LFxyXG4gIFByb2dyZXNzLFxyXG4gIFNwaW5uZXIsXHJcbiAgTG9hZGluZyxcclxufSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQXV0aFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IGVsbGlwc2VBZGRyZXNzIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsaXRpZXNcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgeyBoZXhUb1N0cmluZyB9IGZyb20gXCJ3ZWIzLXV0aWxzXCI7XHJcblxyXG5jb25zdCBQcm9wZXJ0aWVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWRkcmVzcywgc2lnbmVyLCBjb250cmFjdCwgcHJvdmlkZXIsIGNoYWluSWQsIGNvbm5lY3QgfSA9XHJcbiAgICB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW3RyYW5zYWN0aW9ucywgc2V0dHJhbnNhY3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBhc3luYyBmdW5jdGlvbiBsb2FkdHJhbnNhY3Rpb25zKCkge1xyXG4gICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgY29udHJhY3Q/LmdldEFsbFRyYW5zYWN0aW9ucygpO1xyXG4gICAgc2V0dHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9ucyk7XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkdHJhbnNhY3Rpb25zKCk7XHJcbiAgfSwgW2NvbnRyYWN0XSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHRyYW5zYWN0aW9ucyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8IS0tIFByb3BlcnRpZXMgLS0+ICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiXHJcbiAgICAgICAgaWQ9XCJvZmZlcnNcIlxyXG4gICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwib2ZmZXJzLXRhYlwiXHJcbiAgICAgID5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGJnLWJsdWUgbXktMyByb3VuZGVkLWZ1bGwgaG92ZXI6YmctcmVkLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1yZWQtMzAwIGZvbnQtbWVkaXVtICB0ZXh0LXNtIHB4LTUgcHktMi41IG1yLTIgbWItMiBkYXJrOmJnLXJlZC02MDAgZGFyazpob3ZlcjpiZy1yZWQtNzAwIGRhcms6Zm9jdXM6cmluZy1yZWQtOTAwXCI+XHJcbiAgICAgICAgICBTZXQgU2lnbmF0dXJlc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyLTIgbXQtMiBvdmVyZmxvdy14LWF1dG8gc2hhZG93LW1kIHNtOnJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIERlc3RpbmF0aW9uIGFkZHJlc3N7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIERhdGFcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIEF1dGhvcml6ZWRVc2Vyc1xyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBBY3Rpb25zXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7dHJhbnNhY3Rpb25zPy5tYXAoKHRyYW5zYWN0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIGJvcmRlci1iIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbGxpcHNlQWRkcmVzcyh0cmFuc2FjdGlvbj8uZGVzdGluYXRpb24pfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHRyYW5zYWN0aW9uPy52YWx1ZT8udG9TdHJpbmcoKSl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgRVRIXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2hleFRvU3RyaW5nKHRyYW5zYWN0aW9uPy5kYXRhKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24uYXV0aG9yaXplZFVzZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIiBweS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm1UcmFuc2FjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBiZy1ncmVlbiByb3VuZGVkLWZ1bGwgaG92ZXI6YmctcmVkLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1yZWQtMzAwIGZvbnQtbWVkaXVtICB0ZXh0LXNtIHB4LTUgcHktMS41ICBkYXJrOmJnLXJlZC02MDAgZGFyazpob3ZlcjpiZy1yZWQtNzAwIGRhcms6Zm9jdXM6cmluZy1yZWQtOTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvcGVydGllcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiTGluayIsIml0ZW1zX29mZmVyX2RhdGEiLCJNb2RhbCIsIkJ1dHRvbiIsIlRleHQiLCJJbnB1dCIsIlJvdyIsIkNoZWNrYm94IiwiUHJvZ3Jlc3MiLCJTcGlubmVyIiwiTG9hZGluZyIsIkF1dGhDb250ZXh0IiwiZWxsaXBzZUFkZHJlc3MiLCJldGhlcnMiLCJoZXhUb1N0cmluZyIsIlByb3BlcnRpZXMiLCJhZGRyZXNzIiwic2lnbmVyIiwiY29udHJhY3QiLCJwcm92aWRlciIsImNoYWluSWQiLCJjb25uZWN0IiwidHJhbnNhY3Rpb25zIiwic2V0dHJhbnNhY3Rpb25zIiwibG9hZHRyYW5zYWN0aW9ucyIsImdldEFsbFRyYW5zYWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsInJvbGUiLCJhcmlhLWxhYmVsbGVkYnkiLCJidXR0b24iLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJtYXAiLCJ0cmFuc2FjdGlvbiIsImluZGV4IiwiZGVzdGluYXRpb24iLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwidmFsdWUiLCJ0b1N0cmluZyIsImRhdGEiLCJhdXRob3JpemVkVXNlcnMiLCJ0ZCIsIm9uQ2xpY2siLCJvbkNvbmZpcm1UcmFuc2FjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tabs/Properties.jsx\n");

/***/ })

});