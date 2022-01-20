<template>
   <div class="h-screen flex justify-center items-center bg-gray-100">
      <Login />
   </div>
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
