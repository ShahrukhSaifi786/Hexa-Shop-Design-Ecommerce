const responsive_icon = document.querySelector(".responsive-icon");
const nav_icon = document.querySelector(".nav-icon");
const close_icon = document.querySelector(".close-icon");
responsive_icon.addEventListener("click", () => {
  nav_icon.classList.add("transform-active");
});
close_icon.addEventListener("click", () => {
  nav_icon.classList.remove("transform-active");
});
window.addEventListener("scroll", () => {
  nav_icon.classList.remove("transform-active");
});
