<script setup lang="ts">
import ColorHint from "@/components/booking/ColorHint.vue";
import ScheduleTable from "@/components/booking/ScheduleTable.vue";
import DisplaySetting from "@/components/booking/display-setting/DisplaySetting.vue";
</script>

<template>
  <div class="mx-auto col-12 col-md-10 col-lg-8 col-xl-6">
    <div class="px-2 ps-md-4 pe-md-2">
      <ColorHint/>
      <DisplaySetting/>
    </div>
    <ScheduleTable :week="3"/>
  </div>
</template>

<style scoped>

</style>
