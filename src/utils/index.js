import dayjs from 'dayjs'

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
