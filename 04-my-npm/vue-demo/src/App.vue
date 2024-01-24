<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <button @click="test">爱斯达克</button>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import { BaseMethods, Validate } from 'lx-utils-only-js'

// import UUUTTT from 'lx-utils-only-js';

// import jsUtils from 'lx-utils-only-js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    test() {
      console.log(BaseMethods.getTypeOf(123))
      console.log(Validate.mobileCheck('123'))
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
