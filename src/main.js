// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GSignInButton from 'vue-google-signin-button'
import VuePino from 'vue-pino'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(GSignInButton)
Vue.use(VuePino)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
