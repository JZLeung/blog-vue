<template>
  <div class="index-page">
    <Posts
      v-for="post in posts"
      :post="post"
      :key="post.id"
      :index="true"
    ></Posts>
  </div>
</template>

<script>
import Posts from '../components/post'
import { mapGetters } from 'vuex'

export default {
  components: {
    Posts
  },
  computed: {
    ...mapGetters(['posts'])
  }
}
</script>
