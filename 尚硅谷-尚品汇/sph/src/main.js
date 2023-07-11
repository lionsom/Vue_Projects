import Vue from "vue";
import App from "./App.vue";

// 引入路由
import router from "@/router";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),

  // 注册路由：底下的写法KV，一般省略V【router小写】
  router,
}).$mount("#app");
