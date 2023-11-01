<template>
  <div class="main">
    <!-- 导航啦 -->
    <van-nav-bar
      safe-area-inset-top
      title="iconfont的使用"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>

    <p class="one">伪元素 ::before</p>
    <p class="two">伪元素 ::before</p>
    <p class="three">伪元素 ::before</p>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style src="./index.css" scoped></style>
