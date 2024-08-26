<!-- 基于Vant navbar再次封装 -->

<template>
  <div>
    <van-nav-bar :safe-area-inset-top="true" :title="title" :left-arrow="showLeftArrow" :fixed="isFixed"
      :placeholder="isFixed" @click-left="onClickLeft" @click-right="onClickRight">
      <slot name="my-left" slot="left"></slot>
      <slot name="my-right" slot="right"></slot>
    </van-nav-bar>
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
      required: false, // 必须要传值
      default: '默认标题'
    },
    showLeftArrow: {
      type: Boolean, // 类型
      required: false, // 必须要传值
      default: false
    },
    isAutoBack: { // 是否自动返回上一页，若否，则需要自定义右侧点击事件
      type: Boolean, // 类型
      required: false, // 必须要传值
      default: false
    },
    isFixed: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onClickLeft() {
      if (this.isAutoBack) {
        this.$router.go(-1);
      } else {
        this.$emit('click-left', '这是基类的点击参数');
      }
    },
    onClickRight() {
      this.$emit('click-right', '这是基类的点击参数');
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