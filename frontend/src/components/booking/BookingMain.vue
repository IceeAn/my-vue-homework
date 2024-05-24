<script setup lang="ts">
import ColorHint from "@/components/booking/ColorHint.vue";
import ScheduleTable from "@/components/booking/ScheduleTable.vue";
</script>

<template>
  <div class="mx-auto col-12 col-md-10 col-lg-8 col-xl-6">
    <ColorHint/>
    <ScheduleTable :week="3"/>
  </div>
</template>

<style scoped>

</style>
