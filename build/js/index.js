/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_min__ = __webpack_require__(2);


// import Vivus from 'vivus';
 //https://github.com/im4aLL/svgPathAnimation

//анимация лого
var example_one = new __WEBPACK_IMPORTED_MODULE_1__svg_min__["a" /* default */]({ "elem" : "#svg-logo", "increaseBy" : 4, "timeout" : 5 });
example_one.animate(function (el) {
  $(`#svg-logo path`).eq(`${el.current - 1}`).css({fill:'white'});
});

/*
new Vivus('svg-logo', {duration: 200, file: './images/logo.tracy.svg'}, function () {
  console.log('yo');
});*/

//анимация текста
$('.tlt').textillate({initialDelay: 1000,});
setTimeout(function () {
  $(".after-tlt").css({opacity: 1});
}, 3800);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SvgAnimation;
/*https://github.com/im4aLL/svgPathAnimation @author: me@habibhadi.com*/
function SvgAnimation(a){this.svg=$(a.elem),this.increaseBy=void 0!==a.increaseBy?a.increaseBy:5,this.timeout=void 0!==a.timeout?a.timeout:1,this.reverse=void 0!==a.reverse?a.reverse:!1,this.currentPath=1,this.totalPath=0,this.init()}SvgAnimation.prototype.animate=function(a){"function"==typeof a?this.runAnimation(a):this.runAnimation()},SvgAnimation.prototype.init=function(){var a=this.reverse;this.svg.find("path").each(function(b,c){var e=$(c),f=c.getTotalLength();e.attr("stroke-dasharray",f+" "+f).attr("stroke-dashoffset",a===!0?-f:f)})},SvgAnimation.prototype.runAnimation=function(a){this.totalPath=this.svg.find("path").length;var b={currentPath:this.currentPath,totalPath:this.totalPath,pathElem:this.svg.find("path:eq("+(this.currentPath-1)+")")};this.pathAnimation(a,b)},SvgAnimation.prototype.pathAnimation=function(a,b){var c=this,d=b.pathElem,e=parseFloat(d.attr("stroke-dashoffset")),f=this.increaseBy,g=setInterval(function(){if(c.reverse===!0&&e>=0||c.reverse===!1&&0>=e){if(clearInterval(g),"function"==typeof a&&a.call(this,{obj:d,current:b.currentPath,total:c.totalPath}),b.currentPath++,b.currentPath<=c.totalPath){var h={currentPath:b.currentPath,pathElem:c.svg.find("path:eq("+(b.currentPath-1)+")")};c.pathAnimation(a,h)}}else c.reverse===!0?(e+=f,d.attr("stroke-dashoffset",e>=0?0:e)):(e-=f,d.attr("stroke-dashoffset",0>=e?0:e))},this.timeout)};

/***/ })
/******/ ]);