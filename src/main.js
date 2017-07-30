// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import {sync} from 'vuex-router-sync';
import App from './App'
import router from './router'
import GSignInButton from 'vue-google-signin-button'
import VuePino from 'vue-pino'
import axios from './plugin/axios'
import VueAxios from 'vue-axios'
import VuexStore from './vuex/store';
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(Vuex)
Vue.use(GSignInButton)
Vue.use(VuePino)
Vue.use(VueAxios, axios)
Vue.use(MuseUI)

Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore);

sync(store, router);

/* eslint-disable no-new */
new Vue({el: '#app', router, store, template: '<App/>', components: {
    App
  }})
