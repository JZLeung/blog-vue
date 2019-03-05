<template>
  <div class="tags-page"><Tag :tags="tags"></Tag></div>
</template>

<script>
import Tag from '../components/tag.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    Tag
  },
  computed: {
    ...mapGetters(['tags'])
  }
}
</script>
