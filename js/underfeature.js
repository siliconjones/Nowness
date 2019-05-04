$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    animationSpeed:500,
    slideshow: false,
    itemWidth: 220,
    itemMargin: 16,
    minItems: 1,
    maxItems: 6,
    move:1,
    touch:true,
    keyboard:true,
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".scroll-nav a")
    });
});