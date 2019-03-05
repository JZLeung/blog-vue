<template>
  <div class="post-page"><Post :post="post" :index="false"></Post></div>
</template>

<script>
import Post from '../components/post'
// import { mapGetters } from 'vuex'

export default {
  props: {
    id: [Number, String]
  },
  components: {
    Post
  },
  computed: {
    // ...mapGetters(['posts'])
    post() {
      console.log(this.$route.params.id, this.id)
      const id = this.id
      return this.$store.getters.posts.find(post => +id === +post.id)
    }
  }
}
</script>
