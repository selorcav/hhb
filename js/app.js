$(document).ready(function(){

    //scroll nav color
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('header').addClass('primary-bg');
        }
        else
        {
            $('header').removeClass('primary-bg');
        }
    })

    //menu responsive
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
    $('nav ul li a').click(function(){
        $('nav').toggleClass('active')
    })

    //hamburger to x
    $('.main-nav-toggle').click(function(){
        $('.main-nav-toggle').toggleClass('active-menu')
    })
    $('nav ul li a').click(function(){
        $('.main-nav-toggle').toggleClass('active-menu')
    })

    // $('a').on('click', function(e){
    //     e.preventDefault();
    //   if ( $(this).hasClass('active-menu') ) {
    //     $( this ).removeClass( 'active-menu' );
    //   } else {
    //     $( this ).addClass( 'active-menu' );
    //   }
    // });
})
