   $('#left-button').click(function() {
      event.preventDefault();
      $('#under-feature-cont').animate({
        marginLeft: "+=236px"
      }, "fast");
   });

   jones102$('#right-button').click(function() {
      event.preventDefault();
      $('#under-feature-cont').animate({
        marginLeft: "-=236px"
      }, "fast");
   });
