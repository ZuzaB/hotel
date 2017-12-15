'use strict';
$(function() {

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
setInterval(changeSlides, changeImgTime);

//slider in offer adress__reception
var $nextArrow = $('.slider__arrow--right'),
    $prevArrow = $('.slider__arrow--left');

//slider with pause in Vanilla JS
var next = document.querySelectorAll('.section-slider__controlls--right'),
    prev = document.querySelectorAll('.section-slider__controlls--left'),
    stop = document.querySelectorAll('.section-slider__controlls--stop'),
    imgs = document.querySelectorAll('.section-slider__img');//usunąć







//go top
var $scrollTopBtn = $('.go-top');
  $scrollTopBtn.on('click',function(){
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  console.log($nextArrow, $prevArrow, $scrollTopBtn, $nav);
});
