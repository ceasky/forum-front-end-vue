<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in Comments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button @click.stop.prevent="handleDeleteButtonClick(comment.id)" v-if="currentUser.isAdmin" type="button"
          class="btn btn-danger float-right">
          Delete
        </button>
        <h3>
          <a href="#">
            {{ comment.User.name }}
          </a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>

  </div>
</template>

<script>
import { fromNowFilter } from './../utils/mixins'
import { mapState } from 'vuex'


export default {
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  data(){
    return {
      Comments: this.restaurantComments
    }
  },
  methods: {
    handleDeleteButtonClick(commentId) {
      this.$emit('after-delete-comment', commentId)
    }
  },
  watch: {
    restaurantComments(newValue) {
      this.Comments = {
        ...newValue
      }
    }
  },
}
</script>
