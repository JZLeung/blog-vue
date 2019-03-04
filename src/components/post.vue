<template>
  <div class="card">
    <div class="card-content article">
      <div
        v-if="layout != 'page'"
        class="level article-meta is-size-7 is-uppercase is-mobile is-overflow-x-auto"
      >
        <div class="level-left">
          <time
            class="level-item has-text-grey"
            datetime="<%= date_xml(post.date) %>"
            >{{ post.created_at | formatDate }}</time
          >
        </div>
      </div>
      <h1 class="title is-size-3 is-size-4-mobile has-text-weight-normal">
        <a class="has-link-black-ter" v-if="index" :href="'/' + post.path">
          {{ post.title }}
        </a>
        <span v-else>{{ post.title }}</span>
      </h1>
      <div class="content is-excerpt" v-if="index">
        {{ getExcerpt(post.body) }}
      </div>
      <div
        class="level is-size-7 is-uppercase"
        v-if="!index && post.labels.length > 0"
      >
        <div class="level-start">
          <div class="level-item">
            <span class="is-size-6 has-text-grey has-mr-7">#</span>
            <a
              class="has-link-grey -link"
              v-for="tag in post.labels"
              :key="tag.id"
              href="/hexo-theme-icarus/tags/Getting-Started/"
              >{{ tag.name }}</a
            >
          </div>
        </div>
      </div>
      <div class="level is-mobile" v-if="index">
        <div class="level-start">
          <div class="level-item">
            <a class="button is-size-7 is-light" href="">MORE</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import marked from 'marked'
const regex = /[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29\u{20000}-\u{2A6D6}\u{2A700}-\u{2B734}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}]/giu
export default {
  props: {
    index: {
      type: [Number, Boolean],
      default: false
    },
    post: {
      type: Object,
      default: () => ({
        layout: 'page',
        tags: []
      })
    },
    layout: {
      type: String,
      default: ''
    }
  },
  methods: {
    getExcerpt(content) {
      const match = content.match(regex)
      // console.log(match.length)
      return match.splice(0, 200).join('')
      // const div = document.createElement('div')
      // div.innerHTML = marked(content)
      // return div.innerText
    }
  }
}
</script>

<style>
.is-excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
