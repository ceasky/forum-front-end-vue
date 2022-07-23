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
      path: '/',
      name: 'root',
      redirect: '/signin'
    },
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
      path: '/admin',
      exact: true,
      redirect: '/admin/restaurants'
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import('../views/AdminUsers.vue')
    },
    {
      path: '/admin/restaurants',
      name: 'admin-restaurants',
      component: () => import('../views/AdminRestaurants.vue')
    },
    {
      path: '/admin/restaurants/new',
      name: 'admin-restaurant-new',
      component: () => import('../views/AdminRestaurantNew.vue')
    },
    {
      path: '/admin/restaurants/:id',
      name: 'admin-restaurant',
      component: () => import('../views/AdminRestaurant.vue')
    },
    {
      path: '/admin/restaurants/:id/edit',
      name: 'admin-restaurant-edit',
      component: () => import('../views/AdminRestaurantEdit.vue')
    },
    {
      path: '/admin/categories',
      name: 'admin-categories',
      component: () => import('../views/AdminCategories.vue')
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
      path: '/Users/:id/edit',
      name: 'UserEdit',
      component: () => import('../views/UserEdit.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
