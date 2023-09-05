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

      <!-- 主页内容 -->
      <div class="content">
        <h2>登录</h2>
      </div>

    </div>

</template>

<script>
// import request from '@/utils/request'
import { getPicCode } from '@/api/login'

import { Toast } from 'vant'

export default {
  name: 'LoginIndex',
  created () {
    this.getCapthcaImage()
    this.$toast('哈哈哈')
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      Toast('提示')
    },
    async getCapthcaImage () {
      // Before
      // const res = await request.get('/captcha/image')
      // After
      const { data: { base64, key } } = await getPicCode()
      console.log(key)
      console.log(base64)
    }
  }
}
</script>

<style>

</style>
