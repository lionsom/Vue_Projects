<script>
export default {
  name: 'RequestDemo'
}
</script>

<script setup lang="ts">

</script>

<template>
  <div>
    <h1>request-demo</h1>

    <router-link to="/001">
      <el-button type="primary" plain>普通请求</el-button>
    </router-link>

  </div>


  <!-- router-view -->
  <RouterView />
</template>


<style scoped></style>