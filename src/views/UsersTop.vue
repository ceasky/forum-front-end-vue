<template>
  <div class="container py-5">
    <NavTabsVue />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="d-flex">
        <UsersTopPage v-for="user in users" :key="user.id" :initialuser="user" />
      </div>
    </div>
  </div>
</template>

<script>
  import NavTabsVue from "@/components/NavTabs.vue";
  import UsersTopPage from "@/components/UserTopPage.vue";
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

  export default{
    components:{
      NavTabsVue,
      UsersTopPage
    },
    data(){
      return{
        users:[]
      }
    },
    created(){
      this.fetchTopUsers()
    },
    methods:{
      async fetchTopUsers() {
        try {
          const { data } = await usersAPI.getTopUsers()

          this.users = data.users.map(user => ({
            id: user.id,
            name: user.name,
            image: user.image,
            followerCount: user.FollowerCount,
            isFollowed: user.isFollowed
          }))
        } catch (error) {
          console.log(error)
          Toast.fire({
            icon: 'error',
            title: '無法取得美食達人，請稍後再試'
          })
        }
      },
    }
  }

</script>

