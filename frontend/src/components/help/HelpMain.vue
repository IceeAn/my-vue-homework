<script setup lang="ts">

import UIExample from "@/components/help/UiExample.vue";
import HelpIntroduction from "@/components/help/HelpIntroduction.vue";
import HelpBooking from "@/components/help/HelpBooking.vue";
import HelpCourseManagement from "@/components/help/HelpCourseManagement.vue";
import HelpMyBooking from "@/components/help/HelpMyBooking.vue";
</script>

<template>
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between">
      <div class="nav flex-row flex-md-column nav-pills col-12 col-md-3" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#help-introduction" type="button"
                role="tab" aria-controls="v-pills-home" aria-selected="true">
          总体介绍
        </button>
        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#help-booking" type="button" role="tab"
                aria-controls="v-pills-profile" aria-selected="false">
          预约
        </button>
        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#help-course-management" type="button" role="tab"
                aria-controls="v-pills-disabled" aria-selected="false">
          课程管理
        </button>
        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#help-my-booking" type="button" role="tab"
                aria-controls="v-pills-disabled" aria-selected="false">
          我的预约
        </button>
      </div>
      <div class="vr d-none d-md-block"></div>
      <hr class="d-block d-md-none mt-2">
      <div id="help-body" class="tab-content col-12 col-md-89 mb-3">
        <HelpIntroduction/>
        <HelpBooking/>
        <HelpCourseManagement/>
        <HelpMyBooking/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@media (min-width: 768px)
  .col-md-89
    width: 70%
  #help-body
    height: calc(100vh - 100px)
    overflow: scroll
</style>
