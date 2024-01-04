<template>
  <div class="app">
    <Person2/>
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
    <Person21/>
  </div>
</template>

<script lang="ts">

import Person2 from './01-vue2.vue'
import Person3 from './02-vue3.vue'
import Person23 from './03-2-vs-3.vue'
import Person4 from './04-setup-suger.vue'
import Person444 from './04-name.vue'
import Person5 from './05-ref-base.vue'
import Person6 from './06-ref-object.vue'
import Person7 from './07-reactive-object.vue'
import Person8 from './08-ref-vs-reactive.vue'
import Person9 from './09-toRefs-toRef.vue'
import Person10 from './10-computed.vue'
import Person11 from './11-watch-ref-base.vue'
import Person12 from './12-watch-ref-object.vue'
import Person13 from './13-watch-reactive-object.vue'
import Person14 from './14-watch-property.vue'
import Person15 from './15-watch-mix.vue'
import Person16 from './16-watchEffect.vue'
import Person17 from './17-ref-father.vue'
import Person18 from './18-typescript.vue'
import Person19 from './19-props-father.vue'
import Person20 from './20-lifecycle-father.vue'
import Person21 from './21-hooks.vue'

export default {
  name: 'App',  //组件名
  components: {
    Person2, // 注册组件
    Person3,
    Person23,
    Person4,
    Person444,
    Person5,
    Person6,
    Person7,
    Person8,
    Person9,
    Person10,
    Person11,
    Person12,
    Person13,
    Person14,
    Person15,
    Person16,
    Person17,
    Person18,
    Person19,
    Person20,
    Person21,
  } 
}

</script>

<style scoped>
.app {
  width: 80vw;
  background-color: orange; 
  box-shadow: 0 0 10px; 
  border-radius: 10px; 
  padding: 20px;
}
</style>