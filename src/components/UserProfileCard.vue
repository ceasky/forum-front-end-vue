<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image" width="300px" height="300px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ user.name }}
          </h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled">
            <li>
              <strong>{{ Commentslength || 0 }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ FavoritedRestaurantslength || 0 }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ Followingslength || 0 }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ Followerslength || 0 }}</strong> followers (追隨者)
            </li>
          </ul>
          <template v-if="user.isAdmin">
            <router-link :to="{ name: 'UserEdit', params: { id: user.id } }" class="btn btn-primary">
              Edit
            </router-link>
          </template>
          <template v-else>
            <button v-if="isFollowed" type="button" class="btn btn-danger"
              @click.stop.prevent="deleteFollowing(user.id)">
              取消追蹤
            </button>
            <button v-else type="button" class="btn btn-primary" @click.stop.prevent="addFollowing(user.id)">
              追蹤
            </button>
          </template>
        </div>
      </div>
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
      initialisFollowed: {
        type: Boolean,
        required: true
      },
      Followingslength: {
        type: Number,
        required: true
      },
      Followerslength: {
        type: Number,
        required: true
      },
      FavoritedRestaurantslength: {
        type: Number,
        required: true
      },
      Commentslength: {
        type: Number,
        required: true
      },
    },
    data() {
      return {
        isFollowed: this.initialisFollowed,
        user: this.initaluser,
      }
    },
    methods: {
      addFollowing() {
        this.isFollowed = true
      },
      deleteFollowing() {
        this.isFollowed = false
      }
    },
  watch: {
    initaluser(newValue) {
      this.user = newValue
    }
  },
  
  }
</script>