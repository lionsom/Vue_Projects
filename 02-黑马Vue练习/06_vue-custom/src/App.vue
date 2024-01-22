<template>
  <div id="app">

<div>
  <a @click.prevent="goPush_path">编程式跳转 - path 路径跳转 </a>
  <a @click.prevent="goPush_name">编程式跳转 - name 命名路由跳转 </a>

</div>

    <div>
      <a href="#/router_find">发现音乐 </a>
      <a href="#/router_my">我的音乐 </a>
      <a href="#/router_friend">朋友</a>
    </div>

    <div></div>

    <div class="top_wrap">
      <router-link to="/router_find?key=我是查询参数">发现音乐 </router-link>
      <router-link to="/router_my">我的音乐 </router-link>
      <router-link to="/router_friend/我是动态参数">朋友</router-link>
    </div>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <router-view/>
    <!-- <router-view></router-view> -->

    <lx-header-vue></lx-header-vue>
    <lx-main-vue></lx-main-vue>
    <lx-footer-vue></lx-footer-vue>

    <props-father></props-father>

  </div>
</template>

<script>

import LxFooterVue from './components/Part/LxFooter.vue'
import LxHeaderVue from './components/Part/LxHeader.vue'
import LxMainVue from './components/Part/LxMain.vue'
import propsFather from './components/Father_Son/propsFather.vue'

export default {

  components: {
    // 组件名: 组件对象
    LxHeaderVue: LxHeaderVue,
    LxMainVue, // 缩写
    LxFooterVue,
    propsFather
  },
  methods: {
    goPush_path () {
      // 1. 通过路径的方式跳转
      // (1) this.$router.push('路由路径') [简写]
      this.$router.push('/router_my')

      // (2) this.$router.push({     [完整写法]
      //         path: '路由路径'
      //     })
      // this.$router.push({
      //   path: '/router_my'
      // })
    },
    goPush_name () {
      // 2. 通过命名路由的方式跳转 (需要给路由起名字) 适合长路径
      //    this.$router.push({
      //        name: '路由名'
      //    })
      this.$router.push({
        name: 'frienddddd'
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.top_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}

.top_wrap a.router-link-active {
  background-color: purple;
}

.top_wrap a:hover {
  background-color: orange;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
