<template>
  <!--navbar normal-->
  <nav id="nav-normal" class="flex navbar navbar-fixed-position items-center justify-between lg:gap-x-20 gap-x-2 lg:px-5 px-3 order-1">
    <div class="flex items-center flex-shrink-0 text-dark md:text-right ">
      <router-link v-if="!usuarioAutenticado" class=" navbar-item transition duration-500 hover:scale-125 flex items-center" to="/">
        <img class="w-24 logo-fix-size" src="../assets/images/logos/logo.png" alt="" />
        <span class="font-medium text-4xl tracking-tight text-primary-color">Avistaloo</span>
      </router-link>

      <router-link v-if="usuarioAutenticado" class=" navbar-item transition duration-500 hover:scale-125 flex items-center" to="/app">
        <img class="w-24 logo-fix-size" src="../assets/images/logos/logo.png" alt="" />
        <span class="font-medium text-4xl tracking-tight text-primary-color">Avistaloo</span>
      </router-link>  
    </div>
    <div class="text-sm justify-center hidden lg:flex">
      <router-link v-if="usuarioAutenticado" to="/app" class="text-xl mt-1 lg:inline-block lg:mt-0 text-primary-color mr-4 transition duration-500 hover:scale-110">Inicio</router-link>
      <router-link v-if="!usuarioAutenticado" to="/" class="text-xl mt-1 lg:inline-block text-center lg:mt-0 text-primary-color mr-4 transition duration-500 hover:scale-110">Inicio</router-link>
      <router-link v-if="!usuarioAutenticado" to="/que-es" class="text-xl my-4 lg:inline-block text-center mb-1 lg:mt-0 text-primary-color mr-4 transition duration-500 hover:scale-110">¿Que es?</router-link>
      <router-link v-if="!usuarioAutenticado" to="/caracteristicas" class="block text-xl my-4 lg:inline-block text-center mb-1 lg:mt-0 text-primary-color mr-4 transition duration-500 hover:scale-110">Características</router-link>
      <a href="/wiki" class="text-xl mt-1 lg:inline-block text-center lg:mt-0 text-primary-color mr-4 transition duration-500 hover:scale-110">Wiki</a>
      <router-link v-if="usuarioAutenticado" to="/app/galeria" class="block text-xl my-4 lg:inline-block text-center mb-1 lg:mt-0 text-primary-color mr-4 transition duration-500 hover:scale-110">Galería</router-link>
      <router-link v-if="usuarioAutenticado" to="/app/mapa" class="block text-xl mt-1 lg:inline-block text-center lg:mt-0 text-primary-color transition duration-500 hover:scale-110">Mapa</router-link>
    </div>
    <div class="block lg:hidden">
      <button v-on:click="showMobileNavbar" id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-primary-color border-primary-color hover:text-white hover:bg-primary-color appearance-none focus:outline-none">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    
    <div class="lg:flex hidden flex-col lg:flex-row items-center justify-center">
      <router-link
        to="/login"
        v-if="!usuarioAutenticado"
        class="show-modal block px-4 py-2 mb-0.5 text-center lg:mr-3 bg-white border border-primary-color text-primary-color transition duration-500 hover:scale-110 rounded-md"
        >Iniciar Sesión</router-link
      >
      <router-link
        to="/registro"
        v-if="!usuarioAutenticado"
        class="show-modal-register block px-4 py-2 mb-0.5 text-center bg-primary-color border border-primary-color text-white transition duration-500 hover:scale-110 rounded-md"
        >Registrarse</router-link
      >
      <div v-if="usuarioAutenticado" class="user-bubble">
        <BubbleUser />
      </div>
    </div>
  </nav>

  <!--navbar mobile-->
  <nav tabindex="0" id="nav-mobile" class="navbar hidden flex-col items-center justify-between flex-wrap lg:hidden lg:gap-x-20 gap-x-2 lg:px-5 px-3 order-1 "  @blur="nofocus">
    <div class="flex justify-between items-center w-full">
      <div class="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
        <router-link v-if="!usuarioAutenticado" class=" navbar-item transition duration-500 hover:scale-125 flex items-center" to="/">
          <img class="w-24 logo-fix-size" src="../assets/images/logos/logo.png" alt="" />
          <span class="font-medium text-4xl tracking-tight text-primary-color">Avistaloo</span>
        </router-link>
        <router-link v-if="usuarioAutenticado" class=" navbar-item transition duration-500 hover:scale-125 flex items-center" to="/app">
          <img class="w-24 logo-fix-size" src="../assets/images/logos/logo.png" alt="" />
          <span class="font-medium text-4xl tracking-tight text-primary-color">Avistaloo</span>
        </router-link> 
      </div>
      <div class="block lg:hidden">
        <button v-on:click="showMobileNavbar" id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-primary-color border-primary-color hover:text-white hover:bg-primary-color appearance-none focus:outline-none">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>

    <div id="nav-content" class="w-full flex flex-col justify-center  text-center">
      <hr  />
      <div class="text-sm lg:flex-grow flex flex-col mb-2"></div>
        <router-link to="/app" v-if="usuarioAutenticado" class="text-xl lg:inline-block text-center text-primary-color transition duration-500 hover:scale-110 mb-2 mt-2">Inicio</router-link>
        <router-link to="/" v-if="!usuarioAutenticado" class="text-xl lg:inline-block text-center text-primary-color transition duration-500 hover:scale-110 mb-2 mt-2">Inicio</router-link>
        <router-link v-if="!usuarioAutenticado" to="/que-es" class="text-xl lg:inline-block text-center lg:mt-0 text-primary-color transition duration-500 hover:scale-110 mb-2">¿Que es?</router-link>
        <router-link v-if="!usuarioAutenticado" to="/caracteristicas" class="block text-xl lg:inline-block text-center lg:mt-0 text-primary-color transition duration-500 hover:scale-110 mb-2">Características</router-link>
        <a href="/wiki" class="text-xl lg:inline-block text-center lg:mt-0 text-primary-color transition duration-500 hover:scale-110 mb-2">Wiki</a>
        <router-link v-if="usuarioAutenticado" to="/app/galeria-phone" class="block text-xl lg:inline-block text-center lg:mt-0 text-primary-color transition duration-500 hover:scale-110 mb-2">Galería</router-link>
        <router-link v-if="usuarioAutenticado" to="/app/mapa" class="block text-xl lg:inline-block text-center lg:mt-0 text-primary-color transition duration-500 hover:scale-110 mb-2">Mapa</router-link>
      </div>
      <div class="flex flex-col mx-auto mb-2">
        <router-link
          to="/login"
          v-if="!usuarioAutenticado"
          class="block px-4 py-2 mb-0.5 text-center lg:mr-3 bg-white border border-primary-color text-primary-color transition duration-500 hover:scale-110 rounded-md"
          >Iniciar Sesión</router-link
        >
        <router-link
          to="/registro"
          v-if="!usuarioAutenticado"
          class="mt-1 block px-4 py-2 mb-0.5 text-center bg-primary-color border border-primary-color text-white transition duration-500 hover:scale-110 rounded-md"
          >Registrarse</router-link
        >
      </div>
      
        <div v-if="usuarioAutenticado" class="flex  items-center justify-center session-text">
          <ul class="flex">
            <li class="mb-2 mr-4">
              <router-link to="/mi-cuenta" class="flex justify-center" title="Mi cuenta">
                <div class="mr-2 text-center">
                  <svg viewBox="0 0 496 512">
                    <path
                      fill="currentColor"
                      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V416c0-35.3 28.7-64 64-64 11.1 0 27.5 11.4 64 11.4 36.6 0 52.8-11.4 64-11.4 35.3 0 64 28.7 64 64v13.6zm30.6-27.5c-6.8-46.4-46.3-82.1-94.6-82.1-20.5 0-30.4 11.4-64 11.4S204.6 320 184 320c-48.3 0-87.8 35.7-94.6 82.1C53.9 363.6 32 312.4 32 256c0-119.1 96.9-216 216-216s216 96.9 216 216c0 56.4-21.9 107.6-57.4 146.1zM248 120c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 144c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"
                    />
                  </svg>
                </div>
                <div>Mi cuenta</div>
              </router-link>
            </li>
            <li class="mb-2">
              <a href="#" class="flex justify-center" title="Desconectar">
                <div class="mr-2">
                  <svg viewBox="0 0 576 512">
                    <path
                      fill="currentColor"
                      d="M512 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V96c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v320zm-72-128H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM208 288c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm46.8 144c-19.5 0-24.4 7-46.8 7s-27.3-7-46.8-7c-21.2 0-41.8 9.4-53.8 27.4C100.2 342.1 96 355 96 368.9V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-7 2.1-13.8 6-19.6 5.6-8.3 15.8-13.2 27.3-13.2 12.4 0 20.8 7 46.8 7 25.9 0 34.3-7 46.8-7 11.5 0 21.7 5 27.3 13.2 3.9 5.8 6 12.6 6 19.6V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-13.9-4.2-26.8-11.4-37.5-12.3-18-32.9-27.4-54-27.4z"
                    />
                  </svg>
                </div>
                <div @click="logout">
                  Desconectar
                </div>
              </a>
            </li>
          </ul>
        </div>
    </div>
  </nav>
</template>
<script>
import BubbleUser from "./BubbleUser.vue";
import { mapActions, mapGetters } from "vuex";
import store from "../store.js";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["usuarioAutenticado"]),
  },
  methods: {
    ...mapActions(["logout"]),
    hideNav(){
      let navMobile = document.querySelector("#nav-mobile");
      navMobile.classList.remove("flex");
      navMobile.classList.add("hidden");
    },
    showMobileNavbar() {
      let navMobile = document.getElementById("nav-mobile").classList;
      if (navMobile.contains("hidden")) {
        navMobile.remove("hidden");
        navMobile.add("flex");
        document.querySelector("#nav-mobile").focus();
      } else {
        this.hideNav();
      }
    },
    nofocus(){
      setTimeout(this.hideNav, 300);
    },
  },
  
  mounted() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar-fixed-position").style.top = "0";
    } else {
      document.querySelector(".navbar-fixed-position").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    }
  },
  components: { BubbleUser },
};
</script>
<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  transition: top 0.3s;
  width: 100%;
  background: white;
  z-index: 1005;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

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

.logo-fix-size {
  position:relative;
  width:70px;
  height:70px;
  top:-2px;
}

.logo-fix-size img {
  position:absolute;
}

svg{
  width: 1.5rem;
  height: 1.5rem;
  color:#94a2b0;
}

.session-text{
  color:#94a2b0;
}

.user-bubble{
  width: 210.39px;
}

</style>
