<template>
  <div class="content">

    <img :src="itemData.goods_image" alt="">

    <div class="rightContent">
      <div class="detail_top">
        <div class="index"> {{ goodsIdnex }}. </div>
        <div> {{ itemData.goods_id }} </div>
      </div>

      <div class="detail_bottom"> {{ itemData.goods_name }} </div>
    </div>

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
        if (val < 0) {
          console.log('传入的范围必须是0-100之间', val)
          return true
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
    // console.log(this.itemData)
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

  .detail_top {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  }

  img {
    border: 1px solid green;
    width: 100px;
    height: 100px;
  }
}

</style>
