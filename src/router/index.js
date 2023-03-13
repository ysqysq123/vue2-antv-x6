
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import App from '../App.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/parent1',
    component: () => import('../views/by-value/parent-1.vue')
  },
  {
    path: '/helloworld',
    component: () => import('../components/HelloWorld.vue')
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
  },
  {
    path: '/test3',
    component: () => import('../components/test-3.vue')
  },
  {
    path: '/laneChart',
    component: () => import('../components/laneChart.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
