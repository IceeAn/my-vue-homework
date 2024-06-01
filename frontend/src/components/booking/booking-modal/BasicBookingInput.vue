<script setup lang="ts">
import { IdGenerator } from "@/stores/idGenerator";
import { useCourseStore } from "@/stores/courseStore";
import { storeToRefs } from "pinia";
import { useBookingStore } from "@/stores/bookingStore";

const { lastId, getNextId } = IdGenerator();

const { myCourses } = storeToRefs(useCourseStore())
const { courseId, purpose } = storeToRefs(useBookingStore())
</script>

<template>
  <div class="row row-cols-1 row-cols-md-2">
    <div class="col">
      <select class="form-select mb-3" v-model="courseId">
        <option selected value="-1">选择课程名称</option>
        <option v-for="courseForSelect in myCourses" :key="courseForSelect.id"
                :value="courseForSelect.id">
          {{ courseForSelect.name }}
        </option>
      </select>
    </div>
    <div class="col">
      <div class="btn-group w-100" role="group">
        <input type="radio" class="btn-check" name="usage" :id="`usage-${getNextId()}`"
               value="课程" v-model="purpose" autocomplete="off">
        <label class="btn btn-primary" :for="`usage-${lastId()}`">课程</label>

        <input type="radio" class="btn-check" name="usage" :id="`usage-${getNextId()}`"
               value="实验" v-model="purpose" autocomplete="off" checked>
        <label class="btn btn-primary" :for="`usage-${lastId()}`">实验</label>

        <input type="radio" class="btn-check" name="usage" :id="`usage-${getNextId()}`"
               value="考试" v-model="purpose" autocomplete="off">
        <label class="btn btn-primary" :for="`usage-${lastId()}`">考试</label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
