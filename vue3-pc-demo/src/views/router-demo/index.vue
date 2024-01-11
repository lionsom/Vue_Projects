<template>
    <div class="app">
        <h2 class="app-title">Vue路由测试</h2>
        <!-- 导航区 -->
        <div class="navigate">

            <!-- to的两种方式 -->

            <!-- 第一种：字符串写法 -->
            <!-- <RouterLink to="/router-demo/knowledge" active-class="xiaozhupeiqi">知识点简介</RouterLink> -->

            <!-- 第二种：对象写法 path -->
            <!-- <RouterLink :to="{path:'/router-demo/knowledge'}" active-class="xiaozhupeiqi">知识点简介</RouterLink> -->

            <!-- 第二种：对象写法 name -->
            <router-link :to="{name:'router-demo-knowledge'}" active-class="xiaozhupeiqi">知识点简介</router-link>

            <RouterLink to="/router-demo/news" active-class="xiaozhupeiqi">嵌套路由 query params传参</RouterLink>
            
            <RouterLink replace to="/router-demo/home" active-class="xiaozhupeiqi">嵌套路由 props传参</RouterLink>

            <RouterLink to="/router-demo/about" active-class="xiaozhupeiqi">编程式路由</RouterLink>
        </div>
        <!-- 展示区 -->
        <div class="main-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
import {RouterView,RouterLink} from 'vue-router'

</script>

<style scoped lang="scss">

.app {
    background-color: transparent;
    width: 100%;

    .app-title {
        text-align: center;
        word-spacing: 5px;
        margin: 10px 10px;
        height: 70px;
        line-height: 70px;
        background-image: linear-gradient(45deg, gray, white);
        border-radius: 10px;
        box-shadow: 0 0 2px;
        font-size: 30px;
    }
    .navigate {
        display: flex;
        justify-content: space-around;
        margin: 40px 100px;
    }
    .navigate a {
        display: block;
        text-align: center;
        width: 20%;
        height: 40px;
        line-height: 40px;
        border-radius: 10px;
        background-color: gray;
        text-decoration: none;
        color: white;
        font-size: 18px;
        letter-spacing: 5px;
    }
    .navigate a.xiaozhupeiqi {
        background-color: #64967E;
        color: #ffc268;
        font-weight: 900;
        text-shadow: 0 0 1px black;
        font-family: '微软雅黑';
    }
    .main-content {
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 10px;
        border-radius: 10px;
        width: 90%;
        // height: 400px;
        height: calc(100vh - 300px);
        border: 1px solid;

        overflow-y:auto;
    }
}

</style>
