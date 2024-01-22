// 配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";

// 解决 Vue 路由传递参数时，出现 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation 问题 .
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

// 配置路由
export default new VueRouter({
  routes: [
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
      // 路由元信息
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/search/:key",
      component: Search,
      // 路由元信息
      meta: {
        showFooter: false,
      },
      name: "name_search"
    },

    // 重定向，在项目跑起来的时候，访问/时，立刻让他指向首页
    {
      path: "*",
      redirect: "/login",
    },
  ],
});
