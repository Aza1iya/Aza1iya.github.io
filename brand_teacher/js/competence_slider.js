$(document).ready(function(){
  $('.competence__slider--list').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '.competence__slider--arrow-prev',
    nextArrow: '.competence__slider--arrow-next',
    pauseOnHover: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
});