<template>
<metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | Avistaloo` : `SITE_NAME` }}</template>
  </metainfo>
<NavBar />
<div class="loader-container"  :class="loading">
  {{loading}}
  <div class="loader"></div>
</div>
<router-view></router-view>
<Footer />
</template>

<script>
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import store from './store.js'
import { useMeta } from 'vue-meta'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  setup () {
    console.log(store.state.user)
    useMeta({
      title: '',
      htmlAttrs: { lang: 'es', amp: true }
    })
  },
  computed: {
    checkLoading() {
      console.log(this.loading)
    },
    ...mapState(['loading'])
  },
  methods:{
      ...mapActions(['localStorageUserLogged']),
    },
    created(){
      this.localStorageUserLogged()
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
body {
  font-family: 'Roboto', sans-serif;
}
html {
  scroll-behavior: smooth;
}
@media(max-width:768px) {
  .container {
  max-width:100% !important;
  padding:0px 20px;
}

}

.display-flex {
  display:flex !important;
}
.display-none {
  display:none !important;
}
.loader-container {
  opacity:0.4;
  background-color:#000;
  width:100%;
  height:100vh;
  position:fixed;
  display:flex;
  z-index:2;
  top:0px;
  justify-content:center;
  align-items:center;
  overflow: hidden; /* Hide scrollbars */
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #000;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}</style>
