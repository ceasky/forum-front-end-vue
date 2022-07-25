import { apiHelper } from './../utils/helpers'


export default {
  getRestaurants() {
    return apiHelper.get(`/restaurants/feeds`)
  },
  createComments({ restaurantId, text }) {
    return apiHelper.post('/comments', { restaurantId, text })
  }, 
  deleteComments({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}