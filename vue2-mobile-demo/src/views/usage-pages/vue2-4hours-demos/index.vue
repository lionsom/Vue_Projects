<template>
  <div>
    <my-base-nav-bar :title="mytitle" :showLeftArrow="true" :isAutoBack="true" />

    <van-cell-group>
      <!-- :label="item.label" -->
      <van-cell v-for="(item, index) in dataSource" :icon="randomImg(index)" :key="item.id"
        :title="`${item.id}. ${item.name}`" :value="item.value" :is-link="isShowLink(item.path)" center
        @click="jumpRouter(item)" />
    </van-cell-group>

  </div>
</template>

<script>
import dataSourceA from './dataSource';
export default {
  name: 'Vue24hoursDemoPage',
  data() {
    return {
      mytitle: 'Vue2黑马4小时快速入门',
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
      console.log(item.path);
      // window.open(item.path);
      this.$router.push({
        path: '/iframe-container-page',
        query: {
          iframeUrl: item.path,
        }
      })
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