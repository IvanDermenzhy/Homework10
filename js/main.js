$(document).ready(function () {
    var touch = $('#touch-menu');
    var menu = $('.navigation');

    $(touch).on('click', function () {
        menu.slideToggle();
    });
    $(window).resize(function () {
        var width = $(window).width();
        if(width > 768 && menu.is (':hidden')){
            menu.removeAttr('style');
        }
    });

    var circleBtn = $('.circle-buttons button');
    circleBtn.on('click',function () {
        $(this).siblings('button').removeClass('active-btn');
        $(this).addClass('active-btn');
        var btnIndex = $(this).index();
        var featureItems = ('.item-'+ btnIndex);
        $(featureItems).siblings().removeClass('active');
        $(featureItems).addClass('active');
    });
    $(window).scroll(function() {
        $(".decoration").css({
            "transform":"translate(0%, " + $(this).scrollTop() / 100 +"%)"
        });
    });
});