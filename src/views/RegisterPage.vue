<template>
   <Register />
</template>
<script>
import Register from '../components/Register.vue'
import { useMeta } from 'vue-meta'
export default {
   components: {
   Register
   },
   setup () {
    useMeta({ title: 'Registrarse' })
  },
}
</script>
