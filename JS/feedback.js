var stars = document.querySelectorAll(".stars").querySelectorAll("input");
stars.forEach((star) => {
  star.addEventListener("change", feedback);
});
function feedback() {
  document.querySelector(".feedback").style.maxHeight = "1000px";
}
