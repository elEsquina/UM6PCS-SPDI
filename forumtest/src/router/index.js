// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../views/welcome.vue';
import DashboardView from '../views/dashboard.vue';
import getUser from '@/firebase/getUser'; 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomeView,
      meta: { requiresAuth: false } 
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
  const user = getUser(); 
  const isAuthenticated = user !== null; 
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: '/' }); 
  } else if (!to.meta.requiresAuth && isAuthenticated) {
    next({ path: '/dashboard' });
  } else {
    next();
  }
});

export default router;
