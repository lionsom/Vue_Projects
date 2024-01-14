<template>
  <div class="father">
    <h1>mitt 等价于 $Bus</h1>
    <ol>
      <li>接收数据方：提前绑定好事件（提前订阅消息）</li>
      <li>发送数据方：在合适的时候触发</li>
    </ol>
    <br />
    <h3>父组件</h3>
    <Child1/>
    <Child2/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
  .father button{
    margin-left: 5px;
  }
</style>