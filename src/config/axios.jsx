import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://inmoclick.somee.com/api',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

export default axiosClient;