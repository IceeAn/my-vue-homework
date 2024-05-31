<script setup lang="ts">
import { useBookingStore } from "@/stores/bookingStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import BookingForm from "@/components/booking/booking-modal/BookingForm.vue";
import ModalFrame from "@/components/common/ModalFrame.vue";

const bookingStore = useBookingStore()
const refs = storeToRefs(bookingStore)
const lessonPeriod = computed(()=>{
  return `${refs.period.value.startPeriod}-${refs.period.value.startPeriod+1}`
})

function confirm(){
  for(let week of refs.weeks.value){
     console.log(week, refs.period.value.weekday, (refs.period.value.startPeriod-1)/2)
  }
  return false;
}

</script>

<template>
  <ModalFrame id="booking-modal" :cancel="()=>{}" :confirm="confirm">
    <template #header>
      {{refs.defaultLab.value}} 星期{{ " 一二三四五六日"[refs.period.value.weekday] }} 第 {{lessonPeriod}} 节预约
    </template>
    <template #body>
      <BookingForm/>
    </template>
  </ModalFrame>
</template>

<style scoped lang="sass">

</style>
