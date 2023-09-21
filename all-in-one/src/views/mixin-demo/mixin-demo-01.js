import BaseMixin from './mixin-demo-base'

// mixin
export default {
  name: 'mixin-demo-01',
  mixins: [BaseMixin], // 继承
  props: {
    props01: String,
    props02: Number,
    props03: Object
  },
  data () {
    return {
      title: 'mixin 01',
      age: 25,
      desc: 'mixin 01 999999999'
    }
  },
  computed: {
    newAge () {
      return this.age + 1
    }
  },
  created () {
    console.log('mixin 01 created')
  },
  mounted () {
    console.log('mixin 01 mounted')
  },
  methods: {
    test1 () {
      console.log('mixin 01 test1')
    },
    test2 () {
      console.log('mixin 01 test2')
    },
    test3 () {
      console.log('mixin 01 test3')
    }
  }
}
