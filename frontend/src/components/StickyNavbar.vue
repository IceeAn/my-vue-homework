<script setup lang="ts">
import router from "@/router";

function logout() {
  console.log('logout')
  router.replace({name: 'login'})
}
</script>
<template>
  <nav class="navbar navbar-expand-md sticky-top bg-theme">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" :to="{name:'booking'}">实验室预约</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <RouterLink class="btn btn-nav text-start px-2 mx-md-2 nav-link active border-0" aria-current="page" :to="{name:'booking'}">预约</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="btn btn-nav text-start px-2 mx-md-2 nav-link border-0" :to="{name:'help'}">帮助</RouterLink>
          </li>
        </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a v-if="$route.name!=='login'" class="btn btn-nav text-start px-2 mx-md-2 nav-link border-0" @click="logout"><span
                  class="bi bi-door-open-fill"> 退出登录</span></a>
              <a v-else class="btn btn-nav text-start px-2 mx-md-2 nav-link"><span
                  class="bi bi-house-door-fill"> 登录</span></a>
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
