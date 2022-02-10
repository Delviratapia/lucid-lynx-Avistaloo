<template>
  <div
    class="flex border-y mb-5 pt-0 navsm:flex-col navsm:justify-center navxs:flex-col navxs:justify-center"
  >
    <div class="cont flex flex-col mt-6 mr-6">
      <div class="flex flex-col mt-6 mb-6 text-center">
        <span>Radio de busqueda:</span>
        <select class="border mt-2 mb-6" name="select" v-model.model="zoom">
          <option :value="15">2km</option>
          <option :value="12">15Km</option>
          <option :value="10">50Km</option>
          <option :value="5">España</option>
        </select>
      </div>
    </div>
    <div style="height: 80vh; width: 70vw;">
      <l-map
        ref="map"
        :zoom.sync="zoom"
        :options="mapOptions"
        :center="center"
        :min-zoom="minZoom"
        :max-zoom="maxZoom"
      >
        <l-tile-layer :url="url" :attribution="attribution" />

        <l-marker :lat-lng="[39.47733, -0.40869]">
          <l-popup>
            Sara García
            <img class="rounded" src="../assets/images/nidoarbol.jpg" />
          </l-popup>
        </l-marker>
        <l-marker :lat-lng="[40.36457, -3.62749]">
          <l-popup>
            Laura Torremolinos
            <img class="rounded" src="../assets/images/bird-2.jpg" />
          </l-popup>
        </l-marker>
        <l-marker :lat-lng="[28.40749, -16.42390]">
          <l-popup>
            Christian Winschenhaussen
            <img class="rounded" src="../assets/images/bird-3.jpg" />
          </l-popup>
        </l-marker>
        <l-marker :lat-lng="[35.01167, 135.76833]">
          <l-popup>
            Ash Ketchum
            <img class="rounded" src="../assets/images/Ho-Oh.png" />
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>
<script >
import "leaflet/dist/leaflet.css"
import {
  LMap,
  LTileLayer,
  LMarker,
  LPolyline,
  LLayerGroup,
  LTooltip,
  LPopup,
  LControlZoom,
  LControlAttribution,
  LControlScale,
  LControlLayers
} from '@vue-leaflet/vue-leaflet';

export default {
  name: 'Mapa',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolyline,
    LLayerGroup,
    LTooltip,
    LPopup,
    LControlZoom,
    LControlAttribution,
    LControlScale,
    LControlLayers,
  },
  data() {
    return {
      map: null,
      center: [40.4165, -3.70256],
      opacity: 0.6,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      token: 'pk.eyJ1Ijoibm1hcnkiLCJhIjoiY2t5dnNjYjRpMDEyOTJ4b2RhaDZlM2RzbiJ9.EiqcezgX57YUE1gPCfMovg',
      mapOptions: {
        zoomControl: false,
        attributionControl: false,
        zoomSnap: true,
      },
      zoom: 15,
      minZoom: 1,
      maxZoom: 20,
      markers: [
        {
          id: 'm1',
          position: { lat: 39.47733, lng: -0.40869 },
          tooltip: '<img class="rounded" src="../assets/images/nidoarbol.jpg" />',
          visible: true,
        },
        {
          id: 'm2',
          position: { lat: 40.36457, lng: -3.62749 },
          tooltip: 'tooltip for marker1',
          visible: true,
        },
      ]
    }
  },
  beforeMount() {

    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(this.center);
      this.center = [latitude, longitude];
      console.log(this.center);
    };
    const error = (err) => {
      /* console.log("Error al obtener localización" + err); */
    };

    navigator.geolocation.getCurrentPosition(success, error);

  },
}
</script>
<style scoped>
</style>
