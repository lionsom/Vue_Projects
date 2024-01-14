<template>
  <div class="father">
    <h1>作用域插槽: 子组件的插槽 传值给 父组件，让父组件进行样式区分渲染</h1> <br />
    <h3>数据在孩子那，但根据数据渲染的结构由父组件决定！！</h3> <br />
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <template v-slot="params">
          <ul>
            <li v-for="y in params.youxi" :key="y.id">
              {{ y.name }}
            </li>
          </ul>
        </template>
      </Game>

      <Game>
        <template v-slot="params">
          <ol>
            <li v-for="item in params.youxi" :key="item.id">
              {{ item.name }}
            </li>
          </ol>
        </template>
      </Game>

      <Game>
        <template #default="{youxi}">
          <h3 v-for="g in youxi" :key="g.id">{{ g.name }}</h3>
        </template>
      </Game>

    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Game from './Game.vue'
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img,video {
    width: 100%;
  }
</style>