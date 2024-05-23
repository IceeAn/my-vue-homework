<script setup lang="ts">

</script>
<template>
  <nav class="navbar navbar-expand-md sticky-top bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" :to="{name:'booking'}">实验室预约</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" :to="{name:'booking'}">预约</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">帮助</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">更多</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
