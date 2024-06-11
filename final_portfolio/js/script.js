$(document).ready(function() {

  $("#myCarousel").carousel();

  $(".item").click(function(){
    $("#myCarousel").carousel(1);
  });


  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });


  $(window).scroll(function() {
      $(".fade-in, .title, .image").each(function() {
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();
          var windowTop = $(window).scrollTop();
          var windowBottom = windowTop + $(window).height();

          if (windowBottom > elementTop && windowTop < elementBottom) {
              $(this).addClass("show");
          }
      });
  });



  $(window).scroll();
});

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.fade-in');

  function checkVisibility() {
      elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight) {
              element.classList.add('show');
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility();
});
