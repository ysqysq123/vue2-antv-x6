<template>
<div @click="back">
  这是chile1父组件传的值:{{msg}}
</div>
</template>
<script>
export default {
  name: 'child-one',
  props: ['msg'],
  data () {
    return {
      msg2: '子组件传给父组件的值',
      dataTime: Date()
    }
  },
  methods: {
    back () {
      this.$emit('getMsg', this.msg2)
      console.log(this.dataTime)
    }
  },
  watch: {
    dataTime (val) { // dateTime是你在props或者data中定义的你要监听的值
    this.$emit('dataTime', val) // 传给父组件
    }
  }
}
</script>
