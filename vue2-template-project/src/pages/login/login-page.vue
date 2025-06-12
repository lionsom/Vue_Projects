<template>
  <div>

  </div>
</template>

<script lang="ts">
export default {
  name: 'LoginPage',
  data() {
    return {
      
    }
  },
  mounted() {
    console.log('LoginPage mounted');
  },
  methods: {
    login() {
      this.$router.push('/');
    }
  },
}
</script>

<style scoped>

</style>