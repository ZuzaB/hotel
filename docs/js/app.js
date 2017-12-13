'use strict';
$(function() {

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
});
