<template>
  <div class="page">

    <div class="cell" v-for="(item, index) in routersInfo" :key="item.id" @click="jump(item)">
      {{ index }}. {{item.id}} {{ item.desc }}
    </div>

    <nav class='tabbar'>
      <!-- 路由跳转方式一：router-link -->
      <router-link to="/hello_home" >Vue首页</router-link>
      <router-link to="/router_test_link_query" >link-query无参数</router-link>
      <router-link to="/router_test_link_query?canshu1=你好&canshu2=12333" >link-query参数</router-link>
      <router-link to="/router_test_link_dynamic" >link-dynamic无参数</router-link>
      <router-link to="/router_test_link_dynamic/我是参数" >link-dynamic参数</router-link>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'RouterViewPage',
  data () {
    return {
      title: '标题',
      routersInfo: [
        { id: 1001, name: 'router001', desc: '编程式路由 - path - 无参数', path: '/hello_home' },
        { id: 1002, name: 'router002', desc: '编程式路由 - path - query参数', path: '/' },
        { id: 1003, name: 'router003', desc: '编程式路由 - path - dynamic参数', path: '/' },
        { id: 1004, name: 'router004', desc: '编程式路由 - name - 无参数', path: '/' },
        { id: 1005, name: 'router005', desc: '编程式路由 - name - query参数', path: '/' },
        { id: 1006, name: 'router006', desc: '编程式路由 - name - dynamic参数', path: '/' }
      ]
    }
  },
  methods: {
    jump (myRouter) {
      console.log(myRouter)
    }
  }
}
</script>

<style lang="scss" scoped>

.tabbar {
  display: flex;
  justify-content: space-around;

  position: fixed;
  bottom: 0px;
  left: 10px;
  right: 10px;
  height: 60px;

  a {
  flex: 1;
  text-align: center;
  line-height: 60px;

  background: green;
  border: 1px solid rebeccapurple;
  }
  a.router-link-active {
    background: orange;
  }
}

.cell {
  background: goldenrod;

  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;

  height: 30px;
  line-height: 30px;

  border: 1px solid greenyellow;
}

</style>
