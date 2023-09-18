<template>
    <div>
      <!-- 导航栏 -->
      <van-nav-bar
        title="搜索"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />

      <!-- 搜索框 -->
      <van-search
        v-if="true"
        v-model="searchKey"
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        @search="goSearch"
      />

      <!-- 最近搜索标题栏 -->
      <div class="recentContent">
        <div class="recentTitle">最近搜索</div>
        <div class="recentDel">
          <van-icon name="delete-o" color="#1989fa" size="30" @click="clearAll"/>
        </div>
      </div>

      <!-- 历史列表 -->
      <div class="list">
        <div class="listItem" v-for="item in history" :key="item" @click="goSearch(item)">
          {{ item }}
        </div>
      </div>
    </div>
  </template>

<script>

import { getSearchHistory, setSearchHistory } from '@/utils/storage'

export default {
  name: 'SearchIndex',
  data () {
    return {
      searchKey: '',
      history: getSearchHistory() // 从缓存中获取
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    goSearch (key) {
      console.log(key)
      this.$router.push('/shopping/searchlist')
      // 搜索历史去重，再添加到首个
      this.history = this.history.filter((element) => element !== key)
      this.history.unshift(key)
      // 缓存
      setSearchHistory(this.history)
    },
    clearAll () {
      this.history = []
      // 缓存
      setSearchHistory(this.history)
    }
  }
}
</script>

<style scoped lang="scss">

.recentContent {
  display: flex;
  justify-content: space-between;
  background: transparent;

  margin-left: 10px;
  margin-right: 10px;

  height: 30px;

  .recentTitle {
    font: italic 1.2rem "Fira Sans", serif;
    height: 30px;
    line-height: 30px;
  }

  .recentDel {
    background-color: transparent;
  }
}

.list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5%;  // 间隔间距

  margin-left: 10px;
  margin-right: 10px;

  background-color: transparent;

  .listItem {
    padding-left: 15px;
    padding-right: 15px;

    margin-top: 10px;

    height: 40px;
    line-height: 40px;

    text-align: center;

    border: 1px solid red;
    border-radius: 5px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

</style>
