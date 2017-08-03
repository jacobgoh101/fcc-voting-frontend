import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewPoll from '@/components/NewPoll'
import MyPoll from '@/components/MyPoll'
import Poll from '@/components/Poll'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/NewPoll',
    name: 'NewPoll',
    component: NewPoll
  }, {
    path: '/MyPoll',
    name: 'MyPoll',
    component: MyPoll
  }, {
    path: '/poll/:id',
    name: 'Poll',
    component: Poll
  }]
})
