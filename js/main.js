let hamburgerMenu = document.querySelector(".navbar-toggler");
let backToTop = document.querySelector(".backToTop");
let header = document.querySelector("header");
let logo = document.querySelector(".logoImg");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > "400") {
    backToTop.style.opacity = "1";
    backToTop.style.transform = "translateY(-30px)";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.transform = "translateY(30px)";
  }
  header.classList.toggle("sticky", window.scrollY > 15);

  if (window.pageYOffset > "15") {
    logo.setAttribute("src", "./assets/icons/footer-logo.svg");
  } else {
    logo.setAttribute("src", "./assets/icons/logo.svg");
  }

  let scrollPostion = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPostion >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPostion < section.offsetTop + section.offsetHeight * 0.25
    ) {
      let currentId = section.getAttribute("id");
      removeActiveClasses();
      addActiveClass(currentId);
    }
  });
});

backToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

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

function removeActiveClasses() {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
}

function addActiveClass(id) {
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${id}`) {
      link.setAttribute("href", `#${id}`);
      link.classList.add("active");
    }
  });
}

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
