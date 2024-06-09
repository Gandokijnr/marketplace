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
    {
      path: '/postads',
      name: 'postads',
      component: () => import('../views/postads.vue')
    },
    {
      path: '/detailspage/:id',
      name: 'detailspage',
      component: () => import('../views/detailspage.vue'),
      props: true
    },
    {
      path: '/indexPage',
      name: 'indexPage',
      component: () => import('../views/indexPage.vue')
    },
    {
      path: '/phones-and-accessories',
      name: 'PhonesAndAccessories',
      component: () => import('../views/PhonesAndAccessories.vue'),
    },
    {
      path: '/laptops',
      name: 'Laptops',
      component: () => import('../views/Laptops.vue'),
    },
    {
      path: '/television',
      name: 'Television',
      component: () => import('../views/Television.vue'),
    },
    {
      path: '/sounds',
      name: 'Sounds',
      component: () => import('../views/Sounds.vue'),
    },
    {
      path: '/furniture',
      name: 'Furniture',
      component: () => import('../views/Furniture.vue'),
    },
    {
      path: '/sports',
      name: 'Sports',
      component: () => import('../views/Sounds.vue'),
    },
  ]
})

export default router
