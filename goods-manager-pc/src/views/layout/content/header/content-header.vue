<template>
  <div class="content-header">我是头jjkljklljkasjkld</div>
</template>

<script>
import { USERINFO } from '@/constant/index'

export default {
  mounted() {
    console.log(USERINFO)
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/constant/color.less';

.content-header {
  height: 50px;
  background-color: @lx-color-blue;
}
</style>
