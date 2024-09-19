// 서버와 통신하기 위한 axios모듈 세팅부
import axios from 'axios';

const api = axios.create({
    // Server URL
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json",
      },
})
export default api;