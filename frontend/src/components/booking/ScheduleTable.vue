<script setup lang="ts">
import TableCell from "@/components/booking/TableCell.vue";
import { useWeekStore } from "@/stores/weekStore";
import { useScheduleStore } from "@/stores/scheduleStore";
import { storeToRefs } from "pinia";
import { computed, reactive, ref } from "vue";
import { useLabStore } from "@/stores/LabStore";

const weekStore = useWeekStore()
const { week } = storeToRefs(weekStore)

const labStore = useLabStore()
const { lab } = storeToRefs(labStore)

const scheduleStore = useScheduleStore()
const { schedule } = storeToRefs(scheduleStore)

// defineProps<{
//   week?: number
// }>()

let scheduleTable = computed(()=>(schedule.value.find(item => item.lab ==lab.value)?.schedule[week.value-1]))

</script>
<template>
  <table class="table table-sm table-borderless align-middle">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th class="text-center" scope="col" v-for="day in '一二三四五六日'" :key="day">周{{ day }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="i in 8" :key="i">
      <th scope="row">{{ i }}</th>
      <template v-if="i%2 == 1">
        <TableCell v-for="j in 7" :key="j" :lab :week :startPeriod="i" :weekday="j" :item="scheduleTable?.[j-1][i/2|0] || undefined"/>
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
