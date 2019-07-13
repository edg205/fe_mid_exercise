import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalNumberOfKeys: 0
  },
  mutations: {
    decrementTotal(state) {
      state.totalNumberOfKeys--;
    },
    incrementTotal(state) {
      state.totalNumberOfKeys++;
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
