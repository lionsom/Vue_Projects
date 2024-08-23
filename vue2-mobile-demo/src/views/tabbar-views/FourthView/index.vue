<template>
  <div>
    <my-base-nav-bar title="我的" />

    <!-- 头像区域 -->
    <div class="header">
      <div class="header-img">
        <van-image round lazy-load width="100px" height="100px" fit="cover" :show-loading="false" :src="headerImg"
          @click="onHeadImgClick" @error="onHeadImgError" />
      </div>

      <div class="name">
        我是一个小小草
      </div>
    </div>

    <!-- 内容区域 -->
    <van-cell-group>
      <van-cell v-for="(item, index) in dataSource" :icon="randomImg(index)" :key="item.id" :title="item.name"
        :value="item.value" :is-link="isShowLink(item.path)" :to="item.path" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
import dataSourceAAA from './dataSource'

export default {
  name: 'FourthView',
  created() {

  },
  data() {
    return {
      headerImg: 'https://img01.yzcdn.cn/vant/cat.jpeg', // 在线头像
      dataSource: dataSourceAAA
    }
  },
  methods: {
    onHeadImgClick() {
      ImagePreview([
        this.headerImg
      ])
    },
    onHeadImgError() {
      this.headerImg = require('@/assets/img/common/logo.png') // 本地默认头像
    },
    randomImg(index) {
      const icons = ['shop-o', 'like-o', 'location-o']
      return icons[index % icons.length]
    },
    isShowLink(path) {
      if (path && path.length > 0) {
        return true
      }
      return false
    }
  },
  activated() {
  },
  deactivated() {
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 200px;
  background-color: lightcyan;

  &-img {
    width: 100px;
    height: 100px;
    padding-top: 20px;
    padding-left: calc(50% - 50px);
  }

  .name {
    background-color: transparent;
    margin-top: 20px + 20px;
    text-align: center;
  }
}
</style>
