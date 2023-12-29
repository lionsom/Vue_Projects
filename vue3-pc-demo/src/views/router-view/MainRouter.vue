<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" 
      @click="$router.push('/line')"
    />

    <div class="wrapper">
      <nav>
        <RouterLink to="/echart/line">line 折线图</RouterLink>
        <RouterLink to="/echart/bar">bar 柱状图</RouterLink>
        <RouterLink to="/echart/pie">pie 饼图</RouterLink>
        <RouterLink to="/echart/radar">radar 雷达图</RouterLink>
        <RouterLink to="/echart/scatter">scatter 雷达图</RouterLink>
        <RouterLink to="/echart/funnel">funnel 漏斗图</RouterLink>
        <RouterLink to="/echart/gauge">仪表图</RouterLink>
        <RouterLink to="/echart/bar-strip-single">横向 单个 柱状图</RouterLink>
        <RouterLink to="/echart/bar-strip-multi">横向 多个 柱状图</RouterLink>
        <RouterLink to="/echart/bar-negative">负数 柱状图</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
