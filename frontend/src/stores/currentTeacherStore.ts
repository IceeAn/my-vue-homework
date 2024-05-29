import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import type { Teacher } from "@/types";

export const useCurrentTeacherStore = defineStore('currentTeacher', () => {
    const currentTeacher:Ref<Teacher> = ref({
        id:"1",
        name:"王老师"
    })
    return { currentTeacher }
})
