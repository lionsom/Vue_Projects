<template>
  <div>

    <input type="text" v-model="messssage">

  </div>
</template>

<script>
export default {
  name: 'rename-father',
  data () {
    return {
      messssage: ''
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
