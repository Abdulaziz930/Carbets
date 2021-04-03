let hamburgerMenu = document.querySelector(".navbar-toggler");
let backToTop = document.querySelector(".backToTop");

let menuOpen = false;

hamburgerMenu.addEventListener("click", () => {
  if (!menuOpen) {
    hamburgerMenu.classList.add("open");
    menuOpen = true;
  } else {
    hamburgerMenu.classList.remove("open");
    menuOpen = false;
  }
});

$(document).ready(function () {
  $(".project-slider").slick({
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".comments-slider").slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
