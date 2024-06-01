<script setup lang="ts">
import ModalFrame from "@/components/common/ModalFrame.vue";
import { useMyBookingSelectionStore } from "@/stores/myBookingSelectionStore";
const myBookingSelectionStore = useMyBookingSelectionStore()
const confirm = ()=>{
  myBookingSelectionStore.deleteSelectedLessons()
  return true
}
</script>

<template>
  <ModalFrame id="batch-deletion-confirm-modal" :cancel="()=>{}" :confirm="confirm">
    <template #header>
      批量删除
    </template>
    <template #body>
      <span class="fs-5">
        是否<span class="text-danger">永久删除</span>已选择的{{ myBookingSelectionStore.selectedLessons.length }}条预约？该操作<span class="text-danger">不可恢复</span>。
      </span>
    </template>
  </ModalFrame>
</template>

<style scoped lang="sass">

</style>
