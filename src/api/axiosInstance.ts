import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 2000,
    headers: {
        "content-type": 'application/json',
    },
});

export default axiosInstance;