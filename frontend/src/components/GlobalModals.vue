<script setup lang="ts">

import BookingModal from "@/components/booking/booking-modal/BookingModal.vue";
import AddCourseModal from "@/components/booking/course-management/AddCourseModal.vue";
import EditCourseModal from "@/components/booking/course-management/EditCourseModal.vue";
import DeleteCourseModal from "@/components/booking/course-management/DeleteCourseModal.vue";
import BookingInfoModal from "@/components/booking/booking-modal/BookingInfoModal.vue";
</script>

<template>
  <BookingModal/>
  <BookingInfoModal/>
  <AddCourseModal/>
  <EditCourseModal/>
  <DeleteCourseModal/>
</template>

<style scoped lang="sass">

</style>
