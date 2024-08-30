<template>
  <div>
    <my-base-nav-bar :title="mytitle" :showLeftArrow="true" :isAutoBack="true" />

    <van-cell-group v-for="(item, section_index) in dataSource" :key="item[0].category" :title="item[0].category">
      <van-cell v-for="(subItem, row_index) in item" :key="subItem.id" :icon="randomImg(index)"
        :title="`${section_index}-${row_index}. ${subItem.name}`" :value="subItem.value"
        :is-link="isShowLink(subItem.path)" center @click="jumpRouter(subItem)" />
    </van-cell-group>

  </div>
</template>

<script>
import dataSourceA from './dataSource';
export default {
  name: 'Vue2HeimaDemoPage',
  data() {
    return {
      mytitle: 'Vue2黑马Demos',
      dataSource: dataSourceA,
    }
  },
  methods: {
    isShowLink(path) {
      if (path && path.length > 0) {
        return true
      }
      return false
    },
    randomImg(index) {
      const icons = ['shop-o', 'like-o', 'location-o']
      return icons[index % icons.length]
    },
    jumpRouter(item) {
      if (item.category === 'Router') {
        // 打开路由
        this.$router.push({
          path: item.path,
        })
      } else {
        // 打开html文件
        this.$router.push({
          path: '/iframe-container-page',
          query: {
            iframeUrl: item.path,
          }
        })
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.van-cell {
  color: green;
}

.van-cell__left-icon {
  margin-right: 10px;
  color: aqua;
}
</style>