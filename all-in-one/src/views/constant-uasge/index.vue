<template>
  <div class="constant-main">
    <!-- 导航啦 -->
    <van-nav-bar
      safe-area-inset-top
      title="iconfont的使用"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>

    <div class="constant">
      <h3>常量的使用：</h3>

      <a href="https://www.cnblogs.com/zhangruifeng/p/16449092.html" target="__blank"> 参考一 </a>

      <a href="https://blog.csdn.net/qq_41193701/article/details/104990501" target="__blank"> 参考二 </a>

      <p>输出的常量 = {{ constantValue.phoneNum }}</p>

      <div class="showSomething" @click="showLog">点击打印log</div>
    </div>
  </div>
</template>

<script>
import { Partten } from '@/constant/index'

export default {
  data() {
    return {
      constantValue: Partten
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    showLog() {
      console.log('常量 = ', Partten.email)
    }
  }
}
</script>

<style></style>
