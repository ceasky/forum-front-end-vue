import { apiHelper } from './../utils/helpers'

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    },
    create({ name }) {
      return apiHelper.post('/admin/categories', {name})
    },
    delete({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name })
    }
  },
  restaurants: {
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    }
  },
  getRests() {
    return apiHelper.get('/admin/restaurants')
  },
  deleterest({ restaurantId }) {
    return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
  },
  adminUsers() {
    return apiHelper.get('/admin/users')
  },
  adminupdate({ userid, isAdmin }) {
    return apiHelper.put(`/admin/users/${userid}`, { isAdmin })
    
  }
}