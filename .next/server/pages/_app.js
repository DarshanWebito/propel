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

/***/ "./src/Store/api/dashboard.js":
/*!************************************!*\
  !*** ./src/Store/api/dashboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dashboradApi\": () => (/* binding */ dashboradApi),\n/* harmony export */   \"useGetDashboradDetailMutation\": () => (/* binding */ useGetDashboradDetailMutation)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dashboradApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"dashboradApi\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: process.env.PUBLIC_API_URL,\n        prepareHeaders: (headers)=>{\n            headers.set(\"content-type\", \"application/json\");\n            return headers;\n        }\n    }),\n    endpoints: (builder)=>({\n            getDashboradDetail: builder.mutation({\n                query: (params)=>{\n                    return {\n                        url: \"company\",\n                        method: \"GET\",\n                        body: params\n                    };\n                }\n            })\n        })\n});\nconst { useGetDashboradDetailMutation  } = dashboradApi;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3RvcmUvYXBpL2Rhc2hib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlFO0FBRWxFLE1BQU1FLGVBQWVGLHVFQUFTQSxDQUFDO0lBQ3BDRyxhQUFhO0lBQ2JDLFdBQVdILDRFQUFjQSxDQUFDO1FBQ3hCSSxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7UUFDbkNDLGdCQUFnQixDQUFDQyxVQUFZO1lBQzNCQSxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCO1lBQzVCLE9BQU9EO1FBQ1Q7SUFDRjtJQUVBRSxXQUFXLENBQUNDLFVBQWE7WUFDdkJDLG9CQUFvQkQsUUFBUUUsUUFBUSxDQUFDO2dCQUNuQ0MsT0FBTyxDQUFDQyxTQUFXO29CQUNqQixPQUFPO3dCQUNMQyxLQUFLO3dCQUNMQyxRQUFRO3dCQUNSQyxNQUFNSDtvQkFDUjtnQkFDRjtZQUNGO1FBRUY7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFDSSw4QkFBNkIsRUFBQyxHQUFHbkIsYUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3BlbC8uL3NyYy9TdG9yZS9hcGkvZGFzaGJvYXJkLmpzPzVkY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7IFxuXG5leHBvcnQgY29uc3QgZGFzaGJvcmFkQXBpID0gY3JlYXRlQXBpKHtcbiAgcmVkdWNlclBhdGg6IFwiZGFzaGJvcmFkQXBpXCIsXG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoe1xuICAgIGJhc2VVcmw6IHByb2Nlc3MuZW52LlBVQkxJQ19BUElfVVJMLFxuICAgIHByZXBhcmVIZWFkZXJzOiAoaGVhZGVycykgPT4ge1xuICAgICAgaGVhZGVycy5zZXQoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfSxcbiAgfSksXG5cbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgICBnZXREYXNoYm9yYWREZXRhaWw6IGJ1aWxkZXIubXV0YXRpb24oe1xuICAgICAgcXVlcnk6IChwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmw6IFwiY29tcGFueVwiLFxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pLFxuXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCB7dXNlR2V0RGFzaGJvcmFkRGV0YWlsTXV0YXRpb259ID0gZGFzaGJvcmFkQXBpIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiZGFzaGJvcmFkQXBpIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19BUElfVVJMIiwicHJlcGFyZUhlYWRlcnMiLCJoZWFkZXJzIiwic2V0IiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsImdldERhc2hib3JhZERldGFpbCIsIm11dGF0aW9uIiwicXVlcnkiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwidXNlR2V0RGFzaGJvcmFkRGV0YWlsTXV0YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Store/api/dashboard.js\n");

/***/ }),

/***/ "./src/Store/store.js":
/*!****************************!*\
  !*** ./src/Store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/dashboard */ \"./src/Store/api/dashboard.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        [_api_dashboard__WEBPACK_IMPORTED_MODULE_1__.dashboradApi.reducerPath]: _api_dashboard__WEBPACK_IMPORTED_MODULE_1__.dashboradApi.reducer\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_api_dashboard__WEBPACK_IMPORTED_MODULE_1__.dashboradApi.middleware)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3RvcmUvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUNBO0FBRXhDLE1BQU1FLFFBQVFGLGdFQUFjQSxDQUFDO0lBQ2xDRyxTQUFTO1FBQ1AsQ0FBQ0Ysb0VBQXdCLENBQUMsRUFBRUEsZ0VBQW9CO0lBQ2xEO0lBQ0FJLFlBQVksQ0FBQ0MsdUJBQXlCQSx1QkFBdUJDLE1BQU0sQ0FBQ04sbUVBQXVCO0FBQzdGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9wZWwvLi9zcmMvU3RvcmUvc3RvcmUuanM/M2UzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ3VyZVN0b3JlfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXG5pbXBvcnQgeyBkYXNoYm9yYWRBcGkgfSBmcm9tIFwiLi9hcGkvZGFzaGJvYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIFtkYXNoYm9yYWRBcGkucmVkdWNlclBhdGhdOiBkYXNoYm9yYWRBcGkucmVkdWNlcixcbiAgfSxcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PiBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChkYXNoYm9yYWRBcGkubWlkZGxld2FyZSApLFxufSk7XG5cbiAgICJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImRhc2hib3JhZEFwaSIsInN0b3JlIiwicmVkdWNlciIsInJlZHVjZXJQYXRoIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Store/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Store/store */ \"./src/Store/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n            store: _Store_store__WEBPACK_IMPORTED_MODULE_1__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/Darshan/propel/propel/src/pages/_app.js\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/Darshan/propel/propel/src/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/Darshan/propel/propel/src/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/Darshan/propel/propel/src/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNSO0FBQ1c7QUFDVztBQUdwQyxTQUFTSyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQscUJBQ0UsOERBQUNOLHVEQUFjO2tCQUNiLDRFQUFDRSxpREFBUUE7WUFBQ0gsT0FBT0EsK0NBQUtBO3NCQUNwQiw0RUFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNKO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvcGVsLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ0AvU3RvcmUvc3RvcmUnXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvdmlkZXIsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsic3RvcmUiLCJSZWFjdCIsInVzZUVmZmVjdCIsIlByb3ZpZGVyIiwidXNlRGlzcGF0Y2giLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJGcmFnbWVudCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();