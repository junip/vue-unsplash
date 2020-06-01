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
  applicationId: "",
  secret: "",
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
