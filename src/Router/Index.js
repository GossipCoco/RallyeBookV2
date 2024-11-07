import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/PageComponent/Home.vue'
import Login from '../components/PageComponent/Login.vue'
import DashboardLayout from "../components/Dashboard/DashboardLayout.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
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
  {
    path:'/Dashboard',
    name:'DashboardLayout',
    component: DashboardLayout
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  