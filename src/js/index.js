import '../styles/main.scss';

// import Vivus from 'vivus';
import SvgAnimation from './svg.min'; //https://github.com/im4aLL/svgPathAnimation

//анимация лого
var example_one = new SvgAnimation({ "elem" : "#svg-logo", "increaseBy" : 4, "timeout" : 5 });
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


