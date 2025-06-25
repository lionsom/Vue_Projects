<template>
  <header class="nav-header">
    <div class="nav-title" @click="goToRoot">导航</div>

    <div class="right">
      <div v-for="(item, index) in dataList" :key="index + item.path" @click="goToRouter(item)" class="nav-item">
        {{ item.name }}
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

interface RouteItem {
  name: string
  path: string
}

export default Vue.extend({
  name: 'HeaderView',
  data() {
    return {
      dataList: [
        {
          name: 'demos',
          path: '/demos'
        },
        {
          name: 'login',
          path: '/login'
        },
        {
          name: 'about',
          path: '/about'
        },
        {
          name: '404',
          path: '/404'
        }
      ]
    }
  },
  methods: {
    goToRoot() {
      this.$router.push({ path: '/' })
    },
    goToRouter(item: RouteItem) {
      console.log('item ===>', item)
      this.$router.push(item.path)
    }
  }
})
</script>

<style lang="scss" scoped>
.nav-header {
  display: flex;
  justify-content: space-between;

  height: 90px;
  background: #2d8cf0;
  display: flex;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;
  color: #fff;

  .nav-title {
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 15px;
    height: 100%;

    .nav-item {
      display: flex;
      align-items: center;
      height: 50%;
      padding: 0 5px;
      text-align: center;
      color: #222;
      font-size: 16px;
    }
  }
}
</style>
