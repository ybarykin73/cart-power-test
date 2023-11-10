import Swiper from 'swiper';
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

const swiper = new Swiper('.swiper-js',{
  slidesPerView: 4.5,
  spaceBetween: 20,
  loop: true
});
