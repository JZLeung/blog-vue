import dayjs from 'dayjs'
import store from '../store/index'

import { getAllPosts } from '../api/post'
import { getAuthorInfo } from '../api/user'

export const flatObjectByKeys = obj => Object.keys(obj).map(key => obj[key])
export const getArchivesByPost = posts => {
  const datelines = posts.reduce((all, post) => {
    const created_at = dayjs(post.created_at).format('YYYY-MM-DD')
    if (!all[created_at]) {
      all[created_at] = {
        name: created_at,
        tag: 0
      }
    }
    all[created_at].tag += 1
    return all
  }, {})
  return Object.keys(datelines)
    .sort((a, b) => new Date(a) > new Date(b))
    .map(key => datelines[key])
}

export const initApp = () => {
  const tasks = [
    getAuthorInfo().then(author => {
      // console.log(author)
      store.dispatch('setAuthor', author)
    }),
    getAllPosts().then(res => {
      const _tags = {}
      const posts = res.map(post => {
        return {
          title: post.title,
          id: post.number,
          labels: post.labels.map(label => {
            if (!_tags[label.name]) {
              _tags[label.name] = {
                name: label.name,
                color: `#${label.color}`,
                count: 0
              }
            }
            _tags[label.name].count += 1
            return {
              name: label.name,
              color: `#${label.color}`
            }
          }),
          created_at: post.created_at,
          body: post.body
        }
      })

      const tags = flatObjectByKeys(_tags)
      const archives = getArchivesByPost(posts)

      store.dispatch('setPosts', posts)
      store.dispatch('setTags', tags)
      store.dispatch('setArchives', archives)
    })
  ]
  return Promise.all(tasks).then(() => store.dispatch('initApp'))
}
