<template>
  <div>
    <my-base-nav-bar title="全局组件+局部组件" :showLeftArrow="true" :isAutoBack="true" />

    <div class="mainPage">

      <h4>我是测试『局部组件』+『全局组件』的测试页面</h4>

      <van-divider>分割线</van-divider>

      <h3>全局组件</h3>

      <!-- 全局组件 - 在main.js中注册 -->
      <my-global-button></my-global-button>

      <van-divider>分割线</van-divider>

      <h3>局部组件</h3>

      <!-- 局部组件 - 头部组件 -->
      <new-name-header></new-name-header>

      <!-- 局部组件 - 底部组件 -->
      <p-part-footer></p-part-footer>

    </div>
  </div>

</template>

<script>

import PPartHeader from '@/components/Global_Part_Comp/Part_Header.vue'
import PPartFooter from '@/components/Global_Part_Comp/Part_Footer.vue'

export default {
  // 注册局部组件
  components: {
    // '组件名': 组件对象
    newNameHeader: PPartHeader,
    PPartFooter
  }

}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
