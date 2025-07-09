import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL:
        process.env.NEXT_PUBLIC_MODE === "DEV"
            ? "http://localhost:3001"
            : process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
    timeout: 10000
})

export default api;
