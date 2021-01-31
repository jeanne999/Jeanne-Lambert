$(document).ready(function(){
    if($(window).scrollTop()>100){
        $('.header').addClass('scrolled');
    }

    if($(window).scrollTop()>500){
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
        if($(window).scrollTop()>500){
            $('#to-top__btn').addClass('show');
        }else{
            $('#to-top__btn').removeClass('show');
        }
    });

    $("#to-top__btn").click(function(e) {
        e.preventDefault();
        let top = $($(this).attr("href")).offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 1000);
    });
    
    $('.partners__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 704,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 510,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});