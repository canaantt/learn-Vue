import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import NavComponent from '@/components/Nav'
import DashboardComponent from '@/components/Dashboard'
import LandingComponent from '@/components/Landing'
import FeedbackComponent from '@/components/Feedback'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingComponent',
      component: LandingComponent
    }, {
      path: '/NavComponent',
      name: 'NavComponent',
      component: NavComponent
    }, {
      path: '/DashboardComponent',
      name: 'DashboardComponent',
      component: DashboardComponent
    }, {
      path: '/FeedbackComponent',
      name: 'FeedbackComponent',
      component: FeedbackComponent
    }
  ]
})
