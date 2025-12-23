// dashboard/src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002", // backend
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");   // now from dashboard's localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
