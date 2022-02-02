<template>
  <section class="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat">
    <form
      @submit.prevent="submit"
      @reset="onReset"
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center"
    >
      <div class="lg:w-3/6 lg:pr-0 pr-0">
        <h1 class="font-medium text-5xl text-black">¿En qué podemos ayudarte</h1>
        <p class="leading-relaxed mt-4 text-black">
          Si has llegado a esta página, probablemente quieres contactar con nosotros.
          Hay varias formas de contactar con el equipo de Avistaloo.com:
        </p>
        <p class="leading-relaxed mt-4 text-black">
          También tienes disponible el formulario de contacto :
          Introduce un correo, un mensaje que entre en detalles y, opcionalmente, un nombre.
        </p>
        <p
          class="leading-relaxed mt-4 text-black"
        >Tienes la opción de contactar con nosotros a través de nuestras redes sociales, accesibles en los enlaces bajo este texto y desde la parte inferior de la página.</p>
      </div>
      <div
        class="lg:w-3/6 xl:w-2/5 md:w-full bg-white p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-2xl"
      >
        <div class="relative mb-4">
          <label for="full-name" class="leading-7 text-sm text-gray-600">Nombre:</label>
          <input
            v-model="name"
            type="text"
            id="name"
            name="name"
            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
            placeholder="Escribe un nombre al que referirnos..."
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email:</label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
            placeholder="Escribe un email de contacto..."
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
            placeholder="Escriba aquí el motivo de su contacto..."
          ></textarea>
        </div>
        <button
          id="contact-submit-button"
          type="reset"
          class="text-white bg-[#335963] rounded-2xl border-0 py-2 px-8 focus:outline-none text-lg transition hover:bg-[#223b42] duration-150 ease-in"
        >Enviar</button>
      </div>
    </form>
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
  methods: {
    onReset() {
      if (this.name.length > 0 && /(.+)@(.+){2,}.(.+){2,}/.test(this.email) && this.message.length > 0) {
        alert('Funciona bien'); //Cambia esto por un cartelito de enviado
        this.name = "";
        this.email = "";
        this.message = "";
      } else {
        alert('No funciona'); //Esto también, cartelito de fallo
      }
    }
  },
};
</script>

<style>
</style>
