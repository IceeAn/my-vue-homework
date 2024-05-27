<script setup lang="ts">
import { useBookingStore } from "@/stores/bookingStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import BookingForm from "@/components/booking/BookingForm.vue";

const bookingStore = useBookingStore()
const refs = storeToRefs(bookingStore)
const lessonPeriod = computed(()=>{
  return `${refs.period.value.startPeriod}-${refs.period.value.startPeriod+1}`
})

</script>

<template>
  <div class="modal fade" id="booking-modal" tabindex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-fullscreen-md-down modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            {{refs.defaultLab.value}} 星期{{ " 一二三四五六日"[refs.period.value.weekday] }} 第 {{lessonPeriod}} 节预约
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <BookingForm/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
