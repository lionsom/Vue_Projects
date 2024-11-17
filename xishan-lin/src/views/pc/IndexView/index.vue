<script lang="ts">
export default {
  name: 'PCIndex'
}
</script>

<script setup lang="ts">
//
import HeaderView from '@/views/pc/HeaderView/index.vue'
import FooterView from '@/views/pc/FooterView/index.vue'
import MainView from '@/views/pc/MainView/MainView.vue'
//
import { ElMessage } from 'element-plus'
// 
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
console.log('index : ', route, router);


</script>

<template>

  <el-container>
    <!-- header -->
    <el-header>
      <header-view class="header-cls" />
    </el-header>

    <!-- main -->
    <el-scrollbar max-height="calc(100vh - var(--header-height))">
      <!-- 回到顶部 -->
      <el-backtop target=".el-scrollbar__wrap" :right="50" :bottom="50" />
      
      <!-- main-center -->
      <el-container class="main-center-cls">
        <!-- <el-aside width="200px">Aside</el-aside> -->
        <el-main>
          <!-- 跑马灯 -->
          <MainView />
          
          <div class="aa" :style="{ width: '100px', height: '1500px', background: 'red' }">
            as
          </div>
        </el-main>
      </el-container>
      
      <!-- footer -->
      <el-footer>
        <footer-view />
      </el-footer>
    </el-scrollbar>
  </el-container>

</template>

<style scoped lang="scss">
@use '@/assets/styles/element-plus-styles/element-plus-scoped-reset.scss';
@use '@/assets/styles/element-plus-styles/el-backtop-scoped.scss'
</style>

<style scoped lang="scss">
.header-cls {
  position: fixed;
  height: var(--header-height);
}

// 版心
.main-center-cls {
  width: 1200px;
  margin: 0 auto;
  background-color: aliceblue;
}
</style>