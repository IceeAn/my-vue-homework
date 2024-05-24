<script setup lang="ts">
import { computed } from "vue";
import TableCell from "@/components/booking/TableCell.vue";
import type { Lesson } from "@/types";

defineProps<{
  week?: number
}>()

let fakeScheduleTable : (Lesson|null)[][] = [
  [{teacher:"t1",comment: "课程"}, null, {teacher: "t2",comment:"考试"}, {teacher: "t2"}],
  [{teacher:"t1",comment: "课程"}, null, {teacher: "t2",comment:"考试"}, {teacher: "t2"}],
  [{teacher:"t1",comment: "课程"}, null, {teacher: "t2",comment:"考试"}, {teacher: "t2"}],
  [{teacher:"t1",comment: "课程"}, null, {teacher: "t2",comment:"考试"}, {teacher: "t2"}],
  [{teacher:"t1",comment: "课程"}, null, {teacher: "t2",comment:"考试"}, {teacher: "t2"}],
  [{teacher:"t1",comment: "课程"}, null, {teacher: "t2",comment:"考试"}, {teacher: "t2"}],
  [{teacher:"t1",comment: "课程"}, null, {teacher: "t2",comment:"考试"}, {teacher: "t2"}],
]

</script>
<template>
  week:{{ week }}
    <table class="table table-sm table-borderless align-middle">
      <thead>
      <tr>
        <th scope="row">#</th>
        <th class="text-center" scope="col" v-for="day in '一二三四五六日'" :key="day">周{{ day }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="i in 8" :key="i">
        <th scope="row">{{ i }}</th>
        <template v-if="i%2 == 1">
          <TableCell v-for="j in 7" :key="j" :item="fakeScheduleTable[j-1][i/2|0] || undefined"/>
        </template>
        <td></td>
      </tr>
      </tbody>
    </table>
</template>

<style scoped lang="sass">
th[scope="row"]
  width: 4.1%
  height: 8vh

td
  width: 13.7%
  height: 8vh
</style>
