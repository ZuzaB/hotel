'use strict';
$(function() {

  //nav events
  var $nav = $('.menu'),
    $navHeight = $nav.height();
  $(window).scroll(function() {
    if ($(window).scrollTop() > $navHeight) {
      $nav.addClass('menu--fixed');
    } else {
      $nav.removeClass('menu--fixed');
    }
  });

  var $lang = $('.menu-lang'),
    $langItem = $lang.find('.menu-lang__item');

  $lang.on('click', function() {
    $langItem.toggle();
  });

  var $menu = $('.menu-nav'),
    $menuIco = $('.icon-menu-1'),
    $menuClouse = $('.icon-cancel'),
    desktop = window.matchMedia('screen and (min-width: 1220px)');
  $menuIco.on('click', function() {
    $menu.show();
  });
  $menuClouse.on('click', function() {
    $menu.hide();
  });
  desktop.addListener(function(desktop) {
    if (desktop.matches) {
      $menu.show();
    } else {
      $menu.hide();
    }
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

//slider in offer adress__reception in Vanilla JS
  var nextArrow = document.querySelector('.slider__arrow--right'),
    prevArrow = document.querySelector('.slider__arrow--left'),
    sliderItems = document.querySelectorAll('.slider__item'),
    slideIndexStart = 0,
    slideIndexFinish = 2;

  for (var i = slideIndexStart; i <= slideIndexFinish; i++) {
    sliderItems[i].classList.remove("slider__item--hidden");
  }

  nextArrow.addEventListener('click', function() {
    for (var i = slideIndexStart; i <= slideIndexFinish; i++) {
      sliderItems[i].classList.add("slider__item--hidden");
    }
    slideIndexStart += 3;
    slideIndexFinish += 3;

    if (slideIndexFinish > sliderItems.length) {
      slideIndexStart = 0;
      slideIndexFinish = 2;
    }

    for (var i = slideIndexStart; i <= slideIndexFinish; i++) {
      sliderItems[i].classList.remove("slider__item--hidden");
    }
  });

  prevArrow.addEventListener('click', function() {
    for (var i = slideIndexStart; i <= slideIndexFinish; i++) {
      sliderItems[i].classList.add("slider__item--hidden");
    }
    slideIndexStart -= 3;
    slideIndexFinish -= 3;

    if (slideIndexStart < 0) {
      slideIndexStart = 3;
      slideIndexFinish = 5;
    }

    for (var i = slideIndexStart; i <= slideIndexFinish; i++) {
      sliderItems[i].classList.remove("slider__item--hidden");
    }
  });

  //slider with pause in Vanilla JS
  var nextBtn = document.querySelectorAll('.section-slider__controlls--right'),
    prevBtn = document.querySelectorAll('.section-slider__controlls--left'),
    stopBtn = document.querySelectorAll('.section-slider__controlls--stop'),
    conference = document.querySelector('.section-conference'),
    spa = document.querySelector('.section-spa'),
    imgs = spa.querySelectorAll('.section-slider__img'),
    imgsConf = conference.querySelectorAll('.section-slider__img'); //usunąć?

  var currSlide = 0;
  var slideInterval = setInterval(nextSlide, 2000);

  function nextSlide() {
    imgs[currSlide].className = 'section-slider__img';
    currSlide = (currSlide + 1) % imgs.length;
    imgs[currSlide].className = 'section-slider__img section-slider__img--fade';
  }

  var playing = true;

  function pauseSlideshow(button) {
    button.innerHTML = '<i class="icon-play"></i>';
    playing = false;
    clearInterval(slideInterval);
  }

  function playSlideshow(button) {
    button.innerHTML = '<i class="icon-pause"></i>';
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
  }

for (var i=0; i < nextBtn.length; i++) {
nextBtn[i].addEventListener('click', function() {
var img2 = this.parentElement.previousElementSibling,
    img1 = img2.previousElementSibling;

if(img2.classList.contains('section-slider__img--fade')){
  img2.classList.remove('section-slider__img--fade');
  img1.classList.add('section-slider__img--fade');
}else{
  img2.classList.add('section-slider__img--fade');
  img1.classList.remove('section-slider__img--fade');
}

});
}
for (var i=0; i < nextBtn.length; i++) {
prevBtn[i].addEventListener('click', function() {
  var img2 = this.parentElement.previousElementSibling,
      img1 = img2.previousElementSibling;

  if(img2.classList.contains('section-slider__img--fade')){
    img2.classList.remove('section-slider__img--fade');
    img1.classList.add('section-slider__img--fade');
  }else{
    img2.classList.add('section-slider__img--fade');
    img1.classList.remove('section-slider__img--fade');
  }
});
}
for (var i=0; i < nextBtn.length; i++) {
  stopBtn[i].addEventListener('click', function() {
    if (playing) {
      pauseSlideshow(this);
    } else {
      playSlideshow(this);
    }
  });
    }

  //go top
  var $scrollTopBtn = $('.go-top');
  $scrollTopBtn.on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
});
