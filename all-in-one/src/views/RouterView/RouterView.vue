<template>
  <div class="page">

    <div class="cell" v-for="item in routersInfo" :key="item.id" @click="jump(item)">
      {{item.id}}. {{ item.desc }}
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
        { id: 1001, name: 'router001', type: 'path', desc: '编程式路由 - path - 无参数', path: '' },
        { id: 1002, name: 'router002', type: 'path', desc: '编程式路由 - path - query参数 (简易版)', path: '' },
        { id: 1003, name: 'router003', type: 'path', desc: '编程式路由 - path - query参数 (完整版)', path: '' },
        { id: 1004, name: 'router004', type: 'path', desc: '编程式路由 - path - dynamic参数', path: '' },
        { id: 1005, name: 'router005', type: 'name', desc: '编程式路由 - name - 无参数', path: '' },
        { id: 1006, name: 'router006', type: 'name', desc: '编程式路由 - name - query参数', path: '' },
        { id: 1007, name: 'router007', type: 'name', desc: '编程式路由 - name - dynamic参数', path: '' },

        // cart
        { id: 1008, name: 'router008', type: '', desc: '购物车', path: '' },

        // 全局组件 + 局部组件
        { id: 1009, name: 'router009', type: '', desc: '全局组件 + 局部组件', path: '' },

        // Vuex测试页面
        { id: 1010, name: 'router010', type: '', desc: 'Vuex测试页面', path: '' },

        // Vant UI
        { id: 1011, name: 'router011', type: '', desc: 'Vant测试页面', path: '' },

        // Shopping
        { id: 1012, name: 'router012', type: '', desc: '购物商城', path: '' },

        // 自定义指令
        { id: 1013, name: 'router013', type: '', desc: '自定义指令', path: '' },

        // 插槽
        { id: 1014, name: 'router014', type: '', desc: '插槽', path: '' }
      ]
    }
  },
  methods: {
    jump (myRouter) {
      console.log(myRouter)
      if (myRouter && myRouter.type === 'path') {
        /* 1. 通过路径的方式跳转
          (1) this.$router.push('路由路径')     [简写]
              this.$router.push('路由路径?参数名=参数值')

          (2) this.$router.push({              [完整写法] 更适合传参
                path: '路由路径'
                query: {
                  参数名: 参数值,
                  参数名: 参数值
                }
              })
        */
        if (myRouter.id === 1001) {
          // path - 无参数
          this.$router.push({ path: '/router_test_path_query' })
        } else if (myRouter.id === 1002) {
          // path - query - 简易
          this.$router.push({ path: '/router_test_path_query?canshu1=999&canshu2=我是谁' })
        } else if (myRouter.id === 1003) {
          // path - query - 完整
          this.$router.push({
            path: 'router_test_path_query',
            query: {
              canshu3: 123,
              canshu4: '哈哈哈'
            }
          })
        } else if (myRouter.id === 1004) {
          // path - dynamic
          this.$router.push({ path: 'router_test_path_dynamic/皮卡丘' })
        } else {
          alert('不支持path')
        }
      } else if (myRouter && myRouter.type === 'name') {
        /* 2. 通过命名路由的方式跳转 (需要给路由起名字) 适合长路径
          this.$router.push({
              name: '路由名'
              query: { 参数名: 参数值 },
              params: { 参数名: 参数值 }
          })
        */
        if (myRouter.id === 1005) {
          this.$router.push({ name: 'RouterTest_Name_NO_Param' })
        } else if (myRouter.id === 1006) {
          this.$router.push({
            name: 'RouterTest_Name_Query',
            query: {
              canshu1: 123,
              canshu2: '我是呐呐呐呐呐'
            }
          })
        } else if (myRouter.id === 1007) {
          this.$router.push({
            name: 'RouterTest_Name_Dynamic',
            params: {
              kkeyWWord: { nane: 'jack', age: 15 }
            }
          })
        } else {
          alert('不支持name')
        }
      } else {
        if (myRouter.id === 1008) {
          this.$router.push({ path: '/cart' })
        } else if (myRouter.id === 1009) {
          this.$router.push({ path: '/global-part' })
        } else if (myRouter.id === 1010) {
          this.$router.push({ path: '/vuexdemo' })
        } else if (myRouter.id === 1011) {
          this.$router.push({ path: '/vant-ui' })
        } else if (myRouter.id === 1012) {
          this.$router.push({ path: '/shopping' })
        } else if (myRouter.id === 1013) {
          this.$router.push({ path: '/custom-directive' })
        } else if (myRouter.id === 1014) {
          this.$router.push({ path: '/slot-demo' })
        } else {
          alert('不支持类型')
        }
      }
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
