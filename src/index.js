import './style.less'

$('.search__menu-button-js').click(function(){
  $(this).next('.search__menu-list').toggleClass('active')
});

$('.search__wrapper-close-button-js').click(function(){
  $(this).parent('.search__wrapper').removeClass('active')
});

$('.search__wrapper-mobile-open-js').click(function(){
  $(this).prev('.search__wrapper').addClass('active')
});
