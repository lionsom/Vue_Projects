<template>
  <div class="login">
    <div class="loginbtn" @click="loginClick">登录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {}
    }
  },
  methods: {
    async login() {
      await this.$api
        .login()
        .then((result) => {
          // status === 200
          console.log('登录成功 result = ', result)
          this.$router.push('/')
        })
        .catch((err) => {
          // status !== 200
          console.log(err)
        })
    },
    loginClick() {
      this.login()
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  .loginbtn {
    width: 300px;
    height: 100px;
    background: goldenrod;
    color: #fff;
    text-align: center;
    line-height: 100px;

    margin: 300px auto;

    // 圆角
    border-radius: 30px;

    // 边框
    border: 2px solid red;
  }
}
</style>
