import Vue from 'vue'
import Router from 'vue-router'

import index from '@/view/index'
import login from '@/view/login'
import search from '@/view/search'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }

  ],
  mode: "history"//干掉地址栏里边的#号键
})
