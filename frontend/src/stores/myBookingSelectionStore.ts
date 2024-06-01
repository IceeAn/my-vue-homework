import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { LessonWithTime } from "@/types";
import { useScheduleStore } from "@/stores/scheduleStore";

export const useMyBookingSelectionStore = defineStore('myBookingSelectionStore', () => {
    const selectedLessons = ref<LessonWithTime[]>([])

    const scheduleStore = useScheduleStore()
    const deleteSelectedLessons = () => {
        selectedLessons.value.forEach(lesson => {
            scheduleStore.deleteLesson(lesson.time.lab, lesson.time.week, lesson.time.day, lesson.time.period)
        })
    }

    return { selectedLessons, deleteSelectedLessons }
})
