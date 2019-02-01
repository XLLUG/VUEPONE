import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListApp from '@/components/ListApp'
import upload from '@/components/upload'

Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ListApp
    },{
      path:'/upload',
      component:upload
    }
  ]
})

export default router
