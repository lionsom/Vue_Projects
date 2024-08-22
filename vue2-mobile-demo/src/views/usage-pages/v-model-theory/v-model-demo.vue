<template>
  <div class="main-page">

    <input type="text" v-model="msg" />
    <!-- v-model的底层其实就是：value和 @input的简写 -->
    <input type="text" :value="msg" @input="msg = $event.target.value" />

    <!-- 封装的下拉框 -->
    <BaseSelect
      :selectId="selectId"
      @changeCity="selectId = $event"
    ></BaseSelect>

    <!-- v-model其实就是 :value和@input事件的简写 -->
    <BaseSelect
      v-model="selectId"
    ></BaseSelect>

    <!-- sync 修饰符 -->
    <button @click="openDialog">退出按钮</button>
    <!-- .sync修饰符 就是 :属性名 和 @update:属性名 合写 -->
    <!-- isShow.sync  => :isShow="isShow" @update:isShow="isShow=$event" -->
    <BaseDialog :isShow.sync="isShowDialog"></BaseDialog>

  </div>
</template>

<script>

import BaseSelect from './下拉框组件/v-model-base-select.vue'
import BaseDialog from './sync修饰符/v-model-sync-dialog.vue'

export default {
  name: 'v-model-demo-page',
  components: {
    BaseSelect,
    BaseDialog
  },
  data () {
    return {
      msg: '',
      selectId: '102',
      isShowDialog: false
    }
  },
  methods: {
    openDialog () {
      this.isShowDialog = true
    }
  }
}
</script>

<style scoped lang="scss">

.main-page {
  margin: 100px auto;

  text-align: center;
  font-weight: 800;
}

</style>
