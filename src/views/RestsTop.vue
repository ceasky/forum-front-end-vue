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
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

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
      async fetchrest() {
        try {
          const { data } = await restaurantsAPI.getTopRests()

          this.rests = data.restaurants.map(rest => ({
            id: rest.id,
            name: rest.name,
            image: rest.image,
            description: rest.description,
            FavoriteCount: rest.FavoriteCount,
            isFavorited: rest.isFavorited
          }))
        } catch (error) {
          console.log(error)
          Toast.fire({
            icon: 'error',
            title: '無法取得資料，請稍後再試'
          })
        }
      },
    }
  }
</script>