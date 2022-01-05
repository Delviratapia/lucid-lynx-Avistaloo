import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from "./router/router";

// DEPENDENCES

// CSS FILES
import './index.css'
import './assets/css/globals.css'

createApp(App).use(router).use(createMetaManager()).mount('#app')
