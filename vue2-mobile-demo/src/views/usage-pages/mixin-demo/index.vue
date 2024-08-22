<template>
  <div class="main-page">
    <h2>mixin 玩一玩</h2>

    <div class="msg1">
      <br/>
      <br/>
      知识点一：相同类型的钩子函数会被添加到存储钩子的数组中，mixins里的钩子函数会优先调用; <br/>
      eg: <br/>
        mixin 02 mounted <br/>
        mixin 01 mounted <br/>
        组件内部的mounted <br/>
        <br/>
      知识点二：同名的属性和方法会被组件里的覆盖;  <br/>
      知识点三：组件引入多个mixins时，最后mixins的属性和方法会覆盖前面的; <br/>
      eg：<br/>
        title:"组件的"   // 组件的值 <br/>
        age:100         // 组件的值 <br/>
        desc:"mixin 01 999999999"   // 最后引入的MixinDemo01的值 <br/>
        <br/>
    </div>

    <br/>

    <!-- mixin的计算属性，使用的是组件内的age -->
    <div class="msg1">mixin的计算属性newAge，使用的是组件内的age： {{ newAge }}</div>

    <!-- 点击触发方法 -->
    <button @click="test1">点击触发方法</button>

    <br/>
    <br/>
    <br/>
    <h3>总之：mixin就是把几个文件合并到一起</h3>
  </div>
</template>

<script>

import MixinDemo01 from './mixin-demo-01'
import MixinDemo02 from './mixin-demo-02'

export default {
  name: 'mixin-demo-page',
  mixins: [MixinDemo02, MixinDemo01],
  data () {
    return {
      title: '组件的',
      age: 100
    }
  },
  created () {
    console.log('组件的created')
  },
  mounted () {
    console.log('组件的mounted')
  },
  methods: {
    test1 () {
      console.log('组件的 test1')
    },
    test2 () {
      console.log('组件的 test2')
    },
    test3 () {
      console.log('组件的 test3')
    }
  }
}
</script>

<style scoped lang="scss">

.main-page {
  margin: 50px auto;

  text-align: center;
  font-weight: 800;

  .msg1 {
    text-align: left;
  }
}

</style>
