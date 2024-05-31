<script setup lang="ts">
import { useBookingStore } from "@/stores/bookingStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import ModalFrame from "@/components/common/ModalFrame.vue";
import { useCourseStore } from "@/stores/courseStore";
import { useCurrentTeacherStore } from "@/stores/currentTeacherStore";

const bookingStore = useBookingStore()
const refs = storeToRefs(bookingStore)
const lessonPeriod = computed(() => {
  return `${refs.period.value.startPeriod}-${refs.period.value.startPeriod + 1}`
})

const courseStore = useCourseStore()

const { currentTeacher } = storeToRefs(useCurrentTeacherStore())

const isMyLesson = computed(() => refs.existingLesson.value?.teacher === currentTeacher.value?.id)
</script>

<template>
  <ModalFrame id="booking-info-modal" :cancel="()=>{return 0}" :confirm="()=>{return true}">
    <template #header>
      {{ refs.defaultLab.value }} 星期{{ " 一二三四五六日"[refs.period.value.weekday] }} 第 {{ lessonPeriod }} 节信息
    </template>
    <template #body>
      <p><i class="bi bi-journal-text fs-5"></i> 占用课程：{{ courseStore.findCourseById(refs.existingLesson.value?.course || '')?.name }}</p>
      <p><i class="bi bi-person-video fs-5"></i> 任课教师：{{ courseStore.findCourseById(refs.existingLesson.value?.course || '')?.teacher.name }}</p>
      <p><i class="bi bi-info-circle fs-5"></i> 使用用途：{{ refs.existingLesson.value?.bookingType }}</p>
      <template v-if="isMyLesson">
        <button class="btn btn-danger mb-3"><i class="bi bi-trash3"></i> 取消本节预约</button>
        <div class="alert alert-info">
          想要批量取消？ 点击 上方导航栏-我的预约 即可管理已完成预约。
        </div>
      </template>
    </template>
  </ModalFrame>
</template>

<style scoped lang="sass">

</style>
