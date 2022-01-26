import { createApp } from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router/router";
createApp(App).use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    error: { type: null, message: null },
    loading: "display-none",
  },
  mutations: {
    setLoading(state, payload) {
      if (payload === false) {
        return (state.loading = "display-none");
      } else {
        return (state.loading = "display-block");
      }
    },
    setError(state, payload) {
      if (payload === null) {
        return (state.error = { type: null, message: null });
      }
      if (
        payload === "EMAIL_NOT_FOUND" ||
        payload === "INVALID_PASSWORD" ||
        payload === "INVALID_EMAIL"
      ) {
        return (state.error = {
          type: "email",
          message: "Email o contraseña incorrecta. Revisa los datos.",
        });
      }
      if (payload === "MISSING_PASSWORD") {
        return (state.error = {
          type: "email",
          message: "Debes rellenar todos los campos",
        });
      }
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    logout({ commit }) {
      commit("setUser", null);
      router.push("/login");
      localStorage.removeItem("userLogged");
    },
    async ingresoUsuario({ commit }, usuario) {
      try {
        this.state.loading = "display-flex";
        const res = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTdbVErkjtJ-KPt0UynIE9dXbjWP1TLW4",
          {
            method: "POST",
            body: JSON.stringify({
              email: usuario.email,
              password: usuario.password,
              returnSecureToken: true,
            }),
          }
        );
        const loading = this.state.loading;
        commit("setLoading", loading);
        const userDB = await res.json();
        console.log("USERDB", userDB);
        this.state.loading = "display-none";
        if (userDB.error) {
          console.log(userDB.error);
          return commit("setError", userDB.error.message);
        }
        commit("setUser", userDB);
        commit("setError", null);
        router.push("/app");
        localStorage.setItem("userLogged", JSON.stringify(userDB));
      } catch (error) {
        console.log(error);
      }
    },
    async userRegister({ commit }, user) {
      try {
        this.state.loading = "display-flex";
        const res = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTdbVErkjtJ-KPt0UynIE9dXbjWP1TLW4",
          {
            method: "POST",
            body: JSON.stringify({
              email: user.email,
              password: user.password,
              returnSecureToken: true,
            }),
          }
        );
        const userDB = await res.json();
        this.state.loading = "display-none";
        if (userDB.error) {
          return commit("setError", userDB.error.message);
        }
        console.log(userDB);
      } catch (error) {
        console.log(error);
      }
    },
    async localStorageUserLogged({ commit, state }) {
      if (localStorage.getItem("userLogged")) {
        commit("setUser", JSON.parse(localStorage.getItem("userLogged")));
      } else {
        return commit("setUser", null);
      }
    },
  },
  getters: {
    usuarioAutenticado(state) {
      return !!state.user;
    },
  },
});
export default store;
