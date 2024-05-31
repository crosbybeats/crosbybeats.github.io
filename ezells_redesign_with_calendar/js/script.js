$(document).ready(function() {
  $("#myCarousel").carousel();

  $(".item").click(function() {
      $("#myCarousel").carousel(1);
  });

  $(".left").click(function() {
      $("#myCarousel").carousel("prev");
  });

  $(window).scroll(function() {
      $(".fade-in").each(function() {
          var elementBottom = $(this).offset().top + $(this).outerHeight();
          var windowBottom = $(window).scrollTop() + $(window).height();
          if (windowBottom >= elementBottom) {
              $(this).addClass("show");
          }
      });
  }).scroll();

  const daysTag = document.querySelector(".days"),
        currentDate = document.querySelector(".current-date"),
        prevNextIcon = document.querySelectorAll(".icons span");

  let date = new Date(),
      currYear = date.getFullYear(),
      currMonth = date.getMonth();

  const months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];

  const renderCalendar = () => {
      let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(),
          lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
          lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
      let liTag = "";

      for (let i = firstDayOfMonth; i > 0; i--) {
          liTag += `<li class="inactive">${new Date(currYear, currMonth, -i + 1).getDate()}</li>`;
      }

      for (let i = 1; i <= lastDateOfMonth; i++) {
          let currentDay = new Date(currYear, currMonth, i).getDay();
          let isSunday = currentDay === 0 ? "" : "active";
          liTag += `<li class="${isSunday}">${i}</li>`;
      }

      for (let i = 1; i < 7 - lastDayOfMonth; i++) {
          liTag += `<li class="inactive">${i}</li>`;
      }

      currentDate.innerText = `${months[currMonth]} ${currYear}`;
      daysTag.innerHTML = liTag;
  };

  renderCalendar();

  prevNextIcon.forEach(icon => {
      icon.addEventListener("click", () => {
          currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

          if (currMonth < 0 || currMonth > 11) {
              date = new Date(currYear, currMonth, new Date().getDate());
              currYear = date.getFullYear();
              currMonth = date.getMonth();
          } else {
              date = new Date();
          }
          renderCalendar();
      });
  });

  const btn = document.querySelector(".btn-toggle");
  const theme = document.querySelector("#theme-link");

  btn.addEventListener("click", function() {
      if (theme.getAttribute("href") === "css/style2light.css") {
          theme.href = "css/style2dark.css";
      } else {
          theme.href = "css/style2light.css";
      }
  });
});
