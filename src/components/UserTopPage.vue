<template>

  <div class="container py-5">
    <div class="text-center">
        <a href="#">
          <img src="https://upload.cc/i1/2022/06/07/O6ViZr.png" width="140px" height="140px">
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button @click.prevent.stop="removefollow" v-if="user.isFollowed" type="button" class="btn btn-danger">
            取消追蹤
          </button>
          <button @click.prevent.stop="addFollow" v-else type="button" class="btn btn-primary">
            追蹤
          </button>
        </p>
    </div>
  </div>

</template>

<script>
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
    addFollow() {
      this.user = {
        ...this.user,
        isFollowed:true
      }
    },
    removefollow () {
      this.user={
        ...this.user,
        isFollowed:false
      }
    }
  }
}

</script>