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

          <button @click.prevent.stop="removefavorite" v-if="rest.isFavorited" type="button"
            class="btn btn-danger mr-2">
            移除最愛
          </button>
          <button @click.prevent.stop="addfavorite" v-else type="button" class="btn btn-primary">
            加到最愛
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      addfavorite() {
        this.rest = {
          ...this.rest,
          isFavorited: true
        }
      },
      removefavorite() {
        this.rest = {
          ...this.rest,
          isFavorited: false
        }
      }
    }
  }
</script>