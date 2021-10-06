let firstSwiperNav = new Swiper(".first-nav", {
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});


let firstSwiper = new Swiper(".first-slider", {
  spaceBetween: 10,
  slidesPerView: 1,
  thumbs: {
    swiper: firstSwiperNav,
  },
  breakpoints: {
    320: {
      centeredSlides: true,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

let secondSwiperNav = new Swiper(".second-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".second-slider__r",
    prevEl: ".second-slider__l",
  },
  effect: "flip",
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: [0, 0, -400],
  //   },
  //   next: {
  //     translate: ["100%", 0, 0],
  //   },
  // },
});

let tabsSwiper = new Swiper(".tabs-slider", {
  spaceBetween: 55,
  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 2,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      centeredSlides: false,
      spaceBetween: 20,
      initialSlide: 1,
    },
    575: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      initialSlide: 1,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 20,
      initialSlide: 1,
    },
  }
});

AOS.init();
// AOS.refresh();


  var block_show = null;
  let scrollBox = document.getElementById('move');

  function scrollTracking(){
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.second-section').offset().top;
    var eh = $('.second-section').outerHeight();

    // var et = $('.paralax-box').offset().top;
    // var eh = $('.paralax-box').outerHeight();

    if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
      if (block_show == null || block_show == false) {
        // console.log('Блок active в области видимости');
        scrollBox.classList.add("active")

        // scrollBox.style.transform = 'translateX(' + y + 'px)';
      }
      block_show = true;
    } else {
      if (block_show == null || block_show == true) {
        // console.log('Блок active скрыт');

        scrollBox.classList.remove  ("active")
      }
      block_show = false;
    }
  }

  $(window).scroll(function(){
    scrollTracking();
  });

  $(document).ready(function(){
    scrollTracking();
  });


  if ($(window).width() > 992) {

      $(window).scroll(function(e){
        parallax();
      });
        var secHight = $('.third-sec').offset().top;
        var secHight2 = $('.frouth-sec').offset().top;

        function parallax(){
        var scrolled = $(window).scrollTop();
        var value = scrolled - secHight;
        var value2 = scrolled - secHight2;
        $('.third-sec .paralax-box > h2').css('background-position-y', + (value * 0.150000 + 10)+'px');
        $('.frouth-sec .paralax-box > h2').css('background-position-y', + (value2 * 0.150000+ 10)+'px');
      }
  } else if ($(window).width() < 992) {
    $(window).scroll(function(e){
      parallax();
    });
      var secHight = $('.third-sec').offset().top;
      var secHight2 = $('.frouth-sec').offset().top;

      function parallax(){
      var scrolled = $(window).scrollTop();
      var value = scrolled - secHight;
      var value2 = scrolled - secHight2;
      $('.third-sec .paralax-box > h2').css('background-position-y', + (value * 0.100000)+'px');
      $('.frouth-sec .paralax-box > h2').css('background-position-y', + (value2 * 0.100000)+'px');
    }
  }



  const container = document.querySelector('.filter-buttons')

  container.addEventListener('click', function(e) {
    const items = document.querySelectorAll('.filter-buttons__btn')
    const target = e.target
    Array.from(items).forEach(item => {
      item.classList.remove('active')
    })
    target.classList.add('active')
  });



  var mnu = $('.fixed-nav');
  var main = $('.main');
	scrollPrev = 0;

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if (  scrolled > scrollPrev ) {
      mnu.addClass('out');
      main.addClass('out');
    } else {
      mnu.removeClass('out');
      main.removeClass('out');
    }
    scrollPrev = scrolled;
  });


  $('.menu').click(function(){
    $('.fixed-nav').addClass('out');
    $('.mobile-menu').toggleClass('active');
    $('.mobile-btn').toggleClass('active');
    $('body').toggleClass('overlay');
  });


  // $('.overlay').click(function(){
  //   $('.mobile-menu').removeClass('active');
  //   console.log('123')
  // });


  jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".mobile-menu.active"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('active');
        $('body').removeClass('overlay');// скрываем его
      }
    });
  });



