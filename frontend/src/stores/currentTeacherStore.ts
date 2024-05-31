import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import type { Teacher } from "@/types";

export const useCurrentTeacherStore = defineStore('currentTeacher', () => {
    const currentTeacher: Ref<Teacher> = ref({ id: '', name: '' })

    function login(teacher: Teacher) {
        currentTeacher.value = teacher
    }

    function logout() {
        currentTeacher.value = { id: '', name: '' }
    }

    return { currentTeacher, login, logout }
}, { persist: true })
