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
        @search="onSearch"
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
        <div class="listItem" v-for="item in history" :key="item" @click="onClick(item)">
          {{ item }}
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'SearchIndex',
  data () {
    return {
      searchKey: '',
      history: ['你', '哈哈', '2342342344', 'jksadjaskljdfasdfjksadajskdfjkl', '阿斯蒂芬看', '啊啊啊啊']
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onSearch () {
      console.log('2222')
    },
    clearAll () {
      this.history = []
    },
    onClick (key) {
      console.log(key)
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
