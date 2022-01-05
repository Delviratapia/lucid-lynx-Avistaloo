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
import { useMeta } from 'vue-meta'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  setup () {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'es', amp: true }
    })
  },
}
</script>
