import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useWeekStore = defineStore('week', () => {
    const week = ref(1)

    return { week }
})
