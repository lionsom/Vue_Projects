<template>
    <div>

      <!-- 导航啦 -->
      <van-nav-bar
        title="登录页"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight">
        <!-- 插槽，自定义右侧按钮 -->
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>

    </div>

</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'LoginIndex',
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      Toast('提示')
    }
  }
}
</script>

<style>

</style>
