import "./styles.css";

const tape = document.querySelector(".slide-tape");
const slides = Array.from(document.querySelectorAll(".slide"));
const slideWidth = slides[0].getBoundingClientRect().width;
const slideCount = slides.length();
const startPosition = parseInt(tape.style.left);

let slideIndex = 0;

const slideShiftRight = () => {
  if (slideIndex == slideCount - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  const newPosition = startPosition - slideIndex * slideWidth;
  tape.styles.left = newPosition + "px";
};

const slideShiftLeft = () => {
  if (slideIndex == 0) {
    slideIndex = slideCount - 1;
  } else {
    slideIndex--;
  }
  const newPosition = startPosition - slideIndex * slideWidth;
  tape.styles.left = newPosition + "px";
};
