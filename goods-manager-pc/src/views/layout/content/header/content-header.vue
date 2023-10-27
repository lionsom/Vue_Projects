<template>
  <div class="content-header">我是头jjkljklljkasjkld</div>
</template>

<script>
import { ROLE_GENDER, appDesc } from '@/constant/index'

export default {
  mounted() {
    console.log(ROLE_GENDER.MAN.desc)
    console.log(appDesc)
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
