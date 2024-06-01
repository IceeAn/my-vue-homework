<script setup lang="ts">
import BasicBookingInput from "@/components/booking/booking-modal/BasicBookingInput.vue";

import { useScheduleStore } from "@/stores/scheduleStore";
import { storeToRefs } from "pinia";
import { useBookingStore } from "@/stores/bookingStore";
import { useLabStore } from "@/stores/LabStore";
import { Tooltip } from "bootstrap";
import { onMounted } from "vue";

const scheduleStore = useScheduleStore()
const { schedule } = storeToRefs(scheduleStore)

const labStore = useLabStore()
const { lab } = storeToRefs(labStore)

const bookingStore = useBookingStore()
const { weeks } = storeToRefs(bookingStore)

function isWeekBooked(i: number, j: number) {
  let week = (i - 1) * 6 + j - 1
  let weekday = bookingStore.period.weekday - 1
  let start = Math.floor(bookingStore.period.startPeriod / 2)
  return scheduleStore.isBooked(lab.value, week, weekday, start)
}

onMounted(()=>{
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
  console.log(tooltipList)
})
</script>

<template>
  <ul class="nav nav-pills mt-2" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active"
              data-bs-toggle="pill" data-bs-target="#booking-form-1"
              type="button" role="tab" aria-controls="pills-home" aria-selected="true">
        <span class="d-none d-md-inline">预约</span>本周本节
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link"
              data-bs-toggle="pill" data-bs-target="#booking-form-2"
              type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
        <span class="d-none d-md-inline">选择</span>多周本节
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link"
              data-bs-toggle="pill" data-bs-target="#booking-form-3"
              type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
        周次区间<span class="d-none d-md-inline">预约</span>
      </button>
    </li>
  </ul>
  <hr class="mt-2 mb-3">
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="booking-form-1" role="tabpanel" aria-labelledby="pills-home-tab"
         tabindex="0">
      <form>
        <BasicBookingInput/>
      </form>
    </div>
    <div class="tab-pane fade" id="booking-form-2" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
      <form>
        <div class="d-block w-100 btn-group mb-2" role="group" v-for="i in 3" :key="i">
          <template v-for="j in 6" :key="j">
            <input type="checkbox" class="btn-check"
                   :id="`weeks-select-${(i-1)*6+j}`"
                   :value="(i-1)*6+j-1"
                   v-model="weeks"
                   autocomplete="off" :disabled="isWeekBooked(i,j).value">
            <label class="col-2 btn"
                   :class="isWeekBooked(i,j).value? 'btn-secondary' : 'btn-outline-primary'"
                   :for="`weeks-select-${(i-1)*6+j}`">
              <span class="d-none d-lg-inline">第</span>{{ (i - 1) * 6 + j }}<span class="d-none d-lg-inline">周</span>
            </label>
          </template>
        </div>
        <BasicBookingInput/>
      </form>
    </div>
    <div class="tab-pane fade" id="booking-form-3" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
      <form>
        <div class="row">
          <div class="col col-12 col-lg-6">
            <div class="input-group mb-3">
              <span class="input-group-text">从第</span>
              <input v-model="bookingStore.weekRange.start" type="number" class="form-control" placeholder="周次"
                     aria-label="start week">
              <span class="input-group-text">周</span>
              <span class="input-group-text">到第</span>
              <input v-model="bookingStore.weekRange.end" type="number" class="form-control" placeholder="周次"
                     aria-label="end week">
              <span class="input-group-text">周</span>
            </div>
          </div>
          <div class="col col-12 col-lg-6">
            <div class="row">
              <div class="col col-5">
                <select v-model="bookingStore.singleWeek" class="form-select mb-3">
                  <option selected>全部周次</option>
                  <option>单周</option>
                  <option>双周</option>
                </select>
              </div>
              <div class="col col-7">
                <div class="input-group mb-3">
                  <span class="input-group-text">调剂&nbsp;
                    <i class="bi bi-question-circle"
                       data-bs-toggle="tooltip"
                       data-bs-html="true"
                       data-bs-title="<span class='bg-danger'>（暂未实现::选择无效）</span><br>保持时间不变，自动为您选择可选的实验室。<br><br>整体调剂：让您的课程整体调整到另一实验室。没有实验室可以满足则报错；<br>分节调剂：尽量让实验保持在您选择的实验室。若您选择的某些时段被占据，则自动调整到其他实验室。"></i></span>
                  <select v-model="bookingStore.allowAdjust" class="form-select">
                    <option selected>不允许</option>
                    <option>整体调剂</option>
                    <option>分节调剂</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BasicBookingInput/>
      </form>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
