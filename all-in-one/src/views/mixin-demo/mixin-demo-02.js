// import BaseMixin from './mixin-demo-base'

// mixin
export default {
  name: 'mixin-demo-02',
  // mixins: [BaseMixin], // 继承
  props: {
    props01: String,
    props02: Number,
    props03: Object
  },
  data () {
    return {
      title: 'mixin 02',
      age: 50,
      desc: 'mixin 02 999999999'
    }
  },
  computed: {
    newAge () {
      return this.age + 1
    }
  },
  created () {
    console.log('mixin 02 created')
  },
  mounted () {
    console.log('mixin 02 mounted')
  },
  methods: {
    test1 () {
      console.log('mixin 02 test1')
    },
    test2 () {
      console.log('mixin 02 test2')
    },
    test3 () {
      console.log('mixin 02 test3')
    }
  }
}
