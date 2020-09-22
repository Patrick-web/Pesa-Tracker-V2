import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth.vue";
import AuthInit from "../views/AuthInit.vue";
import CashFlow from "../views/CashFlow.vue";
import DataPage from "../views/DataPage.vue";
import StatementsHome from "../views/StatementsHome.vue";
import Statement from "../views/Statement.vue";
import SavingsHome from "../views/SavingsHome.vue";
import Savings from "../views/Savings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/authInit",
    name: "authInit",
    component: AuthInit,
  },
  {
    path: "/cashflow",
    name: "cashflow",
    component: CashFlow,
  },
  {
    path: "/dataPage",
    name: "dataPage",
    component: DataPage,
  },
  {
    path: "/savingshome",
    name: "savingshome",
    component: SavingsHome,
  },
  {
    path: "/savings/:savingsType",
    name: "savings",
    component: Savings,
  },
  {
    path: "/statements",
    name: "statements",
    component: StatementsHome,
  },
  {
    path: "/statements/:selected",
    name: "statement",
    component: Statement,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
