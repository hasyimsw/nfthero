const hamburger = document.querySelector("#menu");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  e.preventDefault();
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("active");
  }
});
