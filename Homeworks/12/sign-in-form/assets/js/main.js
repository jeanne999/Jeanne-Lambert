$(document).ready(function(){
    $(".menu__link").click(function(e){
        e.preventDefault();
        $(".menu__link, .tab").removeClass("active");
        $(this).addClass("active");
        $($(this).attr("href")).addClass("active");
    });
});