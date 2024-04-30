import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AddJob from '../views/AddJob.vue'
import EditJob from '../views/EditJob.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home 
    },
    {
      path: '/add',
      name: 'add',
      component: AddJob
    },
    {
      path: '/jobs/:id',
      name: 'jobs',
      component: EditJob
    }
  ]
})

export default router
