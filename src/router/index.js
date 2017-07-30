import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewPoll from '@/components/NewPoll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/NewPoll',
      name: 'NewPoll',
      component: NewPoll
    }
  ]
})
