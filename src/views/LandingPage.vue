<template>
   <header>
    <div class="headerLanding py-20 bg-no-repeat bg-fixed" style="background-image: url('/src/assets/images/background-header.png')">
        <div class="headerContent container m-auto text-center px-6 opacity-100">
          <h1 class="text-4xl mb-12 font-bold mb-12 text-white">¡BIENVENIDO OBSERVADOR!</h1>
          <h3 class="text-2xl mb-8 text-white">Te presentamos Avistaloo</h3>
          <h3 class="text-2xl mb-20 text-white">La web donde podrás subir tus avistamientos y compartirlos con la comunidad</h3>
          <button class="show-modal-unirse bg-white text-primary-color font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border border-white hover:text-white hover:bg-primary-color">UNIRSE AHORA</button>
          <!--Modal Unirse-->
          <div class="modal-unirse hidden h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 modalsform">
                <!-- modal -->
                <div class="bg-white shadow-md border border-gray-200 rounded-lg w-96 p-5 sm:p-7 lg:p-9  dark:border-primary-color">
                  <form class="space-y-6" action="#">
                    <!-- modal header -->
                    <div class="border-b py-2 flex justify-between items-center">
                      <h3 class="font-bold text-lg text-primary-color">Registrarse</h3>
                      <button class="text-primary-color close-modal-unirse">&cross;</button>
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
                      <button type="submit" class="w-full  px-4 py-2 hover:text-primary-color hover:bg-white hover:border border-primary-color text-white border border-primary-color bg-primary-color rounded">Registrarse</button>
                      <div class="text-sm font-bold text-primary-color">
                        ¿Tienes una cuenta? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Iniciar sesión</a>
                      </div>
                    </form>
                </div>
          </div>

        </div>
      </div>
  </header>

  <section class="container mx-auto px-6 py-10 text-primary-color text-center">
    <h2 id="Que-es" class="text-4xl font-bold text-center mb-12">¿Qué es Avistaloo?</h2>
    <p class="text-2xl mb-24">Avistaloo es la app ideal para avistar cualquier tipo de ave que esté por tu zona, compartir tus avistamientos, disfrutar de nuestra wiki y comentar los avistamientos de otros usuarios y mucho más.</p>
    <h2 id="Caracteristicas" class="text-4xl font-bold text-center mb-10">Características</h2>
    <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-2/6 px-8">
            <img class="lg:w-80 lg:h-80 md:w-4/5 md:h-4/5 sm:w-3/5 sm:h-3/5" src="https://cdn-icons-png.flaticon.com/512/2196/2196168.png" alt="avista-aves">
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
            <img class="lg:w-80 lg:h-80 md:w-4/5 md:h-4/5 sm:w-3/5 sm:h-3/5" src="https://cdn-icons.flaticon.com/png/512/3285/premium/3285018.png?token=exp=1639857178~hmac=eb9d95ec853c97ee836e881cce8daa50" alt="explora-comunidad">
          </div>
    </div>
    <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-2/6 px-8">
            <img class="lg:w-80 lg:h-80 md:w-4/5 md:h-4/5 sm:w-3/5 sm:h-3/5" src="https://cdn-icons-png.flaticon.com/512/4003/4003646.png" alt="localiza-aves">
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
            <img class="lg:w-80 lg:h-80 md:w-4/5 md:h-4/5 sm:w-3/5 sm:h-3/5" src="https://cdn-icons.flaticon.com/png/512/3696/premium/3696879.png?token=exp=1639857430~hmac=2ef57a27962ece0c05549f9ce6d601e6" alt="explora-wiki">
          </div>
    </div>
    <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-2/6 px-6 py-6">
            <img class="lg:w-80 lg:h-80 md:w-4/5 md:h-4/5 sm:w-3/5 sm:h-3/5" src="https://cdn-icons.flaticon.com/png/512/1149/premium/1149050.png?token=exp=1640008947~hmac=67a727dbd0783ed04fe9d6e02ebc3c93" alt="avistamientos-semana">
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
<style scoped>
/* Landing Page */
.headerLanding{
   height: 730px;
}

.headerContent{
   margin-top:70px;
}

.logoFooter{
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
}</style>
