$(window).load(function() {
    var height = $(window).height(),
        bgHeight = height * 4,
        newHeight;

    $('#layer').css('height', bgHeight+135+'px');

    if( height < 640 ) {
        $('#fbsection6').removeClass();
        newHeight = bgHeight+(height*1)+135;

        $('#layer').css('height', newHeight );
        $('footer').css('top','0');
    
    } else if( height > 641 && height < 760 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('threeandfour');
        newHeight = bgHeight+(height*0.75)+135;

        $('#layer').css('height', newHeight);

    } else if (height > 761 && height < 910 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('half');
        newHeight = bgHeight+(height*0.5)+135;

        $('#layer').css('height', newHeight);

    } else if ( height > 911 && height < 960 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('twoandfive');
        newHeight = bgHeight+(height*0.4)+135;

        $('#layer').css('height', newHeight);

    } else if ( height > 961 && height < 999 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('oneandfour');
        newHeight = bgHeight+(height*0.25)+135;

        $('#layer').css('height', newHeight);

    } else if ( height > 1001 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('oneandten');
        newHeight = bgHeight+(height*0.1)+135;

        $('#layer').css('height', newHeight);
    }
});

$(window).resize(function() {
    var height = $(window).height(),
        bgHeight = height * 4,
        newHeight;

    $('#layer').css('height', bgHeight+135+'px');

    // min break point is 560px
    if( height < 640 ) {
        $('#fbsection6').removeClass();
        newHeight = bgHeight+(height*1)+135;

        $('#layer').css('height', resetHeight );
        $('footer').css('top','0');
    
    } else if( height > 641 && height < 760 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('threeandfour');
        newHeight = bgHeight+(height*0.75)+135;

        $('#layer').css('height', newHeight);

    } else if (height > 761 && height < 910 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('half');
        newHeight = bgHeight+(height*0.5)+135;

        $('#layer').css('height', newHeight);

    } else if ( height > 911 && height < 960 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('twoandfive');
        newHeight = bgHeight+(height*0.4)+135;

        $('#layer').css('height', newHeight);

    } else if ( height > 961 && height < 999 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('oneandfour');
        newHeight = bgHeight+(height*0.25)+135;
        
        $('#layer').css('height', newHeight);

    } else if ( height > 1001 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('oneandten');
        newHeight = bgHeight+(height*0.1)+135;

        $('#layer').css('height', newHeight);
    }
});