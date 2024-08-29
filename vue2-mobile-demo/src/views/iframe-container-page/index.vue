<template>
  <div>
    <my-base-nav-bar :title="mytitle" :showLeftArrow="true" :isAutoBack="true" />

    <div class="main">
      <iframe id="iframe-container" :src="iframeUrl" allowfullscreen frameborder="0" />

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
  },
  methods: {
    onClickRight() {
      Toast('分享！！！')
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 90%;
  // height: 90%;
  min-height: 90%;

  .iframe-container {
    background-color: antiquewhite;
    // width: 100%;
    // height: 100%;
    width: 300px;
    height: 500px;
  }
}
</style>
