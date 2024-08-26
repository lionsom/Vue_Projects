<template>
  <div class="page">
    <my-base-nav-bar :title="mytitle" :showLeftArrow="true" :isAutoBack="true" />

    <h3>路由跳转方式一：声明式导航</h3>

    <nav class="tabbar">
      <!-- 路由跳转方式一：router-link -->
      <router-link :to="{ name: '123AAA' }">AAA</router-link>
      <router-link to="/link_query">link-query无参数</router-link>
      <router-link to="/link_query?canshu1=你好&canshu2=12333">link-query参数</router-link>
      <router-link to="/link_dynamic">link-dynamic无参数</router-link>
      <router-link to="/link_dynamic/我是参数">link-dynamic参数</router-link>
    </nav>

    <van-divider>分割线</van-divider>

    <h3>路由跳转方式二：编程式导航</h3>

    <van-cell-group v-for="(item, section_index) in dataSource" :key="item[0].category" :title="item[0].category">
      <van-cell v-for="(subItem, row_index) in item" :key="subItem.id" :icon="subItem.icon"
        :title="`${section_index}-${row_index}.${subItem.name}`" :value="subItem.value" :label="subItem.label"
        :is-link="isShowLink(subItem.path)" :to="subItem.path" center />
    </van-cell-group>

    <van-divider>分割线</van-divider>

    <h3>$route & $router</h3>
    <p>* $route ：一般获取路由信息，如：路径、query、params等等</p>
    <p>* $router ：一般进行编程式导航进行路由跳转【push | replace】</p>



  </div>
</template>

<script>

import dataSourceAAA from './dataSource'

export default {
  name: 'RouterUsageHomePage',
  data() {
    return {
      mytitle: '路由使用',
      dataSource: dataSourceAAA
    }
  },
  methods: {
    isShowLink(path) {
      if (path && path.length > 0) {
        return true
      }
      return false
    }
  },
}
</script>

<style lang="scss" scoped>
.tabbar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  left: 10px;
  right: 10px;

  a {
    flex: 1;
    text-align: center;
    line-height: 50px;

    background: rgb(218, 240, 218);
    border: 1px solid rebeccapurple;
  }

  a.router-link-active {
    background: orange;
  }
}
</style>
