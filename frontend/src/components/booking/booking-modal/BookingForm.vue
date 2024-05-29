<script setup lang="ts">
import BasicBookingInput from "@/components/booking/booking-modal/BasicBookingInput.vue";

import { useScheduleStore } from "@/stores/scheduleStore";
import { storeToRefs } from "pinia";
import { useBookingStore } from "@/stores/bookingStore";
import { computed } from "vue";
import { useLabStore } from "@/stores/LabStore";

const scheduleStore = useScheduleStore()
const { schedule } = storeToRefs(scheduleStore)

const labStore = useLabStore()
const { lab } = storeToRefs(labStore)

const bookingStore = useBookingStore()
const refs = storeToRefs(bookingStore)

//TODO: 解出具体变量，防止全部渲染，提升性能
function isWeekBooked(i: number, j: number): boolean {
  let week = (i - 1) * 6 + j - 1
  let weekday = refs.period.value.weekday - 1
  let start = Math.floor(refs.period.value.startPeriod/2)
  let weekSchedule = schedule.value.find(item => item.lab === lab.value)?.schedule || []
  return weekSchedule[week][weekday][start] != null
}
</script>

<template>
  <!--  <p>预约形式：预约本周本节｜选择多周本节｜按周次区间预约</p>-->
  <!--  <p>选择周次：按钮格式按课程表来</p>-->
  <!--  ok<p>周次时段允许全部预约｜单双周预约</p>-->
  <!--  <p>是否允许调剂： 不允许｜整体调剂｜分节调剂</p>-->
  <!--  <p>预约用途：课程｜实验｜考试｜其他</p>-->
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
        <!--        选择课程名称；选择预约用途-->
        <BasicBookingInput/>
      </form>
    </div>
    <div class="tab-pane fade" id="booking-form-2" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
      <form>
        <div class="d-block w-100 btn-group mb-2" role="group" v-for="i in 3" :key="i">
          <template v-for="j in 6" :key="j">
            <input type="checkbox" class="btn-check"
                   :id="`weeks-select-${(i-1)*6+j}`"
                   autocomplete="off" :disabled="isWeekBooked(i,j)">
            <label class="col-2 btn"
                   :class="isWeekBooked(i,j)? 'btn-secondary' : 'btn-outline-primary'"
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
              <input type="number" class="form-control" placeholder="周次" aria-label="start week">
              <span class="input-group-text">周</span>
              <span class="input-group-text">到第</span>
              <input type="number" class="form-control" placeholder="周次" aria-label="end week">
              <span class="input-group-text">周</span>
            </div>
          </div>
          <div class="col col-12 col-lg-6">
            <div class="row">
              <div class="col col-5">
                <select class="form-select mb-3">
                  <option value="1" selected>全部周次</option>
                  <option value="2">单周</option>
                  <option value="3">双周</option>
                </select>
              </div>
              <div class="col col-7">
                <div class="input-group mb-3">
                  <span class="input-group-text">调剂&nbsp;<i class="bi bi-question-circle"></i></span>
                  <select class="form-select">
                    <option value="1" selected>不允许</option>
                    <option value="2">整体调剂</option>
                    <option value="3">分节调剂</option>
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
