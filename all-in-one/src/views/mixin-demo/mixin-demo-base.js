
// 最底层的mixin
export default {
  name: 'mixin-demo-base',
  props: {
    props01: String,
    props02: Number,
    props03: Object
  },
  data () {
    return {
      title: 'mixin base',
      age: -1,
      desc: 'mixin base 999999999'
    }
  },
  computed: {
    newAge () {
      return this.age + 1
    }
  },
  created () {
    console.log('mixin base created')
  },
  mounted () {
    console.log('mixin base mounted')
  },
  methods: {
    test1 () {
      console.log('mixin base test1')
    },
    test2 () {
      console.log('mixin base test2')
    },
    test3 () {
      console.log('mixin base test3')
    }
  }
}
