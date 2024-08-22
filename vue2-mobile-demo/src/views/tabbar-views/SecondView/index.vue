<template>
  <div class='h5-wrap'>
    <!-- 样式 -->
    <my-base-nav-bar :title="mytitle" />

    <van-cell-group v-for="(item, section_index) in dataSource" :key="item[0].category" :title="item[0].category">
      <van-cell v-for="(subItem, row_index) in item" :key="subItem.id" :icon="subItem.icon"
        :title="`${section_index}-${row_index}.${subItem.name}`" :value="subItem.value" :label="subItem.label" :is-link="isShowLink(subItem.path)"
        :to="subItem.path"
        center />
    </van-cell-group>

  </div>
</template>

<script>

import dataSourceAAA from './dataSource'

export default {
  name: 'SecondView',
  data() {
    return {
      mytitle: '知识库',
      dataSource: dataSourceAAA
    }
  },
  methods: {
    isShowLink(path) {
      return path && path.length > 0
    }
  },
  activated() {
  },
  deactivated() {
  }
}
</script>

<style lang="scss" scoped>
.h5-wrap {
  background-color: transparent;
}

// vant cell 样式
.van-cell-group__title {
  padding: 10px;
  font-size: 15px;
}

.van-cell__left-icon {
  margin-right: 10px;
}
</style>
