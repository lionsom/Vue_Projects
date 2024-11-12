<script lang="ts">
export default {
  name: 'PCIndex'
}
</script>

<script setup lang="ts">
//
import HeaderView from '@/views/pc/HeaderView/index.vue'
import FooterView from '@/views/pc/FooterView/index.vue'
//
import { ElMessage } from 'element-plus'
// 
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

</script>

<template>
  <el-container>
    <el-header>
      <header-view />
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main
        
        <div class="aa" :style="{ width: '100px', height: '1000px', background: 'red' }">
          as
        </div>
        
      </el-main>
    </el-container>
    <el-footer>Footer
      <footer-view />
    </el-footer>
  </el-container>

  <el-backtop :right="100" :bottom="100" />
</template>

<style scoped lang="scss">
@use '@/styles/element-plus-styles/element-plus-scoped-reset.scss';
</style>

<style scoped lang="scss"></style>