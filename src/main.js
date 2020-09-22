import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuesax from "vuesax";
import "boxicons";
import "vuesax/dist/vuesax.css";
import store from "./store";

Vue.use(Vuesax, {
  // options here
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
