import {qs} from "./utils.js";

const buttonRight = qs(".carousel-btn-right");
const buttonLeft = qs(".carousel-btn-left");

buttonLeft.addEventListener("click", function() {
  let activeCard = qs(".card-active");
  let previousCard = activeCard.getAttribute("data-previous");
  qs(`.${previousCard}`).classList.add("card-active");
  activeCard.classList.remove("card-active");
});

buttonRight.addEventListener("click", function() {
  let activeCard = qs(".card-active");
  let nextCard = activeCard.getAttribute("data-next");
  qs(`.${nextCard}`).classList.add("card-active");
  activeCard.classList.remove("card-active");
});
