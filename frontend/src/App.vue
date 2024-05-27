<script setup lang="ts">
import { RouterView } from 'vue-router'
import StickyNavbar from "@/components/StickyNavbar.vue";
</script>

<template>
  <header>
    <StickyNavbar/>
  </header>
  <main class="p-2 px-md-5 py-md-3">
    <RouterView/>
  </main>

</template>

<style lang="sass">
$theme-color: #e4eaff

.bg-theme
  background-color: $theme-color

.row-cols-7>*
  flex: 0 0 auto
  width: 14.28571429%
</style>
