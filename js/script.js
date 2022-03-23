$(document).ready(function(){
    
    //Modal

    $('[data-modal=registration]').on('click', function(){
        $('.overlay, #registration').fadeIn('slow');

    });

    $('.modal_close').on('click', function(){
        $('.overlay, #registration').fadeOut('slow');

    });

    // $('input [name=phone]').mask('+(373)999-99-99');


    //
   
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.page-up').fadeIn();
        } else {
            $('.page-up').fadeOut();
        }
    });

    $("a[href^='#").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();

    
});
