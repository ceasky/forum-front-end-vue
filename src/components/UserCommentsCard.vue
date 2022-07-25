<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ Commentslength }}</strong> 已評論餐廳
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
      initaluser:{
        type: Object,
        required: true
      },
      Commentslength: {
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