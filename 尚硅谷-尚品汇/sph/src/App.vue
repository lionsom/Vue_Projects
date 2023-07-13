<template>
  <div>

    <Header>我是Header非路由组件</Header>

    <!-- 路由组件的调用出口 -->
    <router-view></router-view>

    <!-- 在login页隐藏footer组件，其他页面显示 -->
    <Footer v-show="$route.path!='/login'"> 我是Footer非路由组件1111 </Footer>

    <Footer v-show="$route.meta.showFooter"> 我是Footer非路由组件2222 </Footer>

  </div>
</template>


<script>
// 引入
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped></style>