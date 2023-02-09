/*
 * @Author: yangshuaiqi_zz 2543975140@qq.com
 * @Date: 2022-08-22 17:08:04
 * @LastEditors: yangshuaiqi_zz 2543975140@qq.com
 * @LastEditTime: 2023-02-09 16:13:01
 * @FilePath: \vue-app1\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import App from '../App.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  // {
  //   path: '/helloworld',
  //   component: () => import('../components/HelloWorld.vue')
  // },
  {
    path: '/parent1',
    component: () => import('../views/by-value/parent-1.vue')
  },
  {
    path: '/curd',
    component: () => import('../views/cu-rd.vue')
  },
  {
    path: '/test1',
    component: () => import('../components/test-1.vue')
  },
  {
    path: '/test2',
    component: () => import('../components/test-2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
