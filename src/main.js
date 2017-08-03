// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import {sync} from 'vuex-router-sync';
import App from './App'
import router from './router'
import VuePino from 'vue-pino'
import axios from './plugin/axios'
import VueAxios from 'vue-axios'
import VuexStore from './vuex/store';
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
const HelloJs = require('hellojs/dist/hello.all.min.js');
const VueHello = require('vue-hellojs');
const VueSocialSharing = require('vue-social-sharing');

Vue.use(Vuex)
Vue.use(VuePino)
Vue.use(VueAxios, axios)
Vue.use(MuseUI)
Vue.use(VueSocialSharing);

HelloJs.init({
  google: '28065581468-4rbjg22ltb9n6nd183e9mh92rsuqe3j7.apps.googleusercontent.com'
}, {redirect_uri: 'authcallback/'});
Vue.use(VueHello, HelloJs);

Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore);

sync(store, router);

/* eslint-disable no-new */
new Vue({el: '#app', router, store, template: '<App/>', components: {
    App
  }})
