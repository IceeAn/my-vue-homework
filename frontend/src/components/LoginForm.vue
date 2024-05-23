<script setup lang="ts">
import {ref} from 'vue';

const username = ref('');
const password = ref('');
const remember = ref(false);

function submitForm() {
  this.$router.push({ name: 'booking' });
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
      <button class="w-100 btn btn-lg btn-primary" type="submit">登录</button>
      <p class="mt-4 mb-0 text-muted text-center">忘记账号或密码？<a href="mailto:admin@iceean.dev">点击联系管理员</a>
      </p>
    </form>
  </div>
</template>

<style scoped>

</style>
