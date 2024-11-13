import { createWebHistory, createRouter } from "vue-router";
import Accueil from "../components/PageComponent/Accueil.vue";
import Home from '../components/PageComponent/Home.vue'
import Login from '../components/PageComponent/Login.vue'
import DashboardLayout from "../components/Dashboard/DashboardLayout.vue";

const routes = [
  {
    path: "/",
    redirect: "/Accueil",
    name: "Accueil",
    component: Accueil,
  },  {
    path: "/Accueil",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/home",
    component: Home,
    children:[
      {
      path:'/Dashboard',
      name:'DashboardLayout',
      component: DashboardLayout
    }
  ]},
  {
    path: "/login",
    name: 'Login',
    component: Login,
  },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  