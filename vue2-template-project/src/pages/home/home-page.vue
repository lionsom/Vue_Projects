<template>
  <div class="home-page">
    <h1>欢迎来到主页</h1>
    <p>这是一个使用 Vue2 + TypeScript + SCSS 构建的示例主页。</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HomePage extends Vue {
  // 可以在这里添加 TypeScript 逻辑
}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: #f5f7fa;

  h1 {
    color: #2c3e50;
    margin-bottom: 16px;
    font-size: 2.5rem;
  }

  p {
    color: #606266;
    font-size: 1.2rem;
  }
}
</style>
