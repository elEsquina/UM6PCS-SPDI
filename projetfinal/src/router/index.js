import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/Dashboard.vue'

const routes = [
 /* {
    path: '/',
    name: 'home',
    component: HomeView
  },*/
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
