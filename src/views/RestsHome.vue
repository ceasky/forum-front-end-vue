<template>
  <div class="container py-5">
    <NavTabsVue />
    <RestsNavPillsVue :categories="categories" />

    <div class="row">
      <RestCardVue v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
    </div>
    <RestPaginationVue 
    v-if="totalPage.length > 1" :current-page="currentPage" :total-page="totalPage"
    :category-id="categoryId" :previous-page="previousPage" :next-page="nextPage" />
  </div>
</template>

<script>
  import NavTabsVue from "@/components/NavTabs.vue";
  import RestCardVue from "@/components/RestCard.vue";
  import RestsNavPillsVue from "@/components/RestsNavPills.vue";
  import RestPaginationVue from "@/components/RestPagination.vue";



const dummyData ={
  "restaurants": [
    {
      "id": 1,
      "name": "Miss Morris Rutherford",
      "tel": "210.220.8621",
      "address": "00262 Carolanne Ridges",
      "opening_hours": "08:00",
      "description": "Soluta voluptatem ipsam tenetur doloribus nobis ve",
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
            },
      "isFavorited": false,
      "isLiked": false
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
            },
      "isFavorited": false,
      "isLiked": false
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
            },
      "isFavorited": false,
      "isLiked": false
        },
    {
      "id": 4,
      "name": "Ophelia Bergnaum",
      "tel": "(286) 520-0594 x9713",
      "address": "90779 Dennis Path",
      "opening_hours": "08:00",
      "description": "Tempora quia dolor placeat sunt culpa ipsum quaera",
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
            },
      "isFavorited": false,
      "isLiked": false
        },
    {
      "id": 5,
      "name": "Beau Wilderman",
      "tel": "(339) 221-6308",
      "address": "7407 Doyle Gardens",
      "opening_hours": "08:00",
      "description": "Odit tempora accusamus et impedit voluptatem. Saep",
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
            },
      "isFavorited": false,
      "isLiked": false
        },
    {
      "id": 6,
      "name": "Audreanne Koch",
      "tel": "425.518.7636 x59785",
      "address": "71780 Delphia Ridge",
      "opening_hours": "08:00",
      "description": "Veniam commodi voluptates adipisci sit. Voluptas e",
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
            },
      "isFavorited": false,
      "isLiked": false
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
            },
      "isFavorited": false,
      "isLiked": false
        },
    {
      "id": 8,
      "name": "Miss Forrest Reichert",
      "tel": "1-370-946-0536 x33808",
      "address": "5514 Dallin Mill",
      "opening_hours": "08:00",
      "description": "Voluptate est sint voluptas dolores facilis et qua",
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
            },
      "isFavorited": false,
      "isLiked": false
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
            },
      "isFavorited": false,
      "isLiked": false
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
            },
      "isFavorited": false,
      "isLiked": false
        }
  ],
  "categories": [
  {
    "id": 1,
    "name": "中式料理",
    "createdAt": "2022-06-11T04:28:43.000Z",
    "updatedAt": "2022-06-11T04:28:43.000Z"
  },
  {
    "id": 2,
    "name": "日本料理",
    "createdAt": "2022-06-11T04:28:43.000Z",
    "updatedAt": "2022-06-11T04:28:43.000Z"
  },
  {
    "id": 3,
    "name": "義大利料理",
    "createdAt": "2022-06-11T04:28:43.000Z",
    "updatedAt": "2022-06-11T04:28:43.000Z"
  },
  {
    "id": 4,
    "name": "墨西哥料理",
    "createdAt": "2022-06-11T04:28:43.000Z",
    "updatedAt": "2022-06-11T04:28:43.000Z"
  },
  {
    "id": 5,
    "name": "素食料理",
    "createdAt": "2022-06-11T04:28:43.000Z",
    "updatedAt": "2022-06-11T04:28:43.000Z"
  },
  {
    "id": 6,
    "name": "美式料理",
    "createdAt": "2022-06-11T04:28:43.000Z",
    "updatedAt": "2022-06-11T04:28:43.000Z"
  },
  {
    "id": 7,
    "name": "複合式料理",
    "createdAt": "2022-06-11T04:28:43.000Z",
    "updatedAt": "2022-06-11T04:28:43.000Z"
  }
  ],
  "categoryId": "",
  "page": 1,
  "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
  "prev": 1,
  "next": 2
}

  export default{
    components:{
      NavTabsVue,
      RestCardVue,
      RestsNavPillsVue,
      RestPaginationVue
    },
    data(){
      return{
        restaurants:[],
        categories:[],
        categoryId: -1,
        currentPage: 1,
        totalPage: [],
        previousPage: -1,
        nextPage: -1
      }
    },
    created(){
      this.fetchRestaurants()
    },
    methods:{
      fetchRestaurants(){
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
        } = dummyData
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
      }
    }
  }
</script>

