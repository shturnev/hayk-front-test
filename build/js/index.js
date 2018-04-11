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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _svg = __webpack_require__(11);

var _svg2 = _interopRequireDefault(_svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Vivus from 'vivus'; //https://www.npmjs.com/package/vivus
/*
new Vivus('svg-logo', {duration: 200}, function () {
  console.log('yo');
});*/

var example_one = new _svg2.default({ "elem": "#svg-logo", "increaseBy": 4, "timeout": 5 });
// global.$ = require("jquery");

example_one.animate(function (el) {
  $("#svg-logo path").eq(el.current - 1).css({ fill: "white" });
});

$(".tlt").textillate({
  initialDelay: 1000,
  in: {
    effect: 'fadeIn'
  },
  callback: function callback() {
    $(".after-tlt").css({ opacity: 1 });
  }
});

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SvgAnimation;
/*https://github.com/im4aLL/svgPathAnimation @author: me@habibhadi.com*/
function SvgAnimation(a) {
  this.svg = $(a.elem), this.increaseBy = void 0 !== a.increaseBy ? a.increaseBy : 5, this.timeout = void 0 !== a.timeout ? a.timeout : 1, this.reverse = void 0 !== a.reverse ? a.reverse : !1, this.currentPath = 1, this.totalPath = 0, this.init();
}SvgAnimation.prototype.animate = function (a) {
  "function" == typeof a ? this.runAnimation(a) : this.runAnimation();
}, SvgAnimation.prototype.init = function () {
  var a = this.reverse;this.svg.find("path").each(function (b, c) {
    var e = $(c),
        f = c.getTotalLength();e.attr("stroke-dasharray", f + " " + f).attr("stroke-dashoffset", a === !0 ? -f : f);
  });
}, SvgAnimation.prototype.runAnimation = function (a) {
  this.totalPath = this.svg.find("path").length;var b = { currentPath: this.currentPath, totalPath: this.totalPath, pathElem: this.svg.find("path:eq(" + (this.currentPath - 1) + ")") };this.pathAnimation(a, b);
}, SvgAnimation.prototype.pathAnimation = function (a, b) {
  var c = this,
      d = b.pathElem,
      e = parseFloat(d.attr("stroke-dashoffset")),
      f = this.increaseBy,
      g = setInterval(function () {
    if (c.reverse === !0 && e >= 0 || c.reverse === !1 && 0 >= e) {
      if (clearInterval(g), "function" == typeof a && a.call(this, { obj: d, current: b.currentPath, total: c.totalPath }), b.currentPath++, b.currentPath <= c.totalPath) {
        var h = { currentPath: b.currentPath, pathElem: c.svg.find("path:eq(" + (b.currentPath - 1) + ")") };c.pathAnimation(a, h);
      }
    } else c.reverse === !0 ? (e += f, d.attr("stroke-dashoffset", e >= 0 ? 0 : e)) : (e -= f, d.attr("stroke-dashoffset", 0 >= e ? 0 : e));
  }, this.timeout);
};

/***/ })

/******/ });
//# sourceMappingURL=index.js.map