<template>
    <div>

      <!-- 导航啦 -->
      <van-nav-bar
        title="会员登录"
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
        <!-- title -->
        <div class="title">
          <h2>手机号登录</h2>
          <p>未注册的手机号登录后将自动注册</p>
        </div>

        <!-- form -->
        <div class="form">
          <input type="text">
          <br />
          <input type="text">

          <br />
          <input type="text">
        </div>

        <!-- 登录按钮 -->
        <button class="loginBtn">登 录</button>
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

<style lang="scss" scoped>

.title {
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;

  h2 {
    font-size: 25px;
  }
  p {
    margin-top: 10px;
    font-size: 10px;
    color: gray;
  }
}

.loginBtn {
  margin-left: 10%;
  margin-top: 30px;
  width: 80%;
  height: 50px;

  border-radius: 25px;
  border-width: 0px;

  color: green;  // 字体颜色
  font-size: 25px;
  font-family: Georgia, serif;

  background-color: orange;
  background: linear-gradient(to bottom right, rgb(245, 230, 201), orange);
}

</style>
