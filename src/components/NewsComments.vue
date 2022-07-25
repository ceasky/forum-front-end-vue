<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">

      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <router-link :to="{ name: 'RestsDetail', params: { id: comment.id }}">
            {{ comment.User.name }}
          </router-link>
        </h4>
        <p>{{comment.text}}</p>by
        <a href="#">
          {{ comment.User.name }}
        </a>
        {{ comment.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<style scoped>

small {
  font-size: 10px;
}
</style>

<script>
import { fromNowFilter } from './../utils/mixins'

export default{
  mixins: [fromNowFilter],
  props:{
    comments:{
      type:Array,
      required:true
    }
  },
  watch: {
    rest() {
      console.log('13',this.comments)
      console.log('45', this.comments[0].Restaurant.name)
      console.log('78', this.comments[0].User.name)
    },
  }
}
</script>