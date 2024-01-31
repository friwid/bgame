import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";


/**
 * Creates a new Vue Router instance.
 * @module router
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
     { path: "/", component: LandingPage, props: true },
     { path: "/register", component: Register, props: true },
     { path: "/login", component: Login, props: true },
  ],
});

export default router;
