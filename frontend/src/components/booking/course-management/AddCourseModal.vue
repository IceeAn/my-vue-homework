<script setup lang="ts">
import ModalFrame from "@/components/common/ModalFrame.vue";
import { useCourseStore } from "@/stores/courseStore";
import { ref } from "vue";

const courseStore = useCourseStore();

let operatingCourse = ref({
  id: null,
  teacher: null,
  name: "",
  creditHour: null
})

function reset(){
  operatingCourse.value = {
    id: null,
    teacher: null,
    name: "",
    creditHour: null
  }
}

function cancel(){
  reset()
}

function confirm(){
  courseStore.addCourse(operatingCourse.value)
  reset()
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
              <input type="text" class="form-control" id="course-name" placeholder="课程名称" v-model="operatingCourse.name">
              <label for="course-name">课程名称</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input type="number" class="form-control" id="course-period" placeholder="学时" v-model="operatingCourse.creditHour">
              <label for="course-period">学时</label>
            </div>
          </div>
        </div>
      </form>
    </template>
  </ModalFrame>
</template>

<style scoped lang="sass">

</style>
