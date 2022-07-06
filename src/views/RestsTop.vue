<template>
  <div class="container py-5">
    <NavTabsVue />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <RestTop 
      v-for="rest in rests"
      :key="rest.id"
      :initialrest="rest"
    />
  </div>
</template>

<script>
  import NavTabsVue from "@/components/NavTabs.vue";
  import RestTop from "@/components/RestTop.vue";

const dummyData = {
  "restaurants": [
    {
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
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 49,
      "name": "Murl Gaylord",
      "tel": "1-889-157-0718 x246",
      "address": "92869 Roger Stream",
      "opening_hours": "08:00",
      "description": "Aliquid eos qui.\nQuasi porro deleniti dolorem ab i",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.5712050166183",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 3,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 48,
      "name": "Kirstin Ryan",
      "tel": "257-921-0230",
      "address": "89500 Wisoky Mews",
      "opening_hours": "08:00",
      "description": "Ipsam et dolore eligendi ab suscipit rerum adipisc",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.02188369149178",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 2,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 47,
      "name": "Dariana Greenholt",
      "tel": "466.073.0359 x1309",
      "address": "782 Beatty Streets",
      "opening_hours": "08:00",
      "description": "Ut illum unde necessitatibus et facere nostrum ut.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.59079111615486",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 2,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 46,
      "name": "Dr. Abraham Reynolds",
      "tel": "226.008.9054",
      "address": "8992 Murazik Fords",
      "opening_hours": "08:00",
      "description": "Ea asperiores cumque ipsum. Deserunt nihil molesti",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.9023147970606",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 45,
      "name": "Ottis Thompson",
      "tel": "1-447-403-5007 x479",
      "address": "504 Corwin Forks",
      "opening_hours": "08:00",
      "description": "Dolores non et blanditiis. Atque sint placeat quas",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.27232714403341",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 3,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 44,
      "name": "Dominique Stoltenberg MD",
      "tel": "(345) 905-6119",
      "address": "6420 Boyle Bypass",
      "opening_hours": "08:00",
      "description": "tenetur dicta placeat",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.19723058729473",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 43,
      "name": "Junius Champlin",
      "tel": "(307) 997-8742",
      "address": "125 Carlo Square",
      "opening_hours": "08:00",
      "description": "Est necessitatibus id.\nNon doloribus qui nulla aut",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.35759584018919",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 42,
      "name": "Vladimir Streich II",
      "tel": "(352) 661-4242",
      "address": "19656 Alvera Rest",
      "opening_hours": "08:00",
      "description": "Molestias aspernatur maiores voluptas est sit id. ",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.40234686869037",
      "viewCounts": 0,
      "createdAt": "2022-06-11T04:28:43.000Z",
      "updatedAt": "2022-06-11T04:28:43.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
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
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    }
  ]
}

  export default{
    components:{
      NavTabsVue,
      RestTop
    },
    data(){
      return{
        rests:[]
      }
    },
    created(){
      this.fetchrest()
    },
    methods:{
      fetchrest(){
        this.rests = dummyData.restaurants
      }
    }
  }
</script>