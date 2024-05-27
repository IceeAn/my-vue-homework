<script setup lang="ts">
import { useLabStore } from '@/stores/LabStore';
import { storeToRefs } from "pinia";

const labStore = useLabStore();
const { lab } = storeToRefs(labStore);
const labs = ["实验室A", "实验室B", "实验室C", "实验室D"]
</script>

<template>
  <div class="col col-6 px-1 px-md-2">
    <div class="btn-group w-100">
      <button type="button" class="btn btn-outline-primary dropdown-toggle d-flex justify-content-around align-items-center"
              data-bs-toggle="dropdown" aria-expanded="false">
        {{ lab }}
      </button>

      <ul class="dropdown-menu">
        <li v-for="distinctLab of labs" :key="distinctLab">
          <a class="dropdown-item" @click="lab=distinctLab">{{ distinctLab }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
