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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeHome\": () => (/* binding */ makeHome)\n/* harmony export */ });\n/* harmony import */ var _photo1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo1.jpg */ \"./src/photo1.jpg\");\n/* harmony import */ var _photo2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo2.jpeg */ \"./src/photo2.jpeg\");\n\n\n\nfunction makeHome (){\n    const content = document.createElement('div');\n    content.id = 'content'\n\n    const header = document.createElement('header');\n        const span0 = document.createElement('span')\n        const div0 = document.createElement('div')\n        const span1 = document.createElement('span')\n        const span2 = document.createElement('span')\n        const span3 = document.createElement('span')\n\n        span0.innerHTML = 'Home'\n        span1.innerHTML = \"Menu\"\n        span2.innerHTML = \"Galeria\"\n        span3.innerHTML = \"Contacto\"\n\n        header.append(span0)\n        div0.append(span1)\n        div0.append(span2)\n        div0.append(span3)\n        header.append(div0)\n    \n    const photo1 = document.createElement('div');\n        const img1 = document.createElement('img')\n        const span4 = document.createElement('span')  \n        const div1 = document.createElement('div')\n        const span5 = document.createElement('span')\n\n        img1.id = 'img1'\n        img1.src = _photo1_jpg__WEBPACK_IMPORTED_MODULE_0__\n        span4.innerHTML = '<dfn>\"Cualquiera puede cocinar\"</dfn>'\n        span5.innerHTML = 'Gaston Acurio.'\n\n        photo1.classList.add('photo1')\n        photo1.append(img1)\n        photo1.append(span4)\n        div1.append(span5)\n        photo1.append(div1)\n\n    const photo2 = document.createElement('div');\n        const img2 = document.createElement('img')\n        const span6 = document.createElement('span');\n        const div2  = document.createElement('div')\n        const span7 = document.createElement('span')\n        span7.classList.add('span7')\n\n        img2.id = 'img2'\n        img2.src = _photo2_jpeg__WEBPACK_IMPORTED_MODULE_1__\n        span6.innerHTML = '<dfn>\"De los mejores restaurantes que he visitado\"</dfn>'\n        span7.innerHTML = 'Anita de las alturas.'\n\n        photo2.classList.add('photo2')\n        photo2.append(img2)\n        photo2.append(span6)\n        div2.append(span7)\n        photo2.append(div2)\n\n    const footer = document.createElement('footer');\n        const span8 = document.createElement('span');\n        \n        span8.innerHTML = '<a href=\"https://github.com/Diegoo11\">Restaurants Page by Diegoo11</a>'\n\n        footer.append(span8)\n\n    content.append(header)  \n    content.append(photo1)  \n    content.append(photo2)\n    content.append(footer)\n\n    return content\n}\n\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _shop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.js */ \"./src/shop.js\");\n\n\n    \ndocument.body.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.makeHome)())\n\nconsole.log('Hola Diego xcd')\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/shop.js":
/*!*********************!*\
  !*** ./src/shop.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeShop\": () => (/* binding */ makeShop)\n/* harmony export */ });\n/* harmony import */ var _plate1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plate1.jpg */ \"./src/plate1.jpg\");\n/* harmony import */ var _plate2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plate2.jpg */ \"./src/plate2.jpg\");\n/* harmony import */ var _plate3_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plate3.gif */ \"./src/plate3.gif\");\n/* harmony import */ var _plate4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plate4.jpg */ \"./src/plate4.jpg\");\n/* harmony import */ var _plate5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plate5.jpg */ \"./src/plate5.jpg\");\n/* harmony import */ var _plate6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plate6.jpg */ \"./src/plate6.jpg\");\n/* harmony import */ var _plate7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plate7.jpg */ \"./src/plate7.jpg\");\n/* harmony import */ var _plate8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plate8.jpg */ \"./src/plate8.jpg\");\n\n\n\n\n\n\n\n\n\n\nfunction makeShop (){\n    const content = document.createElement('div');\n    content.id = 'content'\n\n    const header = document.createElement('header');\n        const span0 = document.createElement('span')\n        const div0 = document.createElement('div')\n        const span1 = document.createElement('span')\n        const span2 = document.createElement('span')\n        const span3 = document.createElement('span')\n\n        span0.innerHTML = 'Home'\n        span1.innerHTML = \"Menu\"\n        span2.innerHTML = \"Galeria\"\n        span3.innerHTML = \"Contacto\"\n\n        header.append(span0)\n        div0.append(span1)\n        div0.append(span2)\n        div0.append(span3)\n        header.append(div0)\n\n    const products = document.createElement('div')\n    products.classList.add('products')\n        const product1 = document.createElement('div')\n        product1.classList.add('product')\n        const btns1 = document.createElement('div')\n        btns1.classList.add('btns')\n            const plato1 = document.createElement('img')\n            plato1.src = _plate1_jpg__WEBPACK_IMPORTED_MODULE_0__\n            const buy1  = document.createElement('button')\n            buy1.classList.add('buy')\n            const info1 = document.createElement('button')\n            info1.classList.add('info')\n            buy1.innerHTML = 'Comprar'\n            info1.innerHTML = 'Ver mas'\n\n        const product2 = document.createElement('div')\n        product2.classList.add('product')\n        const btns2 = document.createElement('div')\n        btns2.classList.add('btns')\n            const plato2 = document.createElement('img')\n            plato2.src = _plate2_jpg__WEBPACK_IMPORTED_MODULE_1__\n            const buy2  = document.createElement('button')\n            buy2.classList.add('buy')\n            const info2 = document.createElement('button')\n            info2.classList.add('info')\n            buy2.innerHTML = 'Comprar'\n            info2.innerHTML = 'Ver mas'\n\n        const product3 = document.createElement('div')\n        product3.classList.add('product')\n        const btns3 = document.createElement('div')\n        btns3.classList.add('btns')\n            const plato3 = document.createElement('img')\n            plato3.src = _plate3_gif__WEBPACK_IMPORTED_MODULE_2__\n            const buy3  = document.createElement('button')\n            buy3.classList.add('buy')\n            const info3 = document.createElement('button')\n            info3.classList.add('info')\n            buy3.innerHTML = 'Comprar'\n            info3.innerHTML = 'Ver mas'\n\n        const product4 = document.createElement('div')\n        product4.classList.add('product')\n        const btns4 = document.createElement('div')\n        btns4.classList.add('btns')\n            const plato4 = document.createElement('img')\n            plato4.src = _plate4_jpg__WEBPACK_IMPORTED_MODULE_3__\n            const buy4  = document.createElement('button')\n            buy4.classList.add('buy')\n            const info4 = document.createElement('button')\n            info4.classList.add('info')\n            buy4.innerHTML = 'Comprar'\n            info4.innerHTML = 'Ver mas'\n\n        const product5 = document.createElement('div')\n        product5.classList.add('product')\n        const btns5 = document.createElement('div')\n        btns5.classList.add('btns')\n            const plato5 = document.createElement('img')\n            plato5.src = _plate5_jpg__WEBPACK_IMPORTED_MODULE_4__\n            const buy5  = document.createElement('button')\n            buy5.classList.add('buy')\n            const info5 = document.createElement('button')\n            info5.classList.add('info')\n            buy5.innerHTML = 'Comprar'\n            info5.innerHTML = 'Ver mas'\n\n        const product6 = document.createElement('div')\n        product6.classList.add('product')\n        const btns6 = document.createElement('div')\n        btns6.classList.add('btns')\n            const plato6 = document.createElement('img')\n            plato6.src = _plate6_jpg__WEBPACK_IMPORTED_MODULE_5__\n            const buy6  = document.createElement('button')\n            buy6.classList.add('buy')\n            const info6 = document.createElement('button')\n            info6.classList.add('info')\n            buy6.innerHTML = 'Comprar'\n            info6.innerHTML = 'Ver mas'\n\n        const product7 = document.createElement('div')\n        product7.classList.add('product')\n        const btns7 = document.createElement('div')\n        btns7.classList.add('btns')\n            const plato7 = document.createElement('img')\n            plato7.src = _plate7_jpg__WEBPACK_IMPORTED_MODULE_6__\n            const buy7  = document.createElement('button')\n            buy7.classList.add('buy')\n            const info7 = document.createElement('button')\n            info7.classList.add('info')\n            buy7.innerHTML = 'Comprar'\n            info7.innerHTML = 'Ver mas'\n\n        const product8 = document.createElement('div')\n        product8.classList.add('product')\n        const btns8 = document.createElement('div')\n        btns8.classList.add('btns')\n            const plato8 = document.createElement('img')\n            plato8.src = _plate8_jpg__WEBPACK_IMPORTED_MODULE_7__\n            const buy8  = document.createElement('button')\n            buy8.classList.add('buy')\n            const info8 = document.createElement('button')\n            info8.classList.add('info')\n            buy8.innerHTML = 'Comprar'\n            info8.innerHTML = 'Ver mas'\n\n        btns1.append(plato1)\n        btns1.append(buy1)\n        btns1.append(info1)\n        product1.append(btns1)\n\n        btns2.append(plato2)\n        btns2.append(buy2)\n        btns2.append(info2)\n        product2.append(btns2)\n        \n        btns3.append(plato3)\n        btns3.append(buy3)\n        btns3.append(info3)\n        product3.append(btns3)\n\n        btns4.append(plato4)\n        btns4.append(buy4)\n        btns4.append(info4)\n        product4.append(btns4)\n\n        btns5.append(plato5)\n        btns5.append(buy5)\n        btns5.append(info5)\n        product5.append(btns5)\n\n        btns6.append(plato6)\n        btns6.append(buy6)\n        btns6.append(info6)\n        product6.append(btns6)\n\n        btns7.append(plato7)\n        btns7.append(buy7)\n        btns7.append(info7)\n        product7.append(btns7)\n\n        btns8.append(plato8)\n        btns8.append(buy8)\n        btns8.append(info8)\n        product8.append(btns8)\n\n        products.append(product1)\n        products.append(product2)\n        products.append(product3)\n        products.append(product4)\n        products.append(product5)\n        products.append(product6)\n        products.append(product7)\n        products.append(product8)\n\n    const footer = document.createElement('footer');\n        const span8 = document.createElement('span');\n\n        span8.innerHTML = '<a href=\"https://github.com/Diegoo11\">Restaurants Page by Diegoo11</a>'\n        footer.append(span8)   \n    \n    content.append(header)  \n    content.append(products)  \n    content.append(footer)\n    \n    return content\n}    \n\n\n//# sourceURL=webpack://restaurant_page/./src/shop.js?");

/***/ }),

/***/ "./src/photo1.jpg":
/*!************************!*\
  !*** ./src/photo1.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b3bb8302fa0104bbc5df.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/photo1.jpg?");

/***/ }),

/***/ "./src/photo2.jpeg":
/*!*************************!*\
  !*** ./src/photo2.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dbd1507a60700e4a0bb7.jpeg\";\n\n//# sourceURL=webpack://restaurant_page/./src/photo2.jpeg?");

/***/ }),

/***/ "./src/plate1.jpg":
/*!************************!*\
  !*** ./src/plate1.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ce04d27a277c4af0a8e.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/plate1.jpg?");

/***/ }),

/***/ "./src/plate2.jpg":
/*!************************!*\
  !*** ./src/plate2.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"98d813dd5af06a930889.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/plate2.jpg?");

/***/ }),

/***/ "./src/plate3.gif":
/*!************************!*\
  !*** ./src/plate3.gif ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"17ce6e43c0730d1b4c4f.gif\";\n\n//# sourceURL=webpack://restaurant_page/./src/plate3.gif?");

/***/ }),

/***/ "./src/plate4.jpg":
/*!************************!*\
  !*** ./src/plate4.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a1ed1a2e10ca5248373.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/plate4.jpg?");

/***/ }),

/***/ "./src/plate5.jpg":
/*!************************!*\
  !*** ./src/plate5.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"60f314303b935bf5d9b2.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/plate5.jpg?");

/***/ }),

/***/ "./src/plate6.jpg":
/*!************************!*\
  !*** ./src/plate6.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3377b3daf4aa0730d838.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/plate6.jpg?");

/***/ }),

/***/ "./src/plate7.jpg":
/*!************************!*\
  !*** ./src/plate7.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"00ebedf7f7f41fc90c41.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/plate7.jpg?");

/***/ }),

/***/ "./src/plate8.jpg":
/*!************************!*\
  !*** ./src/plate8.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"29b7f7382468a26d475c.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/plate8.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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