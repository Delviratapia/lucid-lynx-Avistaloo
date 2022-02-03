<script>
import { useMeta } from 'vue-meta'
import { nextPage, prevPage } from '../js/pagination.js';
import { qs } from '../js/utils.js';
import { birdSummary } from "../js/birdsSummary.js";
import {
  getPagination,
  turnSearchBarOn,
  getBirdsFromAPI,
  resetBirds,
  displayBirds
} from "../js/apiUtils.js";

console.log("entered script tag")

let pagination = getPagination()

export default {
  name: "Wiki",
  mounted() {
    console.log("mounted!")
    getBirdsFromAPI()
      .then(res => {
        pagination = getPagination()
        resetBirds()
        displayBirds()

      })
    pagination["show_fn"] = getBirdsFromAPI,

      turnSearchBarOn()

    qs("#btn-next").addEventListener("click", async () => {
      pagination = getPagination()
      await nextPage(pagination)
      pagination["birds_seen"] += pagination["birds_in_this_call"]
      displayBirds()

    })

    qs("#btn-prev").addEventListener("click", async () => {
      pagination["birds_seen"] -= pagination["birds_in_this_call"]
      await prevPage(pagination)
      displayBirds()
    })

  },
  setup() {
    useMeta({ title: 'Wikipedia de aves' })
  },

  methods: {
    resetInput() {
      let reset = document.querySelector("#search");
      setTimeout(function (){reset.value = "";},500);
    },

  }
}

</script>

<template>
  <section class="container mx-auto p-5 flex flex-col justify-center space-y-6 items-center">
    <div class="top-page flex items-center flex-col gap-10 lg:w-3/6 wikiOptions">
      <div class="search-box w-3/5 min-w-full mt-40">
        <form onsubmit="event.preventDefault();" role="search">
          <input
            id="search"
           
            class="text-center"
            type="search"
            placeholder="Buscar"
            autofocus
            required
          />
          <button type="submit" @click="resetInput">
            <i class="birds-searchbtn fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>

    <!-- searchbar family -->
    <!-- <div class="flex items-center justify-center lg:p-2 max-w-full">
        <div class=" relative inline-block text-left dropdown w-96">
          <span class="rounded-md shadow-sm"><button
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
              type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
              <span>Buscar por Orden</span>
              <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button></span>
          <div
            class="opacity-0 invisible options-dropdown dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
            <div
              class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
              <div class="px-4 py-3">
                <p class="text-sm leading-5">Selecciona un Orden</p>
              </div>
              <div class="py-1">
                <option
                  class="text-gray-700 cursor-pointer flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                  role="menuitem">Orden1</option>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>-->
  </section>

  <section class="container mx-auto p-5">
    <div class="text-center mb-10 text-3xl">
      <!-- <h2>Categoría: Gorriones</h2> -->
    </div>
    <div class="cards grid grid-cols-1 md:grid-cols-3 gap-10"></div>
  </section>
  <section class="button-navigation container mx-auto p-5">
    <div class="block sm:flex justify-between">
      <div
        class="total-birds px-4 py-2 text-gray-700 bg-gray-200 rounded-md m-4"
      >Pajaros encontrados: 0/0</div>
      <div class="flex items-center space-x-1 justify-center m-4">
        <a
          id="btn-prev"
          href="#"
          class="hidden flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md"
        >Anterior</a>
        <a
          id="page-span"
          href="#"
          class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
        >1</a>
        <a
          id="btn-next"
          class="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md cursor-pointer hover:bg-blue-400 hover:text-white"
        >Siguiente</a>
      </div>
    </div>
  </section>
  <div class="modal hidden modal-bird">
    <div
      class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style="background: rgba(0,0,0,.7);"
    >
      <div
        class="border border-teal-500 shadow-lg modal-container bg-white w-2/4 mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <div class="modal-content text-left">
          <!--Title-->
          <div class="flex justify-between items-center py-3 px-6 bg-slate-200 mb-5 sticky top-0">
            <p class="text-2xl font-bold name-animal">Gorrión</p>
            <div class="modal-close cursor-pointer z-50">
              <svg
                class="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>
          <!--Body-->
          <div class="body-card px-6">
            <div class="flex gap-5 flex-col lg:flex-row">
              <div class="image-card">
                <img
                  class="m-auto image-animal"
                  width="500"
                  src="https://okdiario.com/img/2020/02/24/-como-saber-si-un-pajaro-es-macho-o-hembra_-655x368.jpg"
                  alt
                />
              </div>
              <div class="box-details">
                <div class="details mt-5">
                  <p>
                    <span class="font-bold">Ejemplares descubiertos:</span>
                    <span class="ejemplares-animal">876,198</span>
                  </p>
                  <p>
                    <span class="font-bold">Familia:</span>
                    <span class="family-animal">lorem</span>
                  </p>
                  <p>
                    <span class="font-bold">Nombre científico:</span>
                    <span class="sciName-animal">lorem</span>
                  </p>
                  <p>
                    <span class="font-bold">Situación:</span>
                    <span class="establishment-animal">lorem</span>
                  </p>
                  <p>
                    <span class="font-bold">Estado:</span>
                    <span class="extinct-animal">lorem</span>
                  </p>
                  <p>
                    <span class="font-bold">Resumen:</span>
                    <span class="aboutBird"></span>
                  </p>
                  <!-- localización -->
                  <p>
                    <span class="font-bold"></span>
                    <span class="location-animal"></span>
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="map-location w-full mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48320.39666380446!2d-73.965441!3d40.805449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f63c75af2d65%3A0xf45542f6cb090cc9!2s2880%20Broadway%2C%20New%20York%2C%20NY%2010025!5e0!3m2!1ses!2sus!4v1639676876735!5m2!1ses!2sus"
                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>-->
          </div>
          <!--Footer-->
        </div>
        <div class="flex justify-end m-6">
          <button
            class="focus:outline-none modal-close px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
          >Salir</button>
        </div>
      </div>
    </div>
  </div>

  <!-- <script src="/js/search.js"></script> -->
</template>



<style scoped lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Landing Page */
.headerLanding {
  height: 730px;
}

.headerContent {
  margin-top: 70px;
}

.logoFooter {
  width: 100px;
}

.footer {
  width: 100%;
  max-height: 200px;
  min-height: 85px;
}

.rrss {
  max-width: 35px;
  max-height: 35px;
}

#footer-logo {
  max-width: 80px;
  max-height: 80px;
}
/* Home */

.navbar {
  width: 100%;
  border-bottom: 1px solid #335963;
  background: white;

  & .name-logo {
    font-size: 2rem;
    font-weight: 600;
    color: #335963;
  }
  & .searchbar-container {
    padding-left: 25px;

    & .searchbar-input {
      margin-top: 9%;
      width: 40px;
      height: 40px;
      border-style: solid;
      border-radius: 20px;
      padding: 10px;
      background-color: #335963;
      outline: none;
      transition-duration: 500ms;
      cursor: pointer;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAWpJREFUWEfNljFOxDAQRbehoKDnIjTcgYtwAHpOwhE4BA3Vig6Je9ABYZ60kZbVc5xkifRHelrleRzP2rGT3TAM0ahMQmUSKpNQmYTKJFQmoTIJlUmonMFlcV88FW/F5+GXazzt1m8xKjvcFh/FVNBOnvVfhMoJHorvgtgXzNZNcXX45RpPkEe+3Wc2KhswIwz6VTwWF4Xl4Wknj/yzZlKlwDM1LiuDW84p5BH0W/1MqhRYOoLla83cKeSNy01/y+miUmB3EksHGv8Y/a29i0qBI4RgI1h7C/IJ+lt7F5UC5xzBbrX2FuQT9Lf2LiqF+BmMfwbHgWJ3cfw5CEvfJD8FcVdY3ixUTrDkXTzGe3Fd2P26qOww92uGmaM4YnWRKmfAM8VssTs5QlrfgxR1VpEq/5mzilS5AauLVLkRq4pUuSHHRb4WlvMHlRtDkS/F85FrojIJlUmoTEJlEiqTUJmEyiRUJqEyh2H3Cz4WH1fC57RBAAAAAElFTkSuQmCC);
      background-repeat: no-repeat;
      font-family: "Segoe UI";
      font-size: 15px;
      color: transparent;
      overflow: hidden;
    }
  }
  & .nav-menu {
    padding-left: 20px;
    & li {
      font-size: 1.2rem;
      color: #335963;
    }
  }

  & .nav-buttons {
    & button {
      background-color: white;
      color: #335963;
      border: 1px solid #335963;
      padding-bottom: calc(0.5em - 1px);
      padding-left: 1em;
      padding-right: 1em;
      padding-top: calc(0.5em - 1px);
      border-radius: 5px;
    }
    & .background-solid {
      background-color: #335963;
      color: #fff;
    }
  }
  & .menu-mobile {
    font-size: 2rem;
  }
}

/* HOME Carousel*/
.carousel-container {
  /* overflow: hidden; */
}

.card {
  flex-shrink: 0;
  position: relative;
  width: 100%;
  align-self: stretch;
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
  opacity: 0.5;
}

.container-twitter {
  align-content: flex-end;
  justify-content: end;
}

.hiddenElementTweets {
  display: none;
}

.hiddenElementComments {
  display: none;
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

.img-gallery:hover {
  opacity: 1;
}

.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}

.dropdown-menu {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 2px;
  border-radius: 50px;
  & form {
    position: relative;
    background: #fff;
    border-radius: 0.7rem;
  }
  & input,
  button {
    height: 75px;
    border: 0;
    font-size: 1.8rem;
  }
  & input[type="search"] {
    outline: 0;
    width: 100%;
    padding: 0 1.6rem;
    border-radius: 10px;
    transition: all 0.3s;
    transition-property: width;
    position: relative;
  }
  & button {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 5rem;
    font-weight: bold;
    background: #fff;
    border-radius: 0 0.7rem 0.7rem 0;
    transition: all 0.2s;
  }
  & button:hover {
    background-color: #335963;
    border: 1px solid #335963;
  }
  & button i {
    color: #335963;
  }
  & button:hover i {
    color: #fff;
  }
  & input:not(:placeholder-shown) {
    border-radius: 0.7rem 0 0 0.7rem;
    width: calc(100% - 5rem);
    + button {
      display: block;
    }
  }
  & label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
}

.search-box {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 2px;
  border-radius: 10px;
  & form {
    position: relative;
    background: #fff;
    border-radius: 0.7rem;
  }
  & input,
  button {
    height: 75px;
    border: 0;
    font-size: 1.8rem;
  }
  & input[type="search"] {
    outline: 0;
    width: 100%;
    padding: 0 1.6rem;
    border-radius: 10px;
    transition: all 0.3s;
    transition-property: width;
    position: relative;
  }
  & button {
    position: absolute;
    top: 0;
    right: 0;
    width: 5rem;
    font-weight: bold;
    background: #fff;
    border-radius: 0 0.7rem 0.7rem 0;
    transition: all 0.2s;
  }
  & button:hover {
    background-color: #335963;
    border: 1px solid #335963;
  }
  & button i {
    color: #335963;
  }
  & button:hover i {
    color: #fff;
  }
  & input:not(:placeholder-shown) {
    border-radius: 0.7rem 0 0 0.7rem;
    width: calc(100% - 5rem);
    + button {
      display: block;
    }
  }
  & label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
}
/* MENU HAMBURGUER CSS */
.menu-bars {
  & #menuToggle {
    display: block;
    position: relative;
    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
  }

  & #menuToggle a {
    text-decoration: none;
    color: #fff;

    transition: color 0.3s ease;
  }

  & #menuToggle a:hover {
    color: tomato;
  }

  & #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  & #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #335963;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  & #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  & #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  & #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #fff;
  }

  & #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  & #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  & #menu {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    position: fixed;
    left: 0;
    width: 300px;
    height: 100vw;
    margin: -70px 0 0 0;
    padding: 25px;
    padding-top: 100px;

    background: #335963;
    -webkit-font-smoothing: antialiased;
    transform: translate(-100%, 0);
    transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 10px 0;
    font-size: 22px;
  }

  #menuToggle input:checked ~ ul {
    transform: none;
  }
}
/* MODAL WIKI CSS */

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.faster {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.cards {
  & .card-clickable {
    transition: all 0.2s;
    color: #335963;
    cursor: pointer;
  }
  & .card-clickable:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  & img {
    height: 300px;
    object-fit: cover;
  }
}

.modal-content {
  max-height: calc(95vh);
  overflow-y: auto;
  & .box-details {
    border-left: 2px solid;
    padding-left: 15px;
    width: 100%;
    height: 20rem;
    /* overflow: hidden; */
  }
}
@media (max-width: 992px) {
  .modal-content {
    & .box-details {
      border-left: 0;
      padding-left: 0;
    }
  }
}

.details {
  height: 25rem;
}

.otherNames-animal ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 25rem;
  width: 10rem;
  gap: 1px;
}

/* roller spinner  */
.lds-roller,
.lds-roller div,
.lds-roller div:after {
  box-sizing: border-box;
}
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7.2px;
  height: 7.2px;
  border-radius: 50%;
  background: currentColor;
  margin: -3.6px 0 0 -3.6px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 62.62742px;
  left: 62.62742px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 67.71281px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 70.90963px;
  left: 48.28221px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 70.90963px;
  left: 31.71779px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 67.71281px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 62.62742px;
  left: 17.37258px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12.28719px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>