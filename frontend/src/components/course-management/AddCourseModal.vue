<script setup lang="ts">
import ModalFrame from "@/components/common/ModalFrame.vue";
import { useCourseStore } from "@/stores/courseStore";
import { ref } from "vue";

const courseStore = useCourseStore();

let operatingCourse = ref({
  id: undefined,
  teacher: undefined,
  name: "",
  creditHour: undefined
})

function reset(){
  operatingCourse.value = {
    id: undefined,
    teacher: undefined,
    name: "",
    creditHour: undefined
  }
}

function cancel(){
  reset()
}

function confirm(){
  courseStore.addCourse(operatingCourse.value)
  reset()
  return true
}
</script>

<template>
  <ModalFrame id="add-course-modal" :cancel="cancel" :confirm="confirm">
    <template #header>
      添加课程
    </template>
    <template #body>
      <form>
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="course-name-add" placeholder="课程名称" v-model="operatingCourse.name">
              <label for="course-name-add">课程名称</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input type="number" class="form-control" id="course-period-add" placeholder="学时" v-model="operatingCourse.creditHour">
              <label for="course-period-add">学时</label>
            </div>
          </div>
        </div>
      </form>
    </template>
  </ModalFrame>
</template>

<style scoped lang="sass">

</style>
