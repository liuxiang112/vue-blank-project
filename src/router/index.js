import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

// 路由模式一般情况下默认是hash模式，也可改为history模式
export default new Router({
  // mode: 'history',
  routes
})
