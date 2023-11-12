import Swiper from 'swiper';
import { Navigation } from 'swiper/modules'
import IMask from 'imask';

import './style.less'
import 'swiper/css/bundle';

$('.search__menu-button-js').click(function(){
  $(this).next('.search__menu-wrapper').toggleClass('active')
});

$('.search__wrapper-close-button-js').click(function(){
  $(this).parent('.search__wrapper').removeClass('active')
});

$('.search__wrapper-mobile-open-js').click(function(){
  $(this).prev('.search__wrapper').addClass('active')
});

const swiperPortfolio = new Swiper('#portfolio-slider-js', {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 10,
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
    nextEl: '.portfolio-slider-next-js',
    prevEl: '.portfolio-slider-prev-js',
    disabledClass: 'disabled'
  }
});

const swiperProducts = new Swiper('#products-slider-js', {
  modules: [Navigation],
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    560: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.products-slider__button-next-js',
    prevEl: '.products-slider__button-prev-js',
  }
});

const compilationSlider = new Swiper('#compilation-slider-js', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    560: {
      slidesPerView: 2,
    },
    786: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.compilation__slider-button-next-js',
    prevEl: '.compilation__slider-button-prev-js',
  }
});

const inputTel = document.getElementById('input-tel')
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(inputTel, maskOptions);