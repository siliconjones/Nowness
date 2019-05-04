$(window).load(function() {
  $('.series-flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    animationSpeed:500,
    slideshow: false,
    itemWidth: 400,
    itemMargin: 16,
    minItems: 1,
    maxItems: 4,
    move:1,
    touch:true,
    keyboard:true,
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".series-scroll-nav a")
    });
});