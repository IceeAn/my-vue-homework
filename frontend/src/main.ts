import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

import { createApp } from 'vue'
import { createPinia, storeToRefs } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { useCurrentTeacherStore } from "@/stores/currentTeacherStore";
import { useLayoutStore } from "@/stores/layoutStore";

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

const currentTeacherStore = useCurrentTeacherStore()

router.beforeEach((to, from, next) => {
    if (currentTeacherStore.currentTeacher.id === '' && to.name !== 'login') {
        router.replace({ name: 'login', query: { redirect: to.name as string } });
    } else {
        next();
    }
});

const { loading, navLoadingElement} = storeToRefs(useLayoutStore())

router.afterEach(() => {
    loading.value = false
    navLoadingElement.value = -1
});

app.mount('#app')
