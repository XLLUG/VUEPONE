import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListApp from '@/components/ListApp'
import upload from '@/components/upload'
import demo from '@/components/iframe/demo.vue'

Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ()=>import('@/components/Main')
    }, {
      path: '/upload',
      component: upload
    }, {
      path: '/demo',
      component:()=> import('../components/iframe/demo')
    }
  ]
})

export default router
