<template>
<metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | Avistaloo` : `SITE_NAME` }}</template>
  </metainfo>
<NavBar />
<router-view></router-view>
<Footer />
</template>

<script>
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import store from './store.js'
import { useMeta } from 'vue-meta'
import { mapActions } from 'vuex'
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
  methods:{
      ...mapActions(['localStorageUserLogged'])
    },
    created(){
      this.localStorageUserLogged()
    }
}
</script>
