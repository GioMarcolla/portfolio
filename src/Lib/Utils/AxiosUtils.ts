import axios, { type AxiosInstance } from "axios";


const api: AxiosInstance = axios.create({
    baseURL: process.env.API_URL || "localhost:3001",
    timeout: 3000,
});

export default api;
