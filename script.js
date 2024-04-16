const scrollButton = document.querySelector(".go-back");
const scrollOffset = window.innerHeight / 2;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollOffset) {
    document.body.classList.add("show-button");
    scrollButton.style.opacity = 1;
  } else {
    document.body.classList.remove("show-button");
    scrollButton.style.opacity = 0;
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    body.classList.add(savedTheme + "-theme");
  }

  function setTheme(theme) {
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(theme + "-theme");
    localStorage.setItem("theme", theme);
  }

  const darkThemeBtn = document.getElementById("darkThemeBtn");
  const lightThemeBtn = document.getElementById("lightThemeBtn");

  if (darkThemeBtn && lightThemeBtn) {
    darkThemeBtn.addEventListener("click", function () {
      setTheme("dark");
    });

    lightThemeBtn.addEventListener("click", function () {
      setTheme("light");
    });
  }
});
$(document).ready(function () {
    $(".thim-testimonial-slider").on("slide.bs.carousel", function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          if (e.direction == "left") {
            $(".carousel-item").eq(i).appendTo(".carousel-inner");
          } else {
            $(".carousel-item").eq(0).appendTo(".carousel-inner");
          }
        }
      }
    });
  });
