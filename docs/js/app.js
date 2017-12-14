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
var $tipSlider = $(".top-slider"),
    $topImgs = $tipSlider.find('.top-img'),
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

//to top scroll
var $scrollTopBtn = $('.go-top');
  $scrollTopBtn.on('click',function(){
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
