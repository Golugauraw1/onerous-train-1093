let slider = document.querySelector(".sliding");
let direction;
let ele = document.querySelector(".slider>div");
setInterval(() => {
  move()
}, 2000)
function move() {
  ele.style.justifyContent = "flex-start"
  direction = -1;
  slider.style.transform = "translate(-9.1%)"
}
slider.addEventListener("transitionend", () => {
  if (direction == -1) {
    slider.appendChild(slider.firstElementChild);
  }
  else {
    slider.prepend(slider.lastElementChild)
  }
  slider.style.transition = "none"
  slider.style.transform = "translate(0%)"
  setTimeout(() => {
    slider.style.transition = ".2s"
  }, 1)
})