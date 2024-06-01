<script setup lang="ts">

import UIExample from "@/components/help/UiExample.vue";
</script>

<template>
  <div class="tab-pane fade pe-3" id="help-booking" role="tabpanel" tabindex="0">
    <h1 class="display-6">预约模块</h1>
    <div>
      Q：如何预约？<br>
      A：点击课程表中蓝色（即可预约）课程，即可展开预约窗口。预约窗口上方存在如下选项卡：
      <UIExample>
        <ul class="nav nav-pills" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active"
                    data-bs-toggle="pill"
                    type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              <span class="d-none d-md-inline">预约</span>本周本节
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link"
                    data-bs-toggle="pill"
                    type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
              <span class="d-none d-md-inline">选择</span>多周本节
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link"
                    data-bs-toggle="pill"
                    type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
              周次区间<span class="d-none d-md-inline">预约</span>
            </button>
          </li>
        </ul>
      </UIExample>
      选择你想要的模式：
      <ul>
        <li><span class="d-none d-md-inline">预约</span>本周本节：仅预约选择的这一次课程</li>
        <li><span class="d-none d-md-inline">选择</span>多周本节：你可以手动选择要预约的周次，不可选择的周次为灰色。</li>
        <li>周次区间<span class="d-none d-md-inline">预约</span>：输入起始周次和结束周次，再选择是否预约单/双周与是否调剂，系统会自动帮你预约这个区间内需要的周次。
        </li>
      </ul>
      接下来，选择课程和用途（课程、实验、考试）后点击“确定”即可。若输入有误或无法预约，系统会弹出提示。
    </div>
    <hr>
    <div>
      Q：如何取消预约？<br>
      A：点击绿色（即已预约）课程，点击“取消本节预约”即可取消本节预约。<strong>由于单一课程的再次预约十分简单，本功能不设确认提示。</strong>若要批量取消预约，请在“我的预约”模块内完成。
    </div>
    <hr>
    <div>
      Q：如何更换周次？<br>
      A：注意课表上方的如下按钮：
      <UIExample>
        <div class="col col-4 px-1 px-md-2">
          <div class="btn-group w-100">
            <button type="button" class="btn btn-outline-primary">
              第 1 周
            </button>
            <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split px-2"
                    aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
          </div>
        </div>
      </UIExample>
      点击左半按钮可以手动输入周次，点击右半按钮可以选择周次。
    </div>
    <hr>
    <div>
      Q：如何切换实验室？<br>
      A：在周次切换按钮右侧，存在实验室切换按钮：
      <UIExample>
        <div class="btn-group col-4">
          <button type="button"
                  class="btn btn-outline-primary dropdown-toggle d-flex justify-content-evenly align-items-center"
                  aria-expanded="false">
            实验室A
          </button>
        </div>
      </UIExample>
      点击即可选择实验室。
    </div>
<!--    <hr>-->
<!--    <div>-->
<!--      Q：<br>-->
<!--      A：-->
<!--    </div>-->
  </div>
</template>

<style scoped lang="sass">

</style>
