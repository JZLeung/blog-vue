<template>
  <div class="archives-page">
    <Archive :time="dateline" :posts="posts"></Archive>
  </div>
</template>
<script>
// import dayjs from 'dayjs'
import Archive from '../components/archive'
export default {
  components: {
    Archive
  },
  data: () => ({
    year: '',
    month: ''
  }),
  computed: {
    dateline() {
      return `${this.year}-${this.month}`
    },
    posts() {
      return this.$store.getters.posts.filter(
        post => post.dateline === this.dateline
      )
    }
  },
  mounted() {
    this.year = this.$route.params.year
    this.month = this.$route.params.month
  },
  watch: {
    $route() {
      this.year = this.$route.params.year
      this.month = this.$route.params.month
    }
  }
}
</script>
