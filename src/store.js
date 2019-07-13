import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalForAllKeys: 0
  },
  mutations: {
    decrementTotal(state) {
      state.totalForAllKeys--;
    },
    incrementTotal(state) {
      state.totalForAllKeys++;
    }
  },
  actions: {
    decrementTotal({ commit }) {
      commit("decrementTotal");
    },
    incrementTotal({ commit }) {
      commit("incrementTotal");
    }
  }
});
