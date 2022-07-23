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
import feedsAPI from "./../apis/Feeds";
import { Toast } from "./../utils/helpers";

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
      async fetchFeeds(){
        try{
          const {data} = await feedsAPI.getRestaurants()
          this.restaurants = data.restaurants
          this.comments = data.comments
        } catch(error){
          console.log("erroe", error);
          Toast.fire({
            icon: "error",
            title: "無法取得資料",
          });
        }
      }
    }
  }
</script>
