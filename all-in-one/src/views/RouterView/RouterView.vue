<template>
  <div class="page">

    <div class="cell" v-for="(item, index) in routersInfo" :key="item.id" @click="jump(item)">
      {{ index }}. {{item.id}} {{ item.name }}
    </div>

    <nav class='tabbar'>
      <!-- 路由跳转方式一：router-link -->
      <router-link to="/hello_home" >面经</router-link>
      <router-link to="/hello_home" >面经</router-link>

       <router-link to="/path?参数名=值"></router-link>

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
        { id: 1001, name: 'router001', desc: '描述111', path: '/hello_home' },
        { id: 1002, name: 'router002', desc: '描述222', path: '/' },
        { id: 1003, name: 'router003', desc: '描述333', path: '/' },
        { id: 1004, name: 'router004', desc: '描述444', path: '/' },
        { id: 1005, name: 'router005', desc: '描述555', path: '/' },
        { id: 1006, name: 'router006', desc: '描述666', path: '/' }
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
