import { message } from 'antd';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const server = axios.create({
    timeout: 15000,
    baseURL: ''
})

server.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, err => {
    return Promise.reject(err);
})

server.interceptors.response.use((res: AxiosResponse<any>) => {
    return res.data;
}, err => {
    // return Promise.reject(err);
    message.error('获取数据失败！')
})

export default server;