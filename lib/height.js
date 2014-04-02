$(window).load(function() {
    var height = $(window).height();

    if( height > 560 && height < 640 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p200');

    } else if (height > 641 && height < 700 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p180');

    } else if (height > 701 && height < 780 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p160');

    } else if ( height > 781 && height < 840 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p150');

    } else if ( height > 841 && height < 900 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p140');

    } else if ( height > 901 && height < 960 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p130');

    } else if ( height > 961 && height < 1020 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p120');

    } else if ( height > 1021  ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p110');

    } 
});

$(window).resize(function() {
    var height = $(window).height();
    
    if( height > 560 && height < 640 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p200');

    } else if (height > 641 && height < 700 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p180');

    } else if (height > 701 && height < 780 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p160');

    } else if ( height > 781 && height < 840 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p150');

    } else if ( height > 841 && height < 900 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p140');

    } else if ( height > 901 && height < 960 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p130');

    } else if ( height > 961 && height < 1020 ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p120');

    } else if ( height > 1021  ) {
        $('section#fbsection5').removeClass();
        $('section#fbsection5').addClass('p110');

    } 
});