$( document ).ready(function() {
    $('.img-wrapper').css("height",$('.img-wrapper').width());
    $('p').each(function(){
        if($(this).next().length==0)
            $(this).addClass('mb-0');
    });
    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("active");
    });
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});