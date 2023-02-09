<template>
<div>
  <ChildOne :msg="value" @getMsg="getData" @dataTime="getData2"></ChildOne>
  <div>{{value2}}</div>
</div>
</template>
<script>
import ChildOne from './components/ChildOne.vue'
export default {
  data () {
    return {
      value: 1,
      value2: '123'
    }
  },
  components: {
    ChildOne
  },
  methods: {
    getData (data) {
      this.value2 = data
    },
    getData2 (time) {
      console.log(time)
    }
  }
}
</script>
