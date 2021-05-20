//$(function(){
//  $('.header__btn').click(function() {
//    $('.header__nav-items').toggleClass('.header__nav-items--active');
//  });
//});
$(function(){
      $('.header__btn').on('click', function(){
      $('.header__nav-items').toggleClass('header__nav-items--active')
  });
});
