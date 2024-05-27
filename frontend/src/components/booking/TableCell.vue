<script setup lang="ts">
import type { Lesson } from "@/types";

let user = 't1';

defineProps<{
  item?: Lesson
}>()
</script>

<template>
  <td rowspan="2">
    <button
        class="course d-inline-block btn w-100 h-100"
        :class="item ? (item.teacher==user ? 'btn-success' : 'btn-secondary'):'btn-primary' "
        :disabled="item && item.teacher!=user"
    >
      <span v-if="item">
        <span class="d-none d-md-inline">{{ item.teacher }}<br></span>
        <span>{{ item?.comment || '' }}</span>
      </span>
      <span v-else v-html="'点击<br>申请'"></span>

    </button>
  </td>
</template>

<style scoped lang="sass">
</style>
