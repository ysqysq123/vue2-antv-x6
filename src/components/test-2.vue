<template>
  <div>
    <div>
    <Input v-model="a.name" @mouseleave="mouseleave2(value)"></Input>
  </div>
    <Button @click="func">点击</Button>
  <label class="text-reader">
    <input type="file" @change="loadTextFile">
  </label>
  {{ fileContent }}
  </div>
</template>
<script>
/* eslint-disable */
// eslint-disable-next-line
import { a } from './data'
export default {
  data () {
    return {
      fileContent: '文件内容',
      a: {
        name: '你好'
      }
    }
  },
  created() {
    // console.log(a);
    // console.log(JSON.stringify(a));
  },
  watch:{
    a(value){
      console.log(value);
    }
  },
  methods: {
    func(){
      console.log(this.a);
    },
    mouseleave2(value){
      console.log(1231);
    },
    loadTextFile (e) {
      const self = this
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (ev) => {
        self.fileContent = ev.target.result
        console.log(self.fileContent)
      }
      reader.readAsText(file)
    }
  }
}
</script>