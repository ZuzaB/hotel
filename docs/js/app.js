// 'use strict';
$(function() {

  //współrzędne do mapy 49.720260, 19.071670
//nav events
var $nav = $('.menu'),
    $navHeight = $nav.height();
  $(window).scroll( function (){
    if ($(window).scrollTop() > $navHeight){
      $nav.addClass('menu--fixed');
    } else {
      $nav.removeClass('menu--fixed');
    }
  });

var $lang = $( '.menu-lang' ),
    $langItem = $lang.find( '.menu-lang__item');

    $lang.on('click', function (){
      $langItem.toggle();
    });

var $menu = $( '.menu-nav'),
    $menuIco = $( '.icon-menu-1'),
    $menuClouse = $('.icon-cancel');
  //media?
    $menuIco.on('click', function(){
      $menu.show();
    });
    $menuClouse.on('click', function(){
      $menu.hide();
    });

//top slider
var $topSlider = $('.top-slider'),
    $topImgs = $topSlider.find('.top-img'),
    listLen = $topImgs.length,
    changeImgTime = 5000,
    transitionSpeed = 2000,
    index = 0,

  changeSlides = function() {
    $topImgs.eq(index).fadeOut(transitionSpeed, function() {
      index += 1;
      if (index === listLen) {
        index = 0;
      }
      $topImgs.eq(index).fadeIn(transitionSpeed);
    });
  };
$topImgs.not(':first').hide();
setInterval(changeSlides, changeImgTime);

//slider with pause
var $next = $('.section-slider__controlls--right'),
    $prev = $('.section-slider__controlls--left'),
    $stop = $('.section-slider__controlls--stop'),
    $imgs = $('.section-slider__img');

console.log($next, $prev, $stop, $imgs);
//to top scroll
var $scrollTopBtn = $('.go-top');
  $scrollTopBtn.on('click',function(){
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
});
