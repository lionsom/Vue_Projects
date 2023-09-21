<template>
  <div class="main-page">
    <h1> 插槽 </h1>

    <!-- 四个按钮 -->
    <van-button type="primary" @click="click1">默认插槽</van-button>
    <van-button type="primary" @click="click2">后背插槽</van-button>
    <van-button type="primary" @click="click3">具名插槽</van-button>
    <van-button type="primary" @click="click4">作用域插槽</van-button>

    <!-- 默认插槽弹框 -->
    <van-popup class="myVanPop" v-model="show1">
      <MyDialogA @confirm_click="confirmClick1" @cancel_click="cancelClick1" @close_click="closeClick1">
         提示框上岛咖啡瞌睡的快解封卡萨帝发
         提示框上岛咖啡瞌睡的快解封卡萨帝发
         提示框上岛咖啡瞌睡的快解封卡萨帝发
         提示框上岛咖啡瞌睡的快解封卡萨帝发
         提示框上岛咖啡瞌睡的快解封卡萨帝发
      </MyDialogA>
    </van-popup>

  </div>
</template>

<script>
import MyDialogA from './0-默认插槽/my-dialog-a.vue'

export default {
  name: 'slot-demo-page',
  components: {
    MyDialogA
  },
  data  () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false
    }
  },
  methods: {
    click1 () {
      console.log('click1')
      this.show1 = true
    },
    click2 () {
      console.log('click2')
      this.show2 = true
    },
    click3 () {
      console.log('click3')
      this.show3 = true
    },
    click4 () {
      console.log('click4')
      this.show4 = true
    },
    // 默认插槽的事件
    cancelClick1 () {
      console.log('cancelClick')
      this.show1 = false
    },
    confirmClick1 () {
      console.log('confirmClick')
      this.show1 = false
    },
    closeClick1 () {
      console.log('closeClick')
      this.show1 = false
    }
  }
}
</script>

<style scoped lang="scss">

.main-page {
  margin: 100px auto;

  text-align: center;
  font-weight: 800;

  .myVanPop {
    width: 90%;
    // min-height: 200px;
    height: auto;
  }
}

</style>
