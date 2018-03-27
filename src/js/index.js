import '../styles/main.scss';
// import Vivus from 'vivus';
import SvgAnimation from './svg.min';

//-
var example_one = new SvgAnimation({ "elem" : "#svg-logo", "increaseBy" : 4, "timeout" : 5 });
example_one.animate(function (el) {
  // console.log(el.current);
  $(`#svg-logo path`).eq(`${el.current - 1}`).css({fill:'white'});
  // console.log($(`#svg-logo path:eq(${el.current + 1})`));
});
// console.log(example_one);
/*
new Vivus('svg-logo', {duration: 200, file: './images/logo.tracy.svg'}, function () {
  console.log('yo');
});*/
