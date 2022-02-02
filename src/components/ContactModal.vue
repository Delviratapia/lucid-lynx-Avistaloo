<template>
  <section
    class="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
    style="background:url('https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2004/06/forest/10237716-2-eng-GB/Forest_pillars.jpg')"
  >
    <div
      @submit.prevent="submit"
      @reset="onReset"
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center"
    >
      <div class="lg:w-3/6 lg:pr-0 pr-0">
        <h1 class="font-medium text-5xl text-white">¿En qué podemos ayudarte</h1>
        <p class="leading-relaxed mt-4 text-white">
          Si has llegado a esta página, probablemente quieres contactar con nosotros.
          Hay varias formas de contactar con el equipo de Avistaloo.com:
        </p>
        <p
          class="leading-relaxed mt-4 text-white"
        >Tienes la opción de contactar con nosotros a través de nuestras redes sociales, accesibles en los enlaces bajo este texto y desde la parte inferior de la página.</p>
        <p class="leading-relaxed mt-4 text-white">
          Si lo deseas, también tienes disponible el formulario de contacto:
          Introduce un correo, un mensaje que entre en detalles y, opcionalmente, un nombre.
        </p>
      </div>
      <div
        class="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md"
      >
        <div class="relative mb-4">
          <label for="full-name" class="leading-7 text-sm text-gray-600">Name</label>
          <input
            v-model="name"
            type="text"
            id="name"
            name="name"
            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
            required
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Mensaje:</label>
          <textarea
            v-model="message"
            id="message"
            name="message"
            rows="4"
            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
          ></textarea>
        </div>
        <button
          type="reset"
          class="text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg"
        >Enviar</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactModal",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  computed: {
    formValid() {
      const { name, email, message } = this;
      return (
        name.length > 0 &&
        /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
        message.length > 0
      );
    },
  },
  methods: {
    onReset() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
    submit() {
      if (!this.formValid) {
        return;
      }
      if (!localStorage.getItem("messages")) {
        localStorage.setItem("messages", JSON.stringify([]));
      }
      const messages = JSON.parse(localStorage.getItem("messages"));
      const { name, email, message } = this;
      messages.push({
        name,
        email,
        message,
      });
      localStorage.setItem("messages", JSON.stringify(messages));
    },
  },
};
</script>

<style>
</style>
