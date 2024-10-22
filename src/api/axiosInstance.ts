import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 2000,
    headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,     
        
    },
});


export default axiosInstance;