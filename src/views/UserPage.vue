<template>
  <div class="container py-5">
    <UserProfileCard :initaluser="user" :initialisFollowed="isFollowed" :Followingslength="Followingslength"
      :Followerslength="Followerslength" :Commentslength="Commentslength"
      :FavoritedRestaurantslength="FavoritedRestaurantslength" />
    <div class="row">
      <div class="col-md-4">
        <UserFollowingsCard :initaluser="user" :Followingslength="Followingslength" />
        <UserFollowersCard :initaluser="user" :Followerslength="Followerslength" />
      </div>
      <div class=" col-md-8">
        <UserCommentsCard :initaluser="user" :Commentslength="Commentslength" />
        <UserFavoritedRestaurantsCard :initaluser="user" :FavoritedRestaurantslength="FavoritedRestaurantslength" />

      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "@/components/UserProfileCard.vue";
import UserFollowingsCard from "@/components/UserFollowingsCard.vue";
import UserFollowersCard from "@/components/UserFollowersCard.vue";
import UserCommentsCard from "@/components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "@/components/UserFavoritedRestaurantsCard.vue";
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'


export default{
  components:{
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data() {
    return {
      user: {},
      isFollowed: false,
      isAdmin:false,
      Commentslength:-1,
      Followerslength:-1,
      Followingslength: -1,
      FavoritedRestaurantslength:-1
    }
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchprofile(userId)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchprofile(id)
    next()
  },
  methods: {
    async fetchprofile(userId) {
      try{
        const { data } = await usersAPI.get({ userId })
        this.user = data.profile
        this.isFollowed = data.isFollowed
        this.isAdmin = data.profile.isAdmin
        this.Commentslength = data.profile.Comments.length
        this.Followerslength = data.profile.Followers.length
        this.Followingslength = data.profile.Followings.length
        this.FavoritedRestaurantslength = data.profile.FavoritedRestaurants.length
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
      
    }
  }
}



</script>