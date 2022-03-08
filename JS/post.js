$(document).ready(
  function () {
    $('#blog-1').hide().fadeIn(2000); 

    $('.content').hide().fadeIn(2000);  

    $('.koko h2').hide().fadeIn(3000);

    $('.koko h4').hide().fadeIn(3500);

    $('.koko img').hide().fadeIn(3000);

    $('.koko p').hide().fadeIn(4500);

    $('footer').animate(
      {right: '0'}, 4000
    );

  }
);

$('.toggle-menu').click(function(e) {
  $('.nav-links').toggleClass('active').hide().slideDown(800);
});