(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".Testimonial_slider").owlCarousel({
    loop: true,
    margin: -10,
    items: 3,
    navText: [
      '<i class="far fa-angle-left"></i>',
      '<i class="far fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        margin: 0,
        items: 1
      },
      767: {
        margin: 0,
        items: 2
      },
      992: {
        margin: 0,
        items: 3
      },
      1200: {
        margin: 0,
        items: 3
      },
      1500: {
        items: 3
      }
    }
  });

  document.querySelector('html').classList.remove('no-js');
  if (!window.Cypress) {

    AOS.init({
      mirror: true,
      duration: 1000,
      initClassName: 'aos-init',
      once: true,
    });

    document.addEventListener('aos:in', function(e) {
      console.log('in!', e.detail);
    });

    window.addEventListener('scroll', function() {
      scrollCounter.innerHTML = window.pageYOffset;
    });
  }

})(jQuery);
