$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll land',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){

        e.preventDefaullt();

        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
         500,
         'linear'
        );
    });

});