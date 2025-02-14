import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/backend/api",
});

export default api;
