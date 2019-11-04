$(function() {
    var i = 0; 
    var k = 0; 
    var h = 5; 

    $('.industry').hover(function() {
        i = $(this).index(); 
        $(this).addClass('active').siblings().removeClass('active');
        $('.case-panel').eq(i).addClass('active').siblings().removeClass('active');
        h = $('.case-panel').eq(i).find('.image-hover').length; 
    })

    $('.case-panel .image-hover').hover(function() {
        var j = $(this).index();
        var title = $(this).attr('data-title'); 
        var desc = $(this).attr('data-desc'); 
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.case-panel').find('.phone-image').eq(j - 1).addClass('active').siblings().removeClass('active');
        $(this).parents('.case-panel').find('.case-head').text(title);
        $(this).parents('.case-panel').find('.case-text').text(desc);
        
    })

    $('.phone-framework').hover(function() {
        $(this).next('.phone-image-cover').removeClass('hidden');
    }, function() {
        $('.phone-image-cover').addClass('hidden');
    })

    setInterval(function() {
        $('.case-panel').eq(i).find('.image-hover').eq(k).addClass('active').siblings().removeClass('active');
        $('.case-panel').eq(i).find('.phone-image').eq(k).addClass('active').siblings().removeClass('active');
        k >= h - 1 ? k = 0 : k++;
    }, 5000)
})
