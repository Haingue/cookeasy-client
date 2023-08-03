import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      ui: {
        local: "fr",
      },
      user: {
        jwt: null,
        refreshToken: null,
        username: null,
        roles: [],
      },
    };
  },
  mutations: {
    SET_JWT(state, payload) {
      state.user.jwt = payload.access_token;
      state.user.refreshToken = payload;
      sessionStorage("jwt", payload);
    },
  },
  actions: {
    resetStore({ commit }, payload) {
      commit("SET_JWT", null);
    },
  },
});

export default store;
