import axios from 'axios'

const SERVER = axios.create({
    baseURL: 'http://localhost:8800/api/',

    withCredentials: true

})

export default SERVER;
