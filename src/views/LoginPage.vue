<template>
   <Login />
</template>
<script>
import Login from '../components/Login.vue'
import { useMeta } from 'vue-meta'
export default {
   components: {
   Login
   },
   setup () {
    useMeta({ title: 'Acceder' })
  },
}
</script>
