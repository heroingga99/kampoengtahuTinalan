const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.remove("-translate-x-full");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("-translate-x-full");
});

// Close the menu if the user clicks outside of it
menu.addEventListener("click", (e) => {
  if (e.target === menu) {
    menu.classList.add("-translate-x-full");
  }
});

document.getElementById("scrollButton").addEventListener("click", function () {
  document.getElementById("section2").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("scrollButton2").addEventListener("click", function () {
  document.getElementById("section1").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("scrollButton3").addEventListener("click", function () {
  document.getElementById("section3").scrollIntoView({ behavior: "smooth" });
});
