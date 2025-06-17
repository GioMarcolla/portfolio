import axios from "axios";

const api = axios.create({
    baseURL: "https://your-api.example.com",
    timeout: 3000,
});

export default api;
