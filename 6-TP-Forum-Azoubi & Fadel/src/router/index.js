import { createRouter, createWebHistory } from 'vue-router';

import AuthView from '../views/auth.vue';
import DashboardView from '../views/dashboard.vue';
import DiscussionView from '../views/discussion.vue';
import ProfileView from '../views/profile.vue';
import CreateThreadView from '../views/createthread.vue';
import HomeView from '../views/home.vue';

import { isLogged, waitForAuthInit } from '@/firebase/Authentification/getUser'; 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name : 'Home',
      component: HomeView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/auth',
      name: 'AuthPage',
      component: AuthView,
      meta: { requiresAuth: false } 
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/discussion/:id',
      name: 'Discussion',
      component: DiscussionView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: ProfileView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/create',
      name: 'CreateThread',
      component: CreateThreadView,
      meta: { requiresAuth: true } 
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  waitForAuthInit().then(() => {
    const isAuthenticated = isLogged();

    if (requiresAuth && !isAuthenticated) {
      next({ path: '/auth' });
    } else {
      next();
    }

  });
});

export default router;
