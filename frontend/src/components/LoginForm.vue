<script setup lang="ts">
import { ref } from 'vue';
import router from "@/router";

const username = ref('');
const password = ref('');
const remember = ref(false);
const submitDisabled = ref(false);

function submitForm() {
  submitDisabled.value = true;
  router.replace({ name: 'booking' });
  submitDisabled.value = false;
}
</script>

<template>
  <div class="d-flex align-items-center justify-content-center justify-content-lg-between flex-column
              bg-body-tertiary rounded-5 mx-auto my-4 px-3 px-md-5 py-4 py-md-5 col-12 col-md-10 col-lg-8 col-xl-6">
    <form class="col-12 col-md-10" @submit.prevent="submitForm">
      <h1 class="mb-4">登录</h1>
      <div class="input-group mb-3">
        <span class="input-group-text fs-4 px-3"><i class="bi bi-person-fill"></i></span>
        <div class="form-floating">
          <input type="text" class="form-control" id="username" placeholder="用户名" name="username" v-model="username">
          <label for="username">用户名</label>
        </div>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text fs-4 px-3"><i class="bi bi-key-fill"></i></span>
        <div class="form-floating">
          <input type="password" class="form-control" id="password" placeholder="密码" name="password"
                 v-model="password">
          <label for="password">密码</label>
        </div>
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember" v-model="remember"> 记住密码
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit" :disabled="submitDisabled">
        <span class="spinner-border spinner-border-sm" :class="{'d-none': !submitDisabled}" aria-hidden="true"></span>
        登录<span :class="{'d-none': !submitDisabled}">中</span>
      </button>
      <p class="mt-4 mb-0 text-muted text-center">忘记账号或密码？<a href="mailto:admin@iceean.dev">点击联系管理员</a>
      </p>
    </form>
  </div>
  <div class="alert alert-info mx-auto text-center col-12 col-md-10 col-lg-8 col-xl-6">当前可以不填账号密码，直接点击登录</div>
</template>

<style scoped lang="sass">
.spinner-border.spinner-border-sm
  height: 1.25rem
  width: 1.25rem
</style>
