import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Lesson } from "@/types";

export const useBookingStore = defineStore('booking', () => {
    const bookingType = ref('预约本周本节')
    const course = ref('-1')
    const defaultLab = ref('实验室A')
    const defaultWeek = ref(1)
    const weeks = ref([])
    const period = reactive({ weekday: 1, startPeriod: 1 })
    const adjust = ref('不允许')
    const purpose = ref('实验')
    const existingLesson = ref<Lesson | null>(null)

    function $reset() {
        bookingType.value = "预约本周本节"
        defaultWeek.value = 1
        weeks.value.splice(0)
        period.weekday = 1
        period.startPeriod = 1
        adjust.value = "不允许"
        purpose.value = "实验"
        existingLesson.value = null
    }


    return { bookingType, course, defaultLab, defaultWeek, weeks, period, adjust, purpose, existingLesson, $reset }
})
