
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

const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

              const renderCalendar = () => {
                let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(), // first day of the month
                lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(), // last date of the month
                lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(); // last day of the month
                let liTag = "";
            
                // li of prior month last days
                for (let i = firstDayOfMonth; i > 0; i--) {
                    liTag += `<li class="inactive">${new Date(currYear, currMonth, -i+1).getDate()}</li>`;
                }
            
                // making li for all days of the current month
                for (let i = 1; i <= lastDateOfMonth; i++) {
                    let currentDay = new Date(currYear, currMonth, i).getDay();
                    let isSunday = currentDay === 0 ? "" : "active";
                    liTag += `<li class="${isSunday}">${i}</li>`;
                }
            
                // creating li of next month first days
                for (let i = 1; i < 7 - lastDayOfMonth; i++) {
                    liTag += `<li class="inactive">${i}</li>`;
                }
            
                currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current month and year as currentDate text
                daysTag.innerHTML = liTag;
            }
            
            renderCalendar();
            

prevNextIcon.forEach(icon => { // prev and next icons
  icon.addEventListener("click", () => { // adding click event
      // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
      currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

      if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
          // creating a new date of current year & month and pass it as date value
          date = new Date(currYear, currMonth, new Date().getDate());
          currYear = date.getFullYear(); // updating current year with new date year
          currMonth = date.getMonth(); // updating current month with new date month
      } else {
          date = new Date(); // pass the current date as date value
      }
      renderCalendar(); // calling renderCalendar function
  });
});

