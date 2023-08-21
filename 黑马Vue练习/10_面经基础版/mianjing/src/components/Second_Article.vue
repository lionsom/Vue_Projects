<template>
  <div class="article-page">
    <div class="article-item"
    v-for="(item, index) in articles"
    :key="item.id"
    @click="goToDetail(item.id)">
      <div class="header">
        <img :src="item.creatorAvatar" alt="">
        <div class="con">
          <div class="title">{{ item.stem }}</div>
          <div class="other">{{ item.creatorName }} | {{ item.createdAt }}</div>
        </div>
      </div>
      <div class="body">
        {{index + 1}}. {{ item.content }}
      </div>
      <div class="footer">
        点赞 {{ item.likeCount }} | 浏览 {{ item.views }}
      </div>
    </div>
  </div>
</template>

<script>
// 首页请求，渲染

import axios from 'axios'

export default {
  name: 'ArticlePage',
  data () {
    return {
      articles: []
    }
  },
  async created () {
    const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
    this.articles = res.data.result.rows
    console.log(this.articles)
  },
  methods: {
    goToDetail (value) {
      console.log(value)
      this.$router.push(`/detail/${value}`)
    }
  }
}
</script>

<style scoped lang="scss">

.article-page {
  background: #f5f5f5;
}

.article-item {
  background: #fff;

  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 25px;
  border: 2px solid #8AC007;

  .header {
    display: flex;

    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;

    img {
      width: 50px;
      height: 50px;
    }

    .con {
      .title {
        height: 50%;
        vertical-align: bottom;
      }
      .other {
        height: 50%;
      }
    }
  }

  .body {
    // 多行文本 + 省略号
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    margin-left: 10px;
    margin-right: 10px;
  }

  .footer {
    text-align: right;

    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
  }

}

</style>
