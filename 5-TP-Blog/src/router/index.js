import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import DetailsView from '../views/PostDetailView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreatePostView.vue')
  },
  {
    path: '/editPost/:id',
    name: 'editPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditPost.vue')
  },
  {
    path: '/details/:id',
    name: 'details',
    component: DetailsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
