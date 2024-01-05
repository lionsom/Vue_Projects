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

import Person2 from './demos/01-vue2.vue'
import Person3 from './demos/02-vue3.vue'
import Person23 from './demos/03-2-vs-3.vue'
import Person4 from './demos/04-setup-suger.vue'
import Person444 from './demos/04-name.vue'
import Person5 from './demos/05-ref-base.vue'
import Person6 from './demos/06-ref-object.vue'
import Person7 from './demos/07-reactive-object.vue'
import Person8 from './demos/08-ref-vs-reactive.vue'
import Person9 from './demos/09-toRefs-toRef.vue'
import Person10 from './demos/10-computed.vue'
import Person11 from './demos/11-watch-ref-base.vue'
import Person12 from './demos/12-watch-ref-object.vue'
import Person13 from './demos/13-watch-reactive-object.vue'
import Person14 from './demos/14-watch-property.vue'
import Person15 from './demos/15-watch-mix.vue'
import Person16 from './demos/16-watchEffect.vue'
import Person17 from './demos/17-ref-father.vue'
import Person18 from './demos/18-typescript.vue'
import Person19 from './demos/19-props-father.vue'
import Person20 from './demos/20-lifecycle-father.vue'
import Person21 from './demos/21-hooks.vue'

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
  width: 100%;
  height: max-content;
  background-color: transparent; 
  box-shadow: 0 0 10px; 
  border-radius: 10px; 
  padding: 20px;
}
</style>