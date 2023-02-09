<template>
  <div class="home">
    <Button type="primary" @click="modal">弹窗</Button><br>
    <Button type="primary" @click="getFormdata">获取弹窗数据</Button>
  <HelloWorld class="helloworld" v-model="value">123456</HelloWorld>
    <button @click="push">点击跳转{{getMessage}}</button>
   <br>
   <button @click="push2">接口测试</button><br>
   <button @click="push3">功能测试</button>
   <br>
   <table>
    <tr>
      <td>{{formdata.name}}</td> <td>{{formdata.city}}</td>
      <br>
      <td>{{formdata.date}}</td>  <td>{{formdata.mail}}</td>
      <br>
      <td>{{formdata.time}}</td>  <td>{{formdata.gender}}</td>
      <td></td>  <td></td>
    </tr>
   </table>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
// import { mapState } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data () {
    return {
      value: false,
      formdata: {}
    }
  },
  computed: {
    getName () {
      return this.$store.state.name
    },
    ...mapGetters(['getMessage']) // mapGetters解析到computed中,getter修饰器
  },
  methods: {
    modal () {
      this.value = true
    },
    push () {
      this.$router.push('/parent1')
    },
    push2 () {
      this.$router.push('/curd')
    },
    push3 () {
      this.$router.push('/test1')
    },
    change () {
       this.$store.commit('setNumber')
       // 触发mapMutations的第一种方式,主动点击触发，也可以在mounted中触发
    },
    getFormdata () {
      this.formdata = this.$store.state.formValidate
      console.log(this.$store.state.formValidate)
      console.log(this.formdata, this.formdata.name)
    },
    ...mapMutations(['setNumber']),
    // 注意mapMutations解析到methods中，第二种触发方式,解析时也可以起别名
    ...mapActions(['setNum'])
  },
  mounted () {
    this.setNumber()
    // this.$store.dispatch('setNum')
    this.setNum()
  }
}
</script>
<style>
.helloworld{
  margin-top: 20px;
}
</style>
