$(document).ready(function() {
  // Initialize carousel
  $("#myCarousel").carousel();

  // Click event for carousel items
  $(".item").click(function(){
    $("#myCarousel").carousel(1);
  });

  // Click event for carousel controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });

  // Scroll event for fade-in animations
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

  // Trigger scroll event on page load
  $(window).scroll();
});
