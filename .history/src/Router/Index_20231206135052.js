import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/PageComponent/Home.vue'
import Login from '../components/PageComponent/Login.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  