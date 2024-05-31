import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import type { Teacher } from "@/types";

export const useCurrentTeacherStore = defineStore('currentTeacher', () => {
    const currentTeacher: Ref<Teacher | null> = ref(null)

    function login(teacher: Teacher) {
        currentTeacher.value = teacher
    }

    function logout() {
        currentTeacher.value = null
    }

    return { currentTeacher, login, logout }
}, { persist: true })
