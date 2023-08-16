<template>
  <div class="h5-wrapper">
    <div class="content">

    </div>

    <nav class="tabbar">
      <a href="#/article">面经</a>
      <a href="#/collect">收藏</a>
      <a href="#/like">喜欢</a>
      <a href="#/user">我的</a>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

* {
  margin: 0px;
  padding: 0px;
}

.h5-warpper {

  margin: 0 auto;

  width: 50%;
  background: palegoldenrod;
}

.tabbar {
  display: flex;
  justify-content: space-around;

  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 60px;
}

.tabbar a {
  flex: 1;
  text-align: center;
  line-height: 60px;

  background: green;
  border: 1px solid rebeccapurple;
}

</style>
