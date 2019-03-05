<template>
  <div class="tags-page">
    <div class="card">
      <div class="card-content">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><a href="/tags">Tags</a></li>
            <li class="is-active">
              <a href="#" aria-current="page">{{ tag }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <Post
      v-for="post in posts"
      :key="post.id"
      :index="true"
      :post="post"
    ></Post>
  </div>
</template>

<script>
import Post from '../components/post.vue'
// import {mapG}
export default {
  components: {
    Post
  },
  props: {
    tag: String
  },
  computed: {
    posts() {
      return this.$store.getters.posts.filter(post =>
        post.labels.find(tag => tag.name === this.tag)
      )
    }
  }
}
</script>
