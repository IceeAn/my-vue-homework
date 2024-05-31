<script setup lang="ts">
import { Modal } from "bootstrap";
import { onMounted } from "vue";

let props = defineProps<{
  id: string,
  cancel?: () => void,
  confirm: () => boolean
}>()

let modal: Modal | null = null

onMounted(() => {
  modal = new Modal(document.getElementById(props.id) as HTMLElement)
})
</script>

<template>
  <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-fullscreen-md-down modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">
            <slot name="header"/>
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body px-3 px-md-5">
          <slot name="body"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cancel">取消</button>
          <button type="button" class="btn btn-primary" @click="confirm() && modal?.hide()">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
