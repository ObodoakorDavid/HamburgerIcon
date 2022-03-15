/** @format */
let hgb = document.querySelector(".hamburger");

let navMenu = document.querySelector(".nav-menu");

function ss() {
  let appear = hgb.classList.contains("active");
  if (!appear) {
    hgb.classList.toggle("active");
    navMenu.classList.toggle("active");
  } else {
    hgb.classList.remove("active");
    navMenu.classList.remove("active");
  }
}

hgb.addEventListener("click", ss);
