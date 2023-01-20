$(function(){
    $('.hamBtn').click(function(){
        $(this).toggleClass('on');
        $('.m-headWrap').toggleClass('on');
        $('.blackbox').toggleClass('on');
    })

    $('.mgnb h2>a').click(function(){
        var closeh = $(this).parent();
        if(closeh.next().is(':visible')){
            $(this).removeClass('on');
            closeh.next().slideUp(200);
        }else{
            $('.mgnb h2>a').removeClass('on');
            $(this).addClass('on');
            $('.mgnb ul').slideUp(200);
            closeh.next().slideDown(200);
        }
    })
    // add wheel class
    $(window).scroll(function(){
        var sctop = $(window).scrollTop();
        if(sctop > 50){
            $('header').addClass('wheel');
        }else{
            $('header').removeClass('wheel');
        }
    })

    if($(window).width() > 768){
        if($('header').hasClass('transparent')){
            $('#contentsWrap').css('padding-top','0');
        }
    }
})
