<template>
  <div class="card mb-3" style="max-width: 540px;margin: auto;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <a href="#">
          <img class="card-img" :src="rest.image">
        </a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{rest.name}}
          </h5>
          <span class="badge badge-secondary">收藏數：{{ rest.FavoriteCount }}</span>
          <p class="card-text">
            {{ rest.description }}
          </p>
          <router-link :to="{ name: 'RestsDetail', params: { id: rest.id }}" class="btn btn-primary mr-2">Show
          </router-link>

          <button @click.prevent.stop="deletefavorite(rest.id)" v-if="rest.isFavorited" type="button"
            class="btn btn-danger mr-2">
            移除最愛
          </button>
          <button @click.prevent.stop="addfavorite(rest.id)" v-else type="button" class="btn btn-primary">
            加到最愛
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'
  export default{
    props:{
      initialrest:{
        type:Object,
        required:true
      }
    },
    data (){
      return{
        rest: this.initialrest
      }
    },
    methods: {
      async addfavorite(restId) {
        try {
          const { data } = await restaurantsAPI.addfavorite({ restId })

          if (data.status !== 'success') {
            throw new Error(data.message)
          }
          this.rest = {
            ...this.rest,
            isFavorited: true
          },
            this.rest.FavoriteCount = this.rest.FavoriteCount + 1
        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: '無法加入追蹤，請稍後再試'
          })
        }
      },
      async deletefavorite(restId) {
        try {
          const { data } = await restaurantsAPI.deletefavorite({ restId })

          if (data.status !== 'success') {
            throw new Error(data.message)
          }
          this.rest = {
            ...this.rest,
            isFavorited: false
          },
            this.rest.FavoriteCount = this.rest.FavoriteCount - 1
        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: '無法加入追蹤，請稍後再試'
          })
        }
      },
    }
  }
</script>