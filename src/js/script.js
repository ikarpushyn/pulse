$(document).ready(function(){
  $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/slider/chevron-left-solid.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/slider/chevron-right-solid.svg"></button>',
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  dots: true,
                  arrows: false,
              }
          }
      ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('.catalog__tab_active').siblings().removeClass('.catalog__tab_active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
});





/* const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  loop: true,
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});
 */