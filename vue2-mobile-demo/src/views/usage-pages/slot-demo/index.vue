<template>
  <div class="main-page">
    <h1> 插槽 </h1>

    <!-- 三个按钮 -->
    <van-button type="primary" @click="click1">默认插槽</van-button>
    <van-button type="primary" @click="click2">后备插槽</van-button>
    <van-button type="primary" @click="click3">具名插槽</van-button>

    <!-- 1. 默认插槽弹框 -->
    <van-popup class="myVanPop" v-model="show1">
      <MyDialogA @confirm_click="confirmClick1" @cancel_click="cancelClick1" @close_click="closeClick1">
         提示框上岛咖啡瞌睡的快解封卡萨帝发
         提示框上岛咖啡瞌睡的快解封卡萨帝发
         提示框上岛咖啡瞌睡的快解封卡萨帝发
         提示框上岛咖啡瞌睡的快解封卡萨帝发
         提示框上岛咖啡瞌睡的快解封卡萨帝发
      </MyDialogA>
    </van-popup>

    <!-- 2. 后备插槽 -->
    <van-popup class="myVanPop" v-model="show2">
      <MyDialogA @confirm_click="confirmClick2" @cancel_click="cancelClick2" @close_click="closeClick2" />
    </van-popup>

    <!-- 3. 具名插槽 -->
    <van-popup class="myVanPop" v-model="show3">
      <MyDialogB>
        <!-- 需要通过template标签包裹需要分发的结构，包成一个整体 -->
        <template v-slot:head>
          <h1>我是标题</h1>
        </template>

        <template v-slot:content>
          <div>我是内容</div>
        </template>

        <!-- 简单写法 v-slot —> # -->
        <template #footer>
          <button @click="cancelClick3">取消</button>
          <button @click="confirmClick3">确认</button>
        </template>
      </MyDialogB>
    </van-popup>

    <!-- 作用域插槽 -->
    <h2 class="h2222">作用域插槽</h2>
    <MyTable :data="list">
      <!-- 3. 通过template #插槽名="变量名" 接收 -->
      <template #default="obj">
        <button @click="del(obj.rowData.id, obj.msg)">
          删除
        </button>
      </template>
    </MyTable>

    <MyTable :data="list2">
      <template #default="{ rowData }">
        <button @click="show(rowData)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyDialogA from './1-默认插槽&后备插槽/my-dialog-a.vue'
import MyDialogB from './2-具名插槽/my-dialog-b.vue'
import MyTable from './3-作用域插槽/my-dialog-c.vue'

export default {
  name: 'slot-demo-page',
  components: {
    MyDialogA,
    MyDialogB,
    MyTable
  },
  data  () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 }
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 }
      ]
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
    },
    // 后备插槽事件
    cancelClick2 () {
      console.log('cancelClick')
      this.show2 = false
    },
    confirmClick2 () {
      console.log('confirmClick')
      this.show2 = false
    },
    closeClick2 () {
      console.log('closeClick')
      this.show2 = false
    },
    // 具名插槽事件
    cancelClick3 () {
      console.log('closeClick')
      this.show3 = false
    },
    confirmClick3 () {
      console.log('confirmClick')
      this.show3 = false
    },
    // 作用域插槽
    del (id, msg) {
      this.list = this.list.filter(item => item.id !== id)
      alert(msg)
    },
    show (row) {
      alert(`姓名：${row.name}; 年纪：${row.age}`)
    }
  }
}
</script>

<style scoped lang="scss">

.main-page {
  margin: 50px auto;

  text-align: center;
  font-weight: 800;

  .myVanPop {
    width: 90%;
    // min-height: 200px;
    height: auto;
  }

  .h2222 {
    margin-top: 40px;
  }
}

</style>
