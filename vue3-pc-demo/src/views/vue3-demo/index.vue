<template>
  <div class="app">
    <div class="content">
      <router-link to="/001">
        <el-button type="primary" plain>1.Vue2参考</el-button>
      </router-link>
      <router-link to="/002">
        <el-button type="primary" plain>2.Vue3新写法</el-button>
      </router-link>
      <router-link to="/003">
        <el-button type="primary" plain>3.Vue2 与 Vue3 对比</el-button>
      </router-link>
      <router-link to="/004">
        <el-button type="primary" plain>4.</el-button>
      </router-link>
      <router-link to="/004">
        <el-button type="primary" plain>5.</el-button>
      </router-link>
      <router-link to="/006">
        <el-button type="primary" plain>6.</el-button>
      </router-link>
      <router-link to="/007">
        <el-button type="primary" plain>7.</el-button>
      </router-link>
      <router-link to="/008">
        <el-button type="primary" plain>8.</el-button>
      </router-link>
      <router-link to="/009">
        <el-button type="primary" plain>9.</el-button>
      </router-link>
      <router-link to="/010">
        <el-button type="primary" plain>10.</el-button>
      </router-link>
      <router-link to="/011">
        <el-button type="primary" plain>11.</el-button>
      </router-link>
      <router-link to="/012">
        <el-button type="primary" plain>12.</el-button>
      </router-link>
      <router-link to="/013">
        <el-button type="primary" plain>13.</el-button>
      </router-link>
      <router-link to="/014">
        <el-button type="primary" plain>14.</el-button>
      </router-link>
      <router-link to="/015">
        <el-button type="primary" plain>15.</el-button>
      </router-link>
      <router-link to="/016">
        <el-button type="primary" plain>16.</el-button>
      </router-link>
      <router-link to="/017">
        <el-button type="primary" plain>17.</el-button>
      </router-link>
      <router-link to="/018">
        <el-button type="primary" plain>18.</el-button>
      </router-link>
      <router-link to="/019">
        <el-button type="primary" plain>19.</el-button>
      </router-link>
      <router-link to="/020">
        <el-button type="primary" plain>20.</el-button>
      </router-link>
      <router-link to="/021">
        <el-button type="primary" plain>21.</el-button>
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