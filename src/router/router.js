import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Wiki from "../views/Wiki.vue"
import Privacy from "../views/Privacy.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/sobre-nosotros", component: About },
  { path: "/wiki", component: Wiki },
  { path: "/politica-de-privacidad", component: Privacy },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
