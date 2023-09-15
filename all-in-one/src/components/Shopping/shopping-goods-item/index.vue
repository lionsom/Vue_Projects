<template>
  <div class="content">
    <div class="index"> {{ goodsIdnex }}. </div>

    <div> {{ itemData.goods_id }} </div>

    <img :src="itemData.goods_image" alt="">

    <div class="a"> {{ itemData.goods_name }} </div>
  </div>
</template>

<script>
export default {
  name: 'shopping-goods-item',
  props: {
    goodsIdnex: {
      type: Number, // 类型
      require: true, // 必填
      default: -1, // 默认值
      validator (val) { // 自定义校验逻辑
        // console.log('props传递过来的值: ' + val)
        if (val <= 0) {
          console.error('传入的范围必须是0-100之间')
          return false
        } else {
          return true
        }
      }
    },
    itemData: {
      type: Object,
      require: true,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  created () {
    console.log(this.itemData)
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

.content {
  display: flex;
  width: 100%;
  height: 100px;
  margin-bottom: 3px;
  background-color: aquamarine;
}

</style>
