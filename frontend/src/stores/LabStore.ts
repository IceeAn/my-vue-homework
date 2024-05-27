import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useLabStore = defineStore('lab', () => {
    const lab = ref('实验室A')

    return { lab }
})
