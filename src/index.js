import Swiper from 'swiper';
import { Navigation } from 'swiper/modules'
import './style.less'
import 'swiper/css/bundle';

$('.search__menu-button-js').click(function(){
  $(this).next('.search__menu-list').toggleClass('active')
});

$('.search__wrapper-close-button-js').click(function(){
  $(this).parent('.search__wrapper').removeClass('active')
});

$('.search__wrapper-mobile-open-js').click(function(){
  $(this).prev('.search__wrapper').addClass('active')
});

const swiper = new Swiper('#portfolio-slider-js', {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 10,
  // loop: true,
  breakpoints: {
    560: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4.5,
    }
  },
  navigation: {
    nextEl: ".portfolio-slider-next-js",
    prevEl: '.portfolio-slider-prev-js',
    disabledClass: 'disabled'
  }
});
