<template>
  <div>

    <my-base-nav-bar title="第三方库使用" :showLeftArrow="true" :isAutoBack="true" />

    <van-grid :column-num="4" square>
      <van-grid-item icon="home-o" text="lx-ui-vue2" to="/lx-ui-vue2-usage" dot />
      <van-grid-item icon="search" text="NavBar" to="/base-navbar-usage" badge="99+" />
      <van-grid-item icon="location-o" text="Vant Button" to="/vant-button-usage" />
      <van-grid-item icon="like-o" text="Vuex" to="/vuex-usage" />
      <van-grid-item icon="star-o" text="Vue Icons Plus" to="/vue-icons-plus-usage" />

    </van-grid>

  </div>
</template>

<script>

export default {
  name: 'ThirdPartyUsageHomePage',
  data() {
    return {

    }
  }
}
</script>