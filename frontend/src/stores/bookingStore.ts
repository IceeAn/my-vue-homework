import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Lesson } from "@/types";

export const useBookingStore = defineStore('booking', () => {
    const tab = ref('booking')
    const courseId = ref('-1')
    const defaultLab = ref('实验室A')
    const defaultWeek = ref(1)
    const weeks = ref<number[]>([])
    const weekRange = ref({ start: null as number | null, end: null as number | null })
    const singleWeek = ref<"全部周次" | "单周" | "双周">("全部周次")
    //调剂
    const allowAdjust = ref<"不允许" | "整体调剂" | "分节调剂">('不允许')
    const period = reactive({ weekday: 1, startPeriod: 1 })
    const purpose = ref<"课程" | "考试" | "实验" | "其他">('实验')
    const existingLesson = ref<Lesson | null>(null)

    function $reset() {
        defaultWeek.value = 1
        weeks.value.splice(0, weeks.value.length)
        weekRange.value = { start: null, end: null }
        allowAdjust.value = "不允许"
        period.weekday = 1
        period.startPeriod = 1
        purpose.value = "实验"
        existingLesson.value = null
    }


    return {
        tab,
        courseId,
        defaultLab,
        defaultWeek,
        weeks,
        weekRange,
        singleWeek,
        allowAdjust,
        period,
        purpose,
        existingLesson,
        $reset
    }
})
