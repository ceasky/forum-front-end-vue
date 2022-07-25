import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import RestsHome from '../views/RestsHome.vue'
import store from './../store'

Vue.use(Router)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('not-found')
    return
  }

  next()
}

const router = new Router({
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
      redirect: '/admin/restaurants',
      beforeEnter: authorizeIsAdmin
      
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import('../views/AdminUsers.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants',
      name: 'admin-restaurants',
      component: () => import('../views/AdminRestaurants.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants/new',
      name: 'admin-restaurant-new',
      component: () => import('../views/AdminRestaurantNew.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants/:id',
      name: 'admin-restaurant',
      component: () => import('../views/AdminRestaurant.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants/:id/edit',
      name: 'admin-restaurant-edit',
      component: () => import('../views/AdminRestaurantEdit.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/categories',
      name: 'admin-categories',
      component: () => import('../views/AdminCategories.vue'),
      beforeEnter: authorizeIsAdmin
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
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  const tokenInStore = store.state.token

  let isAuthenticated = store.state.isAuthenticated
  if (token && token !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }
  const pathsWithoutAuthentication = ['sign-up', 'sign-in']
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/RestsHome')
    return
  }
  next()
})

export default router

