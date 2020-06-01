import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import Unsplash from 'unsplash-js';
import axios from 'axios';



Vue.config.productionTip = false
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



const unsplash = new Unsplash({
  applicationId: "e6af7d9938f28c183bb92081a5682a065d2fa00b0f2d55813c871c8ff48b81c5",
  secret: "f8efd303a6288f38f10c218236b4dd65a8f2238a1141ad2771313f754dfa2a7f",
  callbackUrl: "{CALLBACK_URL}"
});

Vue.prototype.$unsplash = unsplash;
Vue.prototype.$axios = axios;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
