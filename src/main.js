// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
// in ES6 modules
import { Swipe, SwipeItem } from 'mint-ui'

Vue.config.productionTip = false
Vue.component('swipe', Swipe)
Vue.component('swipe-item', SwipeItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
