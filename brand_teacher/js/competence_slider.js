$(document).ready(function(){
  $('.competence__slider--list').slick({
    cssEase: 'ease-in-out',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: '.competence__slider--arrow-prev',
    nextArrow: '.competence__slider--arrow-next',
    pauseOnHover: true,
    variableWidth: true
  });
});