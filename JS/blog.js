$(document).ready(
  function () {
    $('#blog-1').hide().slideDown(2000); 

    $('.content').hide().slideDown(2000);  

    $('#in-blog-2').animate(
      {right: '0'}, 4000
    );

    $('#blog-2-img').animate(
      {left: '0'}, 4000
    );

    $('#blog-3').hide().fadeIn(3500);

    $('#blog-4').hide().slideDown(3000);

    $('footer').animate(
      {right: '0'}, 4000
    );

  }
)

$('.toggle-menu').click(function(e) {
  $('.nav-links').toggleClass('active').hide().slideDown(800);
});