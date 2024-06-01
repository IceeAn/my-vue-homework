<script setup lang="ts">

import BookingModal from "@/components/booking/booking-modal/BookingModal.vue";
import AddCourseModal from "@/components/course-management/AddCourseModal.vue";
import EditCourseModal from "@/components/course-management/EditCourseModal.vue";
import DeleteCourseModal from "@/components/course-management/DeleteCourseModal.vue";
import BookingInfoModal from "@/components/booking/booking-modal/BookingInfoModal.vue";
import BatchDeletionConfirmModal from "@/components/my-booking/BatchDeletionConfirmModal.vue";
</script>

<template>
  <BookingModal/>
  <BookingInfoModal/>
  <AddCourseModal/>
  <EditCourseModal/>
  <DeleteCourseModal/>
  <BatchDeletionConfirmModal/>
</template>

<style scoped lang="sass">

</style>
