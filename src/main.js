import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import axios from 'axios'
import Qs from 'qs'
import _ from 'lodash'
// axios.defaults.baseURL = '/api'

Vue.prototype._ = _
Vue.prototype.$axios = axios
Vue.prototype.qs = Qs
Vue.config.productionTip = false
Vue.use(ViewUI)

new Vue({
  router,
  store,
  ViewUI,
  render: h => h(App)
}).$mount('#app')
