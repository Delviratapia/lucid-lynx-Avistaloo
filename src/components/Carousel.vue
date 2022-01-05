<template>
<div class="carousel-container mt-10 sm:px-24 lg:px-48">

    <!-- Carousel Body -->

    <div class="slides flex overflow-hidden rounded-lg bg-gray-100 shadow-md shadow-xl shadow-gray-400 lg:m-auto carousel-box h-full">

      <!-- slider 1 -->

      <div class=" card card-1 card-active relative rounded-lg block md:flex items-center carousel-box"
        data-next="card-2" data-previous="card-5">
        <div class="relative w-full md:w-2/5 overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg h-96 lg:h-80 min-w-[13.5rem]">
          <img
            class="slider-img absolute inset-0 w-full h-full object-cover object-center transition-all ease-in-out duration-1000 transform translate-x-0 slide"
            src="../assets/images/owl-4104670_1280.jpg" alt="">
          <div class="absolute inset-0 w-full h-full"></div>
          <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
            <svg class="w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239 120"></svg>
          </div>
        </div>

        <div class="w-full lg:w-3/5 h-full flex items-center bg-gray-100 rounded-lg carousel-container-text">

          <div class="p-12 lg:pr-24 lg:pl-16 lg:py-12 carousel-text">

            <p class="text-gray-600"> Los <span class="text-gray-900">búhos </span> son unas hermosas aves incapaces de
              girar lo ojos, en su lugar mueven la cabeza por completo para ver lo que hay detrás de ellos, pueden vivir
              en todos los continentes a excepción de la Antártida.</p>
            <a class="flex items-baseline mt-3" href="">
              <span><strong>Aprende mas sobre ellos</strong></span>
              <span class="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
          <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>

      <!-- slider 2 -->

      <div class="card card-2 relative rounded-lg block md:flex items-center bg-gray-100 carousel-box" id="card-22"
        data-next="card-3" data-previous="card-1">

        <div class="relative w-full md:w-2/5 overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg h-96 lg:h-80 min-w-[13.5rem]">

          <img
            class="slider-img absolute inset-0 w-full h-full object-cover object-center transition-all ease-in-out duration-1000 transform translate-x-0 slide"
            src="../assets/images/colibri.jpg" alt="">
          <!-- <div class="absolute inset-0 w-full h-full"></div> -->
          <!-- <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
            <svg class="w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239 120"></svg>
          </div> -->
        </div>

        <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg carousel-container-text">
          <div class="p-12 md:pr-24 md:pl-16 md:py-12 carousel-text">
            <p class="text-gray-600"> Los <span class="text-gray-900">picaflores -o colibríes</span> son
              las únicas aves que pueden volar hacia atrás (igual que los helicópteros, ya que los aviones y otras naves
              no pueden hacerlo).</p>
            <a class="flex items-baseline mt-3" href="">
              <span><strong>Aprende mas sobre ellos</strong></span>
              <span class="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
          <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>

      <!-- slider 3 -->

      <div class=" card card-3 relative rounded-lg block md:flex items-center bg-gray-100 carousel-box"
        data-next="card-4" data-previous="card-2">
        <div class="relative w-full md:w-2/5 overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg h-96 lg:h-80 min-w-[13.5rem]">
          <img
            class="slider-img absolute inset-0 w-full h-full object-cover object-center transition-all ease-in-out duration-1000 transform translate-x-0 slide"
            src="../assets/images/bird.jpg" alt="">
          <div class="absolute inset-0 w-full h-full"></div>
          <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
            <svg class="w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239 120"></svg>
          </div>
        </div>

        <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg carousel-container-text">
          <div class="p-12 md:pr-24 md:pl-16 md:py-12 carousel-text">
            <p class="text-gray-600"> Las <span class="text-gray-900">plumas </span>de los pájaros pesan más que su
              esqueleto.</p>
            <a class="flex items-baseline mt-3" href="">
              <span><strong>Aprende mas sobre ellos</strong></span>
              <span class="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
          <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>

      <!-- slider 4 -->

      <div class=" card card-4 relative rounded-lg block md:flex items-center bg-gray-100 carousel-box"
        data-next="card-5" data-previous="card-3">
        <div class="relative w-full md:w-2/5 overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg h-96 lg:h-80 min-w-[13.5rem]">
          <img
            class="slider-img absolute inset-0 w-full h-full object-cover object-center transition-all ease-in-out duration-1000 transform translate-x-0 slide"
            src="../assets/images/huevosColibriAbeja.jpg" alt="">
          <div class="absolute inset-0 w-full h-full"></div>
          <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
            <svg class="w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239 120"></svg>
          </div>
        </div>

        <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg carousel-container-text">
          <div class="p-12 md:pr-24 md:pl-16 md:py-12 carousel-text">
            <p class="text-gray-600">El huevo más pequeño del mundo de pájaro es de el <span
                class="text-gray-900">colibrí abeja </span>, mide poco menos de 1.25 x 0.6 cm y pesa solo 0.02 oz.</p>
            <a class="flex items-baseline mt-3" href="">
              <span><strong>Aprende mas sobre ellos</strong></span>
              <span class="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
          <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>

      <!-- slider 5 -->

      <div class=" card card-5 relative rounded-lg block md:flex items-center bg-gray-100 carousel-box"
        data-next="card-1" data-previous="card-4">
        <div class="relative w-full md:w-2/5 overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg h-96 lg:h-80 min-w-[13.5rem]">
          <img
            class="slider-img absolute inset-0 w-full h-full object-cover object-center transition-all ease-in-out duration-1000 transform translate-x-0 slide"
            src="../assets/images/african-gray-parrot.jpg" alt="">
          <div class="absolute inset-0 w-full h-full"></div>
          <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
            <svg class="w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239 120"></svg>
          </div>
        </div>

        <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg carousel-container-text">
          <div class="p-12 md:pr-24 md:pl-16 md:py-12 carousel-text">
            <p class="text-gray-600"> El <span class="text-gray-900">loro gris</span>es el pájaro más locuaz del mundo
              ya que puede alcanzar a decir más de 800 palabras, y la mayoría de especies de loros solo pueden decir 50.
            </p>
            <a class="flex items-baseline mt-3" href="">
              <span><strong>Aprende mas sobre ellos</strong></span>
              <span class="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
          <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>

    </div>

    <!-- fin carousel body -->

    <div class="navigation flex justify-between translate-y-[-670%] sm:translate-y-[-350%] ">
      <!-- carousel buttons -->
      <button
        class="carousel-btn carousel-btn-left bg-white rounded-full shadow-md h-12 w-12 text-2xl text-primary hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
        <span class="block" style="transform: scale(-1);">&#x279c;</span>
      </button>

      <button
        class="carousel-btn carousel-btn-right  bg-white rounded-full shadow-md h-12 w-12 text-2xl text-primary hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
        <span class="block" style="transform: scale(1);">&#x279c;</span>
      </button>
    </div>

    <!-- Carousel Tabs -->


    <div class="flex items-center pt-5 justify-center preview-carousel">

      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100 preview-tab" data-tab="card-1"><img
          class="w-full " src="../assets/images/owl-4104670_1280.jpg" alt="" style="max-height: 60px;"></button>


      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100 preview-tab" data-tab="card-2"><img
          class="w-full" src="../assets/images/colibri.jpg" alt="" style="max-height: 60px;"></button>


      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100 preview-tab" data-tab="card-3"><img
          class="w-full" src="../assets/images/bird.jpg" alt="" style="max-height: 60px;"></button>


      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100 preview-tab" data-tab="card-4"><img
          class="w-full" src="../assets/images/huevosColibriAbeja.jpg" alt="" style="max-height: 60px;"></button>

      <button class="px-2 opacity-100 hover:opacity-100 focus:opacity-100 preview-tab" data-tab="card-5"><img
          class="w-full" src="../assets/images/african-gray-parrot.jpg" alt="" style="max-height: 60px;"></button>


    </div>


  </div>
</template>
<script>
export default {
  name: "Carousel",
   mounted() {
        const buttonRight = document.querySelector(".carousel-btn-right");
  const buttonLeft = document.querySelector(".carousel-btn-left");

  buttonLeft.addEventListener("click", function () {
    let activeCard = document.querySelector(".card-active");
    let previousCard = activeCard.getAttribute("data-previous");
    document.querySelector(`.${previousCard}`).classList.add("card-active");
    activeCard.classList.remove("card-active");
  });

  buttonRight.addEventListener("click", function () {
    let activeCard = document.querySelector(".card-active");
    let nextCard = activeCard.getAttribute("data-next");
    nextCard = document.querySelector(`.${nextCard}`);
    // nextCard.style.transform = "translateX(100%)";
    nextCard.classList.add("card-active");
    // nextCard.style.animation = "right-to-left 1s normal forwards"
    activeCard.classList.remove("card-active");
  });


  const previewTabs = document.querySelectorAll(".preview-tab")
  for (let tab of previewTabs) {
    tab.addEventListener("click", function() {
      let selectedTab = tab.getAttribute("data-tab")
      let selectedCard = document.querySelector("."+selectedTab)
      let activeCard = document.querySelector(".card-active")
      if (!selectedCard.classList.contains("card-active")) {
        selectedCard.classList.add("card-active")
        activeCard.classList.remove("card-active")
      }

    })
  }
   },
}
</script>
<style scoped>
.carousel-container {
   /* overflow: hidden; */
}

.card {
   flex-shrink: 0;
   position: relative;
   width: 100%;
   align-self:stretch;
   order: 2;
}

.card-active {
   order: 1;
}


.carousel-container {
   --transiton-duration: 350ms;
   --story-count: 5;

}

.preview-carousel button {
   opacity: .5;

}

.container-twitter {
   align-content: flex-end;
   justify-content: end;
}


.hiddenElementTweets {
   display: none
}

.hiddenElementComments {
   display: none
}


.card-active {
   opacity: 1;
   animation-name: fadeInOpacity;
   animation-iteration-count: 1;
   animation-timing-function: ease-in;
   animation-duration: 0.5s;
   height: 100%;
}

@keyframes fadeInOpacity {
   0% {
      opacity: 0;
   }

   100% {
      opacity: 1;
   }
}

.img-gallery:hover{
   opacity: 1;
}

</style>
