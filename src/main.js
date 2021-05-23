// bootstrap-vue docs: https://bootstrap-vue.org/docs
// vue-gtag docs: https://matteo-gabriele.gitbook.io/vue-gtag/

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import { BootstrapVue } from 'bootstrap-vue'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueSession from 'vue-session'
import axios from 'axios'
import VueAxios from 'vue-axios'
 

import Home from './Home.vue'


Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(VueSession, { persist: true })

const routes = [
  { path: '/random', name: 'home', component: Home },
  { path: '/', name: 'home', component: Home },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
