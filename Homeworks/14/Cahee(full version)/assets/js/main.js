const delay = 500;

function closeMenu() {
    $('#mobile__menu').removeClass('show');
    $('#menu__shadow').animate({
        opacity: '0'
    }, delay);
    setTimeout(function() {
        $('#menu__shadow').removeClass('show');
    }, delay);
}

$(document).ready(function(){
    $('.tel').mask('+00 (000) 000 00 00');
    if($(window).scrollTop()>100){
        $('.header').addClass('scrolled');
    }
    if($(window).scrollTop()>800){
        $('#to-top__btn').addClass('show');
    }

    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('.header').addClass('scrolled');
        }else{
            $('.header').removeClass('scrolled');
        }
    });

    $(window).scroll(function(){
        if($(window).scrollTop()>800){
            $('#to-top__btn').addClass('show');
        }else{
            $('#to-top__btn').removeClass('show');
        }
    });

      $('.hamburger, #menu__shadow').click(function() {
        if ($('.hamburger').hasClass('is-active')) {
            closeMenu();
            $('.hamburger').removeClass('is-active');
        }else {
            $('.hamburger').addClass('is-active');
            $('#mobile__menu, #menu__shadow').addClass('show');
            $('#menu__shadow').animate({
                opacity: '1'
            }, delay);
        }
      });

      $("#mobile__menu a, .header__menu a, #to-top__btn").click(function(e) {
        e.preventDefault();
        let top = $($(this).attr("href")).offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 1000);
        closeMenu();
        $('.hamburger').removeClass('is-active');
    });
});