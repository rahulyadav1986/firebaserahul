const newLocal = setInterval(function () {
    jQuery('.humberger-menu').click(function(){
        jQuery('.menu-cover').addClass('open');
        jQuery('.menu-cover').removeClass('close');
    });
    jQuery('.cross').click(function(){
        jQuery('.menu-cover').addClass('close');
        jQuery('.menu-cover').removeClass('open');
    });
}, 1000);