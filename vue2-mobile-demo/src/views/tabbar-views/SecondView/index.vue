<template>
  <div class='h5-wrap'>
    <!-- 样式 -->
    <my-base-nav-bar :title="mytitle" />

    <van-cell-group v-for="(item, section_index) in dataSource" :key="item[0].category" :title="item[0].category">
      <van-cell v-for="(subItem, row_index) in item" :key="subItem.id"
        :title="`${section_index}-${row_index}.${subItem.name}`" :value="subItem.value" :is-link="subItem.path"
        :to="subItem.path" />
    </van-cell-group>

  </div>
</template>

<script>

import dataSourceAAA from './dataSource';

export default {
  name: 'SecondView',
  data() {
    return {
      mytitle: '知识库',
      dataSource: dataSourceAAA,
    }
  },
  methods: {

  },
  activated() {
  },
  deactivated() {
  }
}
</script>

<style lang="scss" scoped>
.h5-wrap {
  // padding: 0 10px;
  background-color: transparent;
}

.van-cell-group__title {
  padding: 10px;
  font-size: 15px;
}
</style>
