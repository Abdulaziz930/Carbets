let hamburgerMenu = document.querySelector(".navbar-toggler");

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
