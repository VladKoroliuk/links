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

/***/ "./src/controller/Link.js":
/*!********************************!*\
  !*** ./src/controller/Link.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_Link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Link.js */ \"./src/model/Link.js\");\n/* harmony import */ var _view_Base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/Base.js */ \"./src/view/Base.js\");\n\r\n\r\n\r\n\r\nclass Link{\r\n    constructor(){\r\n        this.input = document.getElementById('add-link-input')\r\n        this.view = new _view_Base_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n    }\r\n    async create(){\r\n        const url = this.input.value\r\n\r\n        await _model_Link_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(url)\r\n\r\n\r\n        this.view.clearInput(this.input)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);\n\n//# sourceURL=webpack:///./src/controller/Link.js?");

/***/ }),

/***/ "./src/includes/navigation.js":
/*!************************************!*\
  !*** ./src/includes/navigation.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    init(){\r\n\r\n        const path = window.location.pathname\r\n\r\n        const category = path.split('/')[2]\r\n\r\n        const items = document.getElementsByClassName('header-section')\r\n\r\n        switch (category) {\r\n            case '':\r\n                items[1].classList.add('header-section__active')\r\n                break;\r\n            case 'list':\r\n                items[2].classList.add('header-section__active')\r\n                break;\r\n            case 'statistics':\r\n                items[0].classList.add('header-section__active')\r\n                break;\r\n            default:\r\n                break;\r\n        }\r\n\r\n\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/includes/navigation.js?");

/***/ }),

/***/ "./src/model/Link.js":
/*!***************************!*\
  !*** ./src/model/Link.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server.js */ \"./src/server.js\");\n\r\n\r\nconst server = new _server_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n\r\nclass Link{\r\n    async create(url, view = {}){\r\n        const response = await server.request('/link', \"POST\", {url})\r\n\r\n        if(response.status == 401){\r\n            window.location.href = \"/app/login\"\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Link);\n\n//# sourceURL=webpack:///./src/model/Link.js?");

/***/ }),

/***/ "./src/model/User.js":
/*!***************************!*\
  !*** ./src/model/User.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server.js */ \"./src/server.js\");\n\r\n\r\n\r\nclass User{\r\n\r\n    constructor(){\r\n        this.api = new _server_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n    }\r\n\r\n    async login(view, data){\r\n  \r\n        const response = await this.api.request('/user/login', \"POST\", data)\r\n            \r\n        if(!await view.errorProcessing(response)){\r\n            window.location.href = \"/app\"\r\n        }\r\n\r\n    }\r\n    async signup(form, view, data){\r\n        try{\r\n            view.blockButton(form.querySelector('button[type=\"submit\"]'))\r\n            view.addPreloader()\r\n\r\n            const response = await this.api.request('/user/registration', \"POST\", data)\r\n\r\n            view.showError('')\r\n            view.removePreloader()\r\n            if(!await view.errorProcessing(response)){\r\n                view.showInfo(`На указанную почту было отправлено письмо для подтверждения аккаунта!`)\r\n            }\r\n           \r\n        }catch(e){\r\n            console.log(e)\r\n        }\r\n    }\r\n\r\n    async logout(){\r\n        await this.api.request('/user/logout', \"POST\")\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new User);\n\n//# sourceURL=webpack:///./src/model/User.js?");

/***/ }),

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.js */ \"./app.js\");\n/* harmony import */ var _controller_Link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/Link.js */ \"./src/controller/Link.js\");\n/* harmony import */ var _includes_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../includes/navigation.js */ \"./src/includes/navigation.js\");\n\r\n\r\n\r\n_includes_navigation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init()\r\n\r\n_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].events = function(){\r\n    \r\n    const form = document.getElementById('add-link')\r\n    const link = new _controller_Link_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n\r\n    form.onsubmit = async (e) => {\r\n        e.preventDefault()\r\n        await link.create()\r\n    }\r\n\r\n\r\n}\r\n\r\n_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init()\n\n//# sourceURL=webpack:///./src/pages/main.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n\r\n\r\nclass Server{\r\n\r\n    #apiLink = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.link\r\n    #mode = 'same-origin'\r\n\r\n    async request( url, method, data = {} ){\r\n        const response = await fetch(this.#apiLink+url, {\r\n\r\n            method,\r\n            mode: this.#mode,\r\n            headers: new Headers({\r\n              Accept: 'application/json',\r\n              'Content-Type': 'application/json'\r\n            }),\r\n            body: JSON.stringify(data)\r\n\r\n          })\r\n        \r\n          console.log(response)\r\n\r\n          return response\r\n            \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Server);\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/view/Base.js":
/*!**************************!*\
  !*** ./src/view/Base.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass BaseView{\r\n    clear(node){\r\n        node.innerHTML = ''\r\n    }\r\n    clearInput(input){\r\n        input.value = ''\r\n    }\r\n    \r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseView);\n\n//# sourceURL=webpack:///./src/view/Base.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/main.js");
/******/ 	
/******/ })()
;