<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import { useWeekStore } from '@/stores/weekStore';
import { storeToRefs } from "pinia";

const weekStore = useWeekStore();
const { week } = storeToRefs(weekStore);

let editing = ref(false)

let weekInput = ref<HTMLInputElement | null>(null);

const toggleEditing = () => {
  editing.value = !editing.value;
  if (editing.value) {
    nextTick(() => {
      weekInput.value?.focus();
    });
  }else{
    //保证输入的周数为 1 - 18 之间的整数
    week.value = Math.floor(week.value < 1 ? 1 : week.value > 18 ? 18 : week.value);
  }
}
</script>

<template>
  <div class="col col-6 px-1 px-md-2">
    <input v-show="editing" v-model.lazy="week" ref="weekInput"
           class="form-control h-100" type="number"
           @blur="toggleEditing" @keydown.enter="(weekInput?.blur())">
    <div v-show="!editing" class="btn-group w-100">
      <button type="button" class="btn btn-outline-primary" @click="toggleEditing">
<!--        <span class="d-none d-md-inline">第 </span>-->第 {{ week }} 周
      </button>
      <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split px-2"
              data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <div class="row row-cols-4 px-3">
          <span v-for="i in 18" :key="i" @click="week=i"
                class="d-block col w-25 px-0 text-center dropdown-item">
            {{ i }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
