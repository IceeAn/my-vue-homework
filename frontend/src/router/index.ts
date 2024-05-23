import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('../views/BookingView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

export default router
