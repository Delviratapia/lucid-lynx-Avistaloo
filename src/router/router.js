import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Wiki from "../views/Wiki.vue"
import Privacy from "../views/Privacy.vue"
import LoginPage from "../views/LoginPage.vue"
import Locations from "../views/Locations.vue"
import RegisterPage from "../views/RegisterPage.vue"
import store from "../store.js"

const routes = [
  { path: "/app", component: Home, meta: {rutaProtegida: true} },
  { path: "/sobre-nosotros", component: About},
  { path: "/wiki", component: Wiki },
  { path: "/politica-de-privacidad", component: Privacy },
  { path: "/login", component: LoginPage },
  { path: "/app/locations", component: Locations, meta: {rutaProtegida: true} },
  { path: "/registro", component: RegisterPage },
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
