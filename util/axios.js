import axios from "axios";

const env = process.env.DEPLOY_ENV.toString().trim();

const HOST = {
    dev: process.env.DEV_API,
    sit: process.env.SIT_API,
}

const axiosInstance = axios.create({
    baseURL: HOST[env],
    timeout: 2500,
    withCredentials: false
});

export default axiosInstance