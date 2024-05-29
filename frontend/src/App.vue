<script setup lang="ts">
import { RouterView } from 'vue-router'
import StickyNavbar from "@/components/StickyNavbar.vue";
import GlobalModals from "@/components/GlobalModals.vue";
</script>

<template>
  <StickyNavbar/>
  <main class="p-2 px-md-5 py-md-3">
    <RouterView/>
  </main>
  <GlobalModals/>
</template>

<style lang="sass">
$theme-color: #e4eaff

.bg-theme
  background-color: $theme-color

.row-cols-7>*
  flex: 0 0 auto
  width: 14.28571429%
</style>
