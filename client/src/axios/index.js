import axios from 'axios';
export const api = axios.create({
    baseURL: 'https://alpha-blog-api.vercel.app/api/'
})