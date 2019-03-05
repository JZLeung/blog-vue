import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  author: {
    login: '',
    avatar_url: '',
    location: '',
    email: '',
    bio: '',
    infos: [],
    icons: [
      { name: 'GitHub', url: 'https://github.com/JZLeung', icon: 'github' },
      {
        name: 'Sina Weibo',
        url: 'https://weibo.com/fullcuplam/',
        icon: 'weibo'
      }
    ]
  },
  posts: [],
  tags: [],
  archives: [],
  init: false
}

const getters = {
  init: state => state.init,
  author: state => state.author,
  posts: state => state.posts,
  tags: state => state.tags,
  archives: state => state.archives
}

const mutations = {
  ['SET_AUTHOR'](state, payloay) {
    state.author = Object.assign({}, state.author, payloay)
  },
  ['SET_POSTS'](state, payloay) {
    state.posts = payloay
  },
  ['SET_TAGS'](state, payloay) {
    state.tags = payloay
  },
  ['SET_ARCHIVES'](state, payloay) {
    state.archives = payloay
  },
  ['INIT_APP'](state) {
    state.init = true
  }
}

const actions = {
  setAuthor({ commit }, payloay) {
    commit('SET_AUTHOR', payloay)
  },
  setPosts({ commit }, payloay) {
    commit('SET_POSTS', payloay)
  },
  setTags({ commit }, payloay) {
    commit('SET_TAGS', payloay)
  },
  setArchives({ commit }, payloay) {
    commit('SET_ARCHIVES', payloay)
  },
  initApp({ commit }) {
    commit('INIT_APP')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
