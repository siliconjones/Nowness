var stickyNav = $('sneaky-nav').offset().top;

$(window).scroll(function() {  
    if ($(window).scrollTop() > stickyNav-100) {
        $('.sneaky-nav').addClass('affix');
    }
    else {
        $('.sneaky-nav').removeClass('affix');
    }  
});