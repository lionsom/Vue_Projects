<template>
  <div>
    我是根组件
    <Header></Header>
  </div>

  
</template>


<script>

// 引入
import Header from './components/Header'
export default {
  name: '',
  components: {
    Header
  }
}

</script>

<style scoped></style>