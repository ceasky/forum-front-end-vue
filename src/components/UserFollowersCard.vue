<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ Followerslength }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link v-for="follower in user.Followers" :key="follower.id"
        :to="{ name: 'UserPage', params: { id: follower.id } }">
        <img :src="follower.image" width="60" height="60" class="mr-1">
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
      Followerslength: {
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