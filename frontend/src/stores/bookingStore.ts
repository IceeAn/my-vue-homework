import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Lesson } from "@/types";

export const useBookingStore = defineStore('booking', () => {
    const bookingType = ref('预约本周本节')
    const defaultLab = ref('实验室A')
    const week: number[] = reactive([])
    const period = reactive({ weekday: 1, startPeriod: 1 })
    const adjust = ref('不允许')
    const purpose = ref('课程')
    const existingLesson = ref<Lesson | null>(null)

    function $reset() {
        bookingType.value = "预约本周本节"
        week.splice(0)
        period.weekday = 1
        period.startPeriod = 1
        adjust.value = "不允许"
        purpose.value = "课程"
        existingLesson.value = null
    }


    return { bookingType, defaultLab, week, period, adjust, purpose, existingLesson, $reset }
})
