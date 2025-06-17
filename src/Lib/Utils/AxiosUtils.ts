import axios from "axios";

const api = axios.create({
    baseURL: "https://portfolio-api-9yb1.onrender.com",
    timeout: 3000,
});

export default api;
