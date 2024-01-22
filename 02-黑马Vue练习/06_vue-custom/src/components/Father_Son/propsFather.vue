<template>
  <div>

    <input type="text" v-model="messssage">

    <sson :dataFromFa="messssage" :dataFromFa2="messssage2" @dataFromSon="handleSonData">
    </sson>

  </div>
</template>

<script>
import propsSonVue from './propsSon.vue'

export default {
  name: 'rename-father',
  components: {
    sson: propsSonVue
  },
  data () {
    return {
      messssage: '默认值',
      messssage2: {
        name: '小狗',
        age: 22
      }
    }
  },
  methods: {
    handleSonData (sonData) {
      this.messssage = sonData
    }
  }
}
</script>

<style scoped>

div {
  background: lightgray;
  width: 100vw;
  height: 10vh;
}

input {
  background: lightblue;
  border: 1px solid green;
}

</style>
