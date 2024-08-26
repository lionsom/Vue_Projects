<template>
  <div class="main">
    <!-- 导航啦 -->
    <my-base-nav-bar title="iconfont的使用" :showLeftArrow="true" :isAutoBack="true" />

    <a class="top_a"
      href="https://www.iconfont.cn/help/detail?spm=a313x.manage_type_myprojects.i1.d8cf4382a.6b1f3a81vJx4xD&helptype=code">iconfont
      在 web 使用文档</a>

    <div class="demo-content">
      <button @click="openLocalHtml">Click Me! 打开本地html</button>

      <div>
        本地资源放在public文件夹下。 放置在 public 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过
        webpack 的处理。
      </div>
    </div>

    <h3>iconfont.css引入方式：在线 & 本地</h3>
    <p>在线文件：index.html中引入在线的iconfont的css</p>
    <p>本地文件：main.js中引入本地路径的iconfont的css</p>

    <h3>unicode</h3>
    <span class="iconfont_base" style="color: orange; font-size: 60px">&#xe665;</span>

    <h3>font class</h3>
    <i class="iconfont_base icon-fullscreen-expand" style="color: red; font-size: 80px"></i>

    <h3>Symbol</h3>
    <!-- Iconfont Symbol 第三步：使用 -->
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-smile"></use>
    </svg>
  </div>
</template>

<script>
// Iconfont Symbol 第一步：导入js
import $ from '@/assets/iconfont/iconfont.js'

export default {
  name: 'iconfont-usage-view',
  data() {
    return {}
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    openLocalHtml() {
      const localURL = '/font_001/demo_index.html'
      window.open(localURL)
    }
  }
}
</script>

<style scoped>
/* Iconfont Symbol 第二步：style */
.icon {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  fill: green;
  overflow: hidden;
}

h3 {
  margin-top: 20px;
  margin-bottom: 5px;
}

.top_a {
  background-color: aqua;
}

.demo-content {
  background-color: antiquewhite;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
