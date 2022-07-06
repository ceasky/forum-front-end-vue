import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import RestsHome from '../views/RestsHome.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/RestsHome',
      name: 'RestsHome',
      component: RestsHome
    },
    {
      path: '/RestsHome/feeds',
      name: 'RestsFeeds',
      component: () => import('../views/RestsFeeds.vue')
    },
    {
      path: '/RestsHome/top',
      name: 'RestsTop',
      component: () => import('../views/RestsTop.vue')
    },
    {
      path: '/RestsHome/:id',
      name: 'RestsDetail',
      component: () => import('../views/RestsDetail.vue')
    },
    {
      path: '/RestsHome/:id/dashboard',
      name: 'RestDashboard',
      component: () => import('../views/RestDashboard.vue')
    },
    {
      path: '/',
      name: 'root',
      redirect: '/RestsHome'
    },
    {
      path: '/Users/Top',
      name: 'UsersTop',
      component: () => import('../views/UsersTop.vue')
    },
    {
      path: '/Users/:id',
      name: 'UserPage',
      component: () => import('../views/UserPage.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
