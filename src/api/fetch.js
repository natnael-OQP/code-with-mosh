import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.1.12:9000/api/',
})

export default instance
