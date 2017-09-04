// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import * as hello from 'hellojs'
import VueVega from 'vue-vega'
import Multiselect from 'vue-multiselect'
Vue.use(VueVega)
Vue.component(Multiselect)
Vue.config.productionTip = false
Vue.filter('date-formate-time', function (value) {
  const d = value.split('T')
  const d1 = d[0].split('-')
  const d2 = d[1].substr(0, 8)
  return d1[1] + '/' + d1[2] + '/' + d1[0] + ' ' + d2
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  hello,
  template: '<App/>',
  components: { App }
})
