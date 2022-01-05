<template>
     <footer
      class="
        flex flex-row
        justify-around
        items-center
        navxs:flex-col
        navsm:flex-col
        gap-y-6 gap-x-6
        py-2
        bg-[#335963]
      "
    >
      <div class="flex flex-row gap-x-3 mt-4 md:mt-0">
        <!-- Añadir los enlaces de las RRSS -->
        <a href="https://www.facebook.com/profile.php?id=100075282414569"
          ><img
            class="rrss"
            src="../assets/images/fcbk.png"
            alt="Logo de Facebook"
        /></a>
        <a href="https://www.pinterest.com/"
          ><img
            class="rrss"
            src="../assets/images/pntrst.png"
            alt="Logo de Pinterest"
        /></a>
        <a href="https://www.instagram.com/avistaloo/"
          ><img
            class="rrss"
            src="../assets/images/instg.png"
            alt="Logo de Instagram"
        /></a>
        <a href="https://twitter.com/avistaloo"
          ><img
            class="rrss"
            src="../assets/images/twtr.png"
            alt="Logo de Twitter"
        /></a>
      </div>
      <div class="flex flex-col items-center flex-nowrap mt-4">
        <img
          id="footer-logo"
          class="logo-footer"
          src="../assets/images/logos/logo.png"
          alt="Logo de Avistaloo"
        />
        <p class="text-white text-sm mb-10">© 2021 Avistaloo</p>
      </div>
      <div class="flex flex-col items-center text-white font-medium mb-4 md:mb-0">
        <!-- Añadir los enlaces del footer -->
        <router-link to="/sobre-nosotros">¿Quiénes somos?</router-link>
        <router-link to="/politica-de-privacidad">Política de privacidad</router-link>
        <router-link to="/">Contáctanos</router-link>
        <!--Modal Contact-->
        <div
          class="
            modal-contact
            hidden
            h-screen
            w-full
            fixed
            left-0
            top-0
            flex
            justify-center
            items-center
            bg-black bg-opacity-70
          "
        >
          <!-- modal -->
          <div
            class="
              bg-white
              shadow-md
              border border-primary-color
              rounded-lg
              w-96
              p-5
              sm:p-7
              lg:p-9
            "
          >
            <form class="space-y-6" action="#">
              <!-- modal header -->
              <div class="border-b py-2 flex justify-between items-center">
                <h3 class="font-bold text-lg text-primary-color">
                  Contáctanos
                </h3>
                <button class="text-primary-color close-modal-contact">
                  &cross;
                </button>
              </div>
              <!-- modal body -->
              <div>
                <label
                  for="name-contact"
                  class="text-sm font-bold text-primary-color"
                  >Nombre</label
                >
                <input
                  type="name"
                  name="name-contact"
                  id="name-contact"
                  class="
                    bg-white
                    border border-primary-color
                    text-primary-color
                    sm:text-sm
                    rounded-lg
                    block
                    w-full
                    p-2.5
                  "
                  placeholder="Ingrese su nombre"
                  required=""
                />
              </div>
              <div>
                <label
                  for="email-contact"
                  class="text-sm font-bold text-primary-color"
                  >Email</label
                >
                <input
                  type="email"
                  name="email-contact"
                  id="email-contact"
                  class="
                    bg-white
                    border border-primary-color
                    text-primary-color
                    sm:text-sm
                    rounded-lg
                    block
                    w-full
                    p-2.5
                  "
                  placeholder="usuario@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="asunto-contact"
                  class="text-sm font-bold text-primary-color"
                  >Asunto</label
                >
                <input
                  type="name"
                  name="asunto-contact"
                  id="asunto-contact"
                  class="
                    bg-white
                    border border-primary-color
                    text-primary-color
                    sm:text-sm
                    rounded-lg
                    block
                    w-full
                    p-2.5
                  "
                  placeholder=""
                  required=""
                />
              </div>
              <div>
                <label
                  for="message"
                  class="text-sm font-bold text-primary-color"
                  >Mensaje</label
                >
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Escribe aquí tu mensaje..."
                  class="
                    bg-white
                    border border-primary-color
                    text-primary-color
                    sm:text-sm
                    rounded-lg
                    block
                    w-full
                    p-2.5
                  "
                  required=""
                ></textarea>
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
                  <div class="text-sm ml-3">
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
              <div class="flex">
                <button
                  type="submit"
                  class="
                    w-1/2
                    mx-1
                    px-4
                    py-2
                    hover:text-primary-color hover:bg-white hover:border
                    border-primary-color
                    text-white
                    border border-primary-color
                    bg-primary-color
                    rounded
                  "
                >
                  Enviar
                </button>
                <button
                  type="submit"
                  class="
                    w-1/2
                    px-4
                    py-2
                    hover:text-white hover:bg-red-400 hover:border
                    border-red-600
                    text-white
                    border border-red-600
                    bg-red-600
                    rounded
                    close-modal-contact
                  "
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  </footer>
</template>
<style scoped>
.logo-footer{
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

</style>
