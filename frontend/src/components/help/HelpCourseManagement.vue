<script setup lang="ts">

import UiExample from "@/components/help/UiExample.vue";
</script>

<template>
  <div class="tab-pane fade pe-3" id="help-course-management" role="tabpanel" tabindex="0">
    <h1 class="display-6">课程管理模块</h1>
    <p>课程管理的内容较为简单，分为对课程的添加、修改、删除、显示。进入课程管理模块就会以表格显示所有由您教授的课程。</p>
    <h3>添加课程</h3>
    点击如下按钮，并在弹出窗口中输入课程名称和学时，点击确定即可。
    <UiExample>
      <button class="btn btn-success btn-lg d-block w-100 bi bi-plus-circle-dotted"> 添加课程</button>
    </UiExample>
    <hr>
    <h3>修改课程</h3>
    点击想要修改的课程右侧的如下按钮，并在弹出窗口中输入课程名称和学时，点击确定即可。
    <UiExample>
      <button class="btn btn-sm btn-primary bi bi-pencil-square"> 修改</button>
    </UiExample>
    <hr>
    <h3>删除课程</h3>
    点击想要删除的课程右侧的如下按钮，并在弹出窗口中点击确定即可。
    <UiExample>
      <button class="btn btn-sm btn-danger bi bi-trash3"> 删除</button>
    </UiExample>
  </div>
</template>

<style scoped lang="sass">

</style>
