import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useWeekStore = defineStore('week', () => {
    const week = ref(1)

    // const doubleCount = computed(() => count.value * 2)
    //
    // function increment() {
    //     week.value++
    // }

    return { week }
})
