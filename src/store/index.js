import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      ui: {
        local: 'fr'
      },
      user: {
        jwt: null,
        username: null,
        roles: []
      }
    }
  },
  mutations: {
    SET_JWT(state, payload) {
      state.user.jwt = payload
      sessionStorage('jwt', payload)
    }
  },
  actions: {
    resetStore({ commit }, payload ) {
      commit('SET_JWT', null)
    }
  }
})

export default store