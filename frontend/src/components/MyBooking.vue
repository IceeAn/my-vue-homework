<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1 class="display-6">我的预约</h1>
    <p class="fs-5"><i class="bi bi-funnel"></i> 筛选条件</p>
    <div class="row row-cols-4">
      <div class="col col-3">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            实验室
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item">实验室A</a></li>
            <li><a class="dropdown-item">实验室B</a></li>
            <li><a class="dropdown-item">实验室C</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="fs-4 mt-3 badge-group">
      <span class="badge rounded-pill me-2">实验室A</span>
      <span class="badge rounded-pill me-2">1-8周</span>
      <span class="badge rounded-pill me-2">2-3节</span>
      <span class="badge rounded-pill me-2">仅单周</span>
    </div>
  </div>
</template>

<style scoped lang="sass">
$colors: (#0d6efd, #1ea120, #7e4fd5, #de942a)

.badge-group
  .badge
    font-weight: normal
    @each $color in $colors
      $index: index($colors, $color)
      &:nth-child(#{$index})
        background-color: $color
</style>
