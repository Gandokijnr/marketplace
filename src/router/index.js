import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/signup.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/signin.vue')
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: () => import('../views/forgetpassword.vue')
    },
  ]
})

export default router
