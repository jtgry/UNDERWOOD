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
  $(window).on('scroll',function() {
      if ($(this).scrollTop() > 200) {
        $(".nav").removeClass("fade-in-slow");
        $(".nav").removeClass("nav-up");
        $(".nav").addClass("nav-fixed");
      }
      else {
      $(".nav").addClass("nav-up");
      $(".nav").removeClass("nav-fixed");
		  }
    });
});
