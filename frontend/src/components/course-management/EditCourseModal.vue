<script setup lang="ts">
import ModalFrame from "@/components/common/ModalFrame.vue";
import { useCourseStore } from "@/stores/courseStore";
import { storeToRefs } from "pinia";

const courseStore = useCourseStore();
const { operatingCourse } = storeToRefs(courseStore);

function confirm(){
  if(operatingCourse.value.name===""){
    alert("课程名称不能为空")
    return false
  }else if(operatingCourse.value.creditHour===undefined ||
      operatingCourse.value.creditHour.toString()==="" ||
      operatingCourse.value.creditHour===0
  ){
    alert("学时不能为空或为0")
    return false
  }
  courseStore.updateCourse(operatingCourse.value)
  return true
}
</script>

<template>
  <ModalFrame id="edit-course-modal" :confirm="confirm">
    <template #header>
      修改：{{ operatingCourse?.name }}
    </template>
    <template #body>
      <form>
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="course-name-edit" placeholder="课程名称" v-model="operatingCourse.name">
              <label for="course-name-edit">课程名称</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input type="number" class="form-control" id="course-period-edit" placeholder="学时" v-model="operatingCourse.creditHour">
              <label for="course-period-edit">学时</label>
            </div>
          </div>
        </div>
      </form>
    </template>
  </ModalFrame>
</template>

<style scoped lang="sass">

</style>
