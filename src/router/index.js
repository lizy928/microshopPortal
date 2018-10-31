import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import world from '@/view/world'
import login from '@/view/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/world',
      name: 'world',
      component: world
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }

  ],
  mode: "history"//干掉地址栏里边的#号键
})
