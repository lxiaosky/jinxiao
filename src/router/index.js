import Vue from 'vue'
import Router from 'vue-router'
import Friends from '@/components/Friends'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Friends',
      component: Friends
    }
  ]
})
