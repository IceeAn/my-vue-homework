<script setup lang="ts">
import { useScheduleStore } from "@/stores/scheduleStore";
import { storeToRefs } from "pinia";
import { useCourseStore } from "@/stores/courseStore";
import { ref, computed, watch } from "vue";
import type { LessonWithTime } from "@/types";

const { myLessons } = storeToRefs(useScheduleStore())

const selectedLessons = ref<LessonWithTime[]>([])

const selectAll = computed({
  get: () => selectedLessons.value.length === myLessons.value.length,
  set: (value) => {
    if (value) {
      selectedLessons.value.splice(0, selectedLessons.value.length, ...myLessons.value)
    } else {
      selectedLessons.value.splice(0, selectedLessons.value.length)
    }
  }
})

const findCourseByID = useCourseStore().findCourseById

watch(myLessons, (newLessons) => {
  if(selectAll.value){
    selectedLessons.value.splice(0, selectedLessons.value.length, ...newLessons)
  }else{
    selectedLessons.value = selectedLessons.value.filter(selectedLesson => newLessons.some(lesson => selectedLesson.time === lesson.time));
  }
});
</script>

<template>
  <div class="container">
    <h1 class="display-6">我的预约</h1>
    <p class="fs-5"><i class="bi bi-funnel"></i> 筛选条件</p>
    <div class="row row-cols-4">
      <div class="col col-3">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">
            实验室
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item">实验室A</a></li>
            <li><a class="dropdown-item">实验室B</a></li>
            <li><a class="dropdown-item">实验室C</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="fs-5 my-3 badge-group">
      <span class="fs-6">当前展示：</span>
      <span class="badge rounded-pill me-2">实验室A</span>
      <span class="badge rounded-pill me-2">课程2</span>
      <span class="badge rounded-pill me-2">1-8周</span>
      <span class="badge rounded-pill me-2">2-3节</span>
      <span class="badge rounded-pill me-2">仅单周</span>
    </div>
    <table id="table" class="table table-striped text-center align-middle">
      <thead>
      <tr>
        <th class="col-1">
          <input class="form-check-input" type="checkbox" id="select-all-lessons" v-model="selectAll">
          <label class="form-check-label d-none d-lg-inline" for="select-all-lessons">
            &nbsp;全选
          </label>
        </th>
        <th>课程</th>
        <th>实验室</th>
        <th>周次</th>
        <th>星期</th>
        <th>节次</th>
      </tr>
      </thead>
      <tbody class="table-group-divider">
      <tr v-for="lesson in myLessons" :key="JSON.stringify(lesson.time)">
        <td><input class="form-check-input" type="checkbox" v-model="selectedLessons" :value="lesson"></td>
        <td>{{ findCourseByID(lesson.lesson.course)?.name }}</td>
        <td>{{ lesson.time.lab }}</td>
        <td>{{ lesson.time.week + 1 }}</td>
        <td>{{ "一二三四五六日"[lesson.time.day] }}</td>
        <td>{{ lesson.time.period * 2 + 1 }}-{{ lesson.time.period * 2 + 2 }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="sass">
$colors: (#0d6efd, #07a9b9, #1ea120, #7e4fd5, #de942a)

.badge-group
  .badge
    font-weight: normal
    @each $color in $colors
      $index: index($colors, $color)
      &:nth-child(#{$index})
        background-color: $color
</style>
