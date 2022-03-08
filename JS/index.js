$(document).ready(
  function () {
    $('#div-1').hide().slideDown(2000); //The navbar takes 2 seconds to slides down

    $('#div-2-intro').hide().fadeIn(4000); //The intro takes 4 seconds to display

    $('#icons').hide().fadeIn(4000); //The icons takes 4 seconds to display

    $('#in-icons2').animate({
      right: '0'
    }, 4000);

    $('#icons2-img').animate({
      left: '0'
    }, 4000);

    $('.icons3-flex1').hide().fadeIn(3000);

    $('.item1').hide().slideDown(1000);

    $('.item2').hide().fadeIn(1300);

    $('.item3').hide().slideDown(1600);

    $('.item4').hide().fadeIn(1900);

    $('.item5').hide().slideDown(2200);

    $('.item6').hide().fadeIn(2500);

    $('.item7').animate({
      right: '0'
    }, 4000);

    $('.item8').animate({
      right: '0'
    }, 4000);

    $('#in-icons4').animate({
      left: '0'
    }, 4000);

    $('#icons4-img').animate({
      right: '0'
    }, 4000);

    $('#in-icons6').hide().fadeIn(3000);

    $('footer').animate({
      right: '0'
    }, 4000);
  }
)

$('.toggle-menu').click(function(e) {
  $('.nav-links').toggleClass('active').hide().slideDown(800);
});

// let navLinks = document.getElementsByClassName('nav-links')[0], toggleButton = document.getElementsByClassName('toggle-menu')[0], toggler = function(e) {
//   navLinks.classList.toggle('active');
// };
// toggleButton.addEventListener('click', toggler);