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

const dummyData = {
  "users": [
    {
      "id": 1,
      "name": "root",
      "email": "root@example.com",
      "password": "$2a$10$GYrFZ6D8kGx9RdQY3yuMeOOfkR4.61mWRwJY2HZSYwQH6fLNMq3Hm",
      "isAdmin": true,
      "image": null,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    },
    {
      "id": 2,
      "name": "user1",
      "email": "user1@example.com",
      "password": "$2a$10$DaiswMDf9MCxlgrCHvpw0u2AJjFGrh2PX/uoKLRKUnASU3hSNwkti",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    },
    {
      "id": 3,
      "name": "user2",
      "email": "user2@example.com",
      "password": "$2a$10$FtrLEySvVzYJeZUtmT9Qdu95a8A9sxzFHws3tXIxIhV3NJagftUdy",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    }
  ]
}

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
      this.fetchUserTop()
    },
    methods:{
      fetchUserTop(){
        this.users = dummyData.users
      }
    }
  }

</script>

