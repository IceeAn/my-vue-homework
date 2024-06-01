<script setup lang="ts">
import { useScheduleStore } from "@/stores/scheduleStore";
import { storeToRefs } from "pinia";
import { useCourseStore } from "@/stores/courseStore";
import { ref, computed, watch, reactive } from "vue";
import type { LessonWithTime } from "@/types";

const scheduleStore = useScheduleStore()
const { myLessons } = storeToRefs(scheduleStore)
const courseStore = useCourseStore()
const { myCourses } = storeToRefs(courseStore)

const filterShown = ref(true)

const filter = reactive({
  course: "-1",
  lab: "-1",
  startWeek: 1,
  endWeek: 18,
  day: -1,
  startPeriod: 1,
  endPeriod: 8,
  singleWeek: -1
})

const startWeek = computed({
  get: () => filter.startWeek,
  set: (value) => {
    filter.startWeek = value
    filter.endWeek = Math.max(filter.endWeek, value)
  }
})

const startPeriod = computed({
  get: () => filter.startPeriod,
  set: (value) => {
    filter.startPeriod = value
    filter.endPeriod = Math.max(filter.endPeriod, value + 1)
  }
})

const selectedLessons = ref<LessonWithTime[]>([])

const deleteSlectedLessons = () => {
  selectedLessons.value.forEach(lesson => {
    scheduleStore.deleteLesson(lesson.time.lab, lesson.time.week, lesson.time.day, lesson.time.period)
  })
}

const selectAll = computed({
  get: () => selectedLessons.value.length === filteredLessons.value.length,
  set: (value) => {
    if (value) {
      selectedLessons.value.splice(0, selectedLessons.value.length, ...filteredLessons.value)
    } else {
      selectedLessons.value.splice(0, selectedLessons.value.length)
    }
  }
})

const findCourseByID = useCourseStore().findCourseById

const filteredLessons = computed(() => {
  return myLessons.value.filter(lesson =>
      (filter.course === "-1" || lesson.lesson.course === filter.course) &&
      (filter.lab === "-1" || lesson.time.lab === filter.lab) &&
      (lesson.time.week >= filter.startWeek - 1 && lesson.time.week <= filter.endWeek - 1) &&
      (filter.day === -1 || lesson.time.day === filter.day) &&
      (lesson.time.period >= filter.startPeriod - 1 && lesson.time.period <= filter.endPeriod - 1) &&
      (filter.singleWeek === -1 || lesson.time.week % 2 - filter.singleWeek) &&
      1
  )
})

watch(filteredLessons, (newLessons) => {
  if (selectAll.value) {
    selectedLessons.value.splice(0, selectedLessons.value.length, ...newLessons)
  } else {
    selectedLessons.value = selectedLessons.value.filter(selectedLesson => newLessons.some(lesson => selectedLesson.time === lesson.time));
  }
});

watch(filter, (newFilter) => {
  console.log(newFilter)
})
</script>

<template>
  <div class="container">
    <h1 class="display-6">我的预约</h1>
    <div class="fs-5">
      <i class="bi bi-funnel"></i> 筛选条件&emsp;
      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" class="btn-check" id="filter-collapse-toggle-checkbox" v-model="filterShown"
               autocomplete="off">
        <label for="filter-collapse-toggle-checkbox"
               class="btn btn-outline-primary d-flex align-items-center justify-content-center"
               data-bs-toggle="collapse" data-bs-target="#filter-collapse">
          <i id="filter-collapse-toggle-icon" class="bi bi-chevron-down"></i>&nbsp;{{ filterShown ? "折叠" : "展开" }}
        </label>
      </div>
    </div>

    <div id="filter-collapse" class="row collapse show">
      <div class="col col-12 mt-3"></div>
      <div class="col col-6 col-lg-3 mb-3">
        <div class="input-group">
          <label class="input-group-text" for="inputGroupSelect01">课程</label>
          <select class="form-select" v-model="filter.course">
            <option selected value="-1">不限</option>
            <option v-for="courseForSelect in myCourses" :key="courseForSelect.id"
                    :value="courseForSelect.id">
              {{ courseForSelect.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="col col-6 col-lg-3 mb-3">
        <div class="input-group">
          <label class="input-group-text" for="inputGroupSelect01">实验室</label>
          <select class="form-select" v-model="filter.lab">
            <option selected value="-1">不限</option>
            <option v-for="lab in 'ABCD'" :key="lab">
              {{ "实验室" + lab }}
            </option>
          </select>
        </div>
      </div>

      <div class="col col-6 col-lg-3 mb-3">
        <div class="input-group">
          <label class="input-group-text" for="inputGroupSelect01">单双周</label>
          <select class="form-select" v-model="filter.singleWeek">
            <option :value="-1" selected>不限</option>
            <option :value="1">仅单周</option>
            <option :value="0">仅双周</option>
          </select>
        </div>
      </div>

      <div class="col col-6 col-lg-3 mb-3">
        <div class="input-group">
          <label class="input-group-text" for="inputGroupSelect01">星期</label>
          <select class="form-select" v-model="filter.day">
            <option :value="-1" selected>不限</option>
            <option v-for="day in 7" :key="day" :value="day-1">
              {{ "一二三四五六日"[day - 1] }}
            </option>
          </select>
        </div>
      </div>

      <div class="col col-12 col-md-6 mb-3 mb-md-0">
        <div class="input-group">
          <label class="input-group-text" for="inputGroupSelect01">从第</label>
          <select class="form-select" v-model="startPeriod">
            <option v-for="period in 4" :key="period" :value="period*2-1">
              {{ period * 2 - 1 }}
            </option>
          </select>
          <label class="input-group-text" for="inputGroupSelect01">节</label>
          <label class="input-group-text" for="inputGroupSelect01">到第</label>
          <select class="form-select" v-model="filter.endPeriod">
            <option v-for="period in 4 - (filter.startPeriod-1)/2" :key="period*2 + (filter.startPeriod - 1)"
                    :value="period*2 + (filter.startPeriod - 1)">
              {{ period * 2 + (filter.startPeriod - 1) }}
            </option>
          </select>
          <label class="input-group-text" for="inputGroupSelect01">节</label>
        </div>
      </div>

      <div class="col col-12 col-md-6 mb-0">
        <div class="input-group">
          <label class="input-group-text" for="inputGroupSelect01">从第</label>
          <select class="form-select" v-model="startWeek">
            <option v-for="week in 18" :key="week" :value="week">
              {{ week }}
            </option>
          </select>
          <label class="input-group-text" for="inputGroupSelect01">周</label>
          <label class="input-group-text" for="inputGroupSelect01">到第</label>
          <select class="form-select" v-model="filter.endWeek">
            <option v-for="week in 18 - (filter.startWeek - 1)" :key="week + (filter.startWeek - 1)"
                    :value="week + (filter.startWeek - 1)">
              {{ week + (filter.startWeek - 1) }}
            </option>
          </select>
          <label class="input-group-text" for="inputGroupSelect01">周</label>
        </div>
      </div>
    </div>
    <button class="btn btn-danger mt-3" @click="deleteSlectedLessons" :disabled="selectedLessons.length === 0">
      <i class="bi bi-trash3"></i> 取消选中预约
    </button>
    <div class="fs-5 my-3 badge-group">
      <span class="fs-6">当前筛选：
        <span v-show="filter.lab==='-1'&&
                      filter.course==='-1'&&
                      filter.startWeek===1 && filter.endWeek===18 &&
                      filter.startPeriod===1 && filter.endPeriod===8 &&
                      filter.day===-1 &&
                      filter.singleWeek===-1">
        无
      </span>
      </span>

      <span v-show="filter.lab!=='-1'" class="badge rounded-pill me-2">{{ filter.lab }}</span>
      <span v-show="filter.course!=='-1'" class="badge rounded-pill me-2">
        {{ filter.course === "-1" ? "" : courseStore.findCourseById(filter.course)?.name }}
      </span>
      <span v-show="filter.startWeek!==1 || filter.endWeek!==18" class="badge rounded-pill me-2">
        {{ filter.startWeek }}-{{ filter.endWeek }}周
      </span>
      <span v-show="filter.day!==-1" class="badge rounded-pill me-2">
        星期{{ filter.day === -1 ? "" : "一二三四五六日"[filter.day] }}
      </span>
      <span v-show="filter.startPeriod!==1 || filter.endPeriod!==8" class="badge rounded-pill me-2">
        {{ filter.startPeriod }}-{{ filter.endPeriod }}节
      </span>
      <span v-show="filter.singleWeek!==-1" class="badge rounded-pill me-2">
        仅{{ filter.singleWeek === -1 ? "" : "双单"[filter.singleWeek] }}周
      </span>
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
      <tr v-for="lesson in filteredLessons" :key="JSON.stringify(lesson.time)">
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
$colors: (#0d6efd, #07a9b9, #1ea120, #7e4fd5, #de942a, #d24ea0)

.badge-group
  .badge
    font-weight: normal
    @each $color in $colors
      $index: index($colors, $color)
      &:nth-child(#{$index+1})
        background-color: $color

#filter-collapse-toggle-icon
  transition: transform 0.4s ease

  #filter-collapse-toggle-checkbox:checked + label &
    transform: rotate(180deg)
</style>
