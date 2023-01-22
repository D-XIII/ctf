"use strict";
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
exports.id = "pages/api/vod";
exports.ids = ["pages/api/vod"];
exports.modules = {

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("typeorm");;

/***/ }),

/***/ "(api)/./orm/datasource.ts":
/*!***************************!*\
  !*** ./orm/datasource.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\n/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ \"typeorm\");\n/* harmony import */ var _ormconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ormconfig */ \"(api)/./orm/ormconfig.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([typeorm__WEBPACK_IMPORTED_MODULE_1__]);\ntypeorm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// import { vod } from './entities/vod.entity';\n\nclass Database {\n    constructor(){\n        try {\n            Database.createConnection();\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    static async createConnection() {\n        if (!Database.AppDataSource) {\n            Database.AppDataSource = new typeorm__WEBPACK_IMPORTED_MODULE_1__.DataSource(_ormconfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n            await Database.AppDataSource.initialize().then(()=>{\n                console.log(\"Driver Connected\");\n            // here you can start to work with your database\n            }).catch((error)=>console.log(error));\n        }\n        return Database.AppDataSource;\n    }\n}\n// to initialize initial connection with the database, register all entities\n// and \"synchronize\" database schema, call \"initialize()\" method of a newly created database\n// once in your application bootstrap\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Database);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9vcm0vZGF0YXNvdXJjZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUM4QjtBQUN4RCwrQ0FBK0M7QUFDWDtBQUVwQyxNQUFNRSxRQUFRO0lBR1osYUFBc0I7UUFDcEIsSUFBSTtZQUNGQSxRQUFRLENBQUNDLGdCQUFnQixFQUFFLENBQUM7UUFDOUIsRUFBRSxPQUFPQyxLQUFLLEVBQUU7WUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDSDtpQkFFb0JELGdCQUFnQixHQUFHO1FBQ3JDLElBQUksQ0FBQ0QsUUFBUSxDQUFDSyxhQUFhLEVBQUU7WUFDM0JMLFFBQVEsQ0FBQ0ssYUFBYSxHQUFHLElBQUlQLCtDQUFVLENBQW9CQyxrREFBUyxDQUFDLENBQUM7WUFDdEUsTUFBTUMsUUFBUSxDQUFDSyxhQUFhLENBQUNDLFVBQVUsRUFBRSxDQUN0Q0MsSUFBSSxDQUFDLElBQU07Z0JBQ1ZKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsZ0RBQWdEO1lBQ2xELENBQUMsQ0FBQyxDQUNESSxLQUFLLENBQUMsQ0FBQ04sS0FBSyxHQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsT0FBT0YsUUFBUSxDQUFDSyxhQUFhLENBQUM7SUFDaEM7Q0FDRDtBQUNELDRFQUE0RTtBQUM1RSw0RkFBNEY7QUFDNUYscUNBQXFDO0FBRXJDLGlFQUFlTCxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW50aW5lLW5leHQtdGVtcGxhdGUvLi9vcm0vZGF0YXNvdXJjZS50cz9jZWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlLCBEYXRhU291cmNlT3B0aW9ucyB9IGZyb20gJ3R5cGVvcm0nO1xuLy8gaW1wb3J0IHsgdm9kIH0gZnJvbSAnLi9lbnRpdGllcy92b2QuZW50aXR5JztcbmltcG9ydCBvcm1jb25maWcgZnJvbSAnLi9vcm1jb25maWcnO1xuXG5jbGFzcyBEYXRhYmFzZSB7XG4gIHByaXZhdGUgc3RhdGljIEFwcERhdGFTb3VyY2U6IERhdGFTb3VyY2U7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0cnkge1xuICAgICAgRGF0YWJhc2UuY3JlYXRlQ29ubmVjdGlvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGVDb25uZWN0aW9uKCkge1xuICAgIGlmICghRGF0YWJhc2UuQXBwRGF0YVNvdXJjZSkge1xuICAgICAgRGF0YWJhc2UuQXBwRGF0YVNvdXJjZSA9IG5ldyBEYXRhU291cmNlKDxEYXRhU291cmNlT3B0aW9ucz5vcm1jb25maWcpO1xuICAgICAgYXdhaXQgRGF0YWJhc2UuQXBwRGF0YVNvdXJjZS5pbml0aWFsaXplKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdEcml2ZXIgQ29ubmVjdGVkJyk7XG4gICAgICAgICAgLy8gaGVyZSB5b3UgY2FuIHN0YXJ0IHRvIHdvcmsgd2l0aCB5b3VyIGRhdGFiYXNlXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfVxuICAgIHJldHVybiBEYXRhYmFzZS5BcHBEYXRhU291cmNlO1xuICB9XG59XG4vLyB0byBpbml0aWFsaXplIGluaXRpYWwgY29ubmVjdGlvbiB3aXRoIHRoZSBkYXRhYmFzZSwgcmVnaXN0ZXIgYWxsIGVudGl0aWVzXG4vLyBhbmQgXCJzeW5jaHJvbml6ZVwiIGRhdGFiYXNlIHNjaGVtYSwgY2FsbCBcImluaXRpYWxpemUoKVwiIG1ldGhvZCBvZiBhIG5ld2x5IGNyZWF0ZWQgZGF0YWJhc2Vcbi8vIG9uY2UgaW4geW91ciBhcHBsaWNhdGlvbiBib290c3RyYXBcblxuZXhwb3J0IGRlZmF1bHQgRGF0YWJhc2U7XG4iXSwibmFtZXMiOlsiRGF0YVNvdXJjZSIsIm9ybWNvbmZpZyIsIkRhdGFiYXNlIiwiY3JlYXRlQ29ubmVjdGlvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkFwcERhdGFTb3VyY2UiLCJpbml0aWFsaXplIiwidGhlbiIsImNhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./orm/datasource.ts\n");

/***/ }),

/***/ "(api)/./orm/ormconfig.ts":
/*!**************************!*\
  !*** ./orm/ormconfig.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ormconfig = {\n    type: \"postgres\",\n    host: \"localhost\",\n    port: 5432,\n    username: \"postgres\",\n    password: \"mypassword\",\n    database: \"postgres\",\n    logging: false\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ormconfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9vcm0vb3JtY29uZmlnLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUc7SUFDaEJDLElBQUksRUFBRSxVQUFVO0lBQ2hCQyxJQUFJLEVBQUUsV0FBVztJQUNqQkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsUUFBUSxFQUFFLFVBQVU7SUFDcEJDLFFBQVEsRUFBRSxZQUFZO0lBQ3RCQyxRQUFRLEVBQUUsVUFBVTtJQUNwQkMsT0FBTyxFQUFFLEtBQUs7Q0FDZjtBQUNELGlFQUFlUCxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW50aW5lLW5leHQtdGVtcGxhdGUvLi9vcm0vb3JtY29uZmlnLnRzPzVlZGMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3JtY29uZmlnID0ge1xuICB0eXBlOiAncG9zdGdyZXMnLFxuICBob3N0OiAnbG9jYWxob3N0JyxcbiAgcG9ydDogNTQzMixcbiAgdXNlcm5hbWU6ICdwb3N0Z3JlcycsXG4gIHBhc3N3b3JkOiAnbXlwYXNzd29yZCcsXG4gIGRhdGFiYXNlOiAncG9zdGdyZXMnLFxuICBsb2dnaW5nOiBmYWxzZSxcbn07XG5leHBvcnQgZGVmYXVsdCBvcm1jb25maWc7XG4iXSwibmFtZXMiOlsib3JtY29uZmlnIiwidHlwZSIsImhvc3QiLCJwb3J0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwibG9nZ2luZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./orm/ormconfig.ts\n");

/***/ }),

/***/ "(api)/./pages/api/vod.ts":
/*!**************************!*\
  !*** ./pages/api/vod.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _orm_datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../orm/datasource */ \"(api)/./orm/datasource.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_orm_datasource__WEBPACK_IMPORTED_MODULE_0__]);\n_orm_datasource__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// const data = require('../../squewe.json');\n\nasync function handler(req, res) {\n    // const vods = data.items.map((v: any) => {\n    //   const newvod = {\n    //     id: v.id.videoId,\n    //     title: v.snippet.title,\n    //     description: v.snippet.description,\n    //     thumbnail: v.snippet.thumbnails.high.url,\n    //     link: `https://www.youtube.com/watch?v=${v.id.videoId}`,\n    //     publishedAt: v.snippet.publishedAt,\n    //   };\n    //   return newvod;\n    // });\n    const ds = await _orm_datasource__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createConnection();\n    // const search = \"' UNION SELECT username, password, NULL, NULL, NULL, NULL FROM users --\";\n    let { search  } = req.query;\n    if (!search) {\n        search = \"\";\n    }\n    const query = `SELECT * FROM vod WHERE title LIKE '%${search}%' `;\n    console.log(query);\n    const vods = await ds.manager.query(query).catch((err)=>{\n        err.message;\n    });\n    return res.status(200).json(vods);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdm9kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNkNBQTZDO0FBQ0Q7QUFFN0IsZUFBZUMsT0FBTyxDQUFDQyxHQUFRLEVBQUVDLEdBQVEsRUFBRTtJQUN4RCw0Q0FBNEM7SUFDNUMscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsMENBQTBDO0lBQzFDLGdEQUFnRDtJQUNoRCwrREFBK0Q7SUFDL0QsMENBQTBDO0lBQzFDLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsTUFBTTtJQUVOLE1BQU1DLEVBQUUsR0FBRyxNQUFNSix3RUFBeUIsRUFBRTtJQUM1Qyw0RkFBNEY7SUFDNUYsSUFBSSxFQUFFTSxNQUFNLEdBQUUsR0FBR0osR0FBRyxDQUFDSyxLQUFLO0lBQzFCLElBQUksQ0FBQ0QsTUFBTSxFQUFFO1FBQ1hBLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0QsTUFBTUMsS0FBSyxHQUFHLENBQUMscUNBQXFDLEVBQUVELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDakVFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztJQUNuQixNQUFNRyxJQUFJLEdBQUcsTUFBTU4sRUFBRSxDQUFDTyxPQUFPLENBQUNKLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUNLLEtBQUssQ0FBQyxDQUFDQyxHQUFRLEdBQUs7UUFDN0RBLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDO0lBQ2QsQ0FBQyxDQUFDO0lBRUYsT0FBT1gsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ04sSUFBSSxDQUFDLENBQUM7QUFDcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hbnRpbmUtbmV4dC10ZW1wbGF0ZS8uL3BhZ2VzL2FwaS92b2QudHM/ODJjZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi4vLi4vc3F1ZXdlLmpzb24nKTtcbmltcG9ydCBEYXRhYmFzZSBmcm9tICcuLi8uLi9vcm0vZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBhbnksIHJlczogYW55KSB7XG4gIC8vIGNvbnN0IHZvZHMgPSBkYXRhLml0ZW1zLm1hcCgodjogYW55KSA9PiB7XG4gIC8vICAgY29uc3QgbmV3dm9kID0ge1xuICAvLyAgICAgaWQ6IHYuaWQudmlkZW9JZCxcbiAgLy8gICAgIHRpdGxlOiB2LnNuaXBwZXQudGl0bGUsXG4gIC8vICAgICBkZXNjcmlwdGlvbjogdi5zbmlwcGV0LmRlc2NyaXB0aW9uLFxuICAvLyAgICAgdGh1bWJuYWlsOiB2LnNuaXBwZXQudGh1bWJuYWlscy5oaWdoLnVybCxcbiAgLy8gICAgIGxpbms6IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSR7di5pZC52aWRlb0lkfWAsXG4gIC8vICAgICBwdWJsaXNoZWRBdDogdi5zbmlwcGV0LnB1Ymxpc2hlZEF0LFxuICAvLyAgIH07XG4gIC8vICAgcmV0dXJuIG5ld3ZvZDtcbiAgLy8gfSk7XG5cbiAgY29uc3QgZHMgPSBhd2FpdCBEYXRhYmFzZS5jcmVhdGVDb25uZWN0aW9uKCk7XG4gIC8vIGNvbnN0IHNlYXJjaCA9IFwiJyBVTklPTiBTRUxFQ1QgdXNlcm5hbWUsIHBhc3N3b3JkLCBOVUxMLCBOVUxMLCBOVUxMLCBOVUxMIEZST00gdXNlcnMgLS1cIjtcbiAgbGV0IHsgc2VhcmNoIH0gPSByZXEucXVlcnk7XG4gIGlmICghc2VhcmNoKSB7XG4gICAgc2VhcmNoID0gJyc7XG4gIH1cbiAgY29uc3QgcXVlcnkgPSBgU0VMRUNUICogRlJPTSB2b2QgV0hFUkUgdGl0bGUgTElLRSAnJSR7c2VhcmNofSUnIGA7XG4gIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgY29uc3Qgdm9kcyA9IGF3YWl0IGRzLm1hbmFnZXIucXVlcnkocXVlcnkpLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgIGVyci5tZXNzYWdlO1xuICB9KTtcblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odm9kcyk7XG59XG4iXSwibmFtZXMiOlsiRGF0YWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZHMiLCJjcmVhdGVDb25uZWN0aW9uIiwic2VhcmNoIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwidm9kcyIsIm1hbmFnZXIiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/vod.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/vod.ts"));
module.exports = __webpack_exports__;

})();