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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadContactPage = (()=> {\n  const run = () => {\n    const pageContent = document.querySelector('#content');\n    const contactContent = document.createElement('div');\n    contactContent.classList.add('contact-content');\n    const content = `\n      <h1>Contact Page</h1>\n      <h2>Email</h2>\n      <address>info@bangers.co.uk</address>\n      <h3>Telephone</h3>\n      <address>01724 647583920</address>\n      <h4>Banger's Head Office</h4>\n      <address>\n        124 Banger's Street,\n        Bangerton,\n        New Bangershire,\n        BNG 123\n      </address>\n    `;\n    contactContent.innerHTML = content;\n    pageContent.appendChild(contactContent);\n  }\n\n  return { run }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"].run();\n\nconst content = document.querySelector('#content');\nconst contact = document.querySelector('.contact');\nconst home = document.querySelector('.home');\nconst menu = document.querySelector('.menu');\ncontact.addEventListener('click', showContactPage);\nhome.addEventListener('click', showHomePage);\nmenu.addEventListener('click', showMenuPage);\n\nfunction clearContent() {\n  content.innerHTML = null;\n  content.className = '';\n}\n\nfunction showHomePage() {\n  clearContent();\n  _page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"].run();\n}\n\nfunction showContactPage() {\n  clearContent();\n  _contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].run();\n}\n\nfunction showMenuPage() {\n  clearContent();\n  _menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].run();\n}\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadMenuPage = (()=> {\n  const starterItems = [\n    { name: 'Calamari', desc: \"Squid rings in a lemon and rhubarb batter\", price: \"$3.99\", url: 'calamari.jpg'},\n    { name: 'Skittles', desc: \"Taste the rainbow\", price: \"$1.99\", url: 'skittles.jpg'},\n    { name: 'Banana', desc: \"Our best banana\", price: \"$23.99\", url: 'banana.jpg'},\n  ];\n\n  const mainItems = [\n    { name: 'Hamster', desc: \"Skittle stuffed Hamster\", price: \"99c\", url: 'hamster.jpg'},\n    { name: 'Lime Roasted Pork', desc: \"Roasted pork with a lime jus\", price: \"$19.99\", url: 'pork.jpg'},\n    { name: 'Dunno', desc: \"We're not sure what this is. Smells alright though\", price: \"$239.79\", url: 'dunno.jpg'},\n    { name: 'Vegetable Bake', desc: \"Bursting with delicious veggies and sunshine\", price: \"$6.99\", url: 'veg_cake.jpg'},\n  ];\n\n  const dessertItems = [\n    { name: 'Chocolate Shoelaces', desc: \"Shoelaces. Probably chocolate.\", price: \"$1.99\", url: 'shoelaces.png'},\n    { name: 'Broken Glass Cake', desc: \"We found these outside. Fairly certain it's not real glass\", price: \"$4.99\", url: 'glass.jpg'},\n  ]\n\n  const description = (item)=> {\n    return `\n            <div class=\"pic-box-inner\">\n              <div class=\"pic-box-front\">\n                <img src=\"images/${item.url}\">\n              </div>\n              <div class=\"pic-box-back\">\n                <p>${item.name}</p>\n                <p>${item.desc}</p>\n                <p>${item.price}</p>\n              </div>\n            </div>\n          `\n  }\n\n  function run() {\n    const pageContent = document.querySelector('#content');\n    const menuContent = document.createElement('div');\n    const starterHeader = document.createElement('h1');\n    starterHeader.classList.add('header');\n    starterHeader.innerHTML = \"Starters\";\n    menuContent.appendChild(starterHeader);\n\n    starterItems.forEach(item => {\n      const content = description(item);\n      const picBox = document.createElement('div')\n      picBox.classList.add('pic-box');\n      picBox.innerHTML = content;\n      menuContent.appendChild(picBox);\n    });\n\n    const mainHeader = document.createElement('h2');\n    mainHeader.classList.add('header');\n    mainHeader.innerHTML = \"Mains\";\n    menuContent.appendChild(mainHeader);\n\n    mainItems.forEach(item => {\n      const content = description(item);\n      const picBox = document.createElement('div')\n      picBox.classList.add('pic-box');\n      picBox.innerHTML = content;\n      menuContent.appendChild(picBox);\n    });\n\n    const dessertHeader = document.createElement('h3');\n    dessertHeader.classList.add('header');\n    dessertHeader.innerHTML = \"Desserts\";\n    menuContent.appendChild(dessertHeader);\n\n    dessertItems.forEach(item => {\n      const content = description(item);\n      const picBox = document.createElement('div')\n      picBox.classList.add('pic-box');\n      picBox.innerHTML = content;\n      menuContent.appendChild(picBox);\n    });\n\n    menuContent.classList.add('menu-content');\n    pageContent.appendChild(menuContent);\n  }\n\n  return { run }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageLoadModule = (()=> {\n  const run = () => {\n    const pageContent = document.querySelector('#content');\n    const header = document.createElement('h1');\n    const text = document.createElement('p');\n    header.innerText = \"Banger's\";\n    text.innerText = \"Banging Food for Banging People...no wait\";\n    pageContent.classList.add('home-content');\n    pageContent.appendChild(header);\n    pageContent.appendChild(text);\n  }\n  \n  return { run }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoadModule);\n\n//# sourceURL=webpack://restaurant/./src/page-load.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;