// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../views/welcome.vue';
import DashboardView from '../views/dashboard.vue';
import useAuth from '@/firebase/getUser'; 

const { isAuthenticated } = useAuth();

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomeView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: { requiresAuth: true } 
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ name: 'Welcome' });
  } else {
    next(); 
  }
});

export default router;
