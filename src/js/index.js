import '../styles/main.scss';
// global.$ = require("jquery");
import SvgAnimation from './svg.min';

// import Vivus from 'vivus'; //https://www.npmjs.com/package/vivus
/*
new Vivus('svg-logo', {duration: 200}, function () {
  console.log('yo');
});*/

var example_one = new SvgAnimation({ "elem" : "#svg-logo", "increaseBy" : 4, "timeout" : 5 });
example_one.animate(function (el) {
  $("#svg-logo path").eq(el.current - 1).css({fill: "white"});
});

$(".tlt").textillate({
  initialDelay: 1000,
  in: {
    effect: 'fadeIn',
  },
  callback: function () {
    $(".after-tlt").css({opacity: 1});
  }
});



