import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from "./router/router";
createApp(App).use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    logout({commit}) {
      commit("setUser", null)
      router.push('/login')
      localStorage.removeItem('userLogged')
    },
    async ingresoUsuario ({commit}, usuario) {
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTdbVErkjtJ-KPt0UynIE9dXbjWP1TLW4', {
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        console.log('USERDB', userDB)
        if(userDB.error) {
          return console.log(userDB.error)
        }
        commit('setUser', userDB)
        router.push('/')
        localStorage.setItem('userLogged', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)

      }
    },
    async localStorageUserLogged({commit, state}) {
      if (localStorage.getItem('userLogged')) {
        commit('setUser', JSON.parse(localStorage.getItem('userLogged')))
      } else {
        return commit ('setUser', null)
      }
    }
  },
  getters: {
    usuarioAutenticado (state) {
      return !!state.user
    }
  }
})
export default store
