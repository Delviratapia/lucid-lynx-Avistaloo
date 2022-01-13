<template>
<div class="container mx-auto fix-container-fixed-navbar">
  <Carousel />
   <div
    class="flex text-center flex-col items-center gap-4 p-10 sm:gap-6 sm:items-stretch sm:flex-row sm:justify-around">

    <div class="shadow-md bg-white rounded-2xl shadow-primary w-full sm:w-72 flex flex-col justify-center py-4 transition duration-500 hover:scale-125">
      <img class="h-48 mx-auto" src="../assets/images/global-learning.png" alt="" />
      <div class="px-4">
        <h1 class="mt-3 text-gray-800 text-2xl font-bold my-2">¡Aprende!{{hola}}</h1>
        <p class="text-gray-700 mb-2">Explora sobre los diferentes tipos de aves, ¡Escucha sus sonidos!</p>
        <div class="flex justify-between mt-4">

        </div>
      </div>
    </div>

    <div class="shadow-md bg-white rounded-2xl shadow-primary w-full sm:w-72 flex flex-col justify-center py-4 transition duration-500 hover:scale-125">
      <img class="h-48 mx-auto" src="../assets/images/registered.png" alt="" />
      <div class="px-4 ">
        <h1 class="mt-3 text-gray-800 text-2xl font-bold my-2">Comparte</h1>
        <p class="text-gray-700 mb-2">¡Registra tus avistamientos con nosotros y comparte con los demás!</p>
        <div class="flex justify-between mt-4">

        </div>
      </div>
    </div>

    <div class="shadow-md bg-white rounded-2xl shadow-primary w-full sm:w-72 flex flex-col justify-center py-4 transition duration-500 hover:scale-125">
      <img class="h-48 mx-auto" src="../assets/images/explore.png" alt="" />
      <div class="px-4">
        <h1 class="mt-3 text-gray-800 text-2xl font-bold my-2">Localiza cerca de tí</h1>
        <p class="text-gray-700 mb-2">¿Te vas de viaje? ¡Pues coje tu mochila y localizalas allá!</p>
        <div class="flex justify-between mt-4">

        </div>
      </div>
    </div>

  </div>
  <TwitterCard />
  <LastComments />
  <Gallery />
  </div>
</template>

<script>
import store from '../store.js'
import Carousel from '../components/Carousel.vue'
import TwitterCard from '../components/TwitterCard.vue'
import LastComments from '../components/LastComments.vue'
import Gallery from '../components/Gallery.vue'
import { useMeta } from 'vue-meta'
export default {
  name: "Home",
  components: {
    Carousel,
    TwitterCard,
    LastComments,
    Gallery
  },
  setup () {
    useMeta({ title: 'Inicio' })
  }
};
</script>
<style lang="scss" scoped>
</style>
