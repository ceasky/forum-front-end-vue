<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ user.FavoritedRestaurants.length }}</strong> 收藏的餐廳
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
      user:{
        type: Object,
        required: true
      }
  },
}
</script>