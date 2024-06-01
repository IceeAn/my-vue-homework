<script setup lang="ts">

</script>

<template>
  <div class="tab-pane fade show active pe-3" id="help-introduction" role="tabpanel" tabindex="0">
    <h1 class="display-6">实验室预约系统</h1>
    <p>此tab暂无总体介绍，点击左侧（手机端为上方）的具体tab可以查看使用帮助</p>
    <h1 class="display-6">模块介绍</h1>
    <hr>
    <div class="accordion" id="helper-introduction-accordion">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#helper-introduction-1" aria-expanded="true" aria-controls="collapseOne">
            预约模块
          </button>
        </h2>
        <div id="helper-introduction-1" class="accordion-collapse collapse show"
             data-bs-parent="#helper-introduction-accordion">
          <div class="accordion-body">
            暂无介绍
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#helper-introduction-2" aria-expanded="false" aria-controls="collapseTwo">
            课程管理模块
          </button>
        </h2>
        <div id="helper-introduction-2" class="accordion-collapse collapse"
             data-bs-parent="#helper-introduction-accordion">
          <div class="accordion-body">
            暂无介绍
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#helper-introduction-3" aria-expanded="false" aria-controls="collapseThree">
            我的预约模块
          </button>
        </h2>
        <div id="helper-introduction-3" class="accordion-collapse collapse"
             data-bs-parent="#helper-introduction-accordion">
          <div class="accordion-body">
            暂无介绍
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
