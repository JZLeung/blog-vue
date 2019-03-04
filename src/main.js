import Vue from 'vue'
import App from './App.vue'

import store from './store/index'
import router from './router/index'

import * as filters from './utils/filters'

import 'bulma'
import './assets/index.styl'

Vue.config.productionTip = false

Object.keys(filters).map(func => {
  Vue.filter(func, filters[func])
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
