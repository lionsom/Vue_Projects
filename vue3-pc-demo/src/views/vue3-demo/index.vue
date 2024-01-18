<template>
  <div class="app">
    <div class="content">
      <router-link to="/vue3-demo/001">
        <el-button type="primary" plain>1.Vue2参考</el-button>
      </router-link>
      <router-link to="/vue3-demo/002">
        <el-button type="primary" plain>2.Vue3新写法</el-button>
      </router-link>
      <router-link to="/vue3-demo/003">
        <el-button type="primary" plain>3.Vue2 与 Vue3 对比</el-button>
      </router-link>
      <router-link to="/vue3-demo/004">
        <el-button type="primary" plain>4.setup语法糖</el-button>
      </router-link>
      <router-link to="/vue3-demo/004">
        <el-button type="primary" plain>5.ref基本类型</el-button>
      </router-link>
      <router-link to="/vue3-demo/006">
        <el-button type="primary" plain>6.ref对象</el-button>
      </router-link>
      <router-link to="/vue3-demo/007">
        <el-button type="primary" plain>7.reactive对象</el-button>
      </router-link>
      <router-link to="/vue3-demo/008">
        <el-button type="primary" plain>8.ref vs reactive</el-button>
      </router-link>
      <router-link to="/vue3-demo/009">
        <el-button type="primary" plain>9.toRef & toRefs</el-button>
      </router-link>
      <router-link to="/vue3-demo/010">
        <el-button type="primary" plain>10.computed</el-button>
      </router-link>
      <router-link to="/vue3-demo/011">
        <el-button type="primary" plain>11.情况一：监视【ref】定义的【基础类型】数据</el-button>
      </router-link>
      <router-link to="/vue3-demo/012">
        <el-button type="primary" plain>12.情况二：监视【ref】定义的【对象类型】数据</el-button>
      </router-link>
      <router-link to="/vue3-demo/013">
        <el-button type="primary" plain>13.情况三：监视【reactive】定义的【对象类型】数据</el-button>
      </router-link>
      <router-link to="/vue3-demo/014">
        <el-button type="primary" plain>14.情况四：监视【ref】或【reactive】定义的【对象类型】数据中的【某个属性】</el-button>
      </router-link>
      <router-link to="/vue3-demo/015">
        <el-button type="primary" plain>15.情况五：监视上述的多个数据</el-button>
      </router-link>
      <router-link to="/vue3-demo/016">
        <el-button type="primary" plain>16.需求：当水温达到60度，或水位达到80cm时，给服务器发请求</el-button>
      </router-link>
      <router-link to="/vue3-demo/017">
        <el-button type="primary" plain>17.ref属性</el-button>
      </router-link>
      <router-link to="/vue3-demo/018">
        <el-button type="primary" plain>18.TypeScript</el-button>
      </router-link>
      <router-link to="/vue3-demo/019">
        <el-button type="primary" plain>19.传值 - props</el-button>
      </router-link>
      <router-link to="/vue3-demo/020">
        <el-button type="primary" plain>20.生命周期</el-button>
      </router-link>
      <router-link to="/vue3-demo/021">
        <el-button type="primary" plain>21.hooks实现Vue3组合式编码</el-button>
      </router-link>
        
    </div>

    <!-- router-view -->
    <RouterView />

    <!-- <Person2/>
    <Person3/>
    <Person23/>
    <Person4/>
    <Person444/>
    <Person5/>
    <Person6/>
    <Person7/>
    <Person8/>
    <Person9/>
    <Person10/>
    <Person11/>
    <Person12/>
    <Person13/>
    <Person14/>
    <Person15/>
    <Person16/>
    <Person17/>
    <Person18/>
    <Person19/>
    <Person20/>
    <Person21/> -->
  </div>
</template>

<script lang="ts">

export default {
  name: 'App',  //组件名
  // components: {
  //   Person2, // 注册组件
  //   Person3,
  //   Person23,
  //   Person4,
  //   Person444,
  //   Person5,
  //   Person6,
  //   Person7,
  //   Person8,
  //   Person9,
  //   Person10,
  //   Person11,
  //   Person12,
  //   Person13,
  //   Person14,
  //   Person15,
  //   Person16,
  //   Person17,
  //   Person18,
  //   Person19,
  //   Person20,
  //   Person21,
  // } 
}

</script>

<style scoped>
.app {
  width: 100%;
  height: max-content;
  background-color: transparent; 
  box-shadow: 0 0 10px; 
  border-radius: 10px; 
  padding: 20px;

  .el-button {
    margin-left: 10px;
    margin-bottom: 10px;
  }
}
</style>