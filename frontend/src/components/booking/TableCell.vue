<script setup lang="ts">
import type { Lesson } from "@/types";
import { useBookingStore } from "@/stores/bookingStore";

let user = '1';

const props = defineProps<{
  item?: Lesson,
  lab: string,
  week: number,
  weekday: number,
  startPeriod: number
}>()

const bookingStore = useBookingStore()

function initApply(){
  bookingStore.$reset()
  bookingStore.week.push(props.week)
  bookingStore.period.weekday = props.weekday
  bookingStore.period.startPeriod = props.startPeriod
  bookingStore.defaultLab = props.lab
}
</script>

<template>
  <td rowspan="2">
    <button
        class="course d-inline-block btn w-100 h-100"
        data-bs-toggle="modal" data-bs-target="#booking-modal"
        :class="item ? (item.teacher==user ? 'btn-success' : 'btn-secondary'):'btn-primary' "
        :disabled="item && item.teacher!=user"
        @click="initApply"
    >
      <span v-if="item">
        <span class="d-none d-md-inline">{{ item.teacher }}<br></span>
        <span>{{ item?.comment || '' }}</span>
      </span>
      <span v-else>点击<br>申请</span>

    </button>
  </td>
</template>

<style scoped lang="sass">
</style>
