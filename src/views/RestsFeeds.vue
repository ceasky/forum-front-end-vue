<template>
  <div class="container py-5">
    <NavTabsVue />
    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewsRestsVue :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <NewsCommentsVue :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
  import NavTabsVue from "@/components/NavTabs.vue";
  import NewsRestsVue from "@/components/NewsRests.vue";
  import NewsCommentsVue from "@/components/NewsComments.vue";

  const dummyData = {
    "restaurants": [
    {
      "id": 1,
      "name": "Miss Morris Rutherford",
      "tel": "210.220.8621",
      "address": "00262 Carolanne Ridges",
      "opening_hours": "08:00",
      "description": "Soluta voluptatem ipsam tenetur doloribus nobis veniam illum officiis enim.\nLaborum rerum quaerat nulla nostrum expedita earum maiores delectus.\nLaborum odio voluptas beatae.\nSapiente sunt eaque.\nRatione unde nesciunt dolores ut libero incidunt et recusandae et.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.87340987441333",
      "viewCounts": 1,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-12T06:11:29.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      }
    },
    {
      "id": 2,
      "name": "Dane Padberg",
      "tel": "401-354-0944",
      "address": "2259 Reggie Greens",
      "opening_hours": "08:00",
      "description": "et aliquam mollitia",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.52848780593098",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      }
    },
    {
      "id": 3,
      "name": "Cara Kshlerin",
      "tel": "071-975-7552",
      "address": "190 Layla Corner",
      "opening_hours": "08:00",
      "description": "Dignissimos id dignissimos est ullam facilis.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.775417855762841",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      }
    },
    {
      "id": 4,
      "name": "Ophelia Bergnaum",
      "tel": "(286) 520-0594 x9713",
      "address": "90779 Dennis Path",
      "opening_hours": "08:00",
      "description": "Tempora quia dolor placeat sunt culpa ipsum quaerat. Non incidunt voluptates ducimus quae quia sequi suscipit iusto consectetur. Eligendi est dignissimos rerum quasi vel et tempore quas sed.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.06623266029996",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      }
    },
    {
      "id": 5,
      "name": "Beau Wilderman",
      "tel": "(339) 221-6308",
      "address": "7407 Doyle Gardens",
      "opening_hours": "08:00",
      "description": "Odit tempora accusamus et impedit voluptatem. Saepe a vero molestiae aut doloribus aliquam occaecati.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.420093073242995",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      }
    },
    {
      "id": 6,
      "name": "Audreanne Koch",
      "tel": "425.518.7636 x59785",
      "address": "71780 Delphia Ridge",
      "opening_hours": "08:00",
      "description": "Veniam commodi voluptates adipisci sit. Voluptas est quibusdam error accusamus qui. Hic quo qui eligendi reprehenderit ratione ipsum occaecati est deleniti. Accusantium reiciendis neque inventore assumenda eum. Tempore quasi esse et quia sunt voluptatem. Consequatur et enim impedit placeat voluptas voluptatem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.73258169523413",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      }
    },
    {
      "id": 7,
      "name": "Mr. Lesley O'Hara",
      "tel": "(068) 062-3102 x9713",
      "address": "0488 Cremin Skyway",
      "opening_hours": "08:00",
      "description": "et",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.284146364166166",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      }
    },
    {
      "id": 8,
      "name": "Miss Forrest Reichert",
      "tel": "1-370-946-0536 x33808",
      "address": "5514 Dallin Mill",
      "opening_hours": "08:00",
      "description": "Voluptate est sint voluptas dolores facilis et quasi ad quia.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.225199891856532",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      }
    },
    {
      "id": 9,
      "name": "Mina Ankunding",
      "tel": "(605) 895-5406 x0250",
      "address": "66314 Littel Ferry",
      "opening_hours": "08:00",
      "description": "Iure et cum temporibus ut voluptates soluta.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.82305883556337",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      }
    },
    {
      "id": 10,
      "name": "Cecil Effertz",
      "tel": "(940) 469-4271",
      "address": "5979 Orie Orchard",
      "opening_hours": "08:00",
      "description": "aperiam omnis est",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=95.59356452561975",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      }
    }
    ],
    "comments": [
    {
      "id": 9,
      "text": "Dolores porro officiis.",
      "UserId": 1,
      "RestaurantId": 9,
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
      },
      "Restaurant": {
        "id": 9,
        "name": "Mina Ankunding",
        "tel": "(605) 895-5406 x0250",
        "address": "66314 Littel Ferry",
        "opening_hours": "08:00",
        "description": "Iure et cum temporibus ut voluptates soluta.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.82305883556337",
        "viewCounts": 0,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "CategoryId": 2
      }
    },
    {
      "id": 45,
      "text": "Omnis et quia doloremque placeat impedit quo.",
      "UserId": 1,
      "RestaurantId": 45,
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
      },
      "Restaurant": {
        "id": 45,
        "name": "Ottis Thompson",
        "tel": "1-447-403-5007 x479",
        "address": "504 Corwin Forks",
        "opening_hours": "08:00",
        "description": "Dolores non et blanditiis. Atque sint placeat quasi molestiae reprehenderit voluptatem quo dignissimos veniam. Suscipit numquam occaecati ad harum ad voluptatem. Tenetur molestiae molestiae dicta eveniet autem sit sunt voluptate nulla. Neque excepturi et et debitis.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.27232714403341",
        "viewCounts": 0,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "CategoryId": 3
      }
    },
    {
      "id": 69,
      "text": "Inventore velit consequuntur nemo quia quia porro doloremque.",
      "UserId": 1,
      "RestaurantId": 19,
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
      },
      "Restaurant": {
        "id": 19,
        "name": "Betty Dooley",
        "tel": "(399) 754-0045",
        "address": "484 Donnelly Manor",
        "opening_hours": "08:00",
        "description": "Reprehenderit iure maxime accusantium dolor eligendi voluptatem. Pariatur provident excepturi excepturi ea dolorum sunt. Rerum reprehenderit inventore libero aut aspernatur quo placeat veniam odit. Quo eaque temporibus iure velit.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.002529368648226",
        "viewCounts": 0,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "CategoryId": 1
      }
    },
    {
      "id": 91,
      "text": "Ut praesentium nobis omnis.",
      "UserId": 1,
      "RestaurantId": 41,
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
      },
      "Restaurant": {
        "id": 41,
        "name": "Tremaine Wisoky",
        "tel": "201.503.7974 x807",
        "address": "050 Harber Rapid",
        "opening_hours": "08:00",
        "description": "eaque",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.99410807029255",
        "viewCounts": 0,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "CategoryId": 4
      }
    },
    {
      "id": 108,
      "text": "Debitis exercitationem error placeat hic repellendus voluptatem dolor.",
      "UserId": 1,
      "RestaurantId": 8,
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
      },
      "Restaurant": {
        "id": 8,
        "name": "Miss Forrest Reichert",
        "tel": "1-370-946-0536 x33808",
        "address": "5514 Dallin Mill",
        "opening_hours": "08:00",
        "description": "Voluptate est sint voluptas dolores facilis et quasi ad quia.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.225199891856532",
        "viewCounts": 0,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "CategoryId": 2
      }
    },
    {
      "id": 127,
      "text": "Architecto facilis repudiandae ut.",
      "UserId": 1,
      "RestaurantId": 27,
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
      },
      "Restaurant": {
        "id": 27,
        "name": "Juwan Lang",
        "tel": "397.908.8161",
        "address": "8273 Allen Rest",
        "opening_hours": "08:00",
        "description": "Aut doloribus repellat animi distinctio inventore. Et ratione molestias sunt quis molestiae sunt. Quia maiores molestiae voluptates totam. Magni cum pariatur voluptatem consectetur quia. Suscipit molestiae in quas ipsam vel at officia aut.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.93633294725248",
        "viewCounts": 0,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "CategoryId": 2
      }
    },
    {
      "id": 150,
      "text": "Dolor omnis aut quo reprehenderit eum aliquid.",
      "UserId": 1,
      "RestaurantId": 50,
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
      },
      "Restaurant": {
        "id": 50,
        "name": "Bertrand Cole",
        "tel": "069-676-4557",
        "address": "1869 Senger Haven",
        "opening_hours": "08:00",
        "description": "et",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.37501518792111",
        "viewCounts": 0,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "CategoryId": 5
      }
    },
    {
      "id": 16,
      "text": "Repudiandae voluptates natus distinctio.",
      "UserId": 2,
      "RestaurantId": 16,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$DaiswMDf9MCxlgrCHvpw0u2AJjFGrh2PX/uoKLRKUnASU3hSNwkti",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      },
      "Restaurant": {
        "id": 16,
        "name": "Destany Doyle",
        "tel": "469-852-6159 x2359",
        "address": "812 Cornelius Run",
        "opening_hours": "08:00",
        "description": "expedita est ut",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.11725163914965",
        "viewCounts": 0,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "CategoryId": 3
      }
    },
    {
      "id": 37,
      "text": "Aspernatur quidem doloribus velit voluptatem repellat aut.",
      "UserId": 2,
      "RestaurantId": 37,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$DaiswMDf9MCxlgrCHvpw0u2AJjFGrh2PX/uoKLRKUnASU3hSNwkti",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      },
      "Restaurant": {
        "id": 37,
        "name": "Juana Durgan",
        "tel": "963-019-0855",
        "address": "9680 Kevon Grove",
        "opening_hours": "08:00",
        "description": "Consequatur quia accusamus quas debitis molestias consectetur qui molestiae et. Aliquid sint aut reprehenderit et aut sequi. Eaque recusandae magnam mollitia sed architecto eos. Deserunt vel occaecati. Consequatur odit sed non culpa et molestiae vitae totam.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.050397932450876",
        "viewCounts": 0,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "CategoryId": 5
      }
    },
    {
      "id": 60,
      "text": "Necessitatibus velit necessitatibus voluptatibus quaerat eum ratione deserunt.",
      "UserId": 2,
      "RestaurantId": 10,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$DaiswMDf9MCxlgrCHvpw0u2AJjFGrh2PX/uoKLRKUnASU3hSNwkti",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z"
      },
      "Restaurant": {
        "id": 10,
        "name": "Cecil Effertz",
        "tel": "(940) 469-4271",
        "address": "5979 Orie Orchard",
        "opening_hours": "08:00",
        "description": "aperiam omnis est",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=95.59356452561975",
        "viewCounts": 0,
        "createdAt": "2022-06-11T04:28:43.000Z",
        "updatedAt": "2022-06-11T04:28:43.000Z",
        "CategoryId": 2
      }
    }
    ]
  }
  export default{
    components:{
      NavTabsVue, 
      NewsRestsVue,
      NewsCommentsVue
    },
    data (){
      return {
        restaurants:[],
        comments:[]
      }
    },
    created(){
      this.fetchFeeds()
    },
    methods:{
      fetchFeeds(){
        this.restaurants = dummyData.restaurants
        this.comments = dummyData.comments
      }
    }
  }
</script>
