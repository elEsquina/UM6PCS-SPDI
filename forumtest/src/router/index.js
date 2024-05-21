// router/index.js

import { createRouter, createWebHistory } from 'vue-router';

import AuthView from '../views/auth.vue';
import DashboardView from '../views/dashboard.vue';
import DiscussionView from '../views/discussion.vue';
import ProfileView from '../views/profile.vue';
import CreateThreadView from '../views/createthread.vue';

import {getUser, isLogged} from '@/firebase/Authentification/getUser'; 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
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
  const isAuthenticated = isLogged();
  if (requiresAuth && !isAuthenticated) {
    next({path: '/login'});
  } else {
    next();
  }
});

export default router;
