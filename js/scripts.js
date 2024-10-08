(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
      $(".logo-text").removeClass("text-white");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
      $(".logo-text").addClass("text-white");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery);

function onMailSend() {
  var name = document.getElementById("name").value;
  var emailId = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  if (name === '' || emailId === '' || phone === '' || message === '') {
    alert('Please fill all details in the form');
  } else {
    window.location.href = "mailto:admin@queretarosarbojonin.org?subject=Contact: QUERETARO SARBOJONIN DURGOTSAB&body=Name: " + name + "%0DEmail: " + emailId + "%0DPhone: " + phone + "%0DMessage: " + message;

  }
}

$('#gallery').imagesGrid({
  images: [
    'assets/img/images/Image1.jpg',
    'assets/img/images/Image2.jpg',
    'assets/img/images/Image3.jpg',
    'assets/img/images/Image4.jpg',
    'assets/img/images/Image5.jpg',
    'assets/img/images/Image6.jpg',
    'assets/img/images/Image7.jpg',
    'assets/img/images/Image8.jpg',
    'assets/img/images/Image9.jpg',
    'assets/img/images/Image10.jpg',
    'assets/img/images/Image11.jpg',
    'assets/img/images/Image12.jpg',
  ],
  align: true,
  nextOnClick: true,
  showViewAll: 'more',
  getViewAllText: function () {
    return 'View all';
  }
});
