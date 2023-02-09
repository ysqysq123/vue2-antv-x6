import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  getters: {
    getMessage (state) {
      return `hello${state.name}`
    }
  },
  mutations: {
    setNumber (state) {
      state.number = 5
    },
    setNumberIsWhat (state, val) {
      state.number = val
    },
    setformValidate (state, val) {
      state.formValidate = val
    }
  },
  actions: {
    setNum (content) {
      // 增加setNum方法，默认第一个参数是content，其值是复制的一份store
        // 我们模拟一个异步操作，1秒后修改number为888
        setTimeout(() => {
          content.commit('setNumberIsWhat', 888)
        }, 2000)
    }
  },
  modules: {
  }
})
