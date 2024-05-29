<script setup lang="ts">
import { IdGenerator } from "@/stores/idGenerator";

const { lastId, getNextId } = IdGenerator();
</script>

<template>
  <div class="row row-cols-2">
    <div class="col">
      <select class="form-select mb-3">
        <option selected>选择课程名称</option>
        <!--          TODO: 真正的课程-->
        <option value="1">课程A</option>
        <option value="2">课程B</option>
        <option value="3">课程C</option>
      </select>
    </div>
    <div class="col">
      <div class="btn-group w-100" role="group">
        <input type="radio" class="btn-check" name="usage" :id="`usage-${getNextId()}`" autocomplete="off">
        <label class="btn btn-primary" :for="`usage-${lastId()}`">课程</label>

        <input type="radio" class="btn-check" name="usage" :id="`usage-${getNextId()}`" autocomplete="off" checked>
        <label class="btn btn-primary" :for="`usage-${lastId()}`">实验</label>

        <input type="radio" class="btn-check" name="usage" :id="`usage-${getNextId()}`" autocomplete="off">
        <label class="btn btn-primary" :for="`usage-${lastId()}`">考试</label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
