<script setup lang="ts">
import Popover from "bootstrap/js/dist/popover";
import { onMounted } from "vue";

let popover: Popover[] = [];

onMounted(() => {
  const elements = document.querySelectorAll('[data-bs-toggle="popover"]');

  elements.forEach(element => {
    popover.push(new Popover(element, { placement: 'bottom', trigger: 'hover' }))
  });

});
</script>

<template>
  <div class="row rol-cols-3">
    <a tabindex="0" role="button" class="col btn btn-success mx-1 mx-md-3"
       data-bs-toggle="popover" data-bs-trigger="hover focus"
       data-bs-title="点此无效" data-bs-content="这是对下方课程颜色的解释。">
      <i class="bi bi-check-circle"></i> 您已预约
    </a>
    <a tabindex="0" role="button" class="col btn btn-primary mx-1 mx-md-3"
       data-bs-toggle="popover" data-bs-trigger="hover focus"
       data-bs-title="点此无效" data-bs-content="这是对下方课程颜色的解释。">
      <i class="bi bi-plus-circle"></i> 现可预约
    </a>
    <a tabindex="0" role="button" class="col btn btn-secondary mx-1 mx-md-3"
       data-bs-toggle="popover" data-bs-trigger="hover focus"
       data-bs-title="点此无效" data-bs-content="这是对下方课程颜色的解释。">
      <i class="bi bi-x-circle"></i> 已被预约
    </a>
  </div>
</template>

<style scoped lang="sass">
</style>
