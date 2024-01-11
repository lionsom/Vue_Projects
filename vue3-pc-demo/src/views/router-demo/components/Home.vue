<template>
  <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
  </div>

  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <h1> 嵌套路由 - props - query传参 </h1>

        <!-- query 第一种写法 -->
        <RouterLink :to="`/router-demo/home/detail-query-props?id=${news.id}&title=${news.title}&content=${news.content}`">query方式一：{{news.title}} --------</RouterLink>

        <!-- query 第二种写法 -->
        <RouterLink 
          :to="{
            name:'router-demo-home-detail-query-props',
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
        <h1> 嵌套路由 - props - params传参 </h1>
        
        <!-- props params 第一种写法 -->
        <RouterLink :to="`/router-demo/home/detail-params-props/${news.id}/${news.title}/${news.content}`">props params方式一：{{news.title}} --------</RouterLink>

        <!-- props params 第二种写法 -->
        <RouterLink 
          :to="{
            name:'router-demo-home-detail-params-props',
            params:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }"
        >
          props params方式二：{{news.title}}
        </RouterLink>

        <br />
        <h1> 嵌套路由 - props - 自定义传参 </h1>
        <RouterLink :to="`/router-demo/home/detail-custom`">自定义传参 --------</RouterLink>

      </li>
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

<style scoped lang="scss">

.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
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