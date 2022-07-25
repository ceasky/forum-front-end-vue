<template>
  <div class="card mb-3">
    <div class="card-header">
      <strong>{{ Followingslength }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link v-for="following in user.Followings" :key="following.id"
        :to="{ name: 'UserPage', params: { id: following.id } }">
        <img :src="following.image" width="60" height="60" class="mr-1">
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
      Followingslength: {
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