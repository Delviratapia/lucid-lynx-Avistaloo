<template>
  <div class="container-form flex justify-center items-center bg-gray-100">
    <ContactModal />
  </div>
</template>
<script>
import { useMeta } from 'vue-meta'
import ContactModal from '../components/ContactModal.vue'
export default {
  components: {
    ContactModal
  },
  setup() {
    useMeta({ title: 'Contacto' })
  },
}
</script>
<style scoped>
@media (max-width:768px) {
  .container-form {
    padding:0px 20px;
    margin: auto;
  }
}
</style>
