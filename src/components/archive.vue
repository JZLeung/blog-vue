<template>
  <div class="card widget">
    <div class="card-content">
      <h3 class="tag is-link">{{ time | formatDate('YYYY-MM') }}</h3>
      <div class="timeline">
        <article class="media" v-for="post in posts" :key="post.id">
          <div class="media-content">
            <div class="content">
              <time
                class="has-text-grey is-size-7 is-block is-uppercase"
                :datetime="post.date | formatDate"
                >{{ post.created_at | formatDate }}</time
              >
              <router-link
                :to="'/post/' + post.id"
                class="has-link-black-ter is-size-6"
                >{{ post.title }}
              </router-link>
              <div class="level article-meta is-mobile">
                <div class="level-left">
                  <div class="level-item is-size-7 is-uppercase"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  props: {
    time: {
      type: [String, Date],
      default: () => new Date()
    },
    posts: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    formatDate(date) {
      return dayjs(date).format('YYYY-MM-DD')
    }
  }
}
</script>
