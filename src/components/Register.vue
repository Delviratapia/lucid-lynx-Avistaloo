<template>
  <div
    class="login-container flex flex-col items-center justify-center bg-gray-100"
  >
    <div class="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
      <a class="navbar-item transition duration-500 hover:scale-125" href="/">
        <img width="80" src="../assets/images/logos/logo.png" alt="" />
      </a>
      <span class="font-medium text-4xl tracking-tight text-primary-color"
        >Avistaloo</span
      >
    </div>
    <div
      class="card flex flex-col bg-white shadow-md rounded-2xl p-5 sm:px-6 md:px-8 lg:px-10"
    >
      <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
        <p>Registra tu cuenta</p>
      </div>
      <div class="mt-10">
        <form @submit.prevent="submitFormRegister">
          <!-- <div class="flex flex-col mb-5">
            <label
              for="displayName"
              class="mb-1 text-xs tracking-wide text-gray-600 px-2"
              >Foto perfil:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </div>
              <input
                v-on:change="photoUrl"
                id="displayName"
                type="file"
                name="displayName"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Usuario"
              />
            </div>
          </div> -->
          <div class="flex flex-col mb-5">
            <label
              for="displayName"
              class="mb-1 text-xs tracking-wide text-gray-600 px-2"
              >Usuario:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </div>
              <input
                v-model.trim="displayName"
                id="displayName"
                type="text"
                name="displayName"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Usuario"
              />
            </div>
          </div>
          <div class="flex flex-col mb-5">
            <label
              for="email"
              class="mb-1 text-xs tracking-wide text-gray-600 px-2"
              >E-Mail:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </div>
              <input
                v-model.trim="email"
                id="email"
                type="email"
                name="email"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label
              for="password"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 px-2"
              >Contraseña:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <span>
                  <font-awesome-icon :icon="['fas', 'lock']" />
                </span>
              </div>
              <input
                v-model.trim="pass1"
                id="pass1"
                type="password"
                name="pass1"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Contraseña"
              />
            </div>
          </div>
          <div class="flex w-full">
            <button
              type="submit"
              class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">Acceder</span>
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      v-if="error.message !== null"
      class="error-message flex justify-center m-4"
    >
      <div
        id="message-error"
        class="py-3 px-6 text-base text-red-700 inline-flex items-center"
        role="alert"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times-circle"
          class="w-4 h-4 mr-2 fill-current"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
          ></path>
        </svg>
        {{ error.message }}
      </div>
    </div>
    <div class="flex justify-center items-center mt-6">
      <p
        href="#"
        target="_blank"
        class="inline-flex items-center text-gray-700 font-medium text-xs text-center"
      >
        <span class="ml-2"
          >¿Ya tienes una cuenta?
          <router-link
            to="/login"
            class="text-xs ml-2 text-blue-500 font-semibold"
            >Inicia sesión</router-link
          >
        </span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import router from "../router/router";
export default {
  data() {
    return {
      email: "",
      pass1: "",
      displayName: "",
    };
  },
  computed: {
    validateMail() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.pass1.length > 5 && this.pass1 === this.pass2) {
        return false;
      }
      return true;
    },
    ...mapState(["error"]),
  },
  methods: {

    ...mapActions(["userRegister"]),
    submitFormRegister() {
      this.userRegister({ email: this.email, password: this.pass1, displayName: this.displayName});
      if (this.email !== "" && this.pass1 !== "" && this.displayName) {
        this.email = "";
        this.pass1 = "";
        this.pass2 = "";
        this.displayName = "";
        this.$swal({
          icon: "success",
          title: "Registro realizado correctamente",
          text: "Accede ahora a la aplicación",
          confirmButtonText: "Acceder",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/app");
          }
        });
      } else {
        this.$swal({
          icon: "error",
          title: "Este usuario ya está registrado",
          text: "Introduce otros datos",
          confirmButtonText: "Acceder",
        })
      }
    },
  },
};
</script>
<style scoped>
.login-container {
  height: 80.2vh;
}
button {
  background-color: #335963;
}
button:hover {
  background-color: #223b42;
}
.error-message {
  border-radius: 20px;
  border: 2px solid rgb(185 28 28);
}
.login-container .card {
  min-width: 400px;
}
</style>
