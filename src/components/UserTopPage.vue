<template>

  <div class="container py-5">
    <div class="text-center">
      <a href="#">
        <img src="https://upload.cc/i1/2022/06/07/O6ViZr.png" width="140px" height="140px">
      </a>
      <h2>{{ user.name }}</h2>
      <span class="badge badge-secondary">追蹤人數：{{ user.followerCount }}</span>
      <p class="mt-3">
        <button @click.stop.prevent="deleteFollowing(user.id)" v-if="user.isFollowed" type="button"
          class="btn btn-danger">
          取消追蹤
        </button>
        <button @click.stop.prevent="addFollowing(user.id)" v-else type="button" class="btn btn-primary">
          追蹤
        </button>
      </p>
    </div>
  </div>

</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  props:{
    initialuser:{
      type: Object,
      required:true
    }
  },
  data (){
    return{
      user:this.initialuser
    }
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.user = {
          ...this.user,
          isFollowed: true
        },
        this.user.followerCount = this.user.followerCount+1
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.user = {
          ...this.user,

          isFollowed: false
          }
        this.user.followerCount = this.user.followerCount -1
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }
  }
}

</script>