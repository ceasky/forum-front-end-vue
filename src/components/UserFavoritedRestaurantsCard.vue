<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ FavoritedRestaurantslength }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link v-for="favoritedRestaurant in user.FavoritedRestaurants" :key="favoritedRestaurant.id"
        :to="{ name: 'RestsDetail', params: { id: favoritedRestaurant.id } }">
        <img :src="favoritedRestaurant.image" width="60" height="60" class="mr-1 mb-1">
      </router-link>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      initaluser:{
        type: Object,
        required: true
      },
      FavoritedRestaurantslength: {
        type: Number,
        required: true
      },
  },
  data() {
    return {
      user: this.initaluser
    }
  }, 
  watch: {
    initaluser(newValue) {
      this.user = newValue
    }
  },
}
</script>