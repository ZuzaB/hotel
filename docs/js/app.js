'use strict';
$(function() {

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
// $(".top-img:gt(0)").hide();//poprawić
//
// setInterval(function() {
//   $('.top-img:first')
//     .fadeOut(2000)
//     .next()
//     .fadeIn(2000)
//     .end()
//     .appendTo('.top-slider');
// },  5000);

});
