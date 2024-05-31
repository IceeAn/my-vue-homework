<script setup lang="ts">
import router from "@/router";
import { useCurrentTeacherStore } from "@/stores/currentTeacherStore";
import { storeToRefs } from "pinia";
import { useLayoutStore } from "@/stores/layoutStore";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const currentTeacher = useCurrentTeacherStore();
const { loading, navLoadingElement } = storeToRefs(useLayoutStore())

const route = useRoute();
const currentRouteName = computed(() => route.name);

const navs = [
  { name: 'booking', text: '预约' },
  { name: 'courseManage', text: '课程管理' },
  { name: 'myBooking', text: '我的预约' },
  { name: 'help', text: '帮助' }
]

function logout() {
  currentTeacher.logout()
  setLoading(999)
  router.replace({ name: 'login' })
}

const setLoading = (index) => {
  setTimeout(() => loading.value = true, 300)
  navLoadingElement.value = index
}

</script>

<template>
  <nav class="navbar navbar-expand-md sticky-top bg-theme">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" :to="{name:'booking'}" @click="setLoading(1)">
        <span v-show="loading && navLoadingElement === 0" class="spinner-border spinner-border-sm"
              aria-hidden="true"></span>
        实验室预约
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-body"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav-body">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li v-for="(item,index) in navs" :key="item.name" class="nav-item">
            <RouterLink class="btn btn-nav text-start px-2 mx-md-2 nav-link border-0"
                        :class="{'active':currentRouteName===item.name}"
                        :to="{name:item.name}" @click="setLoading(index+1)">
              <span v-show="loading && navLoadingElement === index+1" class="spinner-border spinner-border-sm"
                    aria-hidden="true"></span>
              {{ item.text }}
            </RouterLink>
          </li>
        </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a v-if="$route.name!=='login'" class="btn btn-nav text-start px-2 mx-md-2 nav-link border-0"
                 @click="logout">
                <span v-show="loading && navLoadingElement === 999" class="spinner-border spinner-border-sm"
                      aria-hidden="true"></span>
                <span class="bi bi-door-open-fill"> 退出登录</span>
              </a>
              <a v-else class="btn btn-nav text-start px-2 mx-md-2 nav-link">
                <span class="bi bi-house-door-fill"> 登录</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="sass">
.btn-nav:hover,
.btn-nav:active
  background-color: #0001 !important
</style>
