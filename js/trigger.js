$(document).ready(function(){
  $('.trigger').click(function(){
    $('.top').toggleClass('top-x');
    $('.middle').toggleClass('middle-x');
    // $('.line-2-1').toggleClass('line-2-1-x');
    $('.bottom').toggleClass('bottom-x');
   }); //End Click event handler
}); //End document.ready