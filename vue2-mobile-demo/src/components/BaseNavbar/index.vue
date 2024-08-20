<!-- 基于Vant navbar再次封装 -->

<template>
  <div>
    <van-nav-bar :title="title" :left-arrow="left" @click-left="onClickLeft" @click-right="onClickRight" />
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  name: 'BaseNavBar',
  components: {
    [NavBar.name]: NavBar,
  },
  // props: ["title", "left"],
  props: {
    title: {
      type: String, // 类型
      required: true, // 必须要传值
      // default: '标题123'
    },
    left: {
      type: Boolean, // 类型
      required: false, // 必须要传值
      default: false
    }
  },
  data() {
    return {
      isBack: true,
    }
  },
  methods: {
    onClickLeft() {
      console.log('点击了');
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
// 添加导航的通用样式，全局统一
:deep(.van-nav-bar__arrow) {
  color: #000;
}

:deep(.van-nav-bar__text) {
  color: green;
  font-size: large;
}

:deep(.van-nav-bar__content) {
  background-color: lightblue;
}
</style>