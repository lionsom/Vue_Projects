<template>
  <div class="main-page">

    <h1>根组件 - Vuex仓库数据 - {{ $store.state.title }}</h1>
    <h1>根组件 - Vuex仓库数据 - {{ count }}</h1>
    <input :value="count" @input="handleInput" type="text">
    <br />
    <input :value="count" @input="handleInput11" type="text">
    <br />

    <button @click="changeCount11(11)">= 11</button>

    <button @click="setAsyncCount(666)">异步 2秒后 666</button>

    <div>{{ $store.getters.filterLList }}</div>

    <div>{{ filterLList }}</div>

    <Son1 id="id_son1"></Son1>
    <hr>
    <Son2 id="id_son2">></Son2>

    <br />
    <br />
    <br />

    <!-- 子模块 -->
    <div class="module">
      <div>
        方式一：直接访问子模块state = {{ $store.state.user.UserInfo.name }} <br />

        <!-- 映射后 -->
        方式二：{{ UserInfo.name }} <br />

        方式三：{{ user_state_info.name }} <br />
      </div>

      <div>
        <!-- 测试访问模块中的getters - 原生 -->
        方式一：直接访问子模块getters = {{ $store.getters['user/UpperCaseName'] }} <br />

        <!-- 映射后 -->

        方式二： {{ UpperCaseName }} <br />

        方式三： {{ user_func_upper }} <br />
      </div>

      <button @click="updateUser111">更新个人信息</button>
      <button @click="updateTheme111">更新主题色</button>

    </div>

  </div>
</template>

<script>

/* 子模块小结
1.直接使用
  1. state --> $store.state.**模块名.数据项名
  2. getters --> $store.getters['模块名/属性名']
  3. mutations --> $store.commit('模块名/方法名', 其他参数)
  4. actions --> $store.dispatch('模块名/方法名', 其他参数)

2.借助辅助方法使用
  1.import { mapXxxx, mapXxx } from 'vuex'

  computed、methods: {
    ...mapState、...mapGetters放computed中；
    ...mapMutations、...mapActions放methods中；
    ...mapXxxx('模块名', ['数据项|方法']),
    ...mapXxxx('模块名', { 新的名字: 原来的名字 })
  }

  2.组件中直接使用 属性 `{{ age }}` 或 方法 `@click="updateAge(2)"`
 */

import Son1 from './components/VuexSon1.vue'
import Son2 from './components/VuexSon2.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'VuexDemoPage',
  components: {
    Son1,
    Son2
  },
  computed: {
    // 映射给计算属性
    ...mapState(['title', 'count']),
    // 子模块映射
    ...mapState('user', ['UserInfo']),
    ...mapState('user', { user_state_info: 'UserInfo' }),
    //
    ...mapGetters(['filterLList']),
    // 子模块映射Getter
    ...mapGetters('user', ['UpperCaseName']), // 方法一
    ...mapGetters('user', { user_func_upper: 'UpperCaseName' }) // 方法二
  },
  created() {
    console.log(this.$store)
    console.log(this.$store.state.count)
  },
  methods: {
    // 映射方法到methods
    ...mapMutations(['changeCount11']),
    ...mapActions(['setAsyncCount']),
    // 输入框事件，形参e
    handleInput(e) {
      console.log(e)
      console.log(e.target)
      console.log(+e.target.value)
      const cc = +e.target.value
      this.$store.commit('changeCount', cc)
    },
    handleInput11(e) {
      this.changeCount11(+e.target.value)
    },
    // 子模块方法
    updateUser111() {
      // $store.commit('模块名/mutation名', 额外传参)
      this.$store.commit('user/setUser', {
        name: 'xiaowang222',
        age: 25
      })
    },
    updateTheme111() {
      this.$store.commit('setting/setTheme', 'pink')
    }
  }
}
</script>

<style scoped lang="scss">
.main-page {
  width: 90%;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#id_son1 {
  background: lightcyan;
  margin: 30px auto;
}

#id_son2 {
  background: lightblue;
  margin: 20px auto;
}

.module {
  background: lightcoral;
}
</style>
