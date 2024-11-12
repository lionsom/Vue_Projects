<script lang="ts">
export default {
  name: 'HeaderView'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const value1 = ref(true)

const changeLang = () => {
  //
  ElMessage({
    message: '切换语言',
    type: 'success',
  })
}

const showBook = () => {
  //
  ElMessage({
    message: '《书籍》',
    type: 'success',
  })
}

</script>

<template>
  <div class="main-view">
    <div class="left-view">
      <img src="@/assets/logo.svg" alt="">
      <div class="title">
        西山
      </div>
    </div>
    <div class="right-view">

      <el-dropdown>
        <span class="el-dropdown-link">
          Dropdown List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-button @click="showBook" link>《书籍》</el-button>
      <el-button @click="changeLang" link>切换语音</el-button>
      <el-switch v-model="value1">
        <template #active-action>
          <span class="custom-active-action">T</span>
        </template>
        <template #inactive-action>
          <span class="custom-inactive-action">F</span>
        </template>
      </el-switch>
    </div>
  </div>
</template>


<style scoped lang="scss">

:deep(.el-button) {
  margin-left: 0px;
}

.main-view {
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 0 20px;
  background-color: #f5f5f5;


  .left-view {
    display: flex;
    // justify-content: left;
    width: 200px;

    img {
      height: 80%;
      aspect-ratio: 1 / 1;
      /* 宽高比为 1:1 */
      background-color: rebeccapurple;
      border-radius: 50%;
      margin-top: calc(var(--header-height) * 0.1);
    }

    .title {
      line-height: var(--header-height);
      margin-left: 15px;
      background-color: transparent;
      width: 100px;
    }
  }

  .right-view {
    display: flex;
    justify-content: right;
    align-items: center; // 垂直居中
    gap: 10px;
  }
}
</style>