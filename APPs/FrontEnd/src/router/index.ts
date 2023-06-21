import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthenticateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name:'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/authenticate',
      name:'authenticate',
      component: () => import('../views/AuthenticateView.vue')
    },
    {
      path: '/client',
      name:'client',
      component: () => import('../views/Client/HomeclientView.vue')
    }
  ]
})

export default router
