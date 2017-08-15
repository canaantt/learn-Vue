import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'
import MyComponent from '@/components/MyComponent'
import NavComponent from '@/components/Nav'
import DashboardComponent from '@/components/Dashboard'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/MyComponent',
      name: 'MyComponent',
      component: MyComponent
    }, {
      path: '/NavComponent',
      name: 'NavComponent',
      component: NavComponent
    }, {
      path: '/DashboardComponent',
      name: 'DashboardComponent',
      component: DashboardComponent
    }
  ]
})
