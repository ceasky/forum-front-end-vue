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
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'
import feedsAPI from './../apis/Feeds'

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
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId })
      

      this.restaurant = {
        id: data.restaurant.id,
        name: data.restaurant.name,
        categoryName: data.restaurant.Category.name,
        image: data.restaurant.image,
        openingHours: data.restaurant.opening_hours,
        tel: data.restaurant.tel,
        address: data.restaurant.address,
        description: data.restaurant.description,
        isFavorited: data.isFavorited,
        isLiked: data.isLiked,
      }
      

        this.restaurantComments = data.restaurant.Comments
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async afterDeleteComment(commentId) {
      try{
        const { data } = await feedsAPI.deleteComments({ commentId })
        this.fetchRestaurant(this.restaurant.id)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳，請稍後再試'
        })
      }
    },
    async afterCreateComment(payload) {
      try{
        const { data } = await feedsAPI.createComments({ 
          restaurantId: payload.restaurantId,
          text: payload.text
         })
        this.fetchRestaurant(payload.restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資料，請稍後再試'
        })
      }
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  },
}
</script>