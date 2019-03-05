<template>
  <div id="app">
    <div class="columns">
      <div
        class="column is-8-tablet is-8-desktop is-6-widescreen has-order-2 column-main"
      >
        <router-view />
      </div>
      <div
        class="column is-4-tablet is-4-desktop is-3-widescreen has-order-1 column-left"
      >
        <Profile :author="author"></Profile>
        <Links title="LINKS" :list="links"></Links>
        <Links
          class="is-hidden-widescreen"
          title="ARCHIVES"
          :list="archives"
        ></Links>
        <Tag class="is-hidden-widescreen" :tags="tags"></Tag>
      </div>
      <div
        class="column is-4-tablet is-4-desktop is-3-widescreen is-hidden-touch is-hidden-desktop-only has-order-3 column-right"
      >
        <Links title="ARCHIVES" :list="archives"></Links>
        <Tag :tags="tags"></Tag>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Profile from './components/profile'
import Links from './components/link'
import Tag from './components/tag'
// import Archive from './components/archive'
export default {
  name: 'App',
  components: {
    Profile,
    Links,
    Tag
  },
  data: () => ({
    links: [
      { name: 'GitHub', url: 'https://github.com', tag: 'github.com' },
      {
        name: 'hexo-theme-icarus',
        url: 'https://github.com/ppoffice/hexo-theme-icarus',
        tag: 'github.com'
      }
    ]
  }),
  computed: {
    ...mapGetters(['author', 'archives', 'tags', 'posts'])
  },
  mounted() {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  padding: 20px;
}
</style>

<style lang="scss">
.level {
  display: flex;
  .level-item {
    flex-grow: 1;
  }
}
</style>
