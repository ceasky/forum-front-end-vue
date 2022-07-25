<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img class="img-responsive center-block" src="https://loremflickr.com/320/240/food,dessert,restaurant/"
        style="width: 250px;margin-bottom: 25px;">
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link class="btn btn-primary btn-border mr-2"
        :to="{ name: 'RestDashboard', params: { id: restaurant.id }}">
        Dashboard</router-link>

      <button v-if="restaurant.isFavorited" @click.prevent.stop="deletedFavorite(restaurant.id)" type="button"
        class="btn btn-danger btn-border mr-2">
        移除最愛
      </button>
      <button v-else type="button" @click.prevent.stop="addFavorite(restaurant.id)"
        class="btn btn-primary btn-border mr-2">
        加到最愛
      </button>
      <button v-if="restaurant.isLiked" @click.prevent.stop="deleteLike(restaurant.id)" type="button"
        class="btn btn-danger like mr-2">
        Unlike
      </button>
      <button v-else @click.prevent.stop="addLike(restaurant.id)" type="button" class="btn btn-primary like mr-2">
        Like
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
  export default{
    props: {
      initialrestaurant: {
        type: Object,
        required: true
      }
    },
    watch: {
      initialrestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
    data() {
      return {
        restaurant: this.initialrestaurant
      }
    },
    methods: {
      async addFavorite(restaurantId) {
        try {
          const { data } = await usersAPI.addFavorite({ restaurantId })
          if (data.status !== 'success') {
            throw new Error(data.message)
          }
          this.restaurant = {
            ...this.restaurant,
            isFavorited: true
          }
        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: '無法將餐廳加入最愛，請稍後再試'
          })
          console.log('error', error)
        }
      },
      async deletedFavorite(restaurantId) {
        try {
          const { data } = await usersAPI.deleteFavorite({ restaurantId })
          if (data.status !== 'success') {
            throw new Error(data.message)
          }
          this.restaurant = {
            ...this.restaurant,
            isFavorited: false
          }
        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: '無法將餐廳移除最愛，請稍後再試'
          })
          console.log('error', error)
        }
      },
      async addLike(restaurantId) {
        try {
          const { data } = await usersAPI.addLike({ restaurantId })
          if (data.status !== 'success') {
            throw new Error(data.message)
          }
          this.restaurant = {
            ...this.restaurant,
            isLiked: true
          }
        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: '無法將餐廳加入，請稍後再試'
          })
          console.log('error', error)
        }
      },
      async deleteLike(restaurantId) {
        try {
          const { data } = await usersAPI.deleteLike({ restaurantId })
          if (data.status !== 'success') {
            throw new Error(data.message)
          }
          this.restaurant = {
            ...this.restaurant,
            isLiked: false
          }
        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: '無法將餐廳移除，請稍後再試'
          })
          console.log('error', error)
        }
      },
    }
  }
</script>
