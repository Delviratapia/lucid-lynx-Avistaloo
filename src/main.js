import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import Vuex from 'vuex'
import store from './store.js'
import App from './App.vue'
import router from "./router/router";


// FONT AWESOME

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEnvelope, faLock, faUser);


// DEPENDENCES
   // SWEET ALERT
   import VueSweetalert2 from 'vue-sweetalert2';
   import 'sweetalert2/dist/sweetalert2.min.css';
// CSS FILES
import './index.css'
import './assets/css/globals.css'


createApp(App).use(router).use(createMetaManager()).use(store).use(VueSweetalert2).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
