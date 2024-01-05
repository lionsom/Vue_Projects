<script setup lang="ts">
import LeftMenu from './left-menu/index.vue'
import RightContent from './right-content/index.vue'
import TopHeader from './top-header/index.vue'

defineOptions({
  name: "0-layout-home"
})

</script>

<template>
  <div class="main">
    <!-- 左 -->
    <div class="left-content">
      <LeftMenu />
    </div>

    <!-- 右 -->
    <div class="right-content">
      
      <!-- header -->
      <div class="top-header">
        <TopHeader />
      </div>

      <!-- content -->
      <div class="right-main">
        <RightContent />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.left-content {
  width: 200px;
  background-color: #4680ff;
  overflow: hidden;
}

.right-content {
  height: 100vh;
  // 计算宽度
  width: calc(100% - 200px);

  .top-header {
    height: 60px;
    background-color: yellowgreen;
  }

  .right-main {
    background-color: #f4f4f5;
    // 计算高度
    height: calc(100% - 60px);
    // 内部滚动
    overflow-y:auto;
  }
}

</style>