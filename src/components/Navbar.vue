<template>
  <nav class="navbar flex items-center justify-between flex-wrap  lg:gap-x-20 gap-x-2 lg:px-5 px-3 order-1">

    <div class="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
      <a class="navbar-item transition duration-500 hover:scale-125" href="/">
        <img width="80px" src="../assets/images/logos/logo.png" alt="">
      </a>
      <span class="font-medium text-4xl tracking-tight text-primary-color">Avistaloo</span>
    </div>

    <div class="block lg:hidden">
      <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-primary-color border-primary-color hover:text-white hover:bg-primary-color appearance-none focus:outline-none">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>

  <div id="nav-content" class="w-full flex-grow lg:flex items-center justify-center lg:w-auto hidden lg:block pt-6 lg:pt-0 md:text-center">
    <hr class="block lg:hidden mb-4">
     <div class="text-sm lg:flex-grow">
       <router-link to="/" class="block text-xl mt-1 lg:inline-block text-center lg:mt-0 text-primary-color mr-4 transition duration-500 hover:scale-110">Inicio</router-link>
       <router-link to="/sobre-nosotros" class="block text-xl mt-1 lg:inline-block text-center lg:mt-0 text-primary-color mr-4 transition duration-500 hover:scale-110">Nosotros</router-link>
        <router-link to="/wiki" class="block text-xl mt-1 lg:inline-block text-center lg:mt-0 text-primary-color mr-4 transition duration-500 hover:scale-110">Wiki</router-link>
        <a href="/#gallery" class="block text-xl my-4 lg:inline-block text-center mb-1 lg:mt-0 text-primary-color mr-4 transition duration-500 hover:scale-110">Galería</a>
     </div>
     <div class="flex flex-col lg:flex-row items-center justify-center block">
        <router-link to="/login" v-if="!usuarioAutenticado" href="#" class="show-modal block w-32 px-4 py-2 mb-0.5 text-center lg:mr-3 bg-white border border-primary-color text-primary-color transition duration-500 hover:scale-110 rounded-md">Iniciar Sesión</router-link>
        <a style="cursor:pointer" v-if="usuarioAutenticado" @click="logout" class="show-modal block w-32 px-4 py-2 mb-0.5 text-center lg:mr-3 bg-white border border-primary-color text-primary-color transition duration-500 hover:scale-110 rounded-md">Cerrar Sesión</a>
          <!--Modal Login-->
        <div class="modal hidden h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 modalsform">
          <!-- modal -->
          <div class="bg-white shadow-md border border-primary-color rounded-lg w-96 p-5 sm:p-7 lg:p-9">
            <form class="space-y-6" action="#">
              <!-- modal header -->
              <div class="border-b py-2 flex justify-between items-center">
                <h3 class="font-bold text-lg text-primary-color">Iniciar sesión</h3>
                <button class="text-primary-color close-modal">&cross;</button>
              </div>
              <!-- modal body -->
              <div>
                <label for="email" class="text-sm font-bold text-primary-color">Email</label>
                <input type="email" name="email" id="email" class="bg-white border border-primary-color text-primary-color sm:text-sm rounded-lg block w-full p-2.5" placeholder="usuario@gmail.com" required="">
              </div>
              <div>
                <label for="password" class="text-sm font-bold text-primary-color block mb-2">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-white border border-primary-color text-primary-color sm:text-sm rounded-lg block w-full p-2.5" required="">
              </div>
              <div class="flex items-start">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class=" dark:border-gray-600 focus:ring-primary-color ring-offset-primary-color">
                                </div>
                    <div class="text-sm ml-3">
                      <label for="remember" class="font-bold text-primary-color">Recuerdame</label>
                    </div>
                  </div>
                </div>
                <button type="submit" class="w-full  px-4 py-2 hover:text-primary-color hover:bg-white hover:border border-primary-color text-white border border-primary-color bg-primary-color rounded">Iniciar sesión</button>
                <div class="text-sm font-bold text-primary-color">
                  ¿No registrado? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Crear cuenta</a>
                </div>
              </form>
          </div>
        </div>

        <a v-if="!usuarioAutenticado" href="#" class="show-modal-register block w-32 px-4 py-2 mb-0.5 text-center bg-primary-color border border-primary-color text-white transition duration-500 hover:scale-110 rounded-md">Registrarse</a>
          <!--Modal Register-->
        <div class="modal-register hidden h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 modalsform">
          <!-- modal -->
          <div class="bg-white shadow-md border border-gray-200 rounded-lg w-96 p-5 sm:p-7 lg:p-9  dark:border-primary-color">
            <form class="space-y-6" action="#">
              <!-- modal header -->
              <div class="border-b py-2 flex justify-between items-center">
                <h3 class="font-bold text-lg text-primary-color">Registrarse</h3>
                <button class="text-primary-color close-modal-register">&cross;</button>
              </div>
              <!-- modal body -->
              <div>
                <label for="name" class="text-sm font-bold text-primary-color">Nombre</label>
                <input type="name" name="name" id="name" class="bg-white border border-primary-color text-primary-color sm:text-sm rounded-lg block w-full p-2.5  " placeholder="Ingrese su nombre" required="">
              </div>
              <div>
                <label for="user" class="text-sm font-bold text-primary-color">Usuario</label>
                <input type="user" name="user" id="user" class="bg-white border border-primary-color text-primary-color sm:text-sm rounded-lg block w-full p-2.5  " placeholder="Ingrese su usuario" required="">
              </div>
              <div>
                <label for="email" class="text-sm font-bold text-primary-color">Email</label>
                <input type="email" name="email" id="email" class="bg-white border border-primary-color text-primary-color sm:text-sm rounded-lg block w-full p-2.5  " placeholder="Ingrese su email" required="">
              </div>
              <div>
                <label for="password" class="text-sm font-bold text-primary-color block mb-2">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="Ingrese una contraseña" class="bg-white border border-primary-color text-primary-color sm:text-sm rounded-lg block w-full p-2.5  " required="">
              </div>
              <div>
                <label for="confirm-password" class="text-sm font-bold text-primary-color block mb-2">Confirmar contraseña</label>
                <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirme su contraseña" class="bg-white border border-primary-color text-primary-color sm:text-sm rounded-lg block w-full p-2.5  " required="">
              </div>
              <div class="flex items-start">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="focus:ring-primary-color ring-offset-primary-color"
                    />
                  </div>
                  <div class="text-sm">
                    <label for="remember" class="font-bold text-primary-color"
                      >Estoy de acuerdo con los
                      <a
                        href="#"
                        class="text-blue-700 hover:underline dark:text-blue-500"
                        >términos y condiciones</a
                      ></label
                    >
                  </div>
                </div>
              </div>
                <button type="submit" class="w-full  px-4 py-2 hover:text-primary-color hover:bg-white hover:border border-primary-color text-white border border-primary-color bg-primary-color rounded">Registrarse</button>
                <div class="text-sm font-bold text-primary-color">
                  ¿Tienes una cuenta? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Iniciar sesión</a>
                </div>
              </form>
          </div>
        </div>
      </div>
  </div>

  </nav>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import store from '../store.js'
export default {
  computed: {
    ...mapGetters(['usuarioAutenticado'])
  },
  methods: {
    ...mapActions(['logout'])
  }
  /*
  mounted() {
    /*MENU MOBILE

document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}

/*LOGIN-REGISTER-CREATE

const modal = document.querySelector('.modal');
const showModal = document.querySelector('.show-modal');
const closeModal = document.querySelectorAll('.close-modal');

showModal.addEventListener('click', function (){
    modal.classList.remove('hidden')
});

closeModal.forEach(close => {
    close.addEventListener('click', function (){
        modal.classList.add('hidden')
    });
});

const modalRegister = document.querySelector('.modal-register');
const showModalRegister = document.querySelector('.show-modal-register');
const closeModalRegister = document.querySelectorAll('.close-modal-register');

showModalRegister.addEventListener('click', function (){
    modalRegister.classList.remove('hidden')
});

closeModalRegister.forEach(close => {
    close.addEventListener('click', function (){
        modalRegister.classList.add('hidden')
    });
});

const modalUnirse = document.querySelector('.modal-unirse');
const showModalUnirse = document.querySelector('.show-modal-unirse');
const closeModalUnirse = document.querySelectorAll('.close-modal-unirse');

showModalUnirse.addEventListener('click', function (){
    modalUnirse.classList.remove('hidden')
});

closeModalUnirse.forEach(close => {
    close.addEventListener('click', function (){
        modalUnirse.classList.add('hidden')
    });
});

/*MODAL CONTACT

const modalContact = document.querySelector('.modal-contact');
const showModalContact = document.querySelector('.show-modal-contact');
const closeModalContact = document.querySelectorAll('.close-modal-contact');

showModalContact.addEventListener('click', function (){
    modalContact.classList.remove('hidden')
});

closeModalContact.forEach(close => {
    close.addEventListener('click', function (){
        modalContact.classList.add('hidden')
    });
});
  },
  */
}
</script>
<style lang="scss" scoped>
.navbar {

    position:fixed;
    top:0;
   width: 100%;
   background: white;
   z-index:999;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

   & .name-logo {
      font-size:2rem;
   font-weighty:600;
   color:#335963;
   }
   & .searchbar-container {
      padding-left:25px;

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
         font-family: 'Segoe UI';
         font-size: 15px;
         color: transparent;
         overflow: hidden;
      }

   }
   & .nav-menu {
      padding-left:20px;
      & li {
         font-size:1.2rem;
         color:#335963;
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
         border-radius:5px;
      }
      & .background-solid {
         background-color:#335963;
         color:#FFF;
      }
   }
   & .menu-mobile {
      font-size:2rem;
   }
}
</style>
