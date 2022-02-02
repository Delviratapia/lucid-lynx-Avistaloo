<template>
  <div class="flex justify-center items-center bg-gray-100">
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
