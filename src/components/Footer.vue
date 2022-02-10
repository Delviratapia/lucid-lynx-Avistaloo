<template>
  <footer
    class="flex flex-row justify-around items-center navxs:flex-col navsm:flex-col gap-y-6 gap-x-6 py-2 bg-[#335963]"
  >
    <div class="flex flex-row gap-x-3 mt-4 md:mt-0">
      <!-- Añadir los enlaces de las RRSS -->
      <a
        href="https://www.facebook.com/profile.php?id=100075282414569"
        target="_blank"
        alt="Botón que lleva al Facebook de Avistaloo"
      >
        <img class="rrss" src="../assets/images/fcbk.png" />
      </a>
      <a
        href="https://www.pinterest.com/"
        target="_blank"
        alt="Botón que lleva al Pinterest de Avistaloo"
      >
        <img class="rrss" src="../assets/images/pntrst.png" />
      </a>
      <a
        href="https://www.instagram.com/avistaloo/"
        target="_blank"
        alt="Botón que lleva al Instagram de Avistaloo"
      >
        <img class="rrss" src="../assets/images/instg.png" />
      </a>
      <a
        href="https://twitter.com/avistaloo"
        target="_blank"
        alt="Botón que lleva al Twitter de Avistaloo"
      >
        <img class="rrss" src="../assets/images/twtr.png" />
      </a>
    </div>
    <div class="flex flex-col items-center flex-nowrap mt-4">
      <img
        id="footer-logo"
        class="logo-footer"
        src="../assets/images/logos/logo.png"
        alt="Logo de Avistaloo"
      />
      <p class="text-white text-sm mb-10">© 2022 Avistaloo</p>
    </div>
    <div class="flex flex-col items-center text-white font-medium mb-4 md:mb-0">
      <router-link
        to="/sobre-nosotros"
        alt="Botón que lleva a la página sobre nosotros"
      >¿Quiénes somos?</router-link>
      <router-link
        to="/politica-de-privacidad"
        alt="Botón que lleva a la página sobre políticas de privacidad"
      >Política de privacidad</router-link>
      <router-link to="/Contacto" alt="Botón que lleva a la página de contacto">Contáctanos</router-link>
    </div>
  </footer>
</template>
<style scoped>
.logo-footer {
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
