<template>
  <div class="card mb-3">
    <div class="card-header">
      <strong>{{ user.Followings.length }}</strong> followings (追蹤者)
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
      user:{
        type: Object,
        required: true
      }
  },
}
</script>