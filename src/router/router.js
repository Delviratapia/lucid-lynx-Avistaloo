import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Wiki from "../views/Wiki.vue";
import Privacy from "../views/Privacy.vue";
import LoginPage from "../views/LoginPage.vue";
import Locations from "../views/Locations.vue";
import RegisterPage from "../views/RegisterPage.vue";
import PathNotFound from "../views/PathNotFound.vue";
import MyAccount from "../views/MyAccount.vue";
import ContactPages from "../views/ContactPage.vue";
import store from "../store.js";

const routes = [
  {
    path: "/404",
    name: "NotFound",
    component: PathNotFound,
    meta: {
      scrollTop: 0,
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404",
    meta: {
      scrollTop: 0,
    },
  },
  {
    path: "/",
    component: Home,
    meta: {
      rutaProtegida: true,
      scrollTop: 0,
    },
  },
  {
    path: "/galeria",
    component: Home,
    meta: {
      rutaProtegida: true,
      scrollTop: 3200,
    },
  },
  {
    path: "/galeria-phone",
    component: Home,
    meta: {
      rutaProtegida: true,
      scrollTop: 7500,
    },
  },
  {
    path: "/sobre-nosotros",
    component: About,
    meta: {
      scrollTop: 0,
    },
  },
  {
    path: "/wiki",
    component: Wiki,
    meta: {
      scrollTop: 0,
    },
  },
  {
    path: "/politica-de-privacidad",
    component: Privacy,
    meta: {
      scrollTop: 0,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    meta: {
      scrollTop: 0,
    },
  },
  {
    path: "/mapa",
    component: Locations,
    meta: {
      rutaProtegida: true,
      scrollTop: 0,
    },
  },
  {
    path: "/registro",
    component: RegisterPage,
    meta: {
      scrollTop: 0,
    },
  },
  {
    path: "/mi-cuenta",
    component: MyAccount,
    meta: {
      scrollTop: 0,
      rutaProtegida: true,
    },
  },
  {
    path: "/Contacto",
    component: ContactPages,
    meta: {
      scrollTop: 0,
    },
  },
];

const scrollBehavior = (to, from, savedPosition) => {
  /* console.log(to); */
  return (
    savedPosition || {
      top: to.meta?.scrollTop || 0,
      left: 0,
    }

  );
};

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
  scrollBehavior,
});

router.beforeEach((to, from, next) => {
  from.meta?.scrollTop && (from.meta.scrollTop = window.scrollY);
  if (to.meta.rutaProtegida) {
    if (store.getters.usuarioAutenticado) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
