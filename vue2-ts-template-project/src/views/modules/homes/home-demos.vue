<template>
  <div class="home-page">
    <h1>欢迎来到demoslist</h1>

    <div class="top-container">
      <div v-for="(itemValue, itemKey) in htmlFilesList" :key="itemKey">
        <div style="font-size: 30px; color: blue">{{ itemKey }}</div>
        <div v-for="subItemValue in itemValue" :key="subItemValue.fileName" @click="openFile(subItemValue)">
          {{ subItemValue.fileName }}
        </div>
      </div>
    </div>

    <router-link to="/i18n-demo">前往i18n设置页面</router-link>

    <router-link to="/vue2-offical-keyCodes">Vue2 - API - 全局配置 - keyCodes</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DemoListPage',
  data() {
    return {
      htmlFilesList: {} as any
    }
  },
  mounted() {
    fetch('/htmlFiles.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then((data) => {
        this.htmlFilesList = data
      })
      .catch((err) => {
        console.error('获取json失败:', err)
      })
  },
  methods: {
    openFile(fileObj: any) {
      console.log('AAAA ', fileObj, fileObj.fileName, fileObj.filePath)
      window.open(fileObj.filePath)
    }
  }
})
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #f5f7fa;

  h1 {
    color: #2c3e50;
    margin-bottom: 16px;
    font-size: 2.5rem;
  }

  p {
    color: #606266;
    font-size: 1.2rem;
  }
}
</style>
