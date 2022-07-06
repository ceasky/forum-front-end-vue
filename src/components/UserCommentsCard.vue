<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ user.Comments.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link v-for="comment in user.Comments" :key="comment.id"
        :to="{ name: 'RestsDetail', params: { id: comment.Restaurant.id } }">
        <img :src="comment.Restaurant.image" width="60" height="60" class="mr-1 mb-1">
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