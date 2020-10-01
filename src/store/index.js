import Vuex from "vuex";
import Vue from "vue";
import Savings from "./modules/Savings";
import CashFlow from "./modules/CashFlow";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Savings,
    CashFlow,
  },
});
