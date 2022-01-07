import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import Vuex from 'vuex'
import store from './store.js'
import App from './App.vue'
import router from "./router/router";

// DEPENDENCES

// CSS FILES
import './index.css'
import './assets/css/globals.css'

createApp(App).use(router).use(createMetaManager()).use(store).mount('#app')
