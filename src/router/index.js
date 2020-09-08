import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth.vue";
import AuthInit from "../views/AuthInit.vue";
import CashFlow from "../views/CashFlow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/AuthInit",
    name: "AuthInit",
    component: AuthInit,
  },
  {
    path: "/CashFlow",
    name: "cashflow",
    component: CashFlow,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
