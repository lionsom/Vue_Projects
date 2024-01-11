<template>
  <div class="news">
    <ul>
      <h1>
        <RouterLink to="/router-demo/news/detail">嵌套路由 - 基础版</RouterLink>
      </h1> <br />

      <li v-for="news in newsList" :key="news.id">
        <h1> 嵌套路由 - query传参 </h1>

        <!-- query 第一种写法 -->
        <RouterLink :to="`/router-demo/news/detail-query?id=${news.id}&title=${news.title}&content=${news.content}`">query方式一：{{news.title}} --------</RouterLink>

        <!-- query 第二种写法 -->
        <RouterLink 
          :to="{
            name:'router-demo-news-detail-query',
            query:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }"
        >
          query方式二：{{news.title}}
        </RouterLink>


        <br />
        <h1> 嵌套路由 - params传参 </h1>
        
        <!-- params 第一种写法 -->
        <RouterLink :to="`/router-demo/news/detail-params/${news.id}/${news.title}/${news.content}`">params方式一：{{news.title}} --------</RouterLink>

        <!-- params 第二种写法 -->
        <RouterLink 
          :to="{
            name:'router-demo-news-detail-params',
            params:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }"
        >
          params方式二：{{news.title}}
        </RouterLink>
      </li>

      <br/>
      <h2>
        备注1：传递`params`参数时，若使用`to`的对象写法，必须使用`name`配置项，不能用`path`。
        <br/>
        备注2：传递`params`参数时，需要提前在规则中占位。
      </h2>
    </ul>

    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>

</template>

<script setup lang="ts" name="News">
import {reactive} from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const newsList = reactive([
  {id:'asfdtrfay01',title:'很好的抗癌食物',content:'西蓝花'},
  {id:'asfdtrfay02',title:'如何一夜暴富',content:'学IT'},
  {id:'asfdtrfay03',title:'震惊，万万没想到',content:'明天是周一'},
  {id:'asfdtrfay04',title:'好消息！好消息！',content:'快过年了'}
])

</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 500px;
  height: 300px;
  border: 1px solid;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow-y:auto;
}
</style>