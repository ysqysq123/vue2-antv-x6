<template>
  <div>
    <strong>这是测试接口页面</strong>
    <div><button @click="getData">点击获取数据</button></div><button @click="getData2">点击查询数据</button>
    <button @click="deleteData">删除数据</button><br>
    <button @click="getData3">获取数据</button>
    <div>
      <span>用户id: {{List.ret}}</span><br>
      <span>用户id: {{List.data}}</span><br>
       <span>用户id: {{List.msg}}</span>
        <span>用户id: {{List._t}}</span><br>
         <span>用户id: {{List._auth}}</span>
      <!-- <img style="width = List.width;height = List.height" src="https://cdn2.thecatapi.com/images/fhYh2PDcC.jpg"><br> -->

    </div>
  </div>
</template>
<script>

import axios from 'axios'
import { url1, url2 } from '../setting/api'
export default {
  data () {
    return {
      value: 0,
      List: {}
    }
  },
  methods: {
    getData () {
      console.log(url1)
      axios
      // ({
      //   method: 'get',
      //   url: 'api/App/Hello/World',
      //   data: {
      //     name: 'YesApi',
      //     app_key: this.$store.state.app_key
      //   }
      // })
        .get(`/api/App/Hello/World?name=YesApi&app_key=${this.$store.state.app_key}`)
        .then((res) => {
          // this.List = JSON.parse(res.data)
          this.List = res.data
         })
        .catch(err => console.log(err))
        .then(function () {
          // 总是会执行
        })
    },
    getData2 () {
      axios.get('/api/App/Table/Get', {
        params: {
        model_name: 'test2',
        app_key: this.$store.state.app_key,
        id: 2
        }
      })
      .then((res) => {
          console.log(res.data.data.data)
         })
      .catch(err => console.log(err))
    },
  deleteData () {
      axios.delete(`/api/App/Table/Delete&id=4&model_name=test1&app_key=${this.$store.state.app_key}`)
      .then((res) => {
        console.log(res.data.data)
         })
      .catch(err => console.log(err))
    },
    getData3 () {
      axios({
        methods: 'get',
        url: 'https://api.xiaobaibk.com/api/qq',
        params: { qq: 48834439 }
      })
    }
  }
  }
</script>
