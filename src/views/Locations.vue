<template>
    <div class="fix-container-fixed-navbar flex justify-center">
        <div class="flex items-center mb-5 pt-0">
            <div class="ml-4">
                <Map />
            </div>
        </div>
    </div>
</template>
<script>
import Map from '../components/Map.vue'
import LastComments from "../components/LastComments.vue";
import { useMeta } from 'vue-meta'
export default {
    name: "Mapa",
    components: {
        Map,
        LastComments,
    },
    setup() {
        useMeta({ title: 'Mapa' })
    }
}
</script>
<style scoped>
.cont {
    height: 300px;
}
</style>
