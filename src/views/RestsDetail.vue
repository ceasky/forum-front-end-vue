<template>
  <div class="container py-5">
    <RestDetailVue :initialrestaurant="restaurant" />
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <hr>
    <RestComments :restaurantComments="restaurantComments" @after-delete-comment="afterDeleteComment" />
    <CreateComment :restid="restaurant.id" @after-create-comment="afterCreateComment" />
  </div>
</template>

<script>
import RestDetailVue from '@/components/RestDetail.vue'
import RestComments from '@/components/RestComments.vue'
import CreateComment from '@/components/CreateComment.vue'

const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Miss Morris Rutherford",
    "tel": "210.220.8621",
    "address": "00262 Carolanne Ridges",
    "opening_hours": "08:00",
    "description": "Soluta voluptatem ipsam tenetur doloribus nobis veniam illum officiis enim.\nLaborum rerum quaerat nulla nostrum expedita earum maiores delectus.\nLaborum odio voluptas beatae.\nSapiente sunt eaque.\nRatione unde nesciunt dolores ut libero incidunt et recusandae et.",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.87340987441333",
    "viewCounts": 2,
    "createdAt": "2022-06-11T04:28:43.000Z",
    "updatedAt": "2022-07-06T01:11:49.736Z",
    "CategoryId": 2,
    "Category": {
      "id": 2,
      "name": "日本料理",
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z"
    },
    "FavoritedUsers": [],
    "LikedUsers": [],
    "Comments": [
      {
        "id": 1,
        "text": "Rerum impedit sint ut et est quos rem.",
        "UserId": 1,
        "RestaurantId": 1,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "User": {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$GYrFZ6D8kGx9RdQY3yuMeOOfkR4.61mWRwJY2HZSYwQH6fLNMq3Hm",
          "isAdmin": true,
          "image": null,
          "createdAt": "2022-06-11T04:28:43.000Z",
          "updatedAt": "2022-06-11T04:28:43.000Z"
        }
      },
      {
        "id": 51,
        "text": "Repudiandae officiis facere sed eveniet quae officia blanditiis in.",
        "UserId": 1,
        "RestaurantId": 1,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "User": {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$GYrFZ6D8kGx9RdQY3yuMeOOfkR4.61mWRwJY2HZSYwQH6fLNMq3Hm",
          "isAdmin": true,
          "image": null,
          "createdAt": "2022-06-11T04:28:43.000Z",
          "updatedAt": "2022-06-11T04:28:43.000Z"
        }
      },
      {
        "id": 101,
        "text": "Sint quia a numquam error minus eum ut quae.",
        "UserId": 3,
        "RestaurantId": 1,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$FtrLEySvVzYJeZUtmT9Qdu95a8A9sxzFHws3tXIxIhV3NJagftUdy",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-06-11T04:28:43.000Z",
          "updatedAt": "2022-06-11T04:28:43.000Z"
        }
      }
    ]
  },
  "isFavorited": false,
  "isLiked": false
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default{
  components:{
    RestDetailVue,
    RestComments,
    CreateComment
  },
  data(){
    return {
      restaurant:{
        id: -1,
        name: '',
        categoryName:'',
        image: '',
        openingHours:'',
        tel:'',
        address:'',
        description:'',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser
    }
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      }

      this.restaurantComments = dummyData.restaurant.Comments
    },
    afterDeleteComment(commentId) {
      console.log('afterDeleteComment', commentId)
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      )
    },
    afterCreateComment(payload) {
      console.log('payload', payload)
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
}
</script>