<template>
    <div class="fix-container-fixed-navbar flex justify-center">
        <div class="flex items-center border-y mb-5 px-5 pt-0 ">
            <div class="cont flex flex-col justify-around mr-4">
                <div class="flex flex-col">
                    <span>Radio de busqueda: </span>
                    <select class="border mt-2" name="select" id="">
                        <option value="v1">5km</option>
                        <option value="v2">10km</option>
                        <option value="v3">20km</option>
                        <option value="v4">40km</option>
                        <option value="v5" selected>>50km</option>
                    </select>
                </div>
                <div>
                    <span>Buscar en un lugar concreto: </span>
                    <div class="flex justify-between mt-2">
                        <input class="border w-24 " type="text" placeholder="ej: 40.4165">
                        <input class="border w-24" type="text" placeholder="ej: -3.70256">
                    </div>
                </div>
                <button class="rounded-md bg-primary p-2 text-white self-center w-32">Buscar</button>
            </div>
            <div class="ml-4">
                <Map />
            </div>
        </div>

    </div>
</template>
<script>
    import Map from '../components/Map.vue'
    import { useMeta } from 'vue-meta'
    export default {
        name: "Mapa",
        components: {
            Map,
        },
        setup () {
    useMeta({ title: 'Mapa' })
  }
        /*methods: {
            show(pos){
               console.log(pos.coords.longitude);
            },
            getLocation(){
                let a = navigator.geolocation.getCurrentPosition(show);
               console.log(a);
            },

        },*/
    }
</script>
<style scoped>
    .cont{
        height: 300px;
    }
</style>
