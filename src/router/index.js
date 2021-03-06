import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index'
import { initApp } from '../utils/index'

import IndexPage from '../views/index.vue'
import PostPage from '../views/post.vue'
import TagPage from '../views/tag.vue'
import TagsPage from '../views/tags.vue'
import ArchivesPage from '../views/archives.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    component: IndexPage
  },
  {
    path: '/post/:id',
    component: PostPage,
    props: true,
    name: 'post'
  },
  {
    path: '/tag/:tag',
    component: TagPage,
    // props: true,
    name: 'tag'
  },
  {
    path: '/tags',
    component: TagsPage,
    // props: true,
    name: 'tags'
  },
  {
    path: '/archives/:year/:month',
    component: ArchivesPage,
    // props: true,
    name: 'archives'
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.getters.init) {
    initApp().then(() => next())
  } else {
    next()
  }
})

export default router
