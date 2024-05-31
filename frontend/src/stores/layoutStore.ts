import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
    const loading = ref(false)
    const navLoadingElement = ref(-1)
    return { loading, navLoadingElement }
})
