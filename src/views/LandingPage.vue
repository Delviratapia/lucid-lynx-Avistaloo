<template>
  <header>
    <div class="headerLanding py-20 bg-center bg-no-repeat" style="background-image: url('/src/assets/images/background-header.png')">
        <div class="headerContent container m-auto text-center px-6 opacity-100">
          <h1 class="text-4xl mb-12 font-bold mb-12 text-white">¡BIENVENIDO OBSERVADOR!</h1>
          <h3 class="text-2xl mb-8 text-white">Te presentamos Avistaloo</h3>
          <h3 class="text-2xl mb-20 text-white">La web donde podrás subir tus avistamientos y compartirlos con la comunidad</h3>
          <button class="unirse bg-white text-primary-color font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border border-white hover:text-white hover:bg-primary-color">
            <a href="login">UNIRSE AHORA</a>
          </button>

        </div>
      </div>
  </header>

  <section class="container mx-auto px-6 py-10 text-primary-color text-center">
    <h2 id="Que-es" class="text-4xl font-bold text-center mb-12">¿Qué es Avistaloo?</h2>
    <p class="text-2xl mb-24">Avistaloo es la app ideal para avistar cualquier tipo de ave que esté por tu zona, compartir tus avistamientos, disfrutar de nuestra wiki y comentar los avistamientos de otros usuarios y mucho más.</p>
    <h2 id="Caracteristicas" class="text-4xl font-bold text-center mb-10">Características</h2>
    <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-2/6 px-8">
            <img class="imgSection lg:w-80 lg:h-80 md:w-4/5 md:h-4/5 sm:w-3/5 sm:h-3/5" src="https://cdn-icons-png.flaticon.com/512/2196/2196168.png" alt="avista-aves">
          </div>
          <div class="w-full md:w-4/6 px-2">
            <h4 class="text-3xl font-bold mb-3">
              Avista aves
            </h4>
            <p class="text-2xl mb-8">
              Identifica las aves que estén en tu zona, sácales una foto y súbelas para que los demás puedan ver tus avistamientos y poder investigar por su cuenta. ¡Sal y avístalos a todos!
            </p>
          </div>
    </div>
    <div class="flex items-center flex-wrap mb-10">
          <div class="w-full md:w-4/6 px-4">
            <h4 class="text-3xl font-bold mb-3">
              Explora la comunidad
            </h4>
            <p class="text-2xl mb-8">
              Busca, encuentra y comenta los avistamientos de los demás. Ellos también podrán encontrar tu perfil y comentar tus avistamientos. Suena bien, ¿no?
            </p>
          </div>
          <div class="w-full md:w-2/6 px-4">
            <img class="imgSection lg:w-80 lg:h-80 md:w-4/5 md:h-4/5 sm:w-3/5 sm:h-3/5" src="https://cdn-icons-png.flaticon.com/512/3048/3048299.png" alt="explora-comunidad">
          </div>
    </div>
    <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-2/6 px-8">
            <img class="imgSection lg:w-80 lg:h-80 md:w-4/5 md:h-4/5 sm:w-3/5 sm:h-3/5" src="https://cdn-icons-png.flaticon.com/512/4003/4003646.png" alt="localiza-aves">
          </div>
          <div class="w-full md:w-4/6 px-2">
            <h4 class="text-3xl font-bold mb-3">
              Localiza aves cerca de ti
            </h4>
            <p class="text-2xl mb-8">
              Imagina irte de senderismo y querer ver las aves que hay por la zona... ¡Con Avistaloo es posible! Gracias a la geolocalización, podrás ver los avistamientos de otras personas que estén cerca de ti.
            </p>
          </div>
    </div>
    <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-4/6 px-4">
            <h4 class="text-3xl font-bold mb-3">
              Explora la wiki
            </h4>
            <p class="text-2xl mb-8">
              Tenemos a tus disposición una fantástica wiki en la que podrás ver cada ave, raza, color, tipo de plumaje, zonas donde habita... y lo mejor: puedes escuchar el tipo de sonido que emiten.
            </p>
          </div>
          <div class="w-full md:w-2/6 px-4">
            <img class="imgSection lg:w-80 lg:h-80 md:w-4/5 md:h-4/5 sm:w-3/5 sm:h-3/5" src="/src/assets/images/1178434.png" alt="explora-wiki">
          </div>
    </div>
    <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-2/6 px-6 py-6">
            <img class="imgSection lg:w-80 lg:h-80 md:w-4/5 md:h-4/5 sm:w-3/5 sm:h-3/5" src="https://cdn-icons-png.flaticon.com/512/2971/2971416.png" alt="avistamientos-semana">
          </div>
          <div class="w-full md:w-4/6 px-2">
            <h4 class="text-3xl font-bold mb-3">
              “3087 avistamientos esta semana por nuestros usuarios”
            </h4>
            <p class="text-2xl mb-8">
              Únete a nuestra comunidad y descubre los animales más importantes de nuestra península. Contacta con otros aficionados y sube tus avistamientos a nuestra red.
            </p>
            <div>
              <a href="https://www.apple.com/es/app-store/">
                <button>
                  <img src="../assets/images/app_store.png">
                </button>
              </a>
              <a href="https://play.google.com/store?hl=es&gl=US">
                <button>
                  <img width="200px" height="60px" src="https://seeklogo.com/images/G/get-it-on-google-play-badge-logo-8CDE582776-seeklogo.com.png">
                </button>
              </a>
            </div>
          </div>
    </div>
  </section>


</template>
<script>
import { useMeta } from 'vue-meta'

export default ({
   name: "LandingPage",
   setup() {
      useMeta({ title: 'Portal del Avistador' })
   },
})
</script>

<style lang="scss" scoped>

.headerLanding{
    height: 730px;
}

.headerContent{
   margin-top:80px;
}

.imgSection, .unirse {
  transition: transform 1s;
}

.imgSection:hover, .unirse:hover {
  transform: scale(1.2);
}
</style>
