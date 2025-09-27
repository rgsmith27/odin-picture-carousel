import "./styles.css";

const tape = document.querySelector(".slide-tape");
const slides = Array.from(document.querySelectorAll(".slide"));
const slideWidth = slides[0].getBoundingClientRect().width;
const slideCount = slides.length;

let slideIndex = 0;

tape.style.width = slideWidth * slideCount;

const slideShiftRight = () => {
  trackerCircles[slideIndex].style.background = "white";
  if (slideIndex == slideCount - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  const newPosition = -(slideIndex * slideWidth);
  tape.style.left = newPosition + "px";

  trackerCircles[slideIndex].style.background = "gray";
};

const slideShiftLeft = () => {
  trackerCircles[slideIndex].style.background = "white";
  if (slideIndex == 0) {
    slideIndex = slideCount - 1;
  } else {
    slideIndex--;
  }
  const newPosition = -(slideIndex * slideWidth);
  tape.style.left = newPosition + "px";

  trackerCircles[slideIndex].style.background = "gray";
};

const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

const trackerCircles = Array.from(document.querySelectorAll(".tracker-circle"));
trackerCircles[0].style.background = "gray";

leftButton.addEventListener("click", (e) => {
  slideShiftLeft();
});

rightButton.addEventListener("click", (e) => {
  slideShiftRight();
});

setInterval(slideShiftRight, 5000);
