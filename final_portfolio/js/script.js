
$("#myCarousel").carousel();


$(".item").click(function(){
  $("#myCarousel").carousel(1);
});


$(".left").click(function(){
    
  $("#myCarousel").carousel("prev");
});

$(document).ready(function() {
    $(window).scroll(function() {
        $(".fade-in").each(function() {


            var elementBottom = $(this).offset().top + $(this).outerHeight();

            var windowBottom = $(window).scrollTop() + $(window).height();
            if (windowBottom >= elementBottom) {
                $(this).addClass("show");
            }
        });
    }).scroll(); 

});
