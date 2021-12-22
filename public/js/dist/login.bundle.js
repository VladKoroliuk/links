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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    api: {\r\n        link: 'http://localhost:3000/api'\r\n    }\r\n});\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./src/controller/User.js":
/*!********************************!*\
  !*** ./src/controller/User.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_User_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/User.js */ \"./src/model/User.js\");\n/* harmony import */ var _view_Form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/Form.js */ \"./src/view/Form.js\");\n\r\n\r\n\r\n\r\nclass User{\r\n\r\n    constructor(form, inputs, errorDisplay = null, infoDisplay = null, loaderWraper = null){\r\n        this.inputs = inputs\r\n        this.errorDisplay = errorDisplay\r\n        this.view = new _view_Form_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](errorDisplay, infoDisplay, loaderWraper)\r\n        this.form = form\r\n    }\r\n\r\n    async login(){\r\n        const email = this.inputs[0].value\r\n        const password = this.inputs[1].value\r\n        \r\n        if(password.length < 3 || password.length > 32){\r\n            return this.view.showError(\"Недопустимая длинна пароля!\")\r\n        }\r\n\r\n        await _model_User_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].login(this.view, {email, password})\r\n        \r\n    }\r\n\r\n    signup(){\r\n        const email = this.inputs[0].value\r\n        const name = this.inputs[1].value\r\n        const password = this.inputs[2].value\r\n        const passwordRepeat = this.inputs[3].value\r\n\r\n        if(password.length < 3 || password.length > 32){\r\n            return this.view.showError(\"Недопустимая длинна пароля!\")\r\n        }\r\n        if(passwordRepeat != password){\r\n            return this.view.showError(\"Пароли должны совпадать!\")\r\n        }\r\n\r\n        _model_User_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].signup(this.form, this.view, {email, password, name})\r\n        \r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n//# sourceURL=webpack:///./src/controller/User.js?");

/***/ }),

/***/ "./src/model/User.js":
/*!***************************!*\
  !*** ./src/model/User.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server.js */ \"./src/server.js\");\n\r\n\r\n\r\nclass User{\r\n\r\n    constructor(){\r\n        this.api = new _server_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n    }\r\n\r\n    async login(view, data){\r\n  \r\n        const response = await this.api.request('/user/login', \"POST\", data)\r\n            \r\n        if(!await view.errorProcessing(response)){\r\n            window.location.href = \"/app\"\r\n        }\r\n\r\n    }\r\n    async signup(form, view, data){\r\n        try{\r\n            view.blockButton(form.querySelector('button[type=\"submit\"]'))\r\n            view.addPreloader()\r\n\r\n            const response = await this.api.request('/user/registration', \"POST\", data)\r\n\r\n            if(response.message){\r\n                view.showError(response.message)\r\n                return view.removePreloader()\r\n            }\r\n    \r\n            view.showError('')\r\n            view.removePreloader()\r\n            view.showInfo(`На указанную почту было отправлено письмо для подтверждения аккаунта!`)\r\n        }catch(e){\r\n            console.log(e)\r\n        }\r\n    }\r\n\r\n    async logout(){\r\n        await this.api.request('/user/logout', \"POST\")\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new User);\n\n//# sourceURL=webpack:///./src/model/User.js?");

/***/ }),

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.js */ \"./app.js\");\n/* harmony import */ var _controller_User_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/User.js */ \"./src/controller/User.js\");\n\r\n\r\n\r\n_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].events = function(){\r\n    const form = document.getElementById('login')\r\n    const inputs = form.getElementsByTagName('input')\r\n    const errorDisplay = document.getElementById('error')\r\n    const infoDisplay = document.getElementById('info')\r\n    const user = new _controller_User_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](form, inputs, errorDisplay, infoDisplay)\r\n\r\n\r\n    form.onsubmit = async (e) => {\r\n        e.preventDefault()\r\n        await user.login()\r\n    }\r\n}\r\n\r\n\r\n_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init()\n\n//# sourceURL=webpack:///./src/pages/login.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n\r\n\r\nclass Server{\r\n\r\n    #apiLink = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.link\r\n    #mode = 'same-origin'\r\n\r\n    async request( url, method, data = {} ){\r\n        const response = await fetch(this.#apiLink+url, {\r\n\r\n            method,\r\n            mode: this.#mode,\r\n            headers: new Headers({\r\n              Accept: 'application/json',\r\n              'Content-Type': 'application/json'\r\n            }),\r\n            body: JSON.stringify(data)\r\n\r\n          })\r\n\r\n\r\n          // return await response.json()\r\n        \r\n          console.log(response)\r\n\r\n          return response\r\n            \r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Server);\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/view/Base.js":
/*!**************************!*\
  !*** ./src/view/Base.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass BaseView{\r\n    clear(node){\r\n        node.innerHTML = ''\r\n    }\r\n    \r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseView);\n\n//# sourceURL=webpack:///./src/view/Base.js?");

/***/ }),

/***/ "./src/view/Form.js":
/*!**************************!*\
  !*** ./src/view/Form.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.js */ \"./src/view/Base.js\");\n\r\n\r\nclass LoginView extends _Base_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    constructor(displayError, displayInfo, loaderWraper){\r\n        super()\r\n        this.displayError = displayError\r\n        this.displayInfo = displayInfo\r\n        this.loaderWraper = loaderWraper\r\n    }\r\n    showError(error){\r\n        this.displayError.innerHTML = error\r\n    }\r\n    showInfo(info){\r\n        this.displayInfo.innerHTML = info\r\n    }\r\n    blockButton(button){\r\n        button.setAttribute(\"disabled\", \"disabled\")\r\n    }\r\n    unlockButton(button){\r\n        button.removeAttribute(\"disabled\");\r\n    }\r\n    addPreloader(){\r\n        let wrap = document.createElement('div');\r\n        wrap.classList.add('loaderWrap');\r\n\r\n        let loader = document.createElement('div');\r\n        loader.classList.add('loader');\r\n        \r\n        wrap.append(loader)\r\n\r\n        this.loaderWraper.append(wrap)\r\n    }\r\n    removePreloader(){\r\n        this.clear(this.loaderWraper)\r\n    }\r\n    async errorProcessing(response){\r\n\r\n        const statusCodeKind = String(response.status).charAt(0)\r\n        if(statusCodeKind == \"5\" || statusCodeKind == \"4\"){\r\n            const json = await response.json()\r\n            this.showError(json.message)\r\n            return true\r\n        }\r\n\r\n        return false\r\n\r\n\r\n    }\r\n    \r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginView);\n\n//# sourceURL=webpack:///./src/view/Form.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/login.js");
/******/ 	
/******/ })()
;