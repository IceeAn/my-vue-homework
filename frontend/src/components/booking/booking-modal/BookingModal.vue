<script setup lang="ts">
import { useBookingStore } from "@/stores/bookingStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import BookingForm from "@/components/booking/booking-modal/BookingForm.vue";
import ModalFrame from "@/components/common/ModalFrame.vue";
import { useCurrentTeacherStore } from "@/stores/currentTeacherStore";
import { useScheduleStore } from "@/stores/scheduleStore";
import type { LabSchedule, Schedule } from "@/types";
import { useCourseStore } from "@/stores/courseStore";

const bookingStore = useBookingStore()
const scheduleStore = useScheduleStore()
const courseStore = useCourseStore()
const currentTeacherStore = useCurrentTeacherStore()
const lessonPeriod = computed(() => {
  return `${bookingStore.period.startPeriod}-${bookingStore.period.startPeriod + 1}`
})

const getActiveTabId = (): string | null => {
  return document
          .querySelector('button.nav-link.active')
          ?.getAttribute('data-bs-target')
          ?.substring(1)
      ?? null
}

function confirm() {
  const courseId = bookingStore.courseId
  if (courseId === '-1') {
    alert('未选择课程')
    return false
  }
  const purpose = bookingStore.purpose
  const weekday = bookingStore.period.weekday - 1
  const period = (bookingStore.period.startPeriod - 1) / 2
  const activeTabId = getActiveTabId()
  if (activeTabId === 'booking-form-1') {
    bookingStore.weeks.splice(0, bookingStore.weeks.length)
    bookingStore.weeks.push(bookingStore.defaultWeek)
  }
  if (activeTabId === 'booking-form-3') {
    if (bookingStore.weekRange.start === null || bookingStore.weekRange.end === null) {
      alert('错误：未选择周次区间')
      return false
    }
    if (bookingStore.weekRange.start > bookingStore.weekRange.end) {
      alert('周次区间选择错误：开始周次不应大于结束周次')
      return false
    }
    if (bookingStore.weekRange.start < 1 || bookingStore.weekRange.end > 18) {
      alert('周次区间选择错误：周次须在1-18之间')
      return false
    }
    if (bookingStore.weekRange.start % 1 || bookingStore.weekRange.end % 1) {
      alert('周次区间选择错误：周次须为整数')
      return false
    }
    const startWeek = bookingStore.weekRange.start - 1
    const endWeek = bookingStore.weekRange.end - 1
    const singleWeek = bookingStore.singleWeek
    console.log(`lab = ${bookingStore.defaultLab}`)
    console.log(`开始周次 = ${startWeek} 结束周次 = ${endWeek} 是否单周 = ${singleWeek}`)
    bookingStore.weeks.splice(0, bookingStore.weeks.length)
    switch (singleWeek as "全部周次" | "单周" | "双周") {
      case "全部周次":
        for (let i = startWeek; i <= endWeek; i++) {
          if (scheduleStore.isBooked(bookingStore.defaultLab, i, weekday, period).value) {
            alert(`错误：${bookingStore.defaultLab} 第${i+1}周 星期${"一二三四五六日"[weekday]} 第${period*2+1}-${period*2+2}节 已被预约`)
            return false
          }
          bookingStore.weeks.push(i)
        }
        break
      case "单周":
        for (let i = startWeek + startWeek % 2; i <= endWeek; i += 2) {
          if (scheduleStore.isBooked(bookingStore.defaultLab, i, weekday, period).value) {
            alert(`错误：${bookingStore.defaultLab} 第${i+1}周 星期${"一二三四五六日"[weekday]} 第${period*2+1}-${period*2+2}节 已被预约`)
            return false
          }
          bookingStore.weeks.push(i)
        }
        break
      case "双周":
        for (let i = startWeek + 1 - startWeek % 2; i <= endWeek; i += 2) {
          if (scheduleStore.isBooked(bookingStore.defaultLab, i, weekday, period).value) {
            alert(`错误：${bookingStore.defaultLab} 第${i+1}周 星期${"一二三四五六日"[weekday]} 第${period*2+1}-${period*2+2}节 已被预约`)
            return false
          }
          bookingStore.weeks.push(i)
        }
        break
    }
  }

  if(bookingStore.weeks.length + scheduleStore.calculateCourseHours(courseId).value > (courseStore.findCourseById(courseId)?.creditHour ?? 0)){
    alert('错误：预约后，学时将超出课程学时。您可以在“课程管理”中修改学时。')
    return false
  }

  for (let week of bookingStore.weeks) {
    scheduleStore.updateLesson(
        bookingStore.defaultLab,
        week,
        weekday,
        period,
        {
          teacher: currentTeacherStore.currentTeacher.id,
          course: courseId,
          bookingType: purpose
        }
    )
  }
  console.log(JSON.stringify(scheduleStore.schedule))
  return true
}

</script>

<template>
  <ModalFrame id="booking-modal" :cancel="()=>{}" :confirm="confirm">
    <template #header>
      {{ bookingStore.defaultLab }} 星期{{ " 一二三四五六日"[bookingStore.period.weekday] }} 第 {{ lessonPeriod }} 节预约
    </template>
    <template #body>
      <BookingForm/>
    </template>
  </ModalFrame>
</template>

<style scoped lang="sass">

</style>
