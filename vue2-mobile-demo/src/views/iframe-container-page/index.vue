<template>
  <div class="container">
    <my-base-nav-bar :title="mytitle" :showLeftArrow="true" @click-right="onClickRight" />

    <!-- <iframe id="iframeContainer" :src="iframeUrl" frameborder="0" /> -->

    <iframe class="iframe-container" src="https://www.example.com" allowfullscreen />

  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  name: 'IframeContainerPage',
  props: {
    mytitle: {
      type: String,
      default: '网页'
    },
    iframeUrl: {
      type: String,
      default: ''
    }
  },
  mounted() {
    const iframe = document.getElementById('iframeContainer')
    iframe.onload = () => {
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px'
    }
  },
  methods: {
    onClickRight() {
      Toast('分享！！！')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  // padding: 0 10px;

  .iframe-container {
    width: 100%;
    height: 50%;
  }
}
</style>
