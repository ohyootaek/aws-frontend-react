import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

const axiosInstance = axios.create({
    baseURL: 'http://cariros.store:8080',
    timeout: 2000,
    headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,     
        
    },
});


export default axiosInstance;