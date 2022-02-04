<template>
  <div class="container mx-auto fix-container-fixed-navbar">
    <h1 class="title">Mi cuenta</h1>
    <form class="form-container w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full px-6">
          <img class="mb-3 w-48 h-48 rounded-full shadow-lg mx-auto" src="../assets/images/6724394.png" alt="photo-profile">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-user-name"
          >
            Usuario
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-user-name"
            type="text"
            :value="convertJsonDataUser().displayName"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="email"
            :value="convertJsonDataUser().email"
            disabled
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full px-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Contraseña
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="··········"
            :value="convertJsonDataUser().password"
            disabled
          />
        </div>
      </div>
      <button
        href="#"
        class="submit-button block px-4 py-2 mb-0.5 text-center bg-primary-color border border-primary-color text-white transition duration-500 hover:scale-110 rounded-md"
        data-v-5752a6c6=""
      >
        Guardar cambios
      </button>
    </form>
  </div>
</template>
<script>
import { useMeta } from "vue-meta";
import { mapState } from "vuex";
import store from "../store.js";

export default {
  methods: {
    convertJsonDataUser() {
      const user = JSON.parse(localStorage.getItem("userLogged"));
      return user;
    },
    ...mapState(["user"]),
  },
  setup() {
    useMeta({ title: "Mi cuenta" });
  },
};
</script>

<style scoped>
.title {
  font-size: 42px;
  text-align: center;
  font-weight: 600;
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
}
.submit-button {
  margin: 0px auto 50px auto;
}
</style>
