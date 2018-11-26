import Swiper from 'swiper';
var sliderSingleImg = new Swiper ('.js-slider-single-img', {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
  
var sliderDoubleImg = new Swiper ('.js-slider-double-img', {
// Optional parameters
  loop: true,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
  
