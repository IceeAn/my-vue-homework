<script setup lang="ts">
import { useCourseStore } from "@/stores/courseStore"
import { storeToRefs } from "pinia";
import { useScheduleStore } from "@/stores/scheduleStore";

const courseStore = useCourseStore()
const { myCourses } = storeToRefs(courseStore)

const { calculateCourseHours } = useScheduleStore()

function setOperatingCourse(courseId: string) {
  console.log(JSON.stringify(courseStore.findCourseById(courseId)))
  courseStore.operatingCourse = JSON.parse(JSON.stringify(courseStore.findCourseById(courseId)))
}
</script>

<template>
  TODO:删除同时删除预约<br>
  <div class="row row-cols-1 col-12 col-md-10 col-lg-8 mx-auto">
    <div class="col mb-3 alert alert-info text-center">
      如果需要预约超出预定学时的课，可在此修改课程学时，预定完成再修改回去。<br>
      注意：若学时超过预定学时，下方表格中学时会变为<span class="text-danger">红色</span>，提示您已超出预定学时。
    </div>
    <div class="col mb-3">
      <button class="btn btn-success btn-lg d-block w-100 bi bi-plus-circle-dotted" data-bs-toggle="modal"
              data-bs-target="#add-course-modal"> 添加课程
      </button>
    </div>
    <div class="col">
      <table id="table" class="table table-striped text-center align-middle">
        <thead>
        <tr>
          <th>#</th>
          <th>课程</th>
          <th>学时</th>
          <th class="col-4">操作</th>
        </tr>
        </thead>
        <tbody class="table-group-divider">
        <tr v-for="(course, index) in myCourses" :key="course.id">
          <td>{{ index + 1 }}</td>
          <td>{{ course.name }}</td>
          <td :class="calculateCourseHours(course.id).value > course.creditHour ? 'text-danger':'text-success' ">
            {{ calculateCourseHours(course.id) }}/{{ course.creditHour }}
          </td>
          <td>
            <button class="btn btn-sm btn-primary bi bi-pencil-square me-0 me-md-2 mb-2 mb-md-0"
                    data-bs-toggle="modal" data-bs-target="#edit-course-modal"
                    @click="setOperatingCourse(course.id)"> 修改
            </button>
            <br class="d-inline d-md-none">
            <button class="btn btn-sm btn-danger bi bi-trash3"
                    data-bs-toggle="modal" data-bs-target="#delete-course-modal"
                    @click="setOperatingCourse(course.id)"> 删除
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
