<template>
  <div class="main">
    <!-- 导航啦 -->
    <van-nav-bar
      safe-area-inset-top
      title="iconfont的使用"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>

    <a
      href="https://www.iconfont.cn/help/detail?spm=a313x.manage_type_myprojects.i1.d8cf4382a.6b1f3a81vJx4xD&helptype=code"
      >参考：web使用文档</a
    >

    <a href=""></a>

    <h3>方案一：</h3>

    <h3>方案二：</h3>

    <h3>方案三：</h3>

    <div v-html="htmlContent"></div>

  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'iconfont-usage-view',
  data () {
    return {
      htmlContent: ''
    }
  },
  mounted () {
    // axios.get('@/assets/font_001/demo_index.html').then((response) => {
    //   this.htmlContent = response.data
    // })
    window.open('@/assets/font_001/demo_index.html')
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    openLocalHtml () {}
  }
}
</script>

<style>
</style>
