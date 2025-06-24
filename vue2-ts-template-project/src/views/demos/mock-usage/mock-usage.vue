<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.age }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    }
  },
  async mounted() {
    try {
      const response = await axios.get('/api/getUsers')
      this.users = response.data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}
</script>
