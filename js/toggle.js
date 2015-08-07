$(function()
{
    // Hide search wrap by default;
    $(".off-canvas").hide();

    $(".toggle-menu").on("click", function(e) 
    {
        // Prevent default link behavior
        e.preventDefault();

        // Stop propagation
        e.stopPropagation();

        // Toggle search-wrap
        $(".off-canvas").slideToggle(500, function()
        {
            // Focus on the search bar
            // When animation is complete
           
        });
    });

    // Close the search bar if user clicks anywhere
    $(document).click(function(e)
    {
        var offcanvas = $(".off-canvas");
        
        if(!offcanvas.is(e.target) && offcanvas.has(e.target).length === 0)
        {
            offcanvas.slideRight(260);    
        }
    });    
});