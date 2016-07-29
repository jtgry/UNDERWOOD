$(document).ready(function () {
  var menuButton = document.getElementById('navButton');
  menuButton.addEventListener('click', function (e) {
      menuButton.classList.toggle('is-active');
      e.preventDefault();
  });
  $('.nav-button').click(function() {
    $(".mobile-nav").fadeToggle(500);
    $(".nav").toggleClass("nav-transparent");
  });
});
