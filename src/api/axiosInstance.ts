import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

const axiosInstance = axios.create({
    baseURL: 'https://cariros.store/api',
    timeout: 2000,
    headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,     
        
    },
});


export default axiosInstance;