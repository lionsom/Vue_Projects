<template>
  <div class="mainPage">
    我是测试『局部组件』 + 『全局组件』 的测试页面 <br>

    <!-- 局部组件 - 头部组件 -->
    <new-name-header></new-name-header>

    <!-- 局部组件 - 底部组件 -->
    <p-part-footer></p-part-footer>

    <!-- 全局组件 - 在main.js中注册 -->
    <my-global-button></my-global-button>

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

<style>

</style>
