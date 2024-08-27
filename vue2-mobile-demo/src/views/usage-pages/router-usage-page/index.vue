<template>
  <div class="page">
    <my-base-nav-bar :title="mytitle" :showLeftArrow="true" :isAutoBack="true" />

    <h3>Vue路由跳转的几种方式：</h3>

    <ul>
      <li>1. router-link</li>
      <li>2. this.$router.push()</li>
      <li>3. this.$router.replace()</li>
      <li>4. this.$router.go(n)</li>
      <li>5. this.$router.resolve()</li>
      <li>6. window.location.href='/home';</li>
    </ul>

    <van-divider>分割线</van-divider>

    <h3>路由跳转方式一：声明式导航</h3>

    <nav class="tabbar">
      <!-- 路由跳转方式一：router-link -->
      <!-- 1.跳转到 /xxx -->
      <router-link to="/router_link_JJJAAA">/xxx</router-link>
      <router-link to="/router_link_JJJAAA?canshu1=你好&canshu2=12333">/xxx + query参数</router-link>
      <router-link to="/router_link_JJJAAA/动态参数123">/xxx + 动态路由参数</router-link>

      <van-divider />
      <!-- 2.使用命名路由 -->
      <router-link :to="{ name: 'JJJAAA' }">命名路由</router-link>
      <router-link :to="{ name: 'JJJAAA', query: { canshu1: '我是参数111', canshu2: '我是参数222' } }">命名路由 +
        query参数</router-link>
      <router-link :to="{ name: 'JJJAAA', params: { keyWords: '动态参数123' } }">命名路由 + 动态路由传参</router-link>

      <van-divider />
      <!-- 3.使用path路由 -->
      <router-link :to="{ path: '/router_link_JJJAAA' }">路由path</router-link>
      <router-link :to="{ path: '/router_link_JJJAAA', query: { canshu1: '我是参数111', canshu2: '我是参数222' } }">路由path
        +
        query参数</router-link>
      <router-link :to="{ path: '/router_link_JJJAAA', params: { keyWords: '动态参数123' } }">路由path +
        动态路由传参（path不能配合params使用）</router-link>
    </nav>

    <van-divider>分割线</van-divider>

    <h3>路由跳转方式二：编程式导航</h3>

    <van-cell-group v-for="(item, section_index) in dataSource" :key="item[0].category" :title="item[0].category">
      <van-cell v-for="(subItem, row_index) in item" :key="subItem.id" :icon="subItem.icon"
        :title="`${subItem.id}. ${subItem.name}`" :value="subItem.value" :label="subItem.label"
        :is-link="isShowLink(subItem.path)" center @click="jumpRouter(subItem)" />
    </van-cell-group>

    <van-divider>分割线</van-divider>

    <h3>$route & $router</h3>
    <ul>
      <li>1. $route ：一般获取路由信息，如：路径、query、params等等</li>
      <li>2. $router ：一般进行编程式导航进行路由跳转【push | replace】</li>
    </ul>

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
      return true
    },
    jumpRouter(item) {
      /* 1. 通过命名路由的方式跳转 (需要给路由起名字) 适合长路径
          this.$router.push({
              name: '路由名'
              query: { 参数名: 参数值 },
              params: { 参数名: 参数值 }
          })
        */
      switch (item.id) {
        case 0:
          this.$router.push({ name: 'PPPAAA' })
          break;
        case 1:
          // name - query - 简易
          this.$router.push({ name: '/PPPAAA?canshu1=999&canshu2=我是谁' })
          break;
        case 2:
          // name - query - 完整
          this.$router.push({
            name: 'PPPAAA',
            query: {
              canshu1: 123,
              canshu2: '我是呐呐呐呐呐'
            }
          })
          break;
        case 3:
          this.$router.push({ name: '/PPPAAA/动态参数456' })
          break;
        case 4:
          this.$router.push({
            name: 'PPPAAA',
            params: {
              keyWords: { nane: 'jack', age: 15 },
            }
          })
          break;
        default:
          break;
      }

      /* 2. 通过路径的方式跳转
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
      switch (item.id) {
        case 5:
          this.$router.push('/router_program_PPPAAA')
          break;
        case 6:
          this.$router.push({ path: '/router_program_PPPAAA' })
          break;
        case 7:
          // path - query - 简易
          this.$router.push({ path: '/router_program_PPPAAA?canshu1=999&canshu2=我是谁' })
          break;
        case 8:
          // path - query - 完整
          this.$router.push({
            path: 'router_program_PPPAAA',
            query: {
              canshu1: 123,
              canshu2: '哈哈哈'
            }
          })
          break;
        case 9:
          // path - params - 简易
          this.$router.push({ path: '/router_program_PPPAAA/皮卡丘' })
          break;
        case 10:
          // path - params - 完整，path与params不能配合使用
          this.$router.push({
            path: 'router_program_PPPAAA',
            params: {
              keyWords: { nane: 'jack', age: 15 },
            }
          })
          break;
        default:
          break;
      }
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
