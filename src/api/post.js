import axios from '../plugins/axios'

export const getAllPosts = () => axios.get('/repos/jzleung/blog/issues')
