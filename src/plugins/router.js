import Home from '../components/Home.vue'
import Stake from '../components/Stake.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/stake', component: Stake },
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

export default router