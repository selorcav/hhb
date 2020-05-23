$(document).ready(function(){

    //scroll nav color
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('header').addClass('primary-bg');
        }
        else {
            $('header').removeClass('primary-bg');
        }
    })

    //menu responsive
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active')
    })
    $('nav ul li a').click(function () {
        $('nav').toggleClass('active')
    })

    //hamburger to x
    $('.main-nav-toggle').click(function () {
        $('.main-nav-toggle').toggleClass('active-menu')
    })
    $('nav ul li a').click(function () {
        $('.main-nav-toggle').toggleClass('active-menu')
    })

    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        navText: [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          700: {
            items: 2
          },
          900: {
            items: 3
          },
          1200: {
            items: 4
          }
        }
      })
  // SCROLLTOID#
  $("a[href^='#']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: position
    } /* speed */ );
  });  


})
