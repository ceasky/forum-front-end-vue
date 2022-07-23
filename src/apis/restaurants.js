import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopRests() {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addfavorite({ restId }) {
    return apiHelper.post(`/favorite/${restId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deletefavorite({ restId }) {
    return apiHelper.delete(`/favorite/${restId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}