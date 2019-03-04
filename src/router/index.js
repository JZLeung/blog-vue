import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index'
import { getAuthorInfo } from '../api/user'

import IndexPage from '../views/index.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    component: IndexPage
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.getters.author.login) {
    getAuthorInfo().then(author => {
      // console.log(author)
      store.dispatch('setAuthor', author)
      next()
    })
  } else {
    next()
  }
})

export default router
