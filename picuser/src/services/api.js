import axios from 'axios'

const api = axios.create({
    baseURL: 'https://picuser-social-media.firebaseio.com/'
})

export default api