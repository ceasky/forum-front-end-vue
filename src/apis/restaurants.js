import { apiHelper } from './../utils/helpers'

export default {
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getTopRests() {
    return apiHelper.get('/restaurants/top')
  },
  addfavorite({ restId }) {
    return apiHelper.post(`/favorite/${restId}`, null)
  },
  deletefavorite({ restId }) {
    return apiHelper.delete(`/favorite/${restId}`)
  },
}