import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CRUD from '../views/CRUD.vue'
Vue.use(VueRouter)

<<<<<<< HEAD
const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "about" */ '../views/login.vue')
  }
=======
const routes = [
    {
        path: '/crud',
        name: 'CRUD',
        component: CRUD,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
>>>>>>> origin/main
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router