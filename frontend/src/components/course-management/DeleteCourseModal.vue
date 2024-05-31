<script setup lang="ts">
import ModalFrame from "@/components/common/ModalFrame.vue";
import { useCourseStore } from "@/stores/courseStore";
import { storeToRefs } from "pinia";

const courseStore = useCourseStore();
const { operatingCourse } = storeToRefs(courseStore);

function confirm(){
  courseStore.deleteCourse(operatingCourse.value.id);
  return true
}
</script>

<template>
  <ModalFrame id="delete-course-modal" :confirm="confirm">
    <template #header>
      删除课程
    </template>
    <template #body>
      <span class="fs-5">确定要<span class="text-danger">删除</span>课程：<strong>{{ operatingCourse?.name }}</strong>？</span>
      <div class="mt-3 alert alert-warning">删除后，该课程的所有信息（包括实验室预约）将被清除，且无法恢复。</div>
    </template>
  </ModalFrame>
</template>

<style scoped lang="sass">

</style>
