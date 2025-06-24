<template>
  <div id="app">
    <HeaderView/>
    <router-view/>
    <FooterView/>
  </div>
</template>

<script lang="ts"> 
import HeaderView from '@/views/layouts/HeaderView.vue'
import FooterView from '@/views/layouts/FooterView.vue';

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView
  },
  data() {
    return {
      
    }
  },
  mounted() {
    console.log('App mounted');
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
