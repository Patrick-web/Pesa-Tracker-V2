import Vuex from "vuex";
import Vue from "vue";
import Savings from "./modules/Savings";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Savings,
  },
});
