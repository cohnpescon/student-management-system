/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Nav)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/supabase */ \"./lib/supabase.js\");\n\n\n\n\nfunction Nav() {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const s = _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.onAuthStateChange((_event, session)=>{\n            setUser(session?.user ?? null);\n        });\n        // initial\n        _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.getSession().then((res)=>setUser(res.data.session?.user ?? null));\n        return ()=>s?.subscription?.unsubscribe();\n    }, []);\n    async function signOut() {\n        await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.signOut();\n        setUser(null);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-white shadow-sm\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container flex items-center justify-between py-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            className: \"font-semibold\",\n                            children: \"PES Student Management\" || 0\n                        }, void 0, false, {\n                            fileName: \"/workspaces/student-management-system/components/Nav.js\",\n                            lineNumber: 28,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/dashboard\",\n                            className: \"text-sm text-gray-600\",\n                            children: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/student-management-system/components/Nav.js\",\n                            lineNumber: 29,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/students\",\n                            className: \"text-sm text-gray-600\",\n                            children: \"Students\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/student-management-system/components/Nav.js\",\n                            lineNumber: 30,\n                            columnNumber: 1\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/student-management-system/components/Nav.js\",\n                    lineNumber: 27,\n                    columnNumber: 1\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm\",\n                                children: user.email\n                            }, void 0, false, {\n                                fileName: \"/workspaces/student-management-system/components/Nav.js\",\n                                lineNumber: 35,\n                                columnNumber: 1\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: signOut,\n                                className: \"px-3 py-1 bg-red-500 text-white rounded\",\n                                children: \"Sign out\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/student-management-system/components/Nav.js\",\n                                lineNumber: 36,\n                                columnNumber: 1\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/student-management-system/components/Nav.js\",\n                        lineNumber: 34,\n                        columnNumber: 1\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/login\",\n                        className: \"px-3 py-1 bg-blue-600 text-white rounded\",\n                        children: \"Sign in\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/student-management-system/components/Nav.js\",\n                        lineNumber: 39,\n                        columnNumber: 1\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/student-management-system/components/Nav.js\",\n                    lineNumber: 32,\n                    columnNumber: 1\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/student-management-system/components/Nav.js\",\n            lineNumber: 26,\n            columnNumber: 1\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/student-management-system/components/Nav.js\",\n        lineNumber: 25,\n        columnNumber: 1\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFDZTtBQUNEO0FBRzNCLFNBQVNJO0lBQ3hCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNqQ0QsZ0RBQVNBLENBQUM7UUFDVixNQUFNTSxJQUFJSixtREFBUUEsQ0FBQ0ssSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDQyxRQUFRQztZQUNuREwsUUFBUUssU0FBU04sUUFBUTtRQUN6QjtRQUNBLFVBQVU7UUFDVkYsbURBQVFBLENBQUNLLElBQUksQ0FBQ0ksVUFBVSxHQUFHQyxJQUFJLENBQUNDLENBQUFBLE1BQU9SLFFBQVFRLElBQUlDLElBQUksQ0FBQ0osT0FBTyxFQUFFTixRQUFRO1FBQ3pFLE9BQU8sSUFBTUUsR0FBR1MsY0FBY0M7SUFDOUIsR0FBRyxFQUFFO0lBR0wsZUFBZUM7UUFDZixNQUFNZixtREFBUUEsQ0FBQ0ssSUFBSSxDQUFDVSxPQUFPO1FBQzNCWixRQUFRO0lBQ1I7SUFHQSxxQkFDQSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFDZiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2YsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDZiw4REFBQ3BCLGtEQUFJQTs0QkFBQ3NCLE1BQUs7NEJBQUlGLFdBQVU7c0NBQWlCRyx3QkFBZ0MsSUFBSTs7Ozs7O3NDQUM5RSw4REFBQ3ZCLGtEQUFJQTs0QkFBQ3NCLE1BQUs7NEJBQWFGLFdBQVU7c0NBQXdCOzs7Ozs7c0NBQzFELDhEQUFDcEIsa0RBQUlBOzRCQUFDc0IsTUFBSzs0QkFBWUYsV0FBVTtzQ0FBd0I7Ozs7Ozs7Ozs7Ozs4QkFFekQsOERBQUNDOzhCQUNBaEIscUJBQ0QsOERBQUNnQjt3QkFBSUQsV0FBVTs7MENBQ2YsOERBQUNNO2dDQUFLTixXQUFVOzBDQUFXZixLQUFLc0IsS0FBSzs7Ozs7OzBDQUNyQyw4REFBQ0M7Z0NBQU9DLFNBQVNYO2dDQUFTRSxXQUFVOzBDQUEwQzs7Ozs7Ozs7Ozs7NkNBRzlFLDhEQUFDcEIsa0RBQUlBO3dCQUFDc0IsTUFBSzt3QkFBU0YsV0FBVTtrQ0FBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkZW50LW1hbmFnZW1lbnQtc3RhcnRlci8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi9saWIvc3VwYWJhc2UnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcbnVzZUVmZmVjdCgoKSA9PiB7XG5jb25zdCBzID0gc3VwYWJhc2UuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZSgoX2V2ZW50LCBzZXNzaW9uKSA9PiB7XG5zZXRVc2VyKHNlc3Npb24/LnVzZXIgPz8gbnVsbClcbn0pXG4vLyBpbml0aWFsXG5zdXBhYmFzZS5hdXRoLmdldFNlc3Npb24oKS50aGVuKHJlcyA9PiBzZXRVc2VyKHJlcy5kYXRhLnNlc3Npb24/LnVzZXIgPz8gbnVsbCkpXG5yZXR1cm4gKCkgPT4gcz8uc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpXG59LCBbXSlcblxuXG5hc3luYyBmdW5jdGlvbiBzaWduT3V0KCkge1xuYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduT3V0KClcbnNldFVzZXIobnVsbClcbn1cblxuXG5yZXR1cm4gKFxuPG5hdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctc21cIj5cbjxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0zXCI+XG48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG48TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX05BTUUgfHwgJ1N0dWRlbnRNUyd9PC9MaW5rPlxuPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5EYXNoYm9hcmQ8L0xpbms+XG48TGluayBocmVmPVwiL3N0dWRlbnRzXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+U3R1ZGVudHM8L0xpbms+XG48L2Rpdj5cbjxkaXY+XG57dXNlciA/IChcbjxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbjxzcGFuIGNsYXNzTmFtZT1cInRleHQtc21cIj57dXNlci5lbWFpbH08L3NwYW4+XG48YnV0dG9uIG9uQ2xpY2s9e3NpZ25PdXR9IGNsYXNzTmFtZT1cInB4LTMgcHktMSBiZy1yZWQtNTAwIHRleHQtd2hpdGUgcm91bmRlZFwiPlNpZ24gb3V0PC9idXR0b24+XG48L2Rpdj5cbikgOiAoXG48TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwicHgtMyBweS0xIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcm91bmRlZFwiPlNpZ24gaW48L0xpbms+XG4pfVxuPC9kaXY+XG48L2Rpdj5cbjwvbmF2PlxuKVxufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdXBhYmFzZSIsIk5hdiIsInVzZXIiLCJzZXRVc2VyIiwicyIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZSIsIl9ldmVudCIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWJzY3JpcHRpb24iLCJ1bnN1YnNjcmliZSIsInNpZ25PdXQiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQUF9OQU1FIiwic3BhbiIsImVtYWlsIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./lib/supabase.js":
/*!*************************!*\
  !*** ./lib/supabase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://xurgwnpcgmaihmgtsajx.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1cmd3bnBjZ21haWhtZ3RzYWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2OTE0MjgsImV4cCI6MjA3ODI2NzQyOH0.oA6nQUOYIagoU4PFbx5NatiBkjB16OOm6q4DYsXzfVo\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3VwYWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBR3BELE1BQU1DLGNBQWNDLDBDQUFvQztBQUN4RCxNQUFNRyxrQkFBa0JILGtOQUF5QztBQUcxRCxNQUFNSyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBYUksaUJBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZGVudC1tYW5hZ2VtZW50LXN0YXJ0ZXIvLi9saWIvc3VwYWJhc2UuanM/MTU5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXG5cblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkxcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZXG5cblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/supabase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspaces/student-management-system/pages/_app.js\",\n                lineNumber: 8,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/workspaces/student-management-system/pages/_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 1\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/student-management-system/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDSztBQUdwQixTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3BELHFCQUNBOzswQkFDQSw4REFBQ0gsdURBQUdBOzs7OzswQkFDSiw4REFBQ0k7Z0JBQUtDLFdBQVU7MEJBQ2hCLDRFQUFDSDtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZGVudC1tYW5hZ2VtZW50LXN0YXJ0ZXIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbnJldHVybiAoXG48PlxuPE5hdiAvPlxuPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTZcIj5cbjxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbjwvbWFpbj5cbjwvPlxuKVxufSJdLCJuYW1lcyI6WyJOYXYiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();