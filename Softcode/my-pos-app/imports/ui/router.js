import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import User from "./views/User.vue";
import Customer from "./views/Customer.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/user",
      name: "User",
      component: User,
    },
    {
      path: "/customer",
      name: "Customer",
      component: Customer,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});
