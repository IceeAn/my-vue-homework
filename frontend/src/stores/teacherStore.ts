import { ref } from "vue";
import { defineStore } from "pinia";

export const useTeacherStore = defineStore("teacher", () => {
    const teachers = ref([
        {
            id: "1",
            name: "王老师"
        },
        {
            id: "2",
            name: "张老师"
        },
        {
            id: "3",
            name: "李老师"
        }
    ])
    return { teachers }
})
