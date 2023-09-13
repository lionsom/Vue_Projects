<template>
    <div>

      <!-- 导航啦 -->
      <van-nav-bar
        safe-area-inset-top
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

          <div class="form-item1">
            <input v-model="mobile" type="text" maxlength="11" placeholder="请输入手机号码">
          </div>

          <div class="form-item2">
            <input v-model="picCode" type="text" maxlength="4" placeholder="请输入图形验证码">
            <img :src="picUrl" alt="" @click="getCapthcaImage">
          </div>

          <div class="form-item3">
            <input v-model="msgCode" type="text" placeholder="请输入短信">
            <button class="get-code-button" @click.prevent="getMsgCode">
              {{ second === totalSecond ? getCodeMsg : second + '秒后重新发送' }}
            </button>
          </div>

        </div>

        <!-- 登录按钮 -->
        <button class="loginBtn" @click.stop="loginClick">登 录</button>
      </div>

    </div>

</template>

<script>
// import request from '@/utils/request'
import { getPicCode, getMsgCode, codeLogin } from '@/api/login'
import { Toast } from 'vant'

export default {
  name: 'LoginIndex',
  data () {
    return {
      picKey: '', // 将来请求传递的图形验证码唯一标识
      picUrl: '', // 存储请求渲染的图片地址
      picCode: '', // 用户输入的图形验证码
      totalSecond: 10, // 总秒数
      second: 10, // 当前秒数，开定时器对 second--
      mobile: '13099999999', // 手机号
      msgCode: '', // 短信验证码
      getCodeMsg: '获取短信',
      timer: null // 定时器 id
    }
  },
  // 进入页面
  created () {
    this.getCapthcaImage()
  },
  // 离开页面清除定时器
  destroyed () {
    clearInterval(this.timer)
  },
  // 方法
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      Toast('提示')
    },
    // 获取图片
    async getCapthcaImage () {
      // Before
      // const res = await request.get('/captcha/image')
      // After
      const { data: { base64, key } } = await getPicCode()
      console.log(key)
      console.log(base64)
      this.picKey = key
      this.picUrl = base64
    },
    // 校验 手机号 和 图形验证码 是否合法
    // 通过校验，返回true
    // 不通过校验，返回false
    validFn () {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    },
    // 获取短信
    async getMsgCode () {
      // 格式校验
      if (!this.validFn()) {
        this.$toast('短信或验证码格式不正确')
        return
      }
      // 若当前已经开始倒计时了，则无法进行下一步
      if (this.timer) {
        return
      }

      // 发送获取验证码请求
      const res = await getMsgCode(this.picCode, this.picKey, this.mobile)
      if (res.status === 200) {
        this.$toast(res.message)
        // 开启倒计时
        this.timer = setInterval(() => {
          this.second--
          // 关闭定时器
          if (this.second <= 0) {
            clearInterval(this.timer)
            this.timer = null // 重置定时器 id
            this.second = this.totalSecond // 归位
          }
        }, 1000)
      }
    },
    // 登录点击
    async loginClick () {
      // 登录校验
      if (this.msgCode.length === 0) {
        this.$toast('请输入验证码')
        return
      }
      // 接口
      const res = await codeLogin(this.mobile, this.msgCode)
      console.log(res)
      if (res.status === 200) {
        // 登录成功，Vuex缓存用户信息
        this.$store.commit('shoppingUser/setUserInfo', res.data)
        // 提示
        this.$toast(res.message)
        // 跳转页面
        this.$router.push('/shopping/home')
      }
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

.form {
  background-color: transparent;
  margin-top: 20px;

  .form-item1 {
    margin-top: 20px;
    margin-left: 6%;
    width: 88%;
    height: 40px;
    background-color: transparent;

    input {
      height: 100%;
      width: 100%;

      border: 0px;
      border-bottom: 1px solid;
      border-bottom-color: red;
    }
  }

  .form-item2 {
    display: flex;
    justify-content: flex-end;

    margin-top: 20px;
    margin-left: 6%;
    width: 88%;
    height: 40px;
    background-color: transparent;

    input {
      height: 100%;
      width: 100%;

      border: 0px;
      border-bottom: 1px solid;
      border-bottom-color: red;
    }

    img {
      width: 120px;
      height: 40px;
    }
  }

  .form-item3 {
    display: flex;
    justify-content: flex-end;

    margin-top: 20px;
    margin-left: 6%;
    width: 88%;
    height: 40px;
    background-color: transparent;

    input {
      height: 100%;
      width: 100%;

      border: 0px;
      border-bottom: 1px solid;
      border-bottom-color: red;
    }

    button {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      max-width: 60%;
      min-width: 100px;
      width: fit-content;
      height: 100%;
    }
  }
}

.loginBtn {
  margin-left: 10%;
  margin-top: 50px;
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
