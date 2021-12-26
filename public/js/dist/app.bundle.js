/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_model_User_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/model/User.js */ \"./src/model/User.js\");\n\r\n\r\nconst app = {\r\n    init(){\r\n        this.main()\r\n        this.events()\r\n    },\r\n    main(){},\r\n    events(){\r\n\r\n        const logoutButton = document.getElementById('logout')\r\n\r\n        if(logoutButton){\r\n            logoutButton.onclick = async () => {\r\n                await _src_model_User_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].logout()\r\n    \r\n                window.location.href = \"/app\"\r\n            }\r\n        }\r\n\r\n        \r\n\r\n    },\r\n}\r\napp.init()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    api: {\r\n        // link: 'http://localhost:3000/api',\r\n        link: \"https://73ea-195-46-35-194.ngrok.io/api\"\r\n    }\r\n});\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./src/model/User.js":
/*!***************************!*\
  !*** ./src/model/User.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server.js */ \"./src/server.js\");\n\r\n\r\n\r\nclass User{\r\n\r\n    constructor(){\r\n        this.api = new _server_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n    }\r\n\r\n    async login(view, data){\r\n  \r\n        const response = await this.api.request('/user/login', \"POST\", data)\r\n            \r\n        if(!await view.errorProcessing(response)){\r\n            window.location.href = \"/app\"\r\n        }\r\n\r\n    }\r\n    async signup(form, view, data){\r\n        try{\r\n            view.blockButton(form.querySelector('button[type=\"submit\"]'))\r\n            view.addPreloader()\r\n\r\n            const response = await this.api.request('/user/registration', \"POST\", data)\r\n\r\n            view.showError('')\r\n            view.removePreloader()\r\n            if(!await view.errorProcessing(response)){\r\n                view.showInfo(`На указанную почту было отправлено письмо для подтверждения аккаунта!`)\r\n            }\r\n           \r\n        }catch(e){\r\n            console.log(e)\r\n        }\r\n    }\r\n\r\n    async logout(){\r\n        await this.api.request('/user/logout', \"POST\")\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new User);\n\n//# sourceURL=webpack:///./src/model/User.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n\r\n\r\nclass Server{\r\n\r\n    #apiLink = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.link\r\n    #mode = 'same-origin'\r\n\r\n    async request( url, method, data = {} ){\r\n        const response = await fetch(this.#apiLink+url, {\r\n\r\n            method,\r\n            mode: this.#mode,\r\n            headers: new Headers({\r\n              Accept: 'application/json',\r\n              'Content-Type': 'application/json'\r\n            }),\r\n            body: JSON.stringify(data)\r\n\r\n          })\r\n        \r\n          console.log(response)\r\n\r\n          return response\r\n            \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Server);\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;