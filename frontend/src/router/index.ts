import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/booking',
            name: 'booking',
            component: () => import('../views/BookingView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/my-booking',
            name: 'myBooking',
            component: () => import('../views/MyBookingView.vue'),
        },
        {
            path: '/help',
            name: 'help',
            component: () => import('../views/HelpView.vue'),
        }
    ]
})

export default router
