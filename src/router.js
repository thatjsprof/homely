import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/home.vue";
import Showcase from "./views/showcase.vue";
import Catalogue from "./views/catalogue.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/showcase", component: Showcase },
  { path: "/catalogue", component: Catalogue },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
