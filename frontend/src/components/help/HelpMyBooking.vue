<script setup lang="ts">

import UiExample from "@/components/help/UiExample.vue";
</script>

<template>
  <div class="tab-pane fade pe-3" id="help-my-booking" role="tabpanel" tabindex="0">
    <h1 class="display-6">我的预约模块</h1>
    <p>您可以在此模块查看和批量删除您的所有预约。</p>
    <hr>
    <h3>筛选要查看的预约</h3>
    默认情况下，您可以查看所有预约。您可以通过修改
    <span class="fs-5"><i class="bi bi-funnel"></i> 筛选条件</span>
    图标下方的表单筛选您需要查看的预约。
    支持的筛选条件有：
    <ul>
      <li>课程</li>
      <li>实验室</li>
      <li>单双周</li>
      <li>星期</li>
      <li>周次</li>
      <li>时段</li>
    </ul>
    如果您通过移动端查看，筛选条件可能占用很大的屏幕空间。您可以点击如下图标折叠筛选条件，再次点击可以展开。
    <UiExample>
      <button class="btn btn-primary">
        <i id="filter-collapse-toggle-icon" class="bi bi-chevron-up"></i>&nbsp;折叠
      </button>&emsp;
      <button class="btn btn-outline-primary">
        <i id="filter-collapse-toggle-icon" class="bi bi-chevron-down"></i>&nbsp;展开
      </button>
    </UiExample>
    筛选后，你可以通过下方 <em>当前筛选</em> 快速查看已经选择的筛选条件。
    您可以点击课程前方的
    <input class="form-check-input" type="checkbox"> / <input class="form-check-input" type="checkbox" checked>
    复选框选择或取消选择预约，
    或点击表头的
    <input class="form-check-input" type="checkbox"> / <input class="form-check-input" type="checkbox" checked>
    <span class="d-none d-md-inline">全选</span>复选框选择或取消选择所有预约。<br>
    随后，你可以点击下方按钮一键取消预约所有选择的预约。
    <UiExample>
      <button class="btn btn-danger">
        <i class="bi bi-trash3"></i> 取消选中预约
      </button>
    </UiExample>
    若不选中课程，该按钮无法点击。
  </div>
</template>

<style scoped lang="sass">

</style>
