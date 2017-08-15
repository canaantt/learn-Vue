import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import MyComponent from '@/components/MyComponent'
import NavComponent from '@/components/Nav'
import DashboardComponent from '@/components/Dashboard'
import LandingComponent from '@/components/Landing'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingComponent',
      component: LandingComponent
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
    }, {
      path: '/LandingComponent',
      name: 'LandingComponent',
      component: LandingComponent
    }
  ]
})
