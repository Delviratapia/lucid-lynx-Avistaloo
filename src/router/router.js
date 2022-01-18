import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Wiki from "../views/Wiki.vue"
import Privacy from "../views/Privacy.vue"
import LoginPage from "../views/LoginPage.vue"
import Locations from "../views/Locations.vue"
import store from "../store.js"

const routes = [
  { path: "/", component: Home, meta: {rutaProtegida: true} },
  { path: "/sobre-nosotros", component: About, meta: {rutaProtegida: true} },
  { path: "/wiki", component: Wiki },
  { path: "/politica-de-privacidad", component: Privacy, meta: {rutaProtegida: true} },
  { path: "/login", component: LoginPage },
  { path: "/locations", component: Locations },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.meta.rutaProtegida ) {
    if(store.getters.usuarioAutenticado) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router;
