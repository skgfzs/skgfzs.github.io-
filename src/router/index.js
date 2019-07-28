import Vue from 'vue'
import Router from 'vue-router'
import love from '@/components/love'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/love',
      name: 'love',
      component: love
    }
  ]
})
