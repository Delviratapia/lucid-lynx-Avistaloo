<template>
    <div style="height: 80vh; width: 55vw;">
        <l-map 
          v-model="zoom"
          v-model:zoom="zoom"
          :center="[40.4165, -3.70256]">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="[39.80023, 3.11821]" draggable @moveend="log('moveend')">
                <l-popup>
                    ¡5 avistamientos en esta zona!
                </l-popup>
            </l-marker>
            <l-marker :lat-lng="[40.38958, -3.36729]" draggable @moveend="log('moveend')">
                <l-popup>
                    ¡10 avistamientos en esta zona!
                </l-popup>
            </l-marker>
            <l-marker :lat-lng="[28.41893, -16.39293]" draggable @moveend="log('moveend')">
                <l-popup>
                    ¡2 avistamientos en esta zona!
                </l-popup>
            </l-marker>
            <l-marker :lat-lng="[43.37086, -7.97283]" draggable @moveend="log('moveend')">
                <l-popup>
                    ¡1 avistamiento en esta zona!
                </l-popup>
            </l-marker>
        </l-map>
    </div>
</template>
<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import "leaflet/dist/leaflet.css"
import { LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle, } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
  },
  data() {
    return {
      zoom: 5,
      iconWidth: 25,
      iconHeight: 40,
      
    };
  },
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  methods: {
    /*log(a) {
      console.log(a);
    },
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },*/
  },
  

  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

    // And now the Leaflet circleMarker function can be used by the options:
    /*this.geojsonOptions.pointToLayer = (feature, latLng) =>
      circleMarker(latLng, { radius: 8 });*/
    this.mapIsReady = true;
  },
};
</script>
<style scoped>
</style>