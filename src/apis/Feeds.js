import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants() {
    return apiHelper.get(`/restaurants/feeds`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  }
}