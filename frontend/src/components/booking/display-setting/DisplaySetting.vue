<script setup lang="ts">
import WeekSelect from "@/components/booking/display-setting/WeekSelect.vue";
import LabSelect from "@/components/booking/display-setting/LabSelect.vue";
import DisplaySelect from "@/components/booking/display-setting/DisplaySelect.vue";
</script>

<template>
<!--  <p>TODO:周总览/实验室总览/详细视图</p>-->
  <div class="row mt-2 px-0 px-md-2">
    <div class="col col-9 col-md-7">
      <div class="row">
        <WeekSelect/>
        <LabSelect/>
      </div>
    </div>
    <div class="col col-3 col-md-5">
      <div class="row">
        <DisplaySelect/>
        <div class="col col-12 col-md-5 px-2">
          <button class="btn btn-outline-primary w-100"><i class="bi bi-gear"></i><span class=" d-lg-inline"> 设置</span></button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="sass">

</style>
