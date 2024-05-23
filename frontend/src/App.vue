<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import StickyNavbar from "@/components/StickyNavbar.vue";
</script>

<template>
  <header>
    <StickyNavbar />
  </header>
  <main class="p-2 p-md-5">
    <RouterView />
  </main>

</template>

<style scoped>

</style>
