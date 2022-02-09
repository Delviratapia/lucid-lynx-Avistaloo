<template>
<HeroHome />
<div class="container mx-auto">
  <Carousel />
   <div class="container-feature flex text-center flex-col items-center sm:gap-5 sm:flex-row">
    <div class="card-feature rounded-2xl sm:w-72 flex flex-col justify-center py-4">
      <img class="h-48 mx-auto" src="../assets/images/global-learning.png" alt="" />
      <div class="px-4">
        <h2 class="mt-3 text-gray-800 text-2xl font-bold my-2">¡Aprende!{{hola}}</h2>
        <p class="text-gray-700 mb-2">Explora sobre los diferentes tipos de aves, ¡Escucha sus sonidos!</p>
      </div>
    </div>

    <div class="card-feature rounded-2xl sm:w-72 flex flex-col justify-center py-4">
      <img class="h-48 mx-auto" src="../assets/images/registered.png" alt="" />
      <div class="px-4 ">
        <h2 class="mt-3 text-gray-800 text-2xl font-bold my-2">Comparte</h2>
        <p class="text-gray-700 mb-2">¡Registra tus avistamientos con nosotros y comparte con los demás!</p>
      </div>
    </div>

    <div class="card-feature rounded-2xl sm:w-72 flex flex-col justify-center py-4">
      <img class="h-48 mx-auto" src="../assets/images/explore.png" alt="" />
      <div class="px-4">
        <h2 class="mt-3 text-gray-800 text-2xl font-bold my-2">Localiza cerca de tí</h2>
        <p class="text-gray-700 mb-2">¿Te vas de viaje? ¡Pues coje tu mochila y localizalas allá!</p>
      </div>
    </div>
    <div class="card-feature rounded-2xl sm:w-72 flex flex-col justify-center py-4">
      <img class="h-48 mx-auto" src="../assets/images/bird-icon.png" alt="" />
      <div class="px-4">
        <h2 class="mt-3 text-gray-800 text-2xl font-bold my-2">Cuida de ellos</h2>
        <p class="text-gray-700 mb-2">No olvides respetar las aves, ¡Manten la distancia! </p>
      </div>
    </div>
  </div>
  <div class="container-twitter-card">
    <h2 class="title"><i class="fas fa-chevron-right"></i>Últimos Comentarios</h2>
  <TwitterCard />
  </div>
    <div class="container-comments section">
      <h2 id="avistamientos" class="title"><i class="fas fa-chevron-right"></i>Últimos Avistamientos</h2>
  <LastComments />
  </div>
     <div class="container-gallery section">
      <h2 id="avistamientos" class="title"><i class="fas fa-chevron-right"></i>Galería</h2>
 <Gallery />
  </div>
  </div>
</template>

<script>
import store from '../store.js'
import Carousel from '../components/Carousel.vue'
import TwitterCard from '../components/TwitterCard.vue'
import LastComments from '../components/LastComments.vue'
import Gallery from '../components/Gallery.vue'
import HeroHome from '../components/HeroHome.vue'
import { useMeta } from 'vue-meta'
export default {
  name: "Home",
  components: {
    Carousel,
    TwitterCard,
    LastComments,
    Gallery,
    HeroHome
  },
  setup () {
    useMeta({ title: 'Inicio' })
  }
};
</script>
<style lang="scss" scoped>
.container-feature {
  justify-content:center;
  gap:2rem;
  margin:40px 0px;
}

.container-feature .card-feature {
  transition: all 0.2s;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width:100%;
}
.container-feature .card-feature:hover {
  transform: scale(1.05);
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

h2.title {
  color:#335963;
  font-size:32px;
  font-weight:600;
  border-bottom:4px solid #33596338;
  text-transform:uppercase;
}

h2.title i {
  padding-right:20px;
}
@media(max-width:768px) {
  h2.title{
    text-align:center;
  }
  h2.title i {
    display:none;
  }
}
.section {
  margin-top:40px;
}
</style>
