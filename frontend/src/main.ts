import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { useCurrentTeacherStore } from "@/stores/currentTeacherStore";

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

const currentTeacherStore = useCurrentTeacherStore()

router.beforeEach((to, from, next) => {
    if (!currentTeacherStore.currentTeacher && to.name !== 'login') {
        next({ name: 'login', query: { redirect: to.name } });
    } else {
        next();
    }
});

app.mount('#app')
