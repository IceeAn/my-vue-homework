import { createRouter, createWebHashHistory } from 'vue-router'
import { useLayoutStore } from "@/stores/layoutStore";
import { storeToRefs } from "pinia";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/course-manage',
            name: 'courseManage',
            component: () => import('../views/CourseManageView.vue'),
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
