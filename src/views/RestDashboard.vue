<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} }</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} }</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>

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
    "updatedAt": "2022-07-06T01:11:49.000Z",
    "CategoryId": 2,
    "Category": {
      "id": 2,
      "name": "日本料理",
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z"
    },
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
  }
}

  export default{
    data(){
      return{
        restaurant:[]
      }
    },
    created(){
      this.restaurant = dummyData.restaurant
    },
  }
</script>

