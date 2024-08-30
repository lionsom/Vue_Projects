<template>
  <div>
    <my-base-nav-bar :title="mytitle" :showLeftArrow="true" :isAutoBack="true" />

    <div class="main-content">
      <iframe class="iframe-container" :src="iframeUrl" allowfullscreen frameborder="0" />

      <!-- 测试百度 -->
      <!-- <iframe class="iframe-container" src="https://www.baidu.com" allowfullscreen frameborder="0" /> -->

    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  name: 'IframeContainerPage',
  data() {
    return {
      mytitle: 'iframe容器',
      iframeUrl: this.$route.query.iframeUrl,
    }
  },
  mounted() {
    // console.log('AAA = ', this.$route.query.iframeUrl);
    // requestFullscreen()
  },
  methods: {
    onClickRight() {
      Toast('分享！！！')
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  background-color: transparent;
  height: calc(100vh - 46px);
  width: 100%;

  .iframe-container {
    background-color: transparent;
    width: 100%;
    height: 100%;
  }
}
</style>
