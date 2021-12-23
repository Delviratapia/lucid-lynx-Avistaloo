import {
    qs,
    qsa
  } from "./utils.js";
  
  const buttonRight = qs(".carousel-btn-right");
  const buttonLeft = qs(".carousel-btn-left");
  
  buttonLeft.addEventListener("click", function () {
    let activeCard = qs(".card-active");
    let previousCard = activeCard.getAttribute("data-previous");
    qs(`.${previousCard}`).classList.add("card-active");
    activeCard.classList.remove("card-active");
  });
  
  buttonRight.addEventListener("click", function () {
    let activeCard = qs(".card-active");
    let nextCard = activeCard.getAttribute("data-next");
    nextCard = qs(`.${nextCard}`);
    // nextCard.style.transform = "translateX(100%)";
    nextCard.classList.add("card-active");
    // nextCard.style.animation = "right-to-left 1s normal forwards"
    activeCard.classList.remove("card-active");
  });
  
  
  const previewTabs = qsa(".preview-tab")
  for (let tab of previewTabs) {
    tab.addEventListener("click", function() {
      let selectedTab = tab.getAttribute("data-tab")
      let selectedCard = qs("."+selectedTab)
      let activeCard = qs(".card-active")
      if (!selectedCard.classList.contains("card-active")) {
        selectedCard.classList.add("card-active")
        activeCard.classList.remove("card-active")
      }
  
    })
  }