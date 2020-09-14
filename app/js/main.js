const slider = document.querySelector(".slides");
const leftArrow = document.getElementsByClassName("slider-arrow prev")[0];
leftArrow.addEventListener("click", slideLeft);

function slideLeft(e) {
  slider.scrollBy({ behavior: "smooth", left: -320 });
  leftArrow.removeEventListener("click", slideLeft);
  setTimeout(() => {
    if (slider.scrollLeft != 0) {
      leftArrow.addEventListener("click", slideLeft);
    }
  }, 500);
}

slider.scroll(2000, 0);

const rightArrow = document.getElementsByClassName("slider-arrow next")[0];
rightArrow.addEventListener("click", slideRight);
function slideRight(e) {
  slider.scrollBy({ behavior: "smooth", right: +320 });
  rightArrow.removeEventListener("click", slideRight);
  setTimeout(() => {
    if (slider.scrollLeft != 1920) {
      rightArrow.addEventListener("click", slideRight);
    }
  }, 500);
}
slider.scroll(0, 2000);
