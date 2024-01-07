<template>
    <div class="app">
        <h2 class="app-title">Vue路由测试</h2>
        <!-- 导航区 -->
        <div class="navigate">
            <RouterLink to="/router-demo/home" active-class="xiaozhupeiqi">首页</RouterLink>
            <RouterLink to="/router-demo/news" active-class="xiaozhupeiqi">新闻</RouterLink>
            <RouterLink to="/router-demo/about" active-class="xiaozhupeiqi">关于</RouterLink>
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
        width: 30%;
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
        border-radius: 10px;
        width: 90%;
        height: 400px;
        border: 1px solid;
    }
}

</style>
