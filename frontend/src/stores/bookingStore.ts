import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', () => {
    const bookingType = ref('预约本周本节')
    const defaultLab = ref('实验室A')
    const week: number[] = reactive([])
    const period = reactive({ weekday: 0, startPeriod: 0 })
    const adjust = ref('不允许')
    const purpose = ref('课程')

    function $reset() {
        bookingType.value = "预约本周本节";
        week.splice(0);
        period.weekday = 0;
        period.startPeriod = 0;
        adjust.value = "不允许";
        purpose.value = "课程";
    }


    return { bookingType, defaultLab, week, period, adjust, purpose, $reset }
})
