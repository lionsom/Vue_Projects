<template>
  <div class="constant-main">
    <!-- 导航啦 -->
    <my-base-nav-bar title="常量的使用" :showLeftArrow="true" :isAutoBack="true" />

    <div class="constant">
      <h3>常量的使用：</h3>

      <a href="https://www.cnblogs.com/zhangruifeng/p/16449092.html" target="__blank"> 参考一 </a>

      <a href="https://blog.csdn.net/qq_41193701/article/details/104990501" target="__blank"> 参考二 </a>

      <van-divider>分割线</van-divider>

      <p>输出的常量 = {{ constantValue.phoneNum }}</p>

      <van-divider>分割线</van-divider></van-divider>

      <van-button hairline round icon="point-gift-o" type="default" @click="showToast">显示常量</van-button>
    </div>
  </div>
</template>

<script>
import { Partten } from '@/utils/constant/index'
import { Toast } from 'vant';

export default {
  data() {
    return {
      constantValue: Partten
    }
  },
  methods: {
    showToast() {
      Toast('常量 = ' + Partten.email)
    }
  }
}
</script>
