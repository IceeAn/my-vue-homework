<script setup lang="ts">
import type { Lesson } from "@/types";
import { useBookingStore } from "@/stores/bookingStore";
import { useTeacherStore } from "@/stores/teacherStore";
import { useCurrentTeacherStore } from "@/stores/currentTeacherStore";

const teachers = useTeacherStore().teachers
const user = useCurrentTeacherStore().currentTeacher.id

const props = defineProps<{
  item?: Lesson,
  lab: string,
  week: number,
  weekday: number,
  startPeriod: number
}>()

const nameOf = (teacherId: string) => {
  return teachers.find(item => item.id == teacherId)?.name
}

const bookingStore = useBookingStore()

function initApply() {
  bookingStore.$reset()
  bookingStore.defaultWeek = props.week -1
  bookingStore.weeks.push(props.week -1)
  bookingStore.period.weekday = props.weekday
  bookingStore.period.startPeriod = props.startPeriod
  bookingStore.defaultLab = props.lab
  if(!props.item)return;
  bookingStore.existingLesson = props.item;
}
</script>

<template>
  <td rowspan="2">
    <button
        class="course d-inline-block btn w-100 h-100"
        data-bs-toggle="modal" :data-bs-target="item ? '#booking-info-modal' :'#booking-modal'"
        :class="item ? (item.teacher==user ? 'btn-success' : 'btn-secondary'):'btn-primary' "
        @click="initApply"
    >
      <span v-if="item">
        <span class="d-none d-md-inline">{{ nameOf(item.teacher) }}<br></span>
        <span>{{ item?.bookingType || '' }}</span>
      </span>
      <span v-else>点击<br>申请</span>

    </button>
  </td>
</template>

<style scoped lang="sass">
</style>
