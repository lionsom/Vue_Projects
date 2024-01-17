
<template>
  <div class="guide">
    <h1>概念引导</h1>
    <h3>Vue2 写法复现</h3>

    <highlightjs language="JavaScript" :autodetect="false" :code="code"></highlightjs>

    <div v-highlight><pre><code>{{ code }}</code></pre></div>

    <pre v-highlight><code>{{ code }}</code></pre>

  </div>
  <div v-highlight class="person2">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>电话：{{ tel }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button> 
    <button @click="showTel">杏看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person2',
  data() {
    return {
      name: '张三',
      age: 18,
      tel: '123456789',
      code: `\
import { createApp } from "vue"; \n\
import App from "./App.vue";`
    }
  },
  methods: {
    // 修改姓名
    changeName() {
      this.name = 'zhang-san'
    },
    // 修改年龄
    changeAge() {
      this.age += 1
    },
    // 显示联系方式
    showTel() {
      alert(this.tel)
    }
  }
}
</script>

<style scoped>
.guide {
  background-color: antiquewhite;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
}

.person2 {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
}
</style>