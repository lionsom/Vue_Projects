<template>
  <div class="mainView">

    <!-- <div v-for="item in list"> -->
      <!-- <p>item.</p> -->
    <!-- </div> -->

      <ul>
        <ol v-for="(item,index) in currentList" :key="item.id">

          <p>{{ index+1 }}. {{ item.name }}</p>

          <button @click.prevent="deleteeee(item.id)">删除</button>
        </ol>
      </ul>

  </div>
</template>

<script>
export default {
  props: ['currentList'],
  data () {
    return {
      myList: []
    }
  },
  methods: {
    deleteeee (idd) {
      this.$emit('delOne', idd)
    }
  }
}
</script>

<style scoped>

* {
  margin: 0px;
  padding: 0px;
}

ul {
  margin: 0px;
  padding: 0px;
}

.mainView {
  background: lavenderblush;
  margin-top: 10px;
}

ul ol {
  display: flex;
  justify-content: space-between;
  align-content: space-between;

  margin: 5px 0px 0px 0px;
  border: 1px solid green;
  height: 50px;
  line-height: 50px;
}

ul ol p {
  flex: 5;

  text-align: left;

  margin-left: 10px;
  margin-right: 10px;

  background: gold;
}

ul ol button {
  flex: 1;
}

</style>
